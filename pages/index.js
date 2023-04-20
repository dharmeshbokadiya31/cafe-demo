import Home from '@/components/Home'
import LayoutWrapper from '@/shared/LayoutWrapper'
import MainFooter from '@/shared/MainFooter'
import MainHeader from '@/shared/MainHeader'

export default function HomeIndex() {
  return (
    <LayoutWrapper>
      <Home />
      <MainFooter />
    </LayoutWrapper>
  )
}
