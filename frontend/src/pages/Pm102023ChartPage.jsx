import React from "react";
import Pm102023Chart from "../components/Pm102023Chart";

const Pm102023ChartPage = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-4">
        2023년 서울시 월별 미세먼지 평균
      </h2>
      <Pm102023Chart />
    </div>
  );
};

export default Pm102023ChartPage;
