import { Suspense, lazy, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout'
import Loader from './components/ui/Loader'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'))
const Projects = lazy(() => import('./pages/Projects'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))
const Process = lazy(() => import('./pages/Process'))
const Contact = lazy(() => import('./pages/Contact'))
const FAQ = lazy(() => import('./pages/FAQ'))
const Privacy = lazy(() => import('./pages/Privacy'))
const Terms = lazy(() => import('./pages/Terms'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  const [ready, setReady] = useState(false)

  return (
    <>
      <AnimatePresence mode="wait">
        {!ready && <Loader key="loader" onComplete={() => setReady(true)} />}
      </AnimatePresence>
      {ready && (
        <Suspense fallback={null}>
          <Routes>
            <Route element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route path="services/:slug" element={<ServiceDetail />} />
              <Route path="projects" element={<Projects />} />
              <Route path="project/:id" element={<ProjectDetail />} />
              <Route path="process" element={<Process />} />
              <Route path="contact" element={<Contact />} />
              <Route path="faq" element={<FAQ />} />
              <Route path="privacy-policy" element={<Privacy />} />
              <Route path="terms" element={<Terms />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      )}
    </>
  )
}
