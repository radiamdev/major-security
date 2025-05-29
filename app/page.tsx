import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServicePage from "./Service/page";
import WhyPage from "./why/page";

export default function Home() {
  return (
    <main>
      <Header/>
      <h1>Home</h1>
      <ServicePage/>
      <WhyPage/>
      <Footer />
    </main>
  );
}
