import React from 'react';

export const HeadlineList = ({ children }) => {
  return (
    <div>
      <ul className="list-group">
        {children}
      </ul>
    </div>
  );
};
