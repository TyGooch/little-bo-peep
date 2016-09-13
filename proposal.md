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

This project will be implemented with the following technologies:

- Vanilla JavaScript and `jquery` for overall structure and game logic,
- `Easel.js` with `HTML5 Canvas` for DOM manipulation and rendering,
- Webpack to bundle and serve up the various scripts.

### Implementation Timeline

**Day 1**: Setup all necessary Node modules, including getting webpack up and running and `Easel.js` installed.  Create `webpack.config.js` as well as `package.json`.  Write a basic entry file and the bare bones of all the necessary scripts.  Learn the basics of `Easel.js`.  Goals for the day:

- Get a green bundle with `webpack`
- Learn enough `Easel.js` to render an object to the `Canvas` element
- Finish sheep, crook, and cloud images for use in game.

**Day 2**: Implement basic game logic. Setup event listeners for keydowns to control the crook. Have sheep falling down and being caught by the end of the day.

**Day 3**: Refine sheep catching. Add score keeper. Add game over page.

**Day 4**: Add difficulty to increase speed of falling sheep as score increases. Polish the frontend. Test all features and make sure game is playable.
