import React from "react";

const tutorials = [
  { id: 1, title: "JS Basics", desc: "Learn JavaScript", user: "User1", rating: 5 },
  { id: 2, title: "React Router", desc: "Routing in React", user: "User2", rating: 5 },
  { id: 3, title: "ExpressJS", desc: "Backend with Express", user: "User3", rating: 4.9 }
];

function Tutorials() {
  return (
    <section className="tutorials">
      <h2>Featured Tutorials</h2>
      <div className="card-container">
        {tutorials.map((tutorial) => (
          <div className="card" key={tutorial.id}>
            <img src={`https://picsum.photos/200?random=${tutorial.id + 10}`} alt={tutorial.title} />
            <h3>{tutorial.title}</h3>
            <p>{tutorial.desc}</p>
            <p>⭐ {tutorial.rating} by {tutorial.user}</p>
          </div>
        ))}
      </div>
      <button className="see-more">See all tutorials</button>
    </section>
  );
}

export default Tutorials;
