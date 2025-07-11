import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import DustChartPage from './pages/DustChartPage';
import TemperatureChartPage from './pages/TemperatureChartPage';
import HumidityChartPage from './pages/HumidityChartPage';

function App() {
  return (
    <BrowserRouter>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<DustChartPage />} />
          <Route path="/dust-chart" element={<DustChartPage />} />
          <Route path="/temperature-chart" element={<TemperatureChartPage />} />
          <Route path="/humidity-chart" element={<HumidityChartPage />} />
        </Routes>
      </DashboardLayout>
    </BrowserRouter>
  );
}

export default App;
