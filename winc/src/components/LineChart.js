import React from "react";
import { VictoryChart, VictoryAxis, VictoryLine, VictoryLabel } from "victory";

const LineChart = (props) => {
  const data = props.data;
  const averageScoreDifficulty = data.map((item) => ({
    assignment: item.assignment,
    score: item.difficulty,
  }));
  const averageScoreFunFactor = data.map((item) => ({
    assignment: item.assignment,
    score: item.fun,
  }));

  const getDataLineChart = (data) => {
    return data.map((item) => ({
      x: item.assignment,
      y: item.score,
    }));
  };

  const difficultLineStyle = props.difficulty
    ? { data: { stroke: "#3898ec", strokeWidth: 10 } }
    : { data: { strokeOpacity: 0 } };

  const funFactorLineStyle = props.fun
    ? { data: { stroke: "#ffb212", strokeWidth: 10 } }
    : { data: { strokeOpacity: 0 } };

  return (
    <div className="div-bar-chart">
      <VictoryChart
        width={1950}
        height={800}
        domain={{ y: [0, 4], x: [0, 58] }}
      >
        <VictoryLine
          animate={{
            duration: 6000,
            onLoad: { duration: 1000 },
          }}
          data={getDataLineChart(averageScoreDifficulty)}
          style={difficultLineStyle}
        />
        <VictoryLine
          animate={{
            duration: 6000,
            onLoad: { duration: 1000 },
          }}
          data={getDataLineChart(averageScoreFunFactor)}
          style={funFactorLineStyle}
        />
        <VictoryAxis
          tickLabelComponent={
            <VictoryLabel
              angle={45}
              textAnchor="start"
              y={755}
              style={{ fontSize: 15 }}
            />
          }
          tickValues={[1, 2, 3, 4]}
          tickFormat={props.assignments}
        />
        <VictoryAxis
          dependentAxis
          tickValues={[1, 2, 3, 4]}
          style={{
            tickLabels: {
              fontSize: 20,
            },
          }}
        />
      </VictoryChart>
    </div>
  );
};

export default LineChart;
