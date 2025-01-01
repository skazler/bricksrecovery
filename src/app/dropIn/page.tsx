import Image from "next/image";

export default function DropInPage() {
  return (
    <div>
      <h1>Drop In</h1>
      <p>drop in here</p>
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
