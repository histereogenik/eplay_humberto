import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.cinza};
  border-radius: 8px;
  padding: 8px;

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Titulo = styled.h3`
  display: block;
  font-weight: bold;
  font-size: 16px;
  margin-top: 16px;
  margin-bottom: 8px;
`
export const Descricao = styled.p`
  display: block;
  font-size: 14px;
  line-height: 22px;
  margin-top: 16px;
`
