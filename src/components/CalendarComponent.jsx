// src/App.jsx
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import "react-big-calendar/lib/css/react-big-calendar.css";
import enUS from 'date-fns/locale/en-US';

const locales = { 'en-US': enUS, };

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Field day",
    start: new Date(2026, 2, 12, 10, 0),
    end: new Date(2026, 2, 12, 11, 0),
  },

];

export default function CalendarComponent() {
  return (
    <div style={{ height: "100vh", width: "90vw" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px", fontSize: "3.5rem", color: "#B22222",  margin: "30px 0 20px",  fontWeight: "600"}}>
        Event Calendar
      </h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
}
