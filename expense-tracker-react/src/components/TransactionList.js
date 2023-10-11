import React, { useContext, useEffect, useRef } from "react";
import { GlobalContext } from "../context/GlobalState";
import Chart from "chart.js/auto";
import Transaction from "./Transaction.js";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const prepareChartData = (transactions) => {
      const categories = {};
      transactions.forEach((transaction) => {
        if (categories[transaction.text]) {
          categories[transaction.text] += transaction.amount;
        } else {
          categories[transaction.text] = transaction.amount;
        }
      });

      const categoryLabels = Object.keys(categories);
      const categoryData = Object.values(categories);
      // key : value

      const chartData = {
        labels: categoryLabels,
        datasets: [
          {
            data: categoryData,
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(167, 124, 191)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(255, 156, 148)",
              "rgba(128, 0, 0)",
              "rgba(61, 239, 226)",
              "rgba(255, 251, 229)",
              "rgba(0, 255, 0)",
              "rgba(255, 89, 95))",
              "rgba(0, 255, 255)",
              "rgba(255, 214, 90)",
              "rgba(124, 191, 191)",
              "rgba(143, 188, 143)",
              "rgba(47, 132, 124)",
              "rgba(245, 122, 156)",
              // Add more colors if needed
            ],
          },
        ],
      };

      const ctx = document.getElementById("myPieChart").getContext("2d");

      const newChart = new Chart(ctx, {
        type: "pie",
        data: chartData,
      });
      
      chartRef.current = newChart;
    };

    prepareChartData(transactions);
  }, [transactions]);

  return (
    <>
      <h3 className="Text">History</h3>
      <div className="transaction-container">
        <ul className="list">
          {transactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
        </ul>

        <div className="chart-container">
          <h3 className="Text">BALANCE CHART</h3>
          <canvas id="myPieChart"></canvas>
        </div>
      </div>
    </>
  );
};

export default TransactionList;
