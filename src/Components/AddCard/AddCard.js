import React, { useState } from 'react';
import './AddCard.css';

export default function Form(props) {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [tags] = useState();

  return (
    <div className="add">
      <form
        className="addForm"
        onSubmit={(e) => props.handleSubmit(e, title, content, tags)}
      >
        <label htmlFor="title">Title</label>
        <input
          type="text"
          aria-label="title"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="Content">Content</label>
        <input
          type="text"
          aria-label="content"
          name="content"
          onChange={(e) => setContent(e.target.value)}
        />
        <label>Tags</label>
        <div>
          <select aria-label="tag">
            {props.tags.map((tag) => (
              <option aria-label={tag.tag} key={tag.id} value={tag.tag}>
                {tag.tag}
              </option>
            ))}
          </select>
        </div>
        <input aria-label="submit" className="submitAddForm" type="submit" />
      </form>
    </div>
  );
}
