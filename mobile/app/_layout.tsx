import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from '@ant-design/react-native';
import { observer } from 'mobx-react-lite';
import { themeStore } from '../stores/themeStore';
import { useInitializeApp } from '../hooks/useInitializeApp';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const RootLayout = observer(() => {
  const isReady = useInitializeApp();
  const theme = themeStore.theme;
  const isDark = theme === 'dark';

  if (!isReady) {
    return (
      <View style={[styles.loading, { backgroundColor: isDark ? '#121212' : '#fff' }]}>
        <ActivityIndicator size="large" color={isDark ? '#fff' : '#000'} />
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <Provider theme={isDark ? { fill_base: '#121212', color_text_base: '#fff' } : undefined}>
          <Stack
            screenOptions={{
              headerShown: false,
              contentStyle: { backgroundColor: isDark ? '#121212' : '#fff' },
            }}
          />
          <StatusBar style={isDark ? 'light' : 'dark'} />
        </Provider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
});

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RootLayout;
