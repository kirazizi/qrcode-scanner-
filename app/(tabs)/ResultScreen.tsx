// ResultScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';

export default function ResultScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const type = params.type as string;
  const data = params.data as string;

  const IsUrl = (str: string) => {
    const pattern = /^(https?:\/\/)[^\s$.?#].[^\s]*$/;
    return pattern.test(str);

  }

  useEffect(() => {
    if (IsUrl(data)) {
      Linking.openURL(data);
    }
  },);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.resultCard}>
          <Text style={styles.resultTitle}>Scan Result</Text>
          <TouchableOpacity onPress={() => Clipboard.setString(data)}>
            <Ionicons style={styles.copy} name="copy-outline" size={24} color="#007bff" />
          </TouchableOpacity>
          
          {/* <View style={styles.resultSection}>
            <Text style={styles.label}>Type:</Text>
            <Text style={styles.value}>{type}</Text>
          </View> */}

          <View style={styles.resultSection}>
            <Text style={styles.value}>{data}</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={styles.scanAgainButton}
        onPress={() => router.back()}
      >
        <Text style={styles.scanAgainText}>
          Scan Another Code
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  resultCard: {
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  resultTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
  },
  resultSection: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
  },
  scanAgainButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  scanAgainText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  copy: {
    position: 'absolute',
    right: 0,
    bottom: 18,
  }
});