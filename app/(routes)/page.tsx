import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
      const products = await getProducts({ isFeatured: true });
      const billboard = await getBillboard("e10a13c8-7d56-4b79-ae7a-c842a0096d29");

    return (

        <Container>
            <div className="space-y-10 pb-10">
                <Billboard
                    data={billboard}
                />
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList title="Featured Products" items={products} />
                </div>
            </div>
        </Container>
    )
};

export default HomePage;