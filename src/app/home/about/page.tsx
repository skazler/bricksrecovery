import Image from "next/image";

export default function AboutPage() {
  return (
    <div>
      <h1>About</h1>
      <p>about here</p>
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
