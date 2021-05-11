import React from "react";
import Heatmap from "react-calendar-heatmap";
import { Container } from "./styles";
import { subYears } from "date-fns";

function RandomCalendar() {
  const startDate = subYears(new Date(), 1);
  const endDate = new Date();

  return (
    <Container>
      <div className="wrapper">
        <Heatmap
          startDate={startDate}
          endDate={endDate}
          values={[]}
          gutterSize={4}
          showMonthLabels
          showWeekdayLabels
        />
      </div>

      <span>Random calendar (do not represent actual data)</span>
    </Container>
  );
}

export default RandomCalendar;
