import React, { useMemo } from 'react';

const ListComponent = ({ list = [], filter = '' }) => {
  const filteredList = useMemo(() => {
    if (!filter) return list;

    return list.filter(item =>
      String(item).toLowerCase().includes(filter.toLowerCase())
    );

  }, [list, filter]);

  return (
    <ul>

      {filteredList.map(item => (
        <li key={item}>{item}</li>
      ))}
      
    </ul>
  );

};

export default ListComponent;

