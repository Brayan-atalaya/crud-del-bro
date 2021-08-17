import { useContext } from 'react'
import { CardProduct } from './cardProduct'
import { ProductContext } from '../context/productContext'

export const Cards = ({ setValue }) => {
  const { productList } = useContext(ProductContext)

  return (
    <div className='mb-5 container-sm'>
      <h2 className='mt-5'>Productos</h2>

      <div className='d-flex gap-3'>
        {productList.map((product) => (
          <CardProduct data={product} setValue={setValue} />
        ))}
      </div>
    </div>
  )
}
