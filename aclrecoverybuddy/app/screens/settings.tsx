import HeaderWithSettings from '@/components/HeaderWithSettings';
import { ThemedText } from '@/components/ThemedText';
import { useRouter } from 'expo-router';
import { View } from 'react-native';

export default function Settings() {
  const router = useRouter();

  return (
    <View>
      <HeaderWithSettings title='Settings' />
      <ThemedText>
        Settings
      </ThemedText>
    </View>
  );
}

