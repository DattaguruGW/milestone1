import React, { useState } from 'react';
import { Container, Card } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (value) => {
    setDate(value);
    alert(`You selected ${value.toDateString()}`);
  };

  return (
    <Container className="py-4">
      <h2 className="text-center mb-4">Festival & Event Calendar</h2>
      <Card className="p-4 shadow-sm mx-auto" style={{ maxWidth: '500px' }}>
        <Calendar
          onChange={handleDateChange}
          value={date}
          tileClassName={({ date, view }) => {
            const highlightDates = [
              new Date(2025, 3, 15),
              new Date(2025, 3, 22),
              new Date(2025, 3, 28),
            ];
            if (
              view === 'month' &&
              highlightDates.find(
                (d) => d.toDateString() === date.toDateString()
              )
            ) {
              return 'bg-warning text-white rounded';
            }
            return null;
          }}
        />
        <p className="mt-3 text-center">Selected Date: {date.toDateString()}</p>
      </Card>
    </Container>
  );
};

export default CalendarPage;
