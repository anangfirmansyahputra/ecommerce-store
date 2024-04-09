import getBillboard from "@/actions/billboard";
import getProducts from "@/actions/product";
import Billboard from "@/components/Billboard";
import ProductList from "@/components/ProductList";
import Gallery from "@/components/gallery";
import Container from "@/components/ui/Container";

export const revalidate = 0;

const Home = async () => {
  const products = await getProducts({
    isFeatured: true,
  });
  const billboard = await getBillboard(process.env.NEXT_PUBLIC_BILLBOARD!);

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default Home;
