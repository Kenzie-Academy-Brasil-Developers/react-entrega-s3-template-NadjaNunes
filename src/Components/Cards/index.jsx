import { toast } from "react-toastify";
import { CardStyled } from "./style";

const Cards = ({ products, setCart, cart }) => {
  const handleAdd = () => {
    const existingProduct = cart.find((item) => item.id === products.id);
    if (existingProduct) {
      const updateProducts = cart.map((item) =>
        item.id === products.id ? { ...item, qty: item.qty + 1 } : item
      );
      setCart(updateProducts);
    } else {
      toast.success(`${products.name} foi adicionado ao carrinho`, {
        position: "top-center",
        className: "custom-toast",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        
      });
      setCart([...cart, { ...products, qty: 1 }]);
    }
  };

  return (
    <CardStyled>
      <div>
        <img src={products.img} alt="imagem do produto" />
      </div>
      <div>
        <h2>{products.name}</h2>
        <h4>{products.category}</h4>
        <p>R$ {products.price.toFixed(2).replace(".", ",")}</p>
        <button onClick={handleAdd}>Adicionar</button>
      </div>
    </CardStyled>
  );
};

export default Cards;