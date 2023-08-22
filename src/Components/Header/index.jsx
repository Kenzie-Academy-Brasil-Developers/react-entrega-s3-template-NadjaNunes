import { useState } from "react";
import Modal from "../Modal";
import { HeaderStyled } from "./style";
import img from "../../assets/cart.svg"
import logo from "../../assets/logo_burguer.png"
import buttonSeach from "../../assets/button-disable.svg"

export const HeaderForm = ({ callback, cart, setCart }) => {
    const [inputSearch, setInput] = useState('')

    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        callback(inputSearch)
    }

    const modalClose = () => {
        setIsModalOpen(false)
    }

    const handleCartIconClick = () => {
        setIsModalOpen(true)
    }

    const counter = cart.reduce((acumalator, item) => acumalator + item.qty,0)
    return (
        <>
            <HeaderStyled>
                <div className="container">
                <div className="container__logo">
                    <div>
                        <img className="logo" src={logo} alt="logo kenzie burguer" />
                    </div>
                    <div className="cart">
                        <p>{counter}</p>
                        <img src={img} alt="carrinho de compras" size={35} onClick={handleCartIconClick} />
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                        <input className="inputText" type="text"
                        placeholder="Buscar..."
                        onChange={(event) => setInput(event.target.value)}
                        />
                        <input className="inputButton" type="image" src={buttonSeach} alt="Submit" />                      
                </form>
                </div>
            </HeaderStyled>
            {isModalOpen && <Modal isOpen={isModalOpen} onClose={modalClose} cart={cart} setCart={setCart} />}
        </>
    )
}