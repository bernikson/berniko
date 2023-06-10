import "./globals.css";

export const metadata = {
  title: "Berniko",
  description: "Portfolio of Berniko",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
