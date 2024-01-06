import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart'

import Tag from '../Tag'
import Button from '../Button'
import {
  Overlay,
  CartContainer,
  Sidebar,
  Prices,
  Quantity,
  CartItem
} from './styles'

import starWars from '../../assets/images/star_wars.png'

const Cart = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart}></Overlay>
      <Sidebar>
        <ul>
          <CartItem>
            <img src={starWars} />
            <div>
              <h3>Nome do jogo</h3>
              <Tag>RPG</Tag>
              <Tag>PS5</Tag>
              <span>R$ 150,00</span>
            </div>
            <button type="button" />
          </CartItem>
          <CartItem>
            <img src={starWars} />
            <div>
              <h3>Nome do jogo</h3>
              <Tag>RPG</Tag>
              <Tag>PS5</Tag>
              <span>R$ 150,00</span>
            </div>
            <button type="button" />
          </CartItem>
        </ul>
        <Quantity>2 jogos(s) no carrinho</Quantity>
        <Prices>
          Total de R$ 250,00 <span>Em até 6x sem juros</span>
        </Prices>
        <Button title="Clique aqui para continuar com a compra" type="button">
          Continuar com a compra
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
