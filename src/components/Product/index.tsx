import Tag from '../Tag'

import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" />
    <Titulo>Nome do Jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque cumque
      ipsam necessitatibus maiores, ut dignissimos. Eveniet nesciunt molestias
      deleniti aliquid. Cum, ut. Libero nisi hic architecto repudiandae officia
      esse vero?
    </Descricao>
  </Card>
)

export default Product
