import localFont from 'next/font/local';
import './globals.css';
import './styles/global.css';
import Header from './Layout/header';
import Footer from './Layout/footer';

const geistMono = localFont({
  src: './fonts/Montserrat-Regular.woff',
  variable: '--font-montserrat',
  weight: '500',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${geistMono.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
