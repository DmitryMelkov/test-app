import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useRouter, Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { observer } from 'mobx-react-lite';
import { themeStore } from '../../stores/themeStore';
import { triggerHaptic } from '../../utils/haptics';

const DetailsScreen = observer(() => {
  const router = useRouter();
  const isDark = themeStore.theme === 'dark';

  const handleBack = () => {
    triggerHaptic();
    router.back();
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDark ? '#121212' : '#fff' }]}>
      <Stack.Screen
        options={{
          headerShown: true,
          title: 'Детали',
          headerTintColor: isDark ? '#fff' : '#000',
        }}
      />
      <View style={styles.content}>
        <Text style={[styles.text, { color: isDark ? '#fff' : '#000' }]}>
          Это второй экран навигации!
        </Text>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: isDark ? '#333' : '#007AFF' }]}
          onPress={handleBack}
        >
          <Text style={styles.buttonText}>Вернуться назад</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default DetailsScreen;
