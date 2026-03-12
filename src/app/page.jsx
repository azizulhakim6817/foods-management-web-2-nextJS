import Banner from "@/components/home/bannder/Banner";
import Feature from "@/components/home/feature/Feature";
import Hero from "@/components/home/hero/Hero";
import Products from "@/components/home/products/ProductsItem";
import Testimonials from "@/components/home/testimonials/Testimonials";

const page = () => {
  return (
    <div>
      <Hero></Hero>
      <Feature></Feature>
      <Products></Products>
      <Banner></Banner>
      <Testimonials></Testimonials>
    </div>
  );
};

export default page;
