/* eslint-disable react/react-in-jsx-scope */
import { useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { Button } from '@/ui';

export default function Page() {
  const router = useRouter();
  const handleSettingNavigation = () => {
    router.push('/(app)/settings');
  };
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Bipin</Text>
        <Text style={styles.subtitle}>
          This is the second first page of your app.
        </Text>
        <Button
          className="bg-purple-500"
          testID="Settings"
          label="Settings"
          onPress={handleSettingNavigation}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    maxWidth: 960,
    marginHorizontal: 'auto',
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 36,
    color: '#38434D',
  },
});
