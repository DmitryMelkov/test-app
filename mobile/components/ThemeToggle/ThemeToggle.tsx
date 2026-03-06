import React from 'react';
import { observer } from 'mobx-react-lite';
import { themeStore } from '../../stores/themeStore';
import Button from '../../ui/Button';

const ThemeToggle = observer(() => {
  const theme = themeStore.theme;
  const isDark = theme === 'dark';

  return (
    <Button
      onPress={() => themeStore.toggleTheme()}
      title={isDark ? '🌙' : '☀️'}
      style={{ width: 40, height: 40, borderRadius: 20 }}
    />
  );
});

export default ThemeToggle;
