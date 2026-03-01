import React from 'react';

const Loading: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse opacity="0.4" cx="9.99967" cy="3.33332" rx="1.66667" ry="1.66667" fill="currentColor" />
    <circle opacity="0.4" cx="9.99967" cy="16.6667" r="1.66667" fill="currentColor" />
    <ellipse
      cx="15.7737"
      cy="6.66675"
      rx="1.66667"
      ry="1.66667"
      transform="rotate(60 15.7737 6.66675)"
      fill="currentColor"
    />
    <circle
      opacity="0.4"
      cx="4.22687"
      cy="13.3334"
      r="1.66667"
      transform="rotate(60 4.22687 13.3334)"
      fill="currentColor"
    />
    <ellipse
      opacity="0.4"
      cx="15.7731"
      cy="13.3334"
      rx="1.66667"
      ry="1.66667"
      transform="rotate(120 15.7731 13.3334)"
      fill="currentColor"
    />
    <ellipse
      opacity="0.4"
      cx="4.22622"
      cy="6.66677"
      rx="1.66667"
      ry="1.66667"
      transform="rotate(120 4.22622 6.66677)"
      fill="currentColor"
    />
  </svg>
);

export default Loading;
