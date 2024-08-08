import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

const data = [
  { name: 5, value: 15 },
  { name: 9, value: 29 },
  { name: 11, value: 11 },
  { name: 13, value: 3 },
  { name: 17, value: 47 },
  { name: 19, value: 19 },
  { name: 21, value: 10 },
  { name: 23, value: 30 },
  { name: 27, value: 70 },
];

const BarChartComponent = () => {
  return (
    <BarChart
      width={600}
      height={300}
      data={data}
      margin={{ top: 20, right: 30, bottom: 5, left: 20 }}
    >
      {/* <CartesianGrid strokeDasharray="3 3" /> */}
      <XAxis dataKey="name" tickFormatter={(tick) => `${tick}`} />
      <YAxis tickFormatter={(tick) => `${tick}`} />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#8884d8" />
    </BarChart>
  );
};

export default BarChartComponent;
