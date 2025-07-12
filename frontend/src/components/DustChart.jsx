import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios';

const DustChart = () => {
  const [data, setData] = useState([]);
  const [dates, setDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    const fetchDates = async () => {
      try {
        const response = await axios.get('http://localhost:3000/dust/dates');
        setDates(response.data);
        if (response.data.length > 0) {
          setSelectedDate(response.data[0]);
        }
      } catch (error) {
        console.error('Error fetching dates:', error);
      }
    };

    fetchDates();
  }, []);

  useEffect(() => {
    if (!selectedDate) return;

    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/dust?date=${selectedDate}`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [selectedDate]);

  return (
    <div>
      <select onChange={(e) => setSelectedDate(e.target.value)} value={selectedDate}>
        {dates.map((date) => (
          <option key={date} value={date}>
            {date}
          </option>
        ))}
      </select>
      <BarChart
        width={1000}
        height={500}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="stationName" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pm10Value" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default DustChart;
