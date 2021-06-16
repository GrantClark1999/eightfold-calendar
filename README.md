# Eightfold.ai Engineering Take Home Project

Project creating a Calendar component from scratch using React.

## Getting Started

(Quick Start)

`git clone https://github.com/GrantClark209/eightfold-calendar.git` : Type from the command-line wherever you would like to install the project. Alternatively, download the zip file from github and extract to the desired install location.

`yarn` : Install all project dependencies

`yarn start` : Run the project in development mode

(Optional)

`yarn test` : Run available tests

`yarn build` : Create an optimized production build

## Project Instructions

1. Implement a Calendar Component, where Months, Days, Time on a specific day are represented.
2. Implement the procedure to schedule meetings, for your users. A sample set of 5 users can be created to be present in the company.
3. Feel free to use any framework you think would work best, you can also use vanilla Js.
4. 3rd party Library is not allowed for building the calendar widget.

## Specification

- [X] As a user, I should be able to schedule meetings among the users in the company.
- [X] Add a warning message if the calendar is not free for a user invited in the meeting, but overlapping meetings can be created.
- [X] Provide a dropdown to select users and switch calendars based on the selected user.
- [ ] Suggested rooms for the meetings (A set of 5 meeting rooms can be created).

  I did not get around to implementing this feature, as I wanted to make sure I took my time when implementing the other components and make the application look professional. The algorithm for suggesting rooms would not difficult to implement, but I did not want to delay submitting the project for too much longer, as implementing a display / component for showing and selecting the suggested meetings might take an additional day or two, depending on personal obligations.

- [X] The component should render under `200ms`.

### Render Time
The following numbers were obtained using React's Profiling Developer Tools.

* The optimized build renders in `~15ms`
* The development build renders in `~30ms` (after initial compilation)

## Criteria

- [X] Does your code work? Are all features in working condition?
  
  All code/features work as described (or more).

- [X] Code Readability

  Code splitting, comments, informative naming conventions were employed to help with code readibility. In addition, refactors were done to help logically organize the code, and I consciously tried to reduce the amount of "clutter" that can come with complexly nested HTML documents.

- [X] Code Reusability

  Code splitting was used to help de-couple a piece of a component from the place it's implemented in. However, for the sake of displaying all components, positioning and sizing were more tightly coupled.

- [X] Error Handling

  Handled errors include:

  * Scheduling without a start time
  * Scheduling without an end time
  * Scheduling when the end time is after the start time
  * Scheduling a meeting that conflicts with an existing meeting

- [X] Testability

  Small amounts of unit testing included to show the testability of the sub-components. Untested components were constructed to make writing tests a straightforward process.

- [X] JS/CSS/HTML fundamentals and best practices

## Assumptions / Tradeoffs

> The pretend data format doesn't matter

The data storing of the application in `src/data/index.ts` is to "mock" actual users and meetings. While some elements of the data are indicative of how the data might actually be stored, I chose to duplicate the meeting data between users to make sharing context easier. However, in a real application, this might be in some SQL database or NoSQL database with additional indexes if needed. Either way, the frontend application would simply need to call an api to fetch the desired data, and using a library like [React Query](https://react-query.tanstack.com/) could assist in rehydrating locally cached data.

## Libraries / Frameworks / Utilities

Explanation of packages included in `package.json`

### [React](https://reactjs.org/)

Modern JavaScript framework for developing front-end single-page applications.

### [TypeScript](https://www.typescriptlang.org/)

Explicit type declarations not found in JavaScript, allowing faster debugging and detecting issues at compile-time.

### [TailwindCSS](https://tailwindcss.com/)

Provides CSS classnames, making it easier to write CSS within the React components. I also prefer Tailwind or other CSS-in-JS options, so that the directory hierarchy does not get cluttered with many .css or .module.css files. (Note: I have used CSSModules, SASS, and styled-components as alternatives previously)

### [FontAwesome](https://fontawesome.com/)

Free SVG icons. Used for the "chevron" and "plus" icons in the application.

### [react-spring](https://react-spring.io/)

Library for creating animations and transitions. CSS animations can be used when mounting React components, but not during the component's unmount cycle.

### [uuid](https://www.npmjs.com/package/uuid)

Used to generate random (v4) uuids when creating new meetings. While not 100% necessary, it helps to reinforce the need for unique keys amongst the meetings.

### [clsx](https://www.npmjs.com/package/clsx)

Allows for nicer formatting of `className` attributes when conditionally applying classes or applying many classes (as in the case sometimes while using TailwindCSS)

### [craco](https://www.npmjs.com/package/@craco/craco) & [craco-alias](https://www.npmjs.com/package/craco-alias)

Used to modify the Create-React-App webpack configuration without ejecting. This was used to allow TypeScript aliasing of paths. See `tsconfig.paths.json` for used aliases.

