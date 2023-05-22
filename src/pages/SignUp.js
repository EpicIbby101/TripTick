import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <main className="flex flex-col h-screen bg-gradient-to-b from-sky-400 to-sky-200">
      <div className="flex-grow flex justify-center items-center">
        <SignUp />
      </div>
    </main>
  );
}
