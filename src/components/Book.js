import React from "react";

function Book({ books }) {
  return (
    <div>
      <h1>{books.id}</h1>
      <h2>{books.name}</h2>
    </div>
  );
}

export default Book;
