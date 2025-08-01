import ProductCard from "@/components/client/ProductCard";
import React from "react";

// https://dummyjson.com/products?limit=10&skip=10&select=title,price,category
// http://localhost:3000/products?select=category,title,description

interface ProductsPageProps {
  searchParams: Promise<{
    limit: string | undefined;
    skip: string | undefined;
    select: string | undefined;
  }>;
}

const getProdcuts = async (limit: string, skip: string, select: string) => {
  const response = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=${select}`
  );
  const { products } = await response.json();
  return products;
};

const ProductsPage = async ({ searchParams }: ProductsPageProps) => {
  const query = await searchParams;
  const {
    limit = "12",
    skip = "0",
    select = "title,category,price,thumbnail",
  } = query;

  const products = await getProdcuts(limit, skip, select);

  return (
    <React.Fragment>
      <main className="grid grid-cols-1 sm:grid-cols-4 gap-6 my-7 px-10 mx-10">
        {products &&
          Array.isArray(products) &&
          products?.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
      </main>
    </React.Fragment>
  );
};

export default ProductsPage;
