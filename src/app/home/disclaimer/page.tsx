import Image from "next/image";

export default function DisclaimerPage() {
  return (
    <div>
      <h1>Discalimer</h1>
      <p>disclaimers here</p>
        <main className="flex flex-col items-center sm:items-start">
        <Image
          src="/assets/under-construction-transparency.png"
          alt="under construction icon"
          width={200}
          height={50}
          priority
        />
        </main>
    </div>
  );
}
