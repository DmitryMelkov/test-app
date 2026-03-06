import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import { observer } from 'mobx-react-lite';
import { themeStore } from '../stores/themeStore';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion = observer(({ title, children }: AccordionProps) => {
  const [expanded, setExpanded] = useState(false);
  const theme = themeStore.theme;
  const isDark = theme === 'dark';

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#1e1e1e' : '#f5f5f5' }]}>
      <TouchableOpacity style={styles.header} onPress={toggleExpand}>
        <Text style={[styles.title, { color: isDark ? '#fff' : '#000' }]}>{title}</Text>
        <Text style={[styles.icon, { color: isDark ? '#fff' : '#000' }]}>
          {expanded ? '▲' : '▼'}
        </Text>
      </TouchableOpacity>
      {expanded && <View style={styles.content}>{children}</View>}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    borderRadius: 10,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon: {
    fontSize: 14,
  },
  content: {
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.1)',
  },
});

export default Accordion;
