import { useState, FC } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import type { Event, View } from "react-big-calendar";
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
    title: "Field day",
    start: new Date(2026, 2, 12, 10, 0),
    end: new Date(2026, 2, 12, 11, 0),
  },
];

// ✅ Lightweight wrapper around Calendar
const CalendarWrapper: FC<{
  localizer: typeof localizer;
  events: Event[];
  date: Date;
  view: View;
  onNavigate: (newDate: Date) => void;
  onView: (newView: View) => void;
}> = ({ localizer, events, date, view, onNavigate, onView }) => {
  return (
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
      date={date}
      onNavigate={onNavigate}
      view={view}
      onView={onView}
    />
  );
};

// ✅ Memoize the wrapper instead of the library export
const MemoizedCalendar = React.memo(CalendarWrapper);

const CalendarComponent: FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 2, 12));
  const [currentView, setCurrentView] = useState<View>("month");

  return (
    <div
      style={{
        height: "100vh",
        width: "90vw",
        margin: "0 auto",
        contain: "layout style",
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

      <div
        style={{
          height: 500,
          contain: "content",
        }}
      >
        <MemoizedCalendar
          localizer={localizer}
          events={events}
          date={currentDate}
          view={currentView}
          onNavigate={(newDate) => setCurrentDate(newDate)}
          onView={(newView) => setCurrentView(newView)}
        />
      </div>
    </div>
  );
};

export default CalendarComponent;
