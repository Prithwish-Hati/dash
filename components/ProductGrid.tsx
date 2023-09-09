import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";

interface Props {
  products: [];
}

const ProductGrid = ({ products }: any) => {
  if (products.length === 0) return "No Products Found!";

  return (
    <div className="mb-12 grid grid-cols-1 gap-x-8 gap-y-12 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
      {products.map((product: any) => (
        <div key={product._id}>
          <Image
            src={urlForImage(product.images[0]).url()}
            width={270}
            height={270}
            alt={product.name}
            className="object-contain"
          />

          <p className="mt-6 text-gray1">{product.categories}</p>
          <h3 className="mt-4 text-xl font-medium text-black1">
            {product.name}
          </h3>
          <p className="mt-1 text-gray1 font-bold">
            {product.currency} {product.price}
          </p>
          <div className="mt-4">
            <CustomButton title="View More" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
