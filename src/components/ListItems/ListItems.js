import React from 'react';

import './ListItems.css';

const listItems = React.memo(props => {

  return (
    <section className="items-list">
      <h2>Loaded commodity</h2>
      <ul>
        {props.items.map(item => (
            <li key={item.id} onClick={props.onEditItem.bind(this, item.id, item.name, item.price)}>
              <span>{item.name}</span>
              <span>{item.price} $</span>
            </li>
        ))}
      </ul>
    </section>
  );
});

export default listItems;