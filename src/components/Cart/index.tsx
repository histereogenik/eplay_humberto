import Button from '../Button'
import { Overlay, CartContainer, Sidebar } from './styles'

const Cart = () => {
  return (
    <CartContainer>
      <Overlay></Overlay>
      <Sidebar>
        <ul>
          <li>
            <h3>Nome do jogo</h3>
          </li>
        </ul>
        <p>2 jogos(s) no carrinho</p>
        <p>
          Total de R$ 250,00 <span>Em até 6x sem juros</span>
        </p>
        <Button title="Clique aqui para continuar com a compra" type="button">
          Continuar com a compra
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
