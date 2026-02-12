import "./globals.css";

export const metadata = {
  title: "rodIDE - Frontend Developer",
  description: "Портфолио rodIDE: современные сайты и интерфейсы для бизнеса."
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        {children}
      </body>
    </html>
  );
}
