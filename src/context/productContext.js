import React, { useState } from 'react'

export const ProductContext = React.createContext(null)

export const ProductContextProvider = ({ children }) => {
  const [productList, setProductList] = useState([])

  return (
    <ProductContext.Provider value={{ productList, setProductList }}>
      {children}
    </ProductContext.Provider>
  )
}
