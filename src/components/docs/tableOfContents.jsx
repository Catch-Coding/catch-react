import React, { useEffect, useState } from 'react';
import "./tableOfContents.css";

const TableOfContents = () => {
  const [headings, setHeadings] = useState([]);
  
  useEffect(() => {
    const h1Elements = document.querySelectorAll('h1');
    const headingList = Array.from(h1Elements).map((heading) => ({
      id: heading.id,
      text: heading.textContent,
    }));
    setHeadings(headingList);
  }, []);

  return (
    <div className="sidebar">
      <h2>Table of Contents</h2>
      <ul>
        {headings.map((heading) => (
          <li key={heading.id}>
            <a href={`#${heading.id}`}>{heading.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;
