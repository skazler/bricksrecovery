import BackAndForwardButtons from "@/components/navigationButtons/backAndForwardButtons";
import Spacer from "@/components/spacer";
import Image from "next/image";
import AddCircleIcon from '@mui/icons-material/AddCircle';

export default function PlannerPage() {
  return (
    <div className="flex flex-col h-screen justify-between" style={{ fontFamily: 'var(--font-geist-mono)', margin: '20px', padding: '20px', maxWidth: '800px', lineHeight: '1.6' }}>
      <div className="flex-grow">
        <h1 style={{ fontSize: 23 }}>Planner</h1>
        <Spacer size="20px" />

        <main className="flex flex-col items-center sm:items-start">
          <AddCircleIcon
            sx={{ 
              fontSize: 48, 
              cursor: 'pointer',
              '&:hover': { color: 'gray'}
            }}
          />
          <p> Add workout </p>
        </main>
        <Spacer size="20px" />

        <main className="flex flex-col items-center sm:items-start">
          <Image
            src="/assets/under-construction-transparency.png"
            alt="under construction icon"
            width={200}
            height={50}
            priority
          />
        </main>
        <Spacer size="20px" />
      </div>
      
      <div className="p-4">
        <BackAndForwardButtons />
      </div>
    </div>
  );
}
