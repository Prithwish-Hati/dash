import ProductGrid from "@/components/ProductGrid";
import { client } from "@/sanity/lib/client";
import {  groq } from "next-sanity";


const Page = async () => {
  const products = await client.fetch<[]>(groq`*[_type == "product"]`)
  // console.log(products)
  return (
    <main className="section-containter">
      <h1 className="head-text text-center mt-12">All Products</h1>
      <p className="sub-text text-center mt-7">
        Discover must-have treasures for every style and budget
      </p>

      <h3 className="mt-8 text-black1 text-lg font-medium">{products.length} result{products.length < 2 ? "" : "s"}</h3>

      <ProductGrid products= {products}/>
      
    </main>
  );
};

export default Page;
