import Main from '@/components/Main';
import '../globals.css';
import Body from '@/components/Body';
import Header from '@/components/header/Header';

export const metadata = {
  title: 'Project Portfolio',
  description: 'A place to keep and share all of my projects',
  icons: {
    icon: '/mainIcon.svg'
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
