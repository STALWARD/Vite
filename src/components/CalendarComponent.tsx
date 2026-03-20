import { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import type { Event, View } from "react-big-calendar";
import type { FC } from "react";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { enUS } from "date-fns/locale/en-US"; 
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
  'en-US': enUS,
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

const CalendarComponent: FC = () => {
  // 1. Manage the current date state
  const [currentDate, setCurrentDate] = useState(new Date(2026, 2, 12));
  // 2. Manage the current view state (month, week, etc.)
  const [currentView, setCurrentView] = useState<View>("month");

  return (
    <div style={{ height: "100vh", width: "90vw", margin: "0 auto" }}>
      <h1 style={{ 
        textAlign: "center", 
        fontSize: "3.5rem", 
        color: "#B22222",  
        margin: "30px 0 20px",  
        fontWeight: "600"
      }}>
        Event Calendar
      </h1>
      
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        
        // 3. Bind state and handlers to the toolbar
        date={currentDate}
        onNavigate={(newDate) => setCurrentDate(newDate)}
        view={currentView}
        onView={(newView) => setCurrentView(newView)}
      />
    </div>
  );
};

export default CalendarComponent;
