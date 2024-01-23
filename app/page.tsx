import Image from "next/image";

export default function Home() {
  return (
    <main className="home-container">
      <div className="home-header">
        <p className="greeding">Hi all, I am</p>
        <h3 className="name">Valter Mendes</h3>
        <p className="job-title"> <Image src='/assets/chevron-right.svg' width={20} height={20} alt="hero" />Fullstack developer</p>
      </div>
      <div className="hero-image">
        <Image className="code" src='/assets/hero.svg' width={200} height={200} alt="hero" />
        <Image className="shape" src='/assets/shape.svg' width={200} height={200} alt="hero" />
      </div>
    </main>
  );
}
