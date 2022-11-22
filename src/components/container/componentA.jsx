import React from 'react';
import { a } from '../../models/a.class';
import ComponentB from '../pure/componentB';

const ComponentA = () => {
  const defaultA = new a('name tal', 'lastname', 'example@a.cIm', false);
  return (
    <div>
      <ComponentB contact={defaultA}></ComponentB>
    </div>
  );
};

export default ComponentA;
