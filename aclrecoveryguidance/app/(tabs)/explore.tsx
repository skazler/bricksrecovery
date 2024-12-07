import { StyleSheet, Image } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function TabTwoScreen() {
  const router = useRouter();
  const RegainingStrengthExercises = '../screens/regainingStrength/regainingStrengthExercises';

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
          source={require('@/assets/images/bike-with-brace.jpg')}
          style={styles.headerImg}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Explore</ThemedText>
      </ThemedView>
      <ThemedText>Which phase of recovery are you in?</ThemedText>
      <Collapsible title="Post surgery">
        <ThemedText>
          Coming Soon
        </ThemedText>
      </Collapsible>
      <Collapsible title="Regaining mobility">
      <ThemedText>
          Coming Soon
        </ThemedText>
      </Collapsible>
      <Collapsible title="Regaining strength and coordination">
        <Button title="Exercises" onPress={() => router.push(RegainingStrengthExercises)} />
      </Collapsible>
      <Collapsible title="Return to sport">
      <ThemedText>
          Coming Soon
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImg: {
    width: "100%",
    height: "100%"
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
