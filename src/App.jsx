import React, { useState } from "react";
import "./App.css";

const EventCard = React.memo(({ title, onSelect }) => {
  console.log("EventCard rendered:", title);

  return (
    <div className="event-card" onClick={() => onSelect(title)}>
      <div className="event-icon">✦</div>
      <h2>{title}</h2>
      <button>View Event</button>
    </div>
  );
});

function App() {
  const [count, setCount] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState("");

  const events = [
    { id: 1, title: "Tech Fest" },
    { id: 2, title: "AI Workshop" },
    { id: 3, title: "Coding Competition" }
  ];

  return (
    <div className="app">
      <div className="header">
        <span className="badge">REACT PRACTICAL</span>
        <h1>Memoized Event Cards</h1>
        <p>React.memo Performance Demonstration</p>
      </div>

      <div className="counter-box">
        <div>
          <span>Parent Counter</span>
          <strong>{count}</strong>
        </div>

        <button onClick={() => setCount(count + 1)}>
          Increase Counter
        </button>
      </div>

      <div className="events">
        {events.map((event) => (
          <EventCard
            key={event.id}
            title={event.title}
            onSelect={setSelectedEvent}
          />
        ))}
      </div>

      {selectedEvent && (
        <div className="selected-event">
          <h2>Selected Event</h2>
          <p>{selectedEvent}</p>
          <button onClick={() => setSelectedEvent("")}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default App;