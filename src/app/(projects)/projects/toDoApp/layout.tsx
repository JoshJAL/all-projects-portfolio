import Body from '@/components/toDoAppcomponents/Body';
import Main from '@/components/toDoAppcomponents/Main';
import Header from '@/components/toDoAppcomponents/header/Header';
import '../../../globals.css';

export const metadata = {
  title: 'To Do App',
  description: 'Create and manage your to do list',
  icons: {
    icon: '/toDoIcon.svg'
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
