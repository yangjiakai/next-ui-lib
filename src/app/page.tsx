import Image from "next/image";
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer";




export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24   bg-white dark:bg-zinc-950">
        <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        </div>
      </main>
      <Footer />
    </>
  );
}
