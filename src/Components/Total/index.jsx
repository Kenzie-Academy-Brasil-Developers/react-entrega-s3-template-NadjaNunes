import { ModalStyled } from "./styled";

const Amount = ({ cart }) => {
    let total = 0
    total = cart.reduce((totalValue, product) => { 
        return totalValue + product.price * product.qty
    }, 0);   
  
    return (
      <ModalStyled>
        <h3>Total:</h3>
        <h3>
          R$ {total.toFixed(2).replace(".",",")}
        </h3>
      </ModalStyled>
    );
  };
  
  export default Amount;