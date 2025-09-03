import { SignInButton, SignOutButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          Next.js + Convex + Clerk
        </h1>
        
        <div className="text-center">
          <SignedOut>
            <div className="mb-4">
              <p className="mb-4">Please sign in to continue</p>
              <SignInButton mode="modal">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Sign In
                </button>
              </SignInButton>
            </div>
          </SignedOut>
          
          <SignedIn>
            <div className="mb-4">
              <p className="mb-4">Welcome! You are signed in.</p>
              <div className="flex items-center justify-center gap-4">
                <UserButton afterSignOutUrl="/" />
                <SignOutButton>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Sign Out
                  </button>
                </SignOutButton>
              </div>
            </div>
          </SignedIn>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            This is a starter template with Next.js, Tailwind CSS, Convex, and Clerk
          </p>
        </div>
      </div>
    </main>
  );
}
