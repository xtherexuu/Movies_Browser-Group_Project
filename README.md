# Movies Browser (Group Project)

A group project designed to simulate real-world front-end team collaboration and production-level code practices.

A responsive movie & people search app powered by The Movie Database (TMDB).  
Built as a group project to practice real teamwork: feature planning, consistent UI patterns, shared state management, and integrating asynchronous API flows.

## Demo

[Link to deployed live view](https://xtherexuu.github.io/Movies_Browser-Group_Project/)

![This is demo of the app](./preview.gif)

## Why This Project (for a recruiter)

This app showcases a practical front-end setup used in real products:

- A feature-based architecture (`features/`) with predictable Redux state and side effects.
- Clean UX states (loading, error, empty results).
- Routing + pagination + search query in URL (shareable views).
- Reusable UI components styled with `styled-components`, built responsively.
- Shows practical collaboration patterns used in real-world team projects.

## Features

- Browse **Popular Movies** (paginated)
- Browse **Popular People** (paginated)
- **Search movies / people** with a debounced search input
- **Movie details page**:
  - poster/background header
  - rating + votes
  - genres, production info, overview
  - cast & crew lists (clickable)
- **Person details page**:
  - name, birth date/place, biography
  - movie credits split into cast & crew
- UX states:
  - loading screen
  - error screen
  - “no results” screen

## Tech Stack

- **React** + **Vite**
- **Redux Toolkit** + **redux-saga**
- **react-router v7**
- **styled-components**
- **axios**
- **gh-pages**

## Project Structure (high level)

- `src/common/` – shared UI building blocks (Header, SearchInput, Paginator, Loading/Error/NoResults)
- `src/features/movies/` – movie list, search, movie details page + Redux slices/sagas
- `src/features/people/` – people list, search, person details page + Redux slices/sagas
- `src/features/getData.js` – TMDB API helpers (movies/people/search/details)

## Running Locally

Requirements: Node.js + npm

- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Production build: `npm run build`
- Preview build locally: `npm run preview`

## Deployment

This project is configured for GitHub Pages:

- `npm run deploy`

## Credits

Group project created collaboratively with @BartekKamela and @Kantares77 on github: shared planning, code reviews, and consistent conventions across features.
