import React from "react";
import "./events.css";

interface UpcomingEvent {
  title: string;
  date: string;
  location: string;
  category: string;
}

interface PastResult {
  title: string;
  subtitle: string;
}

interface BracketTeam {
  name: string;
}

const upcomingEvents: UpcomingEvent[] = [
  {
    title: "Event in Mumbai",
    date: "11/11/25",
    location: "BKC",
    category: "Lorem",
  },
  {
    title: "Event in Delhi",
    date: "11/11/25",
    location: "BKC",
    category: "Lorem",
  },
];

const pastResults: PastResult[] = [
  { title: "Bengaluru Regionals", subtitle: "Lorem Ipsum" },
  { title: "Bengaluru Regionals", subtitle: "Lorem Ipsum" },
  { title: "Bengaluru Regionals", subtitle: "Lorem Ipsum" },
];

const round1: BracketTeam[] = [
  { name: "" },
  { name: "" },
  { name: "" },
  { name: "" },
];

const round2: BracketTeam[] = [{ name: "" }, { name: "" }];

const final: BracketTeam[] = [{ name: "" }];

const Events: React.FC = () => {
  return (
    <div className="events-page">
      <div className="events-glow" aria-hidden="true" />

      <header className="events-header">
        <h1>Competitions &amp; Events</h1>
      </header>

      <div className="events-columns">
        {/* LIVE NOW */}
        <section className="events-column">
          <h2 className="column-title live">Live Now</h2>

          <div className="live-card">
            <div className="live-card-header">
              <div>
                <h3>Bengaluru Regionals</h3>
                <p className="muted">Lorem Ipsum</p>
              </div>
              <span className="ongoing-pill">Ongoing</span>
            </div>

            <div className="bracket">
              <div className="bracket-round round-1">
                {round1.map((i) => (
                  <div className="bracket-slot" key={`r1-${i}`}>
                    <div className="bracket-box" />
                  </div>
                ))}
              </div>

              <div className="bracket-connectors connectors-1" aria-hidden="true">
                <svg viewBox="0 0 60 220" preserveAspectRatio="none">
                  <path d="M0,28 H30 V83 H60" />
                  <path d="M0,138 H30 V193 H60" />
                </svg>
              </div>

              <div className="bracket-round round-2">
                {round2.map((i) => (
                  <div className="bracket-slot" key={`r2-${i}`}>
                    <div className="bracket-box" />
                  </div>
                ))}
              </div>

              <div className="bracket-connectors connectors-2" aria-hidden="true">
                <svg viewBox="0 0 60 220" preserveAspectRatio="none">
                  <path d="M0,55 H30 V165 H60" />
                </svg>
              </div>

              <div className="bracket-round round-final">
                {final.map((i) => (
                  <div className="bracket-slot" key={`final-${i}`}>
                    <div className="bracket-box" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* UPCOMING */}
        <section className="events-column">
          <h2 className="column-title">Upcoming</h2>

          <div className="upcoming-list">
            {upcomingEvents.map((event, i) => (
              <div className="upcoming-card" key={i}>
                <h3>{event.title}</h3>

                <div className="upcoming-meta">
                  <div>
                    <p className="meta-label">Date</p>
                    <p className="meta-value">{event.date}</p>
                  </div>
                  <div>
                    <p className="meta-label">Location</p>
                    <p className="meta-value">{event.location}</p>
                  </div>
                  <div>
                    <p className="meta-label">Category</p>
                    <p className="meta-value">{event.category}</p>
                  </div>
                </div>

                <button className="register-btn" type="button">
                  Register
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* PAST RESULTS */}
        <section className="events-column">
          <h2 className="column-title">Past Results</h2>

          <div className="past-card">
            {pastResults.map((result, i) => (
              <div
                className={
                  "past-item" + (i !== pastResults.length - 1 ? " has-divider" : "")
                }
                key={i}
              >
                <h3>{result.title}</h3>
                <p className="muted">{result.subtitle}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Events;