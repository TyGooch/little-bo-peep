## Little Bo Peep

### Background

Little Bo Peep is a simple 1-player game that plays out on a rectangular grid. Sheep fall from the top of the screen either on the left or right side. The player's goal is to catch these sheep before they hit the bottom of the screen by using their left and right arrow keys to trigger a crook to reach out and grab them. As the player captures more sheep, the sheep begin to fall at faster speeds. The game continues until a sheep reaches the bottom of the screen.

### Functionality & MVP  

In Little Bo Peep, users will be able to:

- [ ] Start, pause, and reset the game board
- [ ] Use left and right arrow keys to capture sheep
- [ ] Keep track of their high score

In addition, this project will include:

- [ ] An About modal describing the background and rules of the game
- [ ] A production Readme

### Wireframes

This app will consist of a single screen with game board and nav links to the Github, my LinkedIn,
and the About modal.  When the game is first rendered, there will be a start screen with a button to start the game along with a counter showing the player's high score. While the game is playing, the user will be able to pause the game using the space bar. When the game is over, the user will be able to see their score with an option to play agin or return to the home screen.

![wireframes](https://github.com/TyGooch/little-bo-peep/blob/master/wifeframes/HomePage.png)
![wireframes](https://github.com/TyGooch/little-bo-peep/blob/master/wifeframes/PlayPage.png)
![wireframes](https://github.com/TyGooch/little-bo-peep/blob/master/wifeframes/GameOverPage.png)

### Architecture and Technologies

**NB**: one of the main things you should be researching and deciding upon while you write this proposal is what technologies you plan to use.  Identify and create a plan of attack for the major technical challenges in your project.  It's okay if you don't have all the details of implementation fleshed out, but you should have a solid roadmap by Monday morning.

This project will be implemented with the following technologies:

- Vanilla JavaScript and `jquery` for overall structure and game logic,
- `Easel.js` with `HTML5 Canvas` for DOM manipulation and rendering,
- Webpack to bundle and serve up the various scripts.

In addition to the webpack entry file, there will be three scripts involved in this project:

`board.js`: this script will handle the logic for creating and updating the necessary `Easel.js` elements and rendering them to the DOM.

`automata.js`: this script will handle the logic behind the scenes.  An Automata object will hold a `type` (hexagon, triangle, or square) and a 2D array of `Cell`s.  It will be responsible for doing neighbor checks for each `Cell` upon iteration and updating the `Cell` array appropriately.

`cell.js`: this lightweight script will house the constructor and update functions for the `Cell` objects.  Each `Cell` will contain a `type` (hexagon, triangle, or square) and an `aliveState` (`true` or `false`).

### Implementation Timeline

**Day 1**: Setup all necessary Node modules, including getting webpack up and running and `Easel.js` installed.  Create `webpack.config.js` as well as `package.json`.  Write a basic entry file and the bare bones of all 3 scripts outlined above.  Learn the basics of `Easel.js`.  Goals for the day:

- Get a green bundle with `webpack`
- Learn enough `Easel.js` to render an object to the `Canvas` element

**Day 2**: Dedicate this day to learning the `Easel.js` API.  First, build out the `Cell` object to connect to the `Board` object.  Then, use `board.js` to create and render at least the square grid, ideally all 3 grid types.  Build in the ability to toggle the live/dead states on click for each cell.  Goals for the day:

- Complete the `cell.js` module (constructor, update functions)
- Render a square grid to the `Canvas` using `Easel.js`
- Make each cell in the grid clickable, toggling the state of the square on click
- Do the same for triangular and hexagonal grids

**Day 3**: Create the automata logic backend.  Build out modular functions for handling the different grid types along with their unique neighbor checks and rule sets.  Incorporate the automata logic into the `Board.js` rendering.  Goals for the day:

- Export an `Automata` object with correct type and handling logic
- Have a functional grid on the `Canvas` frontend that correctly handles iterations from one generation of the game to the next


**Day 4**: Install the controls for the user to interact with the game.  Style the frontend, making it polished and professional.  Goals for the day:

- Create controls for game speed, stop, start, reset, and shape type
- Have a styled `Canvas`, nice looking controls and title
- If time: include buttons on the side to toggle the color scheme of the cells


### Bonus features

There are many directions this cellular automata engine could eventually go.  Some anticipated updates are:

- [ ] Add options for different rule sets
- [ ] Add multiple choices for starting states that are interesting
- [ ] Explore multi-state versions of the game, such as the ones outlined [here](https://cs.stanford.edu/people/eroberts/courses/soco/projects/2008-09/modeling-natural-systems/gameOfLife2.html)
