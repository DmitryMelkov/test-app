import React from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import { observer } from 'mobx-react-lite';
import { themeStore } from '../../stores/themeStore';
import { Button, Icon } from '@ant-design/react-native';
import { triggerHaptic } from '../../utils/haptics';

const Header = observer(() => {
  const theme = themeStore.theme;
  const isDark = theme === 'dark';

  const handleToggleTheme = () => {
    triggerHaptic();
    themeStore.toggleTheme();
  };

  const handleUserPress = () => {
    triggerHaptic();
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: isDark ? '#1e1e1e' : '#fff' }]}>
      <View style={[styles.header, { borderBottomColor: isDark ? '#333' : '#eee' }]}>
        <View style={styles.titleContainer}>
          <Text style={[styles.titleText, { color: isDark ? '#fff' : '#000' }]}>Test App 📊</Text>
        </View>
        <View style={styles.headerRight}>
          <Button type="ghost" onPress={handleUserPress} style={styles.iconBtn}>
            <Icon name="user" color={isDark ? '#fff' : '#000'} />
          </Button>
          <Button type="ghost" onPress={handleToggleTheme} style={styles.iconBtn}>
            <Icon name="bulb" color={isDark ? '#fff' : '#000'} />
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  safeArea: {
    width: '100%',
  },
  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderBottomWidth: 1,
  },
  titleContainer: {
    paddingLeft: 10,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBtn: {
    borderWidth: 0,
    paddingHorizontal: 5,
  },
});

export default Header;
