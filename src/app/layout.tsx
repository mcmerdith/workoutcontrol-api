import "~/styles/globals.css";

import {
  ClerkProvider,
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { TRPCReactProvider } from "~/trpc/react";
import { HydrateClient } from "~/trpc/server";
import { DarkModeToggle, ThemeProvider } from "~/components/theme-provider";
import { Button } from "~/components/ui/button";

export const metadata: Metadata = {
  title: "Workout Control",
  description: "Management Dashboard",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={`${GeistSans.variable}`}
        suppressHydrationWarning
      >
        <body className="bg-background text-foreground min-w-screen flex min-h-screen flex-col">
          <nav className="min-w-screen flex flex-row justify-between gap-4 p-4">
            <div>
              <h1 className="text-2xl font-bold">Workout Control</h1>
            </div>
            <div className="flex flex-row items-center gap-4">
              <SignedIn>
                <Button asChild>
                  <SignOutButton />
                </Button>
                <UserButton />
              </SignedIn>
              <SignedOut>
                <Button asChild>
                  <SignInButton />
                </Button>
              </SignedOut>
              <DarkModeToggle />
            </div>
          </nav>
          <main className="container flex flex-col items-center justify-center gap-6">
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <TRPCReactProvider>
                <HydrateClient>{children}</HydrateClient>
              </TRPCReactProvider>
            </ThemeProvider>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
