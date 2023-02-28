import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryGroup,
  VictoryLegend,
  VictoryLabel,
} from "victory";

const BarChartStudent = (props) => {
  return (
    <div>
      <VictoryChart
        domainPadding={20}
        className="graph"
        width={1650}
        height={700}
        domain={{ y: [0, 5.5], x: [0.5, 10] }}
      >
        <VictoryLegend
          colorScale={["#3898ec", "#ffb212"]}
          x={550}
          y={10}
          gutter={100}
          orientation={"horizontal"}
          data={[
            {
              name: "Difficulty",
              labels: {
                fontSize: 25,
              },
            },
            {
              name: "Fun",
              labels: {
                fontSize: 25,
              },
            },
          ]}
        />
        <VictoryGroup offset={18}>
          <VictoryBar
            data={props.data}
            x="name"
            y="difficulty"
            style={{ data: { fill: "#3898ec" } }}
            barRatio={8}
            barWidth={18}
            cornerRadius={4}
          />
          <VictoryBar
            data={props.data}
            x="name"
            y="fun"
            style={{ data: { fill: "#ffb212" } }}
            barRatio={8}
            barWidth={18}
            cornerRadius={4}
          />
        </VictoryGroup>
        <VictoryAxis
          style={{
            tickLabels: {
              fontSize: 20,
            },
          }}
          tickFormat={props.students}
          tickLabelComponent={
            <VictoryLabel angle="horizontal" textAnchor="start" y={655} />
          }
        />
        <VictoryAxis
          style={{
            grid: { stroke: "#888888", strokeWidth: 0.2 },
            tickLabels: {
              fontSize: 20,
            },
          }}
          tickFormat={[1, 2, 3, 4, 5]}
          tickValues={[1, 2, 3, 4, 5]}
          dependentAxis
        />
      </VictoryChart>
    </div>
  );
};

export default BarChartStudent;
