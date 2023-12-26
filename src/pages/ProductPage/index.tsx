import { useParams } from 'react-router-dom'

const ProductPage = () => {
  const { id } = useParams()

  return <div>produto {id}</div>
}

export default ProductPage
