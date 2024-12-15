import { ThemedText } from '@/components/ThemedText';
import { useRouter } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import HeaderWithSettings from '@/components/HeaderWithSettings';
import Spacer from '@/components/Spacer';

export default function Reminders() {
  const router = useRouter();

  return (
    <View>
      <HeaderWithSettings title='Reminders' />

      <View style={styles.textContainer}>
        <Spacer height={16}/>

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

