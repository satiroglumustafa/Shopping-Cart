import "./Basket.css";

const Basket = ({ cart, emptyCart }) => {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  if (cart.length === 0) return <p className="empty-basket">Sepetiniz boş.</p>; // Sepet boşsa mesaj göster

  return (
    <div className="row h-100">
      <div className="col-12 h-100">
        <div className="border px-3 py-3 shadow ms-auto basket-box rounded">
          <h2 className="">Sepet</h2>
          <ul className="m-0 p-0">
            {cart.map((item) => (
              <li className="mt-2 d-flex align-items-center justify-content-between" key={item.id}>
                <span>{item.title}</span>
                <span>{item.price} TL</span>
              </li>
            ))}
          </ul>
          <hr className="my-4" />
          <p>
            <strong>Toplam: {total} TL</strong>
          </p>
          <button className="bg-danger text-white px-3 rounded w-100" onClick={emptyCart}>
            Sepeti Boşalt
          </button>
        </div>
      </div>
    </div>
  );
};

export default Basket;
