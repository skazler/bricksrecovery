'use client';

import BackAndForwardButtons from "@/components/navigationButtons/backAndForwardButtons";
import Spacer from "@/components/spacer";
import { useRouter } from "next/navigation";
import React from "react";

export default function DropInPage() {
  const [trainingLog, setTrainingLog] = React.useState<string[]>([]);

  const router = useRouter();
  const handleTrainingLog = () => {
    router.push('/dropIn/trainingLog');
  };
  const handleReadingMaterials = () => {
    router.push('/dropIn/readingMaterials');
  };
  const handlePlanner = () => {
    router.push('/dropIn/planner');
  };

  return (
    <div className="flex flex-col h-screen justify-between" style={{ fontFamily: 'var(--font-geist-mono)', margin: '20px', padding: '20px', maxWidth: '800px', lineHeight: '1.6' }}>
      <div className="flex-grow">
        <h1 style={{ fontSize: 23 }}>Drop In</h1>
        <Spacer size="20px" />

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handlePlanner}
            style={{ cursor: 'pointer' }}
          >
            Planner
          </a>
        </div>
        <Spacer size="20px" />

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleTrainingLog}
            style={{ cursor: 'pointer' }}
          >
            Training Log
          </a>
        </div>
        <Spacer size="20px"/>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleReadingMaterials}
            style={{ cursor: 'pointer' }}
          >
            Reading Materials
          </a>
        </div>
        <Spacer size="20px" />
      </div>

      <div className="p-4">
        <BackAndForwardButtons />
      </div>
    </div>
  );
}
