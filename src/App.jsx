import { Form } from './components/Form'
import { useForm } from 'react-hook-form'
import { Cards } from './components/Cards'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import { ProductContextProvider } from './context/productContext'

function App() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm()

  return (
    <ProductContextProvider>
      <div className='App w-75 m-auto'>
        <Form
          register={register}
          handleSubmit={handleSubmit}
          setValue={setValue}
          errors={errors}
        />
        <hr />
        <Cards setValue={setValue} />
      </div>
    </ProductContextProvider>
  )
}

export default App
