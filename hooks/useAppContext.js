import React, { useState } from "react"

const useAppContext = () => {
  const [cartItems, setCartItems] = useState([])

  return {
    cartItems,
    setCartItems
  }
}

export default useAppContext
