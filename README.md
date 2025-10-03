# Next.js (App Router, TypeScript) p5.js Sketch Component Wrapper

This repo contains Next.js (App Router, TypeScript) app that wraps & integrates p5.js sketch component (canvas) with React state via ref bridge:

React\
⬇\
state, state handlers\
⬇\
ref bridge\
⬇\
p5.js sketch component (canvas)\
⬇\
triggering state handlers\
⬇\
React

## Motivation

The project solves the problem of integrating declarative React, which owns state,
with imperative p5.js lib, which owns canvas loop & lives outside React.

This seems to be a standard pattern of integrating imperative & "browser" libs (which live in browser) & declarative React.

I didn't trust any reacdy-to-use libs, so created my own simplest solution to use in my rewritten mindmap app & linky notes app.

## Tech Stack

- Next.js (App Router)
- TypeScript
- p5.js

## TODO

Next time try/test managing state with useReducer -
will it simplify & encapsulate passing & managing state between react-ref bridge-p5?

## PS. Need to try

- Konva
  - React Konva