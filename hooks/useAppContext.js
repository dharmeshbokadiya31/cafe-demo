import React, { useState } from "react"

const useAppContext = () => {
  const [cartItems, setCartItems] = useState(0)

  return {
    cartItems,
    setCartItems
  }
}

export default useAppContext
