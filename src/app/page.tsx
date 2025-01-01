'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();
  const handleDropIn = () => {
    router.push('/dropIn');
  };
  const handleDisclaimer = () => {
    router.push('/home/disclaimer');
  };
  const handleAbout = () => {
    router.push('/home/about');
  };
  const handleSettings = () => {
    router.push('/home/settings');
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          src="/assets/bricks-logo-transparency.png"
          alt="bricks logo"
          width={250}
          height={50}
          priority
        />
        <ol className="text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            Welcome to your ACL recovery buddy.
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleDropIn}
            style={{ cursor: 'pointer' }}
          >
            Drop In →
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleDisclaimer}
          style={{ cursor: 'pointer' }}
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="file icon"
            width={16}
            height={16}
          />
          Disclaimer
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleAbout}
          style={{ cursor: 'pointer' }}
        >
          <Image
            aria-hidden
            src="/about.svg"
            alt="about icon"
            width={16}
            height={16}
          />
          About
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleSettings}
          style={{ cursor: 'pointer' }}
        >
          <Image
            aria-hidden
            src="/settings.svg"
            alt="settings icon"
            width={16}
            height={16}
          />
          Settings
        </a>
      </footer>
    </div>
  );
}
