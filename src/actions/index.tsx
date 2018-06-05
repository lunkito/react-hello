// Manera super pija de crear funciones con typescript
// export function incrementCounter(delta: number): IncrementCounter {
//   return
// }
export const incrementCounter = (delta: number): IncrementAction => ({ type: 'INCREMENT_COUNTER', delta });
export const decrementCounter = (delta: number): DecrementAction => ({ type: 'DECREMENT_COUNTER', delta });

type ActionType = | IncrementAction | DecrementAction;

export default ActionType;

export interface Action {
  readonly type: string;
}
export interface IncrementAction extends Action {
  delta: number;
}
export interface DecrementAction extends Action {
  delta: number;
}