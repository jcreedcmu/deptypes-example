import { produce } from 'immer';
import { AppState } from './state';
import { Action } from './action';

export function reduce(state: AppState, action: Action): AppState {
  switch (action.t) {
    case 'setString1': {
      if (state.t != 'editStrings') // Should be unreachable
        return state;
      return produce(state, s => {
        s.s1 = action.s;
      });
    }
    case 'setString2': {
      if (state.t != 'editStrings') // Should be unreachable
        return state;
      return produce(state, s => {
        s.s2 = action.s;
      });
    }
    case 'setString3': {
      if (state.t != 'editStrings') // Should be unreachable
        return state;
      return produce(state, s => {
        s.s3 = action.s;
      });
    }

    case 'setNumber1': {
      if (state.t != 'editNumbers') // Should be unreachable
        return state;
      return produce(state, s => {
        s.n1 = action.n;
      });
    }
    case 'setNumber2': {
      if (state.t != 'editNumbers') // Should be unreachable
        return state;
      return produce(state, s => {
        s.n2 = action.n;
      });
    }
    case 'setNumber3': {
      if (state.t != 'editNumbers') // Should be unreachable
        return state;
      return produce(state, s => {
        s.n3 = action.n;
      });
    }
    case 'editStrings': {
      return { t: 'editStrings', s1: 'a', s2: 'b', s3: 'c' };
    }
    case 'editNumbers': {
      return { t: 'editNumbers', n1: 0, n2: 50, n3: 100 };
    }
  }
}
