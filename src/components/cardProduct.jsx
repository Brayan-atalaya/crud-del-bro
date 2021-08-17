import { useContext } from 'react'
import { ProductContext } from '../context/productContext'

export const CardProduct = ({ data, setValue }) => {
  const { productList, setProductList } = useContext(ProductContext)

  const update = () => {
    setValue('name', data.name)
    setValue('description', data.description)
    setValue('price', data.price)
    setValue('category', data.category)
    setValue('availability', data.availability)

    const newArray = productList.filter((product) => product.name !== data.name)
    setProductList(newArray)
  }

  const drop = () => {
    const newArray = productList.filter((product) => product.name !== data.name)
    setProductList(newArray)
  }

  return (
    <div className='card' style={{ width: '16rem' }}>
      <div className='card-body d-flex flex-column justify-content-between'>
        <h5 className='card-title'>{data.name}</h5>
        <h6 className='card-subtitle mb-2 text-muted'>{data.price}$</h6>
        <p className='card-text m-0'>
          <span className='fw-bolder'> Categoría: </span>
          {data.category}
        </p>
        <p className='card-text m-0'>
          <span className='fw-bolder'> Disponible: </span>
          {data.availability ? 'Sí' : 'No'}
        </p>
        <p className='card-text m-0  mb-2'>
          <span className='fw-bolder'> Descripción: </span> {data.description}
        </p>
        <button className=' btn btn-warning mb-1' onClick={update}>
          Actualizar
        </button>
        <button className='btn btn-danger' onClick={drop}>
          Eliminar
        </button>
      </div>
    </div>
  )
}
