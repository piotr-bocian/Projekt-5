import React from 'react';

const TextSeparator = ({
  text = '|',
  fontSize = '40px',
  textAlign = 'center',
}) => {
  return (
    <>
      <span
        style={{
          textAlign: { textAlign },
          fontSize: { fontSize },
          color: '#3e3e3e',
        }}
      >
        {text}
      </span>
    </>
  );
};

export default TextSeparator;
