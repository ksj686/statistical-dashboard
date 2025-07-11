import { Routes, Route } from 'react-router-dom';

import DustChartPage from './pages/DustChartPage';
import TemperatureChartPage from './pages/TemperatureChartPage';
import HumidityChartPage from './pages/HumidityChartPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<DustChartPage />} />
      <Route path="/dust-chart" element={<DustChartPage />} />
      <Route path="/temperature-chart" element={<TemperatureChartPage />} />
      <Route path="/humidity-chart" element={<HumidityChartPage />} />
    </Routes>
  );
}

export default App;