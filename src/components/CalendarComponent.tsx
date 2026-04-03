"use client"; // Needed if using Next.js App Router

import { useState, useEffect } from "react";
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
  {
    title: "Guru Purnima and Diksha Mahotsava",
    start: new Date(2026, 6, 29, 6, 0),
    end: new Date(2026, 6, 29, 17, 30),
  },
];

const CalendarComponent: FC = () => {
  const [currentDate, setCurrentDate] = useState<Date | null>(null);
  const [currentView, setCurrentView] = useState<View>("month");

  useEffect(() => {
    const now = new Date();

    // Find the next upcoming event
    const upcoming = events
      .filter((e) => e.start >= now)
      .sort((a, b) => a.start.getTime() - b.start.getTime())[0];

    // Default to upcoming event date, or today if none
    setCurrentDate(upcoming ? upcoming.start : now);
    setCurrentView("month");
  }, []);

  if (!currentDate) {
    return <div>Loading calendar...</div>;
  }

  return (
    <div style={{ height: "100vh", width: "90vw", margin: "0 auto" }}>
      <h1
        style={{
          textAlign: "center",
          fontSize: "3.5rem",
          color: "#B22222",
          margin: "30px 0 20px",
          fontWeight: "600",
        }}
      >
        Upcoming Event
      </h1>

      <div style={{ height: 500 }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
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
