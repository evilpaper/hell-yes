# Hell Yes

A flash card app for memorizing things.

## How I worked on this project

- Inital design and graphical assets are made in Figma. Link ...
- Task breakdown based on design and things that came up during development and testing.
- Each bigger block are developed in a feature branch.

## How to navigate this project

- The project is structured in modules. Modules resemble routes more or less.
- Responsive CSS using styled components.
- Animation using Framer Motion and some plain CSS tranistions when Framer Motion felt overkill.
- Only local storage for now. Backend is planned for later.
- Integration test using React Testing Libraries

## Why I built the project this way

- Didn't use a state management like Redux on purpose. Built in useState and useContext is more than sufficient.
- Styled components is a great library for stylling.
- I wanted to explore Framer Motion for animations and come as close as possible to animation seen in native mobile apps. Considered using react-spring as well but settled for Framer Motion in this project.
- Testing is an essential of production applications. Testing Library is at the momemnt of writing the go-to library in the React community. All essential features are covered with tests.

## If I had more time I would change this

Nothing yet, will most likely change.

## Built with

React with TypeScriipt.

## Contributions

Contributions are welcome. Issues are for bugs only.

## Licensing

Licensed under the MIT license.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
