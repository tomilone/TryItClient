import React, { useState } from 'react';
import DropDown from './DropDown';

export default function Form(props) {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [tags, setTags] = useState();

  return (
    <div>
      <form onSubmit={(e) => props.handleSubmit(e, title, content, tags)}>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Content</label>
          <input
            type="text"
            name="content"
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div>
          <label>tags</label>
          <DropDown
            noTrend={props.noTrend}
            tags={props.tags}
            handleSelectedTag={(e) => setTags(e.target.value)}
          />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}
