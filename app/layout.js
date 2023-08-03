import './global.css';

import { Roboto_Flex } from 'next/font/google';
import { Providers } from './services/providers';
import Footer from './components/Footer';

const roboto = Roboto_Flex({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={roboto.className}>
      <body>
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
