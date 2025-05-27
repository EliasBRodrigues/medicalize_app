import React, { useRef, useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { colors } from '@/styles/colors';
import { Camera, useCameraDevice } from 'react-native-vision-camera';
import { CameraButton } from '@/components/cameraButton';
import {
  IconBolt,
  IconHelp,
  IconPhoto,
  IconSettings,
} from '@tabler/icons-react-native';
import { Search } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HelpModal } from '@/components/modals/helpModal';
import { SearchModal } from '@/components/modals/searchModal/index';
import { PhotoModal } from '@/components/modals/photoModal/index';

import { processImage } from '@/utils/imageProcessing';
import { ErrorModal } from '@/components/modals/errorModal';
import { useFocusEffect } from 'expo-router';
import { navigateToMedicine } from '@/utils/navigationUtils';

export default function Home() {
  const cameraRef = useRef<Camera>(null); // Create a reference to the Camera component for controlling camera actions
  const device = useCameraDevice('back'); // Get the back camera device using the useCameraDevice hook
  const [flash, setFlash] = useState<'on' | 'off'>('off'); // Defines a state variable 'flash' to control the camera's torch (flash) mode, with 'on' or 'off' as possible values, initialized to 'off'
  const [isHelpModalVisible, setHelpModalVisible] = useState(false); // Declare a state variable `isHelpModalVisible` to control the visibility of the Help Model
  const [isSearchModalVisible, setSearchModalVisible] = useState(false); // Declare a state variable `isSerchModalVisible` to control the visibility of the Search Model
  const [isPhotoModalVisible, setPhotoModalVisible] = useState(false); // Declare a state variable `isPhotoModalVisible` to control the visibility of the Photo Model
  const [isStatusBarVisible, setStatusBarVisible] = useState(true); // Define a state variable `isStatusBarVisible` to control the visibility of the device's status bar
  const [isErrorModalVisible, setErrorModalVisible] = useState(false); // State to manage the visibility of the error modal
  const [searchValue, setSearchValue] = useState(''); // State to manage search input value
  const [photoUri, setPhotoUri] = useState<string | null>(null); // State to hold the URI of the selected image or null if no image is selected
  const [isCameraActive, setIsCameraActive] = useState(true); // State to track whether the camera is active

  // function to toggle the flash between "on" and "off"
  function toggleFlash() {
    setFlash((prevFlash) => (prevFlash === 'on' ? 'off' : 'on'));
  }

  // Effect to manage the visibility of the status bar and camera activity based on modal visibility
  useEffect(() => {
    setStatusBarVisible(
      !isHelpModalVisible && !isSearchModalVisible && !isPhotoModalVisible
    );

    if (isHelpModalVisible || isSearchModalVisible || isPhotoModalVisible) {
      setFlash('off');
      setIsCameraActive(false);
    } else {
      setIsCameraActive(true);
    }
  }, [isHelpModalVisible, isSearchModalVisible, isPhotoModalVisible]);

  // Effect to handle camera activity when the component is focused
  useFocusEffect(
    useCallback(() => {
      setIsCameraActive(true);
      setPhotoUri(null);
      setHelpModalVisible(false);
      setSearchModalVisible(false);
      setPhotoModalVisible(false);
      return () => {
        setIsCameraActive(false);
      };
    }, [])
  );

  /* const DATA = [
    { id: '1', title: 'Dipirona' },
    { id: '2', title: 'Ibuprofeno' },
    { id: '3', title: 'Dicloridrato de Levocitirizina' },
    { id: '4', title: 'Dipiorna Monoidratada' },
    { id: '5', title: 'Cimegripe' },
  ]; */

  return (
    <>
      {/* Hides the status bar to maximize space on the camera screen when no modal is open */}
      <StatusBar hidden={isStatusBarVisible} />
      {/* Render the camera only if the back device is available */}
      {device && (
        <Camera
          photo={true} // Enable photo capture
          style={StyleSheet.absoluteFill} // Fill the entire screen with absolute positioning
          ref={cameraRef} // Assign the reference for camera control
          device={device} // Use the back camera device
          isActive={isCameraActive} // Keep the camera active
          torch={flash} // Enable torch (flash) by default
          resizeMode="cover" // Adjust camera image to cover the screen
        />
      )}

      {/* Safe area for the top bar, respecting device notches and edges */}
      <SafeAreaView style={s.topBarSafeArea} edges={['top', 'left', 'right']}>
        <View style={s.topBar}>
          {/* Flash toggle button */}
          <CameraButton onPress={toggleFlash}>
            <CameraButton.Icon
              icon={IconBolt}
              color={flash == 'on' ? colors.green.base : colors.white}
              size={24}
            />
          </CameraButton>

          {/* Container for help and settings buttons */}
          <View style={{ flexDirection: 'row', gap: 8 }}>
            {/* Help button */}
            <CameraButton onPress={() => setHelpModalVisible(true)}>
              <CameraButton.Icon
                icon={IconHelp}
                color={colors.white}
                size={24}
              />
            </CameraButton>

            {/* Settings button */}
            <CameraButton>
              <CameraButton.Icon
                icon={IconSettings}
                color={colors.white}
                size={24}
              />
            </CameraButton>
          </View>
        </View>
      </SafeAreaView>

      {/* Safe area for the bottom bar, respecting device bottom edges */}
      <SafeAreaView
        style={s.bottomBarSafeArea}
        edges={['bottom', 'left', 'right']}
      >
        {/* Bottom bar with camera controls */}
        <View style={s.bottomBar}>
          {/* Photo library button */}
          <CameraButton
            onPress={() =>
              processImage(
                'pick',
                setPhotoUri,
                setPhotoModalVisible,
                setErrorModalVisible
              )
            }
          >
            <CameraButton.Icon
              icon={IconPhoto}
              color={colors.white}
              size={28}
            />
          </CameraButton>

          {/* Photo capture button */}
          <TouchableOpacity
            style={s.photoCaptureButton}
            onPress={() =>
              processImage(
                'take',
                setPhotoUri,
                setPhotoModalVisible,
                setErrorModalVisible,
                cameraRef
              )
            }
          >
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 100,
                backgroundColor: colors.white,
              }}
            />
          </TouchableOpacity>

          {/* Search button */}
          <CameraButton
            style={s.searchButton}
            onPress={() => setSearchModalVisible(true)}
          >
            <CameraButton.Icon icon={Search} color={colors.white} size={24} />
          </CameraButton>
        </View>
      </SafeAreaView>

      <HelpModal
        visible={isHelpModalVisible}
        onClose={() => setHelpModalVisible(false)}
      />

      <SearchModal
        visible={isSearchModalVisible}
        onClose={() => setSearchModalVisible(false)}
        value={searchValue}
        onChangeText={(searchValue) => setSearchValue(searchValue)}
        /* data={DATA} */
        handleSearch={() => {
          navigateToMedicine(searchValue); // Navigate to the medicine details page
          setSearchValue('');
          setSearchModalVisible(false);
        }}
      />

      <PhotoModal
        visible={isPhotoModalVisible}
        onClose={() => setPhotoModalVisible(false)}
        photoUri={photoUri!}
      />

      <ErrorModal
        visible={isErrorModalVisible}
        onClose={() => setErrorModalVisible(false)}
        title="Erro ao processar imagem"
        message="Ocorreu um erro ao processar a imagem. Tente novamente."
      />
    </>
  );
}

const s = StyleSheet.create({
  topBarSafeArea: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  topBar: {
    paddingHorizontal: 24,
    paddingVertical: 0,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  bottomBarSafeArea: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  bottomBar: {
    paddingHorizontal: 16,
    height: 125,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  photoCaptureButton: {
    width: 74,
    height: 74,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: colors.white,
  },
  searchButton: {
    width: 44,
    height: 44,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
