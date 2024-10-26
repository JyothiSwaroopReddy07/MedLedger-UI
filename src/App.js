import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import ForgotPassword from './pages/ForgotPassword';
import CaseForm from './pages/CaseForm';
import SupervisiorDashBoard from './pages/SupervisiorDashBoard';
import ResidentDashboardForm from './pages/ResidentDashboardForm';
import ResidentDashboardHistory from './pages/ResidentDashboardHistory';
import Stats from './pages/Stats';
import ErrorPage from './pages/ErrorPage';
import OurMission from './pages/OurMission';
import AboutUs from './pages/AboutUS';
import Careers from './pages/Careers';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/mission" element={<OurMission />} />
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/careers" element={<Careers/>}/>

          {/* Protected Routes */}
          <Route
            path="/casereporting"
            element={
              <ProtectedRoute>
                <CaseForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/mycases"
            element={
              <ProtectedRoute>
                <SupervisiorDashBoard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/residentdashboard"
            element={
              <ProtectedRoute>
                <ResidentDashboardForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/residentdashboardhistory"
            element={
              <ProtectedRoute>
                <ResidentDashboardHistory />
              </ProtectedRoute>
            }
          />
          <Route
            path="/stats"
            element={
              <ProtectedRoute>
                <Stats />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
