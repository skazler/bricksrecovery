import { ThemedText } from '@/components/ThemedText';
import { useRouter } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import HeaderWithSettings from '@/components/HeaderWithSettings';
import Spacer from '@/components/Spacer';
import { CollapsibleOptions } from '@/components/CollapsibleOptions';

export default function RegainingStrengthExercises() {
  const router = useRouter();

  return (
    <View>
      <HeaderWithSettings title='Regaining Strength Exercises' />

      <View style={styles.textContainer}>
        <Spacer height={16}/>

        <CollapsibleOptions title="Quads">
          <ThemedText>
            Coming Soon
          </ThemedText>
        </CollapsibleOptions>
        <Spacer height={10}/>
        <CollapsibleOptions title="Hamstrings">
          <ThemedText>
            Coming Soon
          </ThemedText>
        </CollapsibleOptions>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    padding: 16,
    backgroundColor: "transparent",
  },
});

