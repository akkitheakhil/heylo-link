import "@/styles/global.scss";
import { bebas } from '@/libs/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <head />
      <body className={bebas.className}>
          {children}
      </body>
    </html>
  );
}
