import React from 'react';
import DustChart from '../components/DustChart';

const DustChartPage = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-4">미세먼지 차트</h2>
      <DustChart />
    </div>
  );
};

export default DustChartPage;
