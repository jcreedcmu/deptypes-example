export type AppState =
  | { t: 'editStrings', s1: string, s2: string, s3: string }
  | { t: 'editNumbers', n1: number, n2: number, n3: number }
  ;

export function mkState(): AppState {
  return { t: 'editStrings', s1: 'a', s2: 'b', s3: 'c' }
}
