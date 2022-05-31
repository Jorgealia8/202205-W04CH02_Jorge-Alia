import React, { useState } from 'react';
import { FormFirst } from '../components/form';

export function HomePage() {
  const [state, setState] = useState(1);

  return (
    <>
      <main>
        <h1>PLEASE ANSWER THE FOLLOWING QUESTIONS</h1>
        <FormFirst state={state}></FormFirst>
        <button onClick={() => setState(state + 1)}>Next</button>
        <button onClick={() => setState(state - 1)}>Previous</button>
      </main>
    </>
  );
}
