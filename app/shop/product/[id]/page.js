import ProductDetailsContainer from "@/app/components/ProductDetails";
import Breadcrumb from "@/app/components/shared/Bredcrumb";
import { getSingleProduct } from "@/db/queries";

// generate metadata
export async function generateMetadata({ params }) {
  const product = await getSingleProduct(params?.id);
  return {
    title: product.name,
    openGraph: {
      images: [product.thumbnail],
    },
  };
}
export default async function ProductPage({ params }) {
  const { id } = await params;
  return (
    <section className="px-[15px] md:px-10 lg:px-20 py-4 md:py-[19px]">
      <Breadcrumb
        nameWithPath={{ name: "Feature Product", path: "/shop" }}
        name1="New Arrival"
      />
      <ProductDetailsContainer productId={id} />
    </section>
  );
}
