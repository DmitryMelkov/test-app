import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { observer } from 'mobx-react-lite';
import { themeStore } from '../stores/themeStore';

interface ButtonProps {
  title?: string;
  onPress: () => void;
  icon?: React.ReactNode;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const Button = observer(({ title, onPress, icon, style, textStyle }: ButtonProps) => {
  const theme = themeStore.theme;
  const isDark = theme === 'dark';

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor: isDark ? '#333' : '#eee' }, style]}
    >
      {icon}
      {title && (
        <Text style={[styles.text, { color: isDark ? '#fff' : '#000' }, textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default Button;
