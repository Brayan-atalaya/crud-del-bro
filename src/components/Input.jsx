export const Input = ({
  register,
  type = 'text',
  placeholder,
  name,
  maxLength = 50,
  required = true,
  errors,
  errorsText = 'Rellene el campo'
}) => {
  const pattern = {
    name: '',
    description: '',
    price: /^\d{1,20}$/,
    checkbox: ''
  }

  return (
    <label className='form-label'>
      {placeholder}

      {type === 'select' ? (
        <select name={name} {...register(name)} className='form-select'>
          <option value='comidad'>comidad</option>
          <option value='Entretenimiento'>Entretenimiento</option>
          <option value='Diversión'>Diversión</option>
          <option value='Vehículo'>Vehículo</option>
        </select>
      ) : (
        <input
          className={`form-control ${
            name == 'availability' && 'form-check-input'
          }`}
          type={type}
          placeholder={`Ingrese ${placeholder}`}
          maxLength={maxLength}
          {...register(name, { required, pattern: pattern[name], maxLength })}
        />
      )}
      <div className='text-danger'>{errors[name] && errorsText}</div>
    </label>
  )
}
