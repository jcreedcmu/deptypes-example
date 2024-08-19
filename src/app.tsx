import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { reduce } from './reduce';
import { mkState } from './state';

export type AppProps = {
};

export function App(props: AppProps): JSX.Element {
  const [state, dispatch] = React.useReducer(reduce, mkState());

  const center: React.CSSProperties = {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: 10,
  };

  switch (state.t) {
    case 'editStrings': return <div style={center}>
      <input value={state.s1} onChange={e => { dispatch({ t: 'setString1', s: e.currentTarget.value }) }}></input><br />
      <input value={state.s2} onChange={e => { dispatch({ t: 'setString2', s: e.currentTarget.value }) }}></input><br />
      <input value={state.s3} onChange={e => { dispatch({ t: 'setString3', s: e.currentTarget.value }) }}></input><br />
      <button onMouseDown={(e) => { dispatch({ t: 'editNumbers' }) }}>Edit Numbers</button>
    </div>

    case 'editNumbers': return <div style={center}>
      <input type="range" min="0" max="100" value={state.n1} onChange={e => { dispatch({ t: 'setNumber1', n: parseInt(e.currentTarget.value) }) }}></input><br />
      <input type="range" min="0" max="100" value={state.n2} onChange={e => { dispatch({ t: 'setNumber2', n: parseInt(e.currentTarget.value) }) }}></input><br />
      <input type="range" min="0" max="100" value={state.n3} onChange={e => { dispatch({ t: 'setNumber3', n: parseInt(e.currentTarget.value) }) }}></input><br />
      <button onMouseDown={(e) => { dispatch({ t: 'editStrings' }) }}>Edit Strings</button>
    </div>

  }
}

export function init() {
  const props: AppProps = {
  };
  const root = createRoot(document.querySelector('.app')!);
  root.render(<App {...props} />);
}
