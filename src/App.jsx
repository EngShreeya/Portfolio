import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import { SiteMeta } from './components/seo/SiteMeta'
import { AppShell } from './layouts/AppShell'
import { HomePage } from './pages/HomePage'
import { ProjectsPage } from './pages/ProjectsPage'

export default function App() {
  const location = useLocation()

  return (
    <>
      <SiteMeta />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<AppShell />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  )
}

