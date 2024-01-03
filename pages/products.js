import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Center from '@/components/Center';
import { mongooseConnect } from '@/lib/mongoose';
import { Product } from '@/models/Product';
import ProductsGrid from '@/components/ProductsGrid';
import Title from '@/components/Title';
import { WishedProduct } from '@/models/WishedProduct';
import { clerkClient } from '@clerk/nextjs';
import { getAuth, auth } from '@clerk/nextjs/server';

export default function ProductsPage({ products, wishedProducts }) {
  return (
    <>
      <Header />
      <Center>
        <Title>All products</Title>
        <ProductsGrid products={products} wishedProducts={wishedProducts} />
      </Center>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </>
  );
}

export async function getServerSideProps(ctx) {
  await mongooseConnect();
  const products = await Product.find({}, null, { sort: { _id: -1 } });
  const { userId } = getAuth(ctx.req);
  const user = await clerkClient.users.getUser(userId);
  const wishedProducts = user
    ? await WishedProduct.find({
        userEmail: user.primaryEmailAddressId,
        product: products.map(p => p._id.toString()),
      })
    : [];
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      wishedProducts: wishedProducts.map(i => i.product.toString()),
    },
  };
}
