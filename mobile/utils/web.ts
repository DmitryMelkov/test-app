import * as WebBrowser from 'expo-web-browser';
import { triggerHaptic } from './haptics';

export const openWebBrowser = async (url: string) => {
  try {
    triggerHaptic();
    await WebBrowser.openBrowserAsync(url);
  } catch (error) {
    console.error('Error opening web browser:', error);
  }
};
