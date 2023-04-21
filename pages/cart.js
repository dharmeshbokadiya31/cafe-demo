import Cart from '@/components/Cart'
import LayoutWrapper from '@/shared/LayoutWrapper'
import CartFooter from '@/shared/CartFooter'
import MainHeader from '@/shared/MainHeader'
import useAppContext from '@/hooks/useAppContext';
import AppContext from '@/utils/appContext';

export default function CartIndex() {
  const value = useAppContext();
  return (
    <AppContext.Provider value={value}>
    <LayoutWrapper>
      <Cart />
      <CartFooter />
    </LayoutWrapper>
    </AppContext.Provider>
  )
}
