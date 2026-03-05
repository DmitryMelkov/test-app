import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { UserOutlined } from '@ant-design/icons';
import Button from '../../ui/Button';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h2>Test App 📊</h2>
      <div className="header-right">
        <Button icon={<UserOutlined />} />
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
