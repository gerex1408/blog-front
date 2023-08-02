import '../global.css';

import { Roboto_Flex } from 'next/font/google';
import { Providers } from '../services/providers';
import Navbar from '../components/Navbar';

const roboto = Roboto_Flex({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={roboto.className}>
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
