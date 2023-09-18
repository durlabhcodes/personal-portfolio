import Hero from "@/app/hero/page";
import Services from "@/app/services/page";
import Work from "@/app/work/page";
import Blog from "@/app/blog/page";
import Footer from "@/app/footer/page";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Work />
      <Blog />
      <Footer />
    </div>
  );
}
