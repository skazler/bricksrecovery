import { ThemedText } from '@/components/ThemedText';
import { useRouter } from 'expo-router';

export default function Settings() {
  const router = useRouter();

  return (
    <ThemedText>
      Settings
    </ThemedText>
  );
}

