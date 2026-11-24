import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Sri Hruday Preetham Perika | Java Full-Stack Developer (Java 21 • Spring Boot • Kafka • React.js)",
  description:
    "Java Full-Stack Developer with 1.6+ years of production experience building high-throughput Java 21, Spring Boot, Kafka microservices, and React.js web applications.",
  keywords: [
    "Java Full Stack Developer",
    "Java 21",
    "Spring Boot",
    "React.js",
    "Apache Kafka",
    "Microservices",
    "Kubernetes",
    "AWS ECR",
    "PostgreSQL",
    "Docker",
  ],
  authors: [{ name: "Sri Hruday Preetham Perika", url: "https://github.com/preetham-perika" }],
  creator: "Sri Hruday Preetham Perika",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://preetham-perika.github.io/hruday-preetham-portfolio/",
    title: "Sri Hruday Preetham Perika | Java Full-Stack Developer",
    description: "Production experience scaling Java 21 microservices to 500 TPS & delivering reactive frontends with React.js.",
    siteName: "Sri Hruday Preetham Perika Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-height-screen">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
