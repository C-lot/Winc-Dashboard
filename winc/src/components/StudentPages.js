import React from "react";
import BarChart from "./BarChart";
import Filters from "../components/Filters";

const Studentpage = (props) => {
  const profiles = props.studentProfiles;
  const getProfile = profiles.filter(
    (profile) => profile.key === props.student
  );

  return (
    <div className="header">
      <div className="student-description">
        <h1 className="dark-blue-background">{getProfile}</h1>
      </div>
      <div className="bar-chart">
        <BarChart
          data={props.getStudent(props.student)}
          assignments={props.assignments}
          difficulty={props.difficulty}
          fun={props.fun}
        />
      </div>
      <div className="banner-right">
        <Filters
          difficulty={props.difficulty}
          setStateDifficulty={props.setStateDifficulty}
          fun={props.fun}
          setStateFun={props.setStateFun}
        />
      </div>
    </div>
  );
};

export default Studentpage;
