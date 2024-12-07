import { ThemedText } from '@/components/ThemedText';
import { useRouter } from 'expo-router';
import { View } from 'react-native';
import HeaderWithSettings from '@/components/HeaderWithSettings';

export default function RegainingStrengthExercises() {
  const router = useRouter();

  return (
    <View>
      <HeaderWithSettings title='Regaining Strength Exercises' />
      <ThemedText>
        TBD Regaining Strength Exercises
      </ThemedText>
    </View>
  );
}

