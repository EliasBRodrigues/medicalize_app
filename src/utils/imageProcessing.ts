import { Camera } from 'react-native-vision-camera';
import * as ImagePicker from 'expo-image-picker';
import { getExtractedText } from '@/services';
import { router } from 'expo-router';
import { RefObject } from 'react';

// Processes an image either by picking from the gallery or taking a photo
// extracts text using an API, and navigates to the medicine details page.
export async function processImage(
  action: 'pick' | 'take', // Specifies whether to pick an image or take a photo
  setPhotoUri: (uri: string | null) => void, // State setter for the image URI
  setPhotoModalVisible: (visible: boolean) => void, // State setter for the photo modal visibility
  setErrorModalVisible: (visible: boolean) => void, // State setter for the error modal visibility
  cameraRef?: RefObject<Camera> // Reference to the camera component (optional, used for taking photos)
) {
  try {
    // Initialize variable to store the image URI
    let imageUri: string | null = null;

    // Handle image selection from the gallery
    if (action === 'pick') {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'], // Restrict to images only
        allowsEditing: false, // Disable editing to keep the process simple
        aspect: [4, 3], // Maintain a 4:3 aspect ratio
        quality: 1, // Use maximum quality
      });

      // Check if the user didn't cancel and an image was selected
      if (!result.canceled && result.assets && result.assets.length > 0) {
        imageUri = result.assets[0].uri; // Store the selected image URI
      }

    // Handle photo capture with the camera  
    } else if (action === 'take' && cameraRef?.current) {
    // Capture a photo using the camera reference
      const photo = await cameraRef.current.takePhoto({
        flash: 'off', // Disable flash for consistent lighting
      });
      imageUri = `file://${photo.path}`; // Construct the file URI for the captured photo
    }

    // Proceed if an image URI was obtained
    if (imageUri) {
      setPhotoUri(imageUri); // Update the state with the image URI
      setPhotoModalVisible(true); // Show the loading modal with the image

      // Prepare form data for the API request
      const formData = new FormData();
      formData.append('image', {
        uri: imageUri,
        name: 'photo.jpg', // Set a default name for the image
        type: 'image/jpeg', // Specify the image type
      } as any); // Type cast to bypass TypeScript restrictions

      // Send the image to the text extraction API
      const {data} = await getExtractedText.post('/detect-text', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Required for file uploads
        },
      });

      // Extract the matched medication name from the API response
      const matchedMedication = data.matched_medication;
      setPhotoModalVisible(false); // Hide the loading modal

      console.log('Matched Medication:', matchedMedication);

      // Check if the matched medication is not found
      if (matchedMedication === 'Nenhum medicamento identificado') {
        setErrorModalVisible(true); // Mostre o modal de erro
      } else {
        // Navigate to the medicine details page with the extracted medication name
        router.navigate({
          pathname: '/medicine/[name]',
          params: { name: matchedMedication },
        });
      }
    }
  } catch (error) {
    // Log an error message indicating whether the action was picking or taking an image
    console.error(`Erro ao ${action === 'pick' ? 'carregar' : 'tirar'} imagem:`, error);
    setPhotoModalVisible(false); // Hide the loading modal in case of error
    setErrorModalVisible(true); // Show the error modal in case of error
  }
}