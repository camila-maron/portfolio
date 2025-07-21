import type React from 'react';
import Head from 'next/head';
import '../styles/globals.css';
import { Inter } from 'next/font/google';
import { LanguageProvider } from '@/contexts/language-context';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>Camila Maron - Full Stack Developer</title>
        <meta
          name="description"
          content="Software Developer with 8+ years of experience designing, developing, testing, and maintaining scalable enterprise applications across healthcare, gaming, and business domains. Adept at full stack development using modern technologies such as React, Node.js, AWS, and cloud microservices. Strong collaborator with cross-functional teams, focused on delivering high-quality digital products. Seeking a growth-oriented company where I can contribute with technical excellence and continue advancing my professional development."
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={inter.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
