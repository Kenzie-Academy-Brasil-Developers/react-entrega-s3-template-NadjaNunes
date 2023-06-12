import { CardStyled } from "./style";


const Cards = ({name, price, category, img}) => {
        
    return (
        <CardStyled>
            <li>
                <div>
                <img src={img} alt="imagem do produto" />
                </div>
               <div>
               <h2>{name}</h2>
                <p>{category}</p>
                <p>
                    {price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                    })}
                </p>
                <button >Adicionar</button>
               </div>
            </li>
        </CardStyled>
    )
}

export default Cards;