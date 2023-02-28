import React from "react";
import BarChartStudent from "./BarChartStudent";
import Header from "./Header";

const ScoresPerAssignment = (props) => {
  const buttonAssignment = props.assignments.map((assignment, index) => (
    <div key={index}>
      <label>
        <input
          type="radio"
          name="sort-assignments"
          value={assignment}
          onChange={(event) => props.filterAssignments(event.target.value)}
        ></input>{" "}
        {assignment}
      </label>
    </div>
  ));
  const dataAssignment = props.dataSelectedAssignment;

  return (
    <div>
      <div className="main">
        <div className="description">
          <Header />
          <h4>
            {dataAssignment.length > 0
              ? `Evaluation of: ${dataAssignment[0].assignment}`
              : ""}
          </h4>
        </div>
        <div className="bar-chart">
          <BarChartStudent
            data={props.dataSelectedAssignment}
            students={props.students}
          />
        </div>
      </div>
      <div className="radiobuttons" id="radio-buttons">
        {buttonAssignment}
      </div>
    </div>
  );
};

export default ScoresPerAssignment;
