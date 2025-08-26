import React from "react";

const articles = [
  { id: 1, title: "React OR Vue", desc: "Frontend frameworks", author: "Alice", rating: 5 },
  { id: 2, title: "NodeJS", desc: "Backend runtime", author: "Bob", rating: 5 },
  { id: 3, title: "React Hooks", desc: "Modern React features", author: "Charlie", rating: 5 }
];

function Articles() {
  return (
    <section className="articles">
      <h2>Featured Articles</h2>
      <div className="card-container">
        {articles.map((article) => (
          <div className="card" key={article.id}>
            <img src={`https://picsum.photos/200?random=${article.id}`} alt={article.title} />
            <h3>{article.title}</h3>
            <p>{article.desc}</p>
            <p>⭐ {article.rating} Author: {article.author}</p>
          </div>
        ))}
      </div>
      <button className="see-more">See all articles</button>
    </section>
  );
}

export default Articles;
