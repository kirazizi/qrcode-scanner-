import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, Alert } from 'react-native';
import { navigate } from 'expo-router/build/global-state/routing';
import { routeToScreen } from 'expo-router/build/useScreens';
import { useRouter } from 'expo-router';

export default function TabLayout() {
  const router = useRouter();
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: 'white',
        },
        headerTitleStyle: {
          fontWeight: '600',
        },
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: '#E5E5E5',
          backgroundColor: 'white',
        },
        headerRight: () => (
        <TouchableOpacity
          style={{ marginRight: 16 }}
          onPress={() => router.push('/SettingsScreen')}
        >
          <Ionicons name="settings-outline" size={24} color="#666" />
        </TouchableOpacity>
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Scan QR',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="scan-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="generate"
        options={{
          title: 'Generate QR',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="qr-code-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="ResultScreen"
        options={{
          title: 'Result',
          href: null,
        }}
      />
      <Tabs.Screen
        name="SettingsScreen"
        options={{
          title: 'Settings',
          href: null,
        }}
      />
    </Tabs>
  );
}