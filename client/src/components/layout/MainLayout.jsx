import { AnimatePresence } from 'framer-motion'
import { Outlet, useLocation } from 'react-router-dom'
import CustomCursor from '../ui/CustomCursor'
import Navbar from './Navbar'
import Footer from './Footer'
import PageTransition from './PageTransition'
import ScrollToTop from './ScrollToTop'
import WhatsAppFloat from './WhatsAppFloat'
import styles from './layout.module.css'

export default function MainLayout() {
  const location = useLocation()
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className={styles.main}>
        <AnimatePresence mode="wait" initial={false}>
          <PageTransition key={location.pathname}>
            <Outlet />
          </PageTransition>
        </AnimatePresence>
      </main>
      <Footer />
      <WhatsAppFloat />
      <CustomCursor />
    </>
  )
}
