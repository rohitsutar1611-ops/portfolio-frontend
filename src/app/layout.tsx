import "./globals.css";

export const metadata = {
  title: "Rohit | Data Science",
  description: "Portfolio website built with Next.js and NestJS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}