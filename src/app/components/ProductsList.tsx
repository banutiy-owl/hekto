import { FC, useEffect, useState } from "react";
import ProductsListCard from "../components/ProductsListCard";

interface Product {
  id: number;
  img: string;
  name: string;
  price: number;
  oldPrice: number | null;
  description: string;
  rating: number;
  code: string;
}

interface ProductsListProps {
  filters: any;
  view: any;
}

const ProductsList: FC<ProductsListProps> = ({ filters, view }) => {
  const [products, setProducts] = useState<Product[]>([]);
 

  useEffect(() => {
    const fetchProducts = async () => {
      
      try {
        const response = await fetch("/products.json");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);


  return (
    <div>
      {products.length === 0 ? (
        <p>No products found</p>
      ) : (
        <div className={`product-cards ${view=== 'list' ? 'list-view' : 'grid-view'}`}>
          {products.map((product) => (
            <ProductsListCard key={product.id} {...product} view={view}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsList;
