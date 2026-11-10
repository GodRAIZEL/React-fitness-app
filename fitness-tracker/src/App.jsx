import AppLayout from './components/layout/AppLayout'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import ExercisesPage from './pages/ExercisesPage'
import ExerciseDetailPage from './pages/ExerciseDetailPage'
import HistoryPage from './pages/HistoryPage'
import PlannerPage from './pages/PlannerPage'
import ProgressPage from './pages/ProgressPage'

function App() {

  return (
    <>
      <Routes>
        <Route element={<AppLayout/>}>
          <Route index element={<Dashboard />} />
          <Route path='exercises' element={<ExercisesPage />} />
          <Route path='exercises/:id' element={<ExerciseDetailPage/>} />
          <Route path='history' element={<HistoryPage/>} />
          <Route path='progress' element={<ProgressPage/>} />
          <Route path='planner' element={<PlannerPage/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
