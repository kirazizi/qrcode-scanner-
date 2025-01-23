import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { useRouter, useSegments } from 'expo-router';

export default function RootLayout() {
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (segments.length === 0) {
      router.push('/scan');
    }
  }, [segments]);

  return <Stack screenOptions={{ headerShown: false }} />;
}