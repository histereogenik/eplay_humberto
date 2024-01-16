import Button from '../../components/Button'
import CheckoutCard from '../../components/Card'

import { Row, InputGroup } from './styles'

const Checkout = () => (
  <div className="container">
    <CheckoutCard title="Dados de cobrança">
      <>
        <Row>
          <InputGroup>
            <label htmlFor="fullName">Nome Completo</label>
            <input id="fullName" type="text" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="email">E-mail</label>
            <input id="email" type="email" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="cpf">CPF</label>
            <input id="cpf" type="text" />
          </InputGroup>
        </Row>
        <h3 className="margin-top">Dados de entrega - conteúdo digital</h3>
        <Row>
          <InputGroup>
            <label htmlFor="deliveryEmail">E-mail</label>
            <input id="deliveryEmail" type="email" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="confirmDeliveryEmail">Confirme o E-mail</label>
            <input id="confirmDeliveryEmail" type="email" />
          </InputGroup>
        </Row>
      </>
    </CheckoutCard>
    <CheckoutCard title="Pagamento">
      <div>
        <p>
          Ao optar por essa forma de pagamento, é importante lembrar que a
          confirmação pode levar até 3 dias úteis, devido aos prazos
          estabelecidos pelas instituições financeiras. Portanto, a liberação do
          código de ativação do jogo adquirido ocorrerá somente após a aprovação
          do pagamento do boleto.
        </p>
      </div>
    </CheckoutCard>
    <Button type="button" title="Clique aqui para finalizar a compra">
      Finalizar compra
    </Button>
  </div>
)

export default Checkout
