import React from "react";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import { setDay } from "./plannerSlice";

function Calendar() {
  const dispatch = useDispatch();

  const selectedDay = useSelector(
    (state) => state.planner.selectedDay
  );

  return (
    <div>
      <input
        type="date"
        value={selectedDay}
        onChange={(e) =>
          dispatch(setDay(e.target.value))
        }
      />
    </div>
  );
}

export default Calendar;