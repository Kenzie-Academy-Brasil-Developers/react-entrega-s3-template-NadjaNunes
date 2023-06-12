import { useState } from "react";
import Modal from "../Modal";
import { HeaderStyled } from "./style";
import img from "../../assets/cart.svg"
import logo from "../../assets/Mask Group.png"
import buttonSeach from "../../assets/button-disable.svg"

export const HeaderForm = ({ callback }) => {
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

    return (
        <>
            <HeaderStyled>
                <div>
                    <div>
                        <img className="logo" src={logo} alt="logo kenzie burguer" />
                    </div>
                    <div>
                        <p>0</p>
                        <img src={img} alt="carrinho de compras" size={35} onClick={handleCartIconClick} />
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <div>
                            <input className="inputText" type="text"

                                placeholder="Buscar..."
                                onChange={(event) => setInput(event.target.value)}
                            />
                        </div>
                        <div>
                            <input className="inputButton" type="image" src={buttonSeach} alt="Submit" />
                        </div>
                    </div>
                </form>
            </HeaderStyled>
            {isModalOpen && <Modal isOpen={isModalOpen} onClose={modalClose} />}
        </>
    )
}