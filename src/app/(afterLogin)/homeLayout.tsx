export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        홈레이아웃
        {children}
      </body>
    </html>
  );
}
