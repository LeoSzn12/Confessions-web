import Hero from "@/components/Hero";
import VideoGrid from "@/components/VideoGrid";
import SubmissionForm from "@/components/SubmissionForm";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-brand-red selection:text-white">
      <Hero />
      <VideoGrid />
      <SubmissionForm />
      <About />
      <Footer />
    </main>
  );
}
