import { useEffect, useRef, } from "react";
import { BackdropStyled } from "./style";
import Amount from "../Total";
import { toast } from "react-toastify";
import { FaTrash } from "react-icons/fa"
import imgTwo from "../../assets/cart.shopping.svg"

const Modal = ({ isOpen, onClose, cart, setCart, products }) => {

  const modalRef = useRef(null);

  const handleDeleteProduct = (itemID) => {
    const existingProduct = cart.find((item) => item.id === itemID)
    if (existingProduct) {
      if (existingProduct.qty === 1) {
        setCart(cart.filter((item) => item.id !== itemID))
      } else {
        const updateProducts = cart.map((item) =>
          item.id === itemID
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        setCart(updateProducts)
      }
      toast.error(`Todos os itens foram removidos do carrinho`, {
        position: "top-center",
        
      })
    }
  }

  const removeAllProducts = () => {
    setCart([])
    toast.warning("Todos os itens foram removidos do carrinho", {
      position: "top-center",
    })
  }

  const handleClose = () => {
    onClose();
  };

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      handleClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (isOpen) {
    return (
      <BackdropStyled>
        <div className="container" ref={modalRef}>
          <header>
            <h2>Carrinho de compras</h2>
            <button onClick={handleClose}>X</button>
          </header>
          <ul>
            {
              cart.map((item) => (
                <li key={item.id}>
                  <div className="divLi">
                    <div className="divs">
                      <div className="divImg">
                        <img src={item.img} alt="" />
                      </div>
                      <div className="divSpanName">
                        <h2>{item.name}</h2>
                        <span>{item.qty}x</span>
                      </div>
                    </div>
                    <div className="divImgTrash">
                      <FaTrash class="trach" onClick={() => handleDeleteProduct(item.id)}></FaTrash>
                    </div>
                  </div>
                </li>
              )
              )}
            {cart.length === 0 ? (
              <span className="cart">
                <img src={imgTwo} alt="" />
              </span>
            ) : null}
          </ul>
          <Amount cart={cart} />

          <div className="divRemove">
            <button onClick={removeAllProducts}>Remover todos</button>
          </div>
        </div>
      </BackdropStyled>
    );
  }

  return null;
};

export default Modal;