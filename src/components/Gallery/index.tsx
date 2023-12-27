import Section from '../Section'

import { Items, Item } from './styles'

import bannerSM from '../../assets/images/banner-homem-aranha.png'

const Gallery = () => (
  <Section title="Galeria" background="black">
    <Items>
      <Item>
        <img src={bannerSM} alt="imagem" />
      </Item>
      <Item>
        <img src={bannerSM} alt="imagem" />
      </Item>
      <Item>
        <img src={bannerSM} alt="imagem" />
      </Item>
      <Item>
        <img src={bannerSM} alt="imagem" />
      </Item>
    </Items>
  </Section>
)

export default Gallery
