Implementation
1. Reactjs concept - state , props , component , lifecycle
2. React-redux state management
3. Eslintrc
4. Styled-component for web site styling


1. Redux Thunk middleware allow you to write action creators that return a function instead of an action.
The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.
The inner function receives the store methods dispatch and getState as parameters.

2. ES5 - var c = 'c';
         var c8763 = c + '8763';

   ES6 - var c = 'c';
         var c8763 = `${c}8763`;

3. ES5 - var a = {c8763:87,xxx:'xx'}
         var b = {c8763:87,xxx:'xx',www:'XD'}

   ES6 - var a = {c8763:87,xxx:'xx'}
         var b = {...a,www:'XD'}