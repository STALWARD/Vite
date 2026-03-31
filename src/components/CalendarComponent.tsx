import { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import type { Event, View } from "react-big-calendar";
import type { FC } from "react";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { enUS } from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events: Event[] = [
  {
    title: "Chandi Yag",
    start: new Date(2026, 2, 19, 7, 0),
    end: new Date(2026, 2, 28, 16, 0),
  },
];

const CalendarComponent: FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 2, 12));
  const [currentView, setCurrentView] = useState<View>("month");

  return (
    <div
      style={{
        height: "100vh",
        width: "90vw",
        margin: "0 auto",
        contain: "layout style", // contain layout scope
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "3.5rem",
          color: "#B22222",
          margin: "30px 0 20px",
          fontWeight: "600",
        }}
      >
        Event Calendar
      </h1>

      {/* Fixed height container to avoid repeated % recalculations */}
      <div
        style={{
          height: 500,
          contain: "content", // isolate grid rendering
        }}
      >
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }} // fixed height instead of 100%
          date={currentDate}
          onNavigate={(newDate) => setCurrentDate(newDate)}
          view={currentView}
          onView={(newView) => setCurrentView(newView)}
        />
      </div>
    </div>
  );
};

export default CalendarComponent;
