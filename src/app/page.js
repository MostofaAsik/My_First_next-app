import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import ContactInfo from "@/components/ContactInfo";
import FeaturedProducts from "@/components/FeaturedProducts";
import Testimonials from "@/components/Testmonials";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <Categories />
      <FeaturedProducts />
      <Testimonials />
      <ContactInfo />
    </div>
  );
}
