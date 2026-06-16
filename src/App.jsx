import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import HomeLayout from './components/HomeLayout'
import HomePage from './pages/HomePage'
import DashboardPage from './pages/DashboardPage'
import LabPage from './pages/LabPage'
import ReportPage from './pages/ReportPage'
import CoursesPage from './pages/CoursesPage'
import PricingPage from './pages/PricingPage'
import ResourcesPage from './pages/ResourcesPage'
import StudyNotesPage from './pages/StudyNotesPage'
import QuizPage from './pages/QuizPage'
import ProgressPage from './pages/ProgressPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import MyExperimentsPage from './pages/MyExperimentsPage'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLayout><HomePage /></HomeLayout>} />
        <Route path="/dashboard" element={<MainLayout><DashboardPage /></MainLayout>} />
        <Route path="/experiments" element={<MainLayout><MyExperimentsPage /></MainLayout>} />
        <Route path="/lab" element={<MainLayout><LabPage /></MainLayout>} />
        <Route path="/report" element={<MainLayout><ReportPage /></MainLayout>} />
        <Route path="/courses" element={<MainLayout><CoursesPage /></MainLayout>} />
        <Route path="/pricing" element={<MainLayout><PricingPage /></MainLayout>} />
        <Route path="/resources" element={<MainLayout><ResourcesPage /></MainLayout>} />
        <Route path="/study" element={<MainLayout><StudyNotesPage /></MainLayout>} />
        <Route path="/quizzes" element={<MainLayout><QuizPage /></MainLayout>} />
        <Route path="/progress" element={<MainLayout><ProgressPage /></MainLayout>} />
        <Route path="/login" element={<HomeLayout><LoginPage /></HomeLayout>} />
        <Route path="/signup" element={<HomeLayout><SignupPage /></HomeLayout>} />
      </Routes>
    </Router>
  )
}

export default App
