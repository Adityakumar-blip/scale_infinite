import React, { useState, useEffect } from 'react'
import Piechart from './Piechart';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Main = () => {

  const [chart, setChart] = useState({})
  var baseUrl = "https://api.coinranking.com/v2/coins/?limit=10";
  var proxyUrl = "https://cors-anywhere.herokuapp.com/";
  var apiKey = "coinrankingf26f459cd0efdbdfb13d066684b411f2af662a5f0adfcbd0";



  useEffect(() => {
    const fetchCoins = async () => {
      await fetch(`${proxyUrl}${baseUrl}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': `${apiKey}`,
          'Access-Control-Allow-Origin': "*"
        }
      })
        .then((response) => {
          if (response.ok) {
            response.json().then((json) => {
              console.log(json.data);
              setChart(json.data)
            });
          }
        }).catch((error) => {
          console.log(error);
        });
    };
    fetchCoins()
  }, [baseUrl, proxyUrl, apiKey])

  console.log("chart", chart);
  var data = {
    labels: chart?.coins?.map(x => x.name),
    datasets: [{
      label: `${chart?.coins?.length} Coins Available`,
      data: chart?.coins?.map(x => x.price),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  };

  var options = {
    maintainAspectRatio: false,
    scales: {
    },
    legend: {
      labels: {
        fontSize: 25,
      },
    },
  }

  return (
    <div className="chart-container">
        <div className="line-chart-heading">
        <h2 style={{textAlign:'center'}}>Line Chart</h2>
        <div className="heading" style={{display:'flex', flexDirection:'column', justifyContent:"center", alignItems:'center', marginBottom:'2rem'}}>
        <p>If screen doesn't display any data, please click the button</p><a href='https://cors-anywhere.herokuapp.com/corsdemo'><button>click here</button></a>
        </div>
            <div className="line-chart">
            <Line
        data={data}
        height={400}
        options={options}

      />
            </div>
        </div>
        <div className="pie-container" style={{marginTop:'4rem', marginBottom:'2rem'}}>
        <div className="pie-chart-heading" style={{textAlign:'center'}}>
            <h2>Pie Chart</h2>
        </div>
        <div className="pie-chart">
            <Piechart/>
        </div>
        </div>
        
    </div>
  )
}

export default Main