import { useContext } from 'react'
import { ProductContext } from '../context/productContext'
import { Input } from './Input'

export const Form = ({ register, handleSubmit, setValue, errors }) => {
  const { productList, setProductList } = useContext(ProductContext)

  const submit = (data) => {
    const productExist = productList.filter(
      (product) => product.name === data.name
    )

    if (productExist.length === 1) {
      alert('ya existe un producto con ese nombre')
    } else {
      setValue('name')
      setValue('description')
      setValue('price')
      setValue('availability')

      setProductList((state) => [...state, data])
    }
  }
  return (
    <div>
      <h2>Formulario</h2>
      <form onSubmit={handleSubmit(submit)} className='d-flex mt-3 gap-3'>
        <div className=' d-flex flex-column w-50'>
          <Input
            name='name'
            type='text'
            errors={errors}
            placeholder='Ingrese un nombre'
            register={register}
          />

          <Input
            name='description'
            type='text'
            errors={errors}
            placeholder='Ingrese una decripción'
            register={register}
          />
          <Input
            name='price'
            type='text'
            errors={errors}
            placeholder='Ingrese un precio'
            register={register}
            errorsText='Este es un campo númerico'
          />
        </div>
        <div className=' d-flex flex-column w-50'>
          <Input
            name='category'
            errors={errors}
            type='select'
            register={register}
            placeholder='selecione una categoría'
          />
          <Input
            name='availability'
            type='checkbox'
            errors={errors}
            required={false}
            register={register}
            placeholder='disponibilidad del producto'
          />
          <button className='btn btn-primary'>Enviar</button>
        </div>
      </form>
    </div>
  )
}
