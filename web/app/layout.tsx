'use client';

import type { Metadata } from 'next';
import { observer } from 'mobx-react-lite';
import { themeStore } from '@/stores/themeStore';
import './globals.css';

const RootLayout = observer(({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={themeStore.theme}>{children}</body>
    </html>
  );
});

export default RootLayout;
