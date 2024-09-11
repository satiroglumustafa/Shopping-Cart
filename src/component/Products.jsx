import ProductItem from "./ProductItem";
import useFetch from "../hooks/useFetch";
import Basket from "./Basket";

const Products = ({ cartItems, setCartItems }) => {
  const veri = useFetch("https://fakestoreapi.com/products");

  const emptyCart = () => {
    setCartItems([]); // setCartItems ile sepeti sıfırlıyoruz
  };

  if (!veri.length) return <p>Yükleniyor...</p>; // Veri yüklenirken gösterilecek mesaj

  return (
    <>
      <div className="row mb-4">
        <div className="col-12 col-lg-9">
          <div className="row">
            {veri.map((product) => (
              <ProductItem
                key={product.id}
                product={product}
                cart={cartItems}
                setCart={setCartItems}
              />
            ))}
          </div>
        </div>
        <div className="col-12 col-lg-3">
          <Basket cart={cartItems} emptyCart={emptyCart} />
        </div>
      </div>
    </>
  );
};
export default Products;
