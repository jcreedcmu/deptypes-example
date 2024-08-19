Dependent Types in UI stuff
===========================

This repository is for a conversation about why dependent/existential/GADT types are motivated in UI code.

<a href="https://jcreedcmu.github.io/deptypes-example/">Here's a little toy UI</a> that has two states "edit some strings" and "edit some numbers". In the usual redux-y style, I have a function reduce that takes a `State` and an `Action` and returns a `State`. I `dispatch` these `Action`s from event handlers in UI elements in the DOM.

What's annoying
---------------

In my reducer, I don't statically know that only some actions will get dispatched from some states. I don't like all of the "should be unreachable"-commented checks in [`reduce.ts`](https://github.com/jcreedcmu/deptypes-example/blob/main/src/reduce.ts).

What I think I want
-------------------

Like if I'm *really* dreaming I'd like to be able to say
```
export function reduce(state: AppState, action: ActionSuitableFor<state>): AppState {
...
}
```
where `ActionSuitableFor` is a function that takes a value of type `AppState` and computes a type. It could do case analysis on whether `state` has `t: "editNumbers"` or `t: "editStrings"` and return
```
  | { t: 'setNumber1', n: number }
  | { t: 'setNumber2', n: number }
  | { t: 'setNumber3', n: number }
  | { t: 'editStrings' }
```
or
```
  | { t: 'setString1', s: string }
  | { t: 'setString2', s: string }
  | { t: 'setString3', s: string }
  | { t: 'editNumbers' }
```
respectively.

What might be good enough
-------------------------

If I know I have just a finite number of states (and not some more
complex way that the set of allowable actions is derived from the
current state) then maybe I could just make `AppState` and
`Action` polymorphic over some singleton types?
