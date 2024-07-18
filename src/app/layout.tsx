import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { theme } from '../assets/colors';
import StoreProvider from './StoreProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Airbnb Clone',
  description: 'A clone for Airbnb to practice'
};

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html
    lang="en"
    style={{ height: '100%', backgroundColor: theme.colors.white }}
  >
    <body
      className={inter.className}
      style={{ height: '100%', backgroundColor: theme.colors.white }}
    >
      <StoreProvider>{children}</StoreProvider>
    </body>
  </html>
);

export default RootLayout;
