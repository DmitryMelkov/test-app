import * as Haptics from 'expo-haptics';
import { Platform } from 'react-native';

export const triggerHaptic = (
  type: Haptics.ImpactFeedbackStyle = Haptics.ImpactFeedbackStyle.Light,
) => {
  if (Platform.OS !== 'web') {
    Haptics.impactAsync(type);
  }
};

export const triggerSuccessHaptic = () => {
  if (Platform.OS !== 'web') {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  }
};

export const triggerErrorHaptic = () => {
  if (Platform.OS !== 'web') {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
  }
};
