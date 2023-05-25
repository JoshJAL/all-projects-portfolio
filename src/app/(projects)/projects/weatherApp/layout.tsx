import '../../../globals.css';
import Body from '@/components/weatherAppComponents/Body';
import Main from '@/components/weatherAppComponents/Main';
import Header from '@/components/weatherAppComponents/header/Header';
import React from 'react';

export const metadata = {
  title: 'Weather App',
  description: 'Get the weather for your local area or a random area',
  icons: {
    icon: '/weatherIcon.svg'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <Body>
        <Header />
        <Main>{children}</Main>
      </Body>
    </html>
  );
}
