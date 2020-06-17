import React from 'react';

export default function DropDown(props) {
  return (
    <div className="selectWrapper">
      <select
        aria-label="select tags"
        onChange={(e) => props.handleSelectedTag(e, e.target.value)}
        id="select"
      >
        {props.noTrend ? null : (
          <option aria-label="trending" className="options" value="trending">
            Trending
          </option>
        )}
        {props.tags
          ? Object.values(props.tags).map((tag) => (
              <option
                aria-label={tag.tag}
                className="options"
                key={tag.id}
                value={tag.id}
              >
                {tag.tag}
              </option>
            ))
          : null}
        <option aria-label="my posts" className="options" value="author">
          My Post's
        </option>
      </select>
    </div>
  );
}
