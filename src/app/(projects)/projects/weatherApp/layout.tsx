import '../../../globals.css';
import Body from '@/components/weatherAppComponents/Body';
import Main from '@/components/weatherAppComponents/Main';
import React from 'react';

export const metadata = {
  title: 'Project Portfolio',
  description: 'A place to keep and share all of my projects'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <Body>
        <Main>{children}</Main>
      </Body>
    </html>
  );
}
