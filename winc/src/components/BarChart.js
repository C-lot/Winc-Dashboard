import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryGroup,
  VictoryZoomContainer,
  VictoryLegend,
  VictoryLabel,
  VictoryTooltip,
} from "victory";

const BarChart = (props) => {
  const data = props.data;
  const dataWithLabelsDifficulty = data.map((item) => ({
    assignment: item.assignment,
    difficulty: item.difficulty,
    label: `Assignment ${item.assignment}, Difficulty: ${item.difficulty}`,
  }));

  const dataWithLabelsFun = data.map((item) => ({
    assignment: item.assignment,
    fun: item.fun,
    label: `Assignment ${item.assignment}, Fun: ${item.fun}`,
  }));

  const difficultBarStyle = props.difficulty
    ? { data: { fill: "#3898ec" }, labels: { fontSize: 30 } }
    : { data: { fillOpacity: 0 }, labels: { fontSize: 30 } };

  const funBarStyle = props.fun
    ? { data: { fill: "#ffb212" }, labels: { fontSize: 30 } }
    : { data: { fillOpacity: 0 }, labels: { fontSize: 30 } };

  return (
    <div className="div-bar-chart">
      <VictoryChart
        width={1950}
        height={800}
        domain={{ y: [0, 6] }}
        containerComponent={
          <VictoryZoomContainer
            allowZoom={true}
            allowPan={true}
            zoomDimension="x"
            zoomDomain={{ x: [0, 28.5] }}
          />
        }
      >
        <VictoryLegend
          x={800}
          y={-10}
          colorScale={["#3898ec", "#ffb212"]}
          gutter={100}
          style={{
            title: { fontSize: 30 },
          }}
          orientation={"horizontal"}
          title={"Scores for each assignment"}
          titleOrientation={"top"}
          centerTitle={true}
          data={[
            {
              name: "Difficulty",
              labels: {
                fontSize: 20,
              },
            },
            {
              name: "Fun",
              labels: {
                fontSize: 20,
              },
            },
          ]}
        />
        <VictoryGroup offset={8}>
          <VictoryBar
            labelComponent={<VictoryTooltip />}
            data={dataWithLabelsDifficulty}
            x="assignment"
            y="difficulty"
            style={difficultBarStyle}
            barRatio={1}
            barWidth={8}
            cornerRadius={4}
          />
          <VictoryBar
            labelComponent={<VictoryTooltip />}
            data={dataWithLabelsFun}
            x="assignment"
            y="fun"
            style={funBarStyle}
            barRatio={1}
            barWidth={8}
            cornerRadius={4}
          />
        </VictoryGroup>
        <VictoryAxis
          tickLabelComponent={
            <VictoryLabel angle={45} textAnchor="start" y={755} />
          }
        />
        <VictoryAxis
          tickFormat={[1, 2, 3, 4, 5]}
          tickValues={[1, 2, 3, 4, 5]}
          style={{
            tickLabels: {
              fontSize: 20,
            },
          }}
          dependentAxis
        />
      </VictoryChart>
    </div>
  );
};

export default BarChart;
