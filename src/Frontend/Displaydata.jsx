import React from 'react';

const Displaydata = ({ datas }) => {
  return (
    <div>
      <ul>
        {datas.map((data, index) => (
          <li key={index}>{data}</li>
        ))}
      </ul>
    </div>
  );
};

export default Displaydata;
