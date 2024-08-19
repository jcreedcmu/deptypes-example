import { Point } from "./lib/types";

export type Action =
  | { t: 'setString1', s: string }
  | { t: 'setString2', s: string }
  | { t: 'setString3', s: string }
  | { t: 'setNumber1', n: number }
  | { t: 'setNumber2', n: number }
  | { t: 'setNumber3', n: number }
  | { t: 'editStrings' }
  | { t: 'editNumbers' }
  ;

export type Dispatch = (action: Action) => void;
