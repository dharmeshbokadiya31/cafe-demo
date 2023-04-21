import Home from '@/components/Home'
import LayoutWrapper from '@/shared/LayoutWrapper'
import MainFooter from '@/shared/MainFooter'
import useAppContext from '@/hooks/useAppContext';
import AppContext from '@/utils/appContext';

export default function HomeIndex() {
  const value = useAppContext();
  return (
    <AppContext.Provider value={value}>
    <LayoutWrapper>
      <Home />
      <MainFooter />
    </LayoutWrapper>
    </AppContext.Provider>
  )
}
