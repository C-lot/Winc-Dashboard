import React from "react";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import Filters from "../components/Filters";
import Header from "./Header";

const Home = (props) => {
  return (
    <div>
      <Header />
      <h4 className="header">Average Scores</h4>
      <div className="bar-chart-home">
        <BarChart
          data={props.dataAverageScore}
          assignments={props.assignments}
          difficulty={props.difficulty}
          fun={props.fun}
        />
        <div className="banner-right">
          <Filters
            difficulty={props.difficulty}
            setStateDifficulty={props.setStateDifficulty}
            fun={props.fun}
            setStateFun={props.setStateFun}
          />
        </div>
        <div className="line-chart">
          <LineChart
            data={props.dataAverageScore}
            assignments={props.assignments}
            difficulty={props.difficulty}
            fun={props.fun}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
