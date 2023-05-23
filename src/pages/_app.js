import "@/styles/globals.css";
import { SignIn, UserButton } from "@clerk/clerk-react";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/nextjs";

export default function App({ Component, pageProps }) {
  return (
    <ClerkProvider {...pageProps}>
      <SignedIn>
      <Component {...pageProps} />
      </SignedIn>
      <SignedOut>
        <SignIn />
      </SignedOut>
    </ClerkProvider>
  );
}
