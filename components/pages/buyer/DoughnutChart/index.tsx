import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import DoughnutLabel from 'chartjs-plugin-doughnutlabel-rebourne';

export default function DoughnutChart(props: any) {
  const chartRef: any = useRef(null);
  const chartInstance: any = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const myChartRef = chartRef.current.getContext('2d');

    chartInstance.current = new Chart(myChartRef, {
      type: props?.type, // 'doughnut'
      data: {
        labels: props?.labels, // ['Red','Blue','Yellow']
        datasets: [
          {
            data: props?.data, // [30,45,25]
            backgroundColor: props?.bgColor, // ['rgb(255, 99, 132)', 'rgb(54, 162, 132)', 'rgb(205, 99, 86)']
            borderWidth: props?.borderWidth, // 2
          },
        ],
      },
      options: {
        cutout: '75%',
        plugins: {
          doughnutlabel: {
            labels: [
              {
                text: props?.text,
                font: {
                  size: props?.size,
                  weight: props?.weight,
                },
                color: props?.color,
              },
            ],
          },
        },
      },
      plugins: [DoughnutLabel],
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div>
      <canvas ref={chartRef} className={props?.customClass} />
    </div>
  );
}
