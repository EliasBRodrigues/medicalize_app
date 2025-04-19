import React, { useRef, useState } from 'react';
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

export default function Home() {
  const cameraRef = useRef<Camera>(null); // Create a reference to the Camera component for controlling camera actions
  const device = useCameraDevice('back'); // Get the back camera device using the useCameraDevice hook
  const [flash, setFlash] = useState<'on' | 'off'>('off'); // Defines a state variable 'flash' to control the camera's torch (flash) mode, with 'on' or 'off' as possible values, initialized to 'off'

  // function to toggle the flash between "on" and "off"
  function toggleFlash() {
    setFlash((prevFlash) => (prevFlash === 'on' ? 'off' : 'on'));
  }

  return (
    <>
      {/* Hide the StatusBar to maximize the camera screen space */}
      <StatusBar hidden={true} />
      {/* Render the camera only if the back device is available */}
      {device && (
        <Camera
          photo={true} // Enable photo capture
          style={StyleSheet.absoluteFill} // Fill the entire screen with absolute positioning
          ref={cameraRef} // Assign the reference for camera control
          device={device} // Use the back camera device
          isActive={true} // Keep the camera active
          torch={flash} // Enable torch (flash) by default
          resizeMode="cover" // Adjust camera image to cover the screen
        />
      )}

      {/* Safe area for the top bar, respecting device notches and edges */}
      <SafeAreaView style={s.topBarSafeArea} edges={['top', 'left', 'right']}>
        <View style={s.topBar}>
          {/* Flash toggle button */}
          <CameraButton  onPress={toggleFlash}>
            <CameraButton.Icon 
              icon={IconBolt} 
              color={flash == 'on' ? colors.green.base : colors.white} 
              size={24} 
            />
          </CameraButton>

          {/* Container for help and settings buttons */}
          <View style={{ flexDirection: 'row', gap: 8 }}>
            {/* Help button */}
            <CameraButton>
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
          <CameraButton>
            <CameraButton.Icon
              icon={IconPhoto}
              color={colors.white}
              size={28}
            />
          </CameraButton>

          {/* Photo capture button */}
          <TouchableOpacity
            style={s.photoCaptureButton}
            onPress={() => {
              console.log('Take a picture');
            }}
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
            onPress={() => {
              console.log('Open Modal');
            }}
          >
            <CameraButton.Icon icon={Search} color={colors.white} size={24} />
          </CameraButton>
        </View>
      </SafeAreaView>
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
