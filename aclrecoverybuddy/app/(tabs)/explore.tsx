import { StyleSheet, Image } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Button } from 'react-native';
import { useRouter } from 'expo-router';
import Spacer from '@/components/Spacer';

export default function TabTwoScreen() {
  const router = useRouter();
  const RegainingStrengthExercises = '../screens/regainingStrength/regainingStrengthExercises';
  const RehabPlannerAndLog = '../screens/rehabPlannerAndLog/rehabPlannerAndLog';

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
        <ThemedText type="title">Drop In</ThemedText>
      </ThemedView>
      <ThemedText>How can I help?</ThemedText>
      <Collapsible title="Rehab">
        <Button title="Planner & Log" onPress={() => router.push(RehabPlannerAndLog)} />
          <Spacer height={10}/>
        <Button title="Exercises" onPress={() => router.push(RegainingStrengthExercises)} />
      </Collapsible>
      <Collapsible title="Reading & video recommendations">
        <ThemedText>
          Coming Soon
        </ThemedText>
      </Collapsible>
      <Collapsible title="Daily quote">
        <ThemedText>
          Coming Soon
        </ThemedText>
      </Collapsible>
      <Collapsible title="More coming soon">
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
