import getCategory from "@/actions/get-category";
import getColors from "@/actions/get-colors";
import getSizes from "@/actions/get-sizes";
import getProducts from "@/actions/product";
import Billboard from "@/components/Billboard";
import Container from "@/components/ui/Container";
import Filter from "../components/filter";
import NoResult from "@/components/ui/NoResult";
import ProductCard from "@/components/ui/ProductCard";
import MobileFilter from "../components/mobile-filter";

export const revalidate = 0;

interface Props {
    params: {
        categoryId: string;
    },
    searchParams: {
        colorId: string;
        sizeId: string;
    },
};

export default async function Page({ params, searchParams } : Props) {
    const products = await getProducts({
        categoryId: params.categoryId,
        colorId: searchParams.colorId,
        sizeId: searchParams.sizeId
    });

    const sizes = await getSizes()
    const colors = await getColors()
    const category = await getCategory(params.categoryId)
    
    return (
        <div className="bg-white">
            <Container>
                <Billboard
                    data={category.billboard}
                />
                <div className="px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                        <MobileFilter
                            sizes={sizes}
                            colors={colors}
                        />
                        <div className="hidden lg:block">
                            <Filter
                                valueKey="sizeId"
                                name="Sizes"
                                data={sizes}
                            />
                            <Filter
                                valueKey="colorId"
                                name="Colors"
                                data={colors}
                            />
                        </div>
                        <div className="mt-6 lg:col-span-4 lg:mt-0">
                            {products.length === 0 && (
                                <NoResult />
                            )}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {products.map(product => (
                                    <ProductCard
                                        key={product.id}
                                        data={product}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
