import { observer } from 'mobx-react-lite';
import { SunOutlined, MoonOutlined } from '@ant-design/icons';
import { themeStore } from '@/stores/themeStore';
import Button from '../../ui/Button';
import './ThemeToggle.css';

const ThemeToggle = observer(() => {
  return (
    <Button
      icon={themeStore.theme === 'light' ? <MoonOutlined /> : <SunOutlined />}
      onClick={() => themeStore.toggleTheme()}
    />
  );
});

export default ThemeToggle;
