import React from 'react';

const TextSeparator = ({
  text = '|',
  styles = { textAlign: 'center', fontSize: '40px', color: '#3e3e3e' },
}) => {
  return (
    <>
      <span style={{textAlign: 'center', fontSize: '30px', color: 'black'}}>|</span>
    </>
  );
};

export default TextSeparator;
