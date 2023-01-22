import React from 'react';
const ContactItem = ({ id, name, number, onRemoveContact }) => {
  return (
    <li>
      {name + ': ' + number}
      <button type="button" onClick={() => onRemoveContact(id)}>
        Delete
      </button>
    </li>
  );
};
export default ContactItem;
