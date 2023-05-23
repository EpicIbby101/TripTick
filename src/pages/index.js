import { SignIn, SignInButton } from "@clerk/clerk-react";
import { useRouter } from "next/router";

function Welcome() {
  const router = useRouter();

  return (
    <main className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-sky-400 to-sky-200">
      <h1 className="text-3xl md:text-5xl sm:text-4xl font-bold mb-2">Welcome to TripTicker</h1>
      <p className="text-lg mb-5">Your essential travel companion</p>
      <div className="relative group">
        <div className="absolute -inset-1.5 bg-gradient-to-tr from-gray-200 to-gray-300 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
      <SignInButton
        className="bg-black relative text-white font-bold py-3 px-10 rounded group-hover:text-gray-100 transition duration-200"
      >
        Sign In
      </SignInButton>
      </div>
    </main>
  );
}
export default Welcome;