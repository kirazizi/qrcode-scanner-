import React, { useEffect, useRef, useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import ViewShot from 'react-native-view-shot';
import * as MediaLibrary from 'expo-media-library';

export default function GenerateScreen() {
  const viewShotRef = useRef(null);
  const [qrValue, setQrValue] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if(message){
      const timer = setTimeout(() => {
        setMessage('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleSaveImage = async () => {
    try {
      const uri = await viewShotRef.current.capture();
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== 'granted') {
        setMessage('Permission required: Please allow access to save images.');
        return;
      }
      await MediaLibrary.saveToLibraryAsync(uri);
      setMessage('Success: Image saved to gallery!');
    } catch (error) {
      setMessage(`Error: Failed to save the image.`);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter text or URL to generate QR code"
        value={qrValue}
        onChangeText={setQrValue}
      />
      <ViewShot ref={viewShotRef} options={{ format: 'jpg', quality: 1 }}>
        <View style={styles.qrContainer}>
          {qrValue ? (
            <QRCode
              value={qrValue}
              size={200}
              backgroundColor="white"
              color="black"
            />
          ) : (
            <Text style={styles.placeholder}>QR Code will appear here</Text>
          )}
        </View>
      </ViewShot>

      {qrValue && (
        <TouchableOpacity style={styles.saveButton} onPress={handleSaveImage}>
          <Text style={styles.saveButtonText}>Save Image</Text>
        </TouchableOpacity>
      )}
      {message &&  (
        <View style={styles.messageContainer}>
          <Text style={styles.messageText}>{message}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  input: {
    width: '100%',
    height: 48,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    marginBottom: 24,
  },
  qrContainer: {
    width: 250,
    height: 250,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  placeholder: {
    color: '#666',
    textAlign: 'center',
  },
  saveButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    width: '100%',
    position: 'absolute',
    bottom: 16,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  messageContainer: {
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 60,
  },
  messageText: {
    color: '#007AFF',
    fontSize: 14,
    textAlign: 'center',
  },
});
