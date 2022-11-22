import React from 'react';
import PropTypes from 'prop-types';
import { a } from '../../models/a.class';

function ComponentB({ contact }) {
  return (
    <div>
      <div>
        <h2> name: {contact.name}</h2>
        <h2> lastname: {contact.lastname}</h2>
        <h2> email: {contact.email}</h2>
        <h2>
          connected: {contact.connected ? 'Contact online' : 'contact offline'}
        </h2>
      </div>
    </div>
  );
}

ComponentB.propTypes = {
  contact: PropTypes.instanceOf(a),
};

export default ComponentB;
