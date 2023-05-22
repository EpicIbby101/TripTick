import { SignIn } from "@clerk/nextjs";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import Link from "next/link";

export default function SignInPage() {
  return (
    <main className="flex flex-col h-screen bg-gradient-to-b from-sky-400 to-sky-200">
      <div className="flex-grow flex justify-center items-center">
        <SignIn />
      </div>
    </main>
  );
}
