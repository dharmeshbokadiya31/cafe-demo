import Cart from '@/components/Cart'
import LayoutWrapper from '@/shared/LayoutWrapper'
import CartFooter from '@/shared/CartFooter'
import MainHeader from '@/shared/MainHeader'

export default function CartIndex() {
  return (
    <LayoutWrapper>
      <Cart />
      <CartFooter />
    </LayoutWrapper>
  )
}
