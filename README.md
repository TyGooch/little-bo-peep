# Little Bo Peep
[Live Demo][LittleBoPeep]

[LittleBoPeep]: https://tygooch.github.io/little-bo-peep/

Little Bo Peep is a simple 1-player game written in vanilla JavaScript that plays out on a rectangular canvas. Sheep fall from the top of the screen either on the left or right side. The player's goal is to catch these sheep before they hit the bottom of the screen by using their left and right arrow keys to trigger a crook to reach out and catch them. As the player captures more sheep, the sheep begin to fall at faster speeds. The game continues until a sheep reaches the bottom of the screen.

## Technical Details

### HTML 5 canvas
Little Bo Peep uses the HTML 5 canvas element to render all images and there animations. The artwork is all handmade in photoshop.

### Vanilla JavaScript
The entirety of the game logic is written using pure vanilla JavaScript in ES6 syntax. Webpack and babel are used to bundle the code into a single script that is included in the HTML file.

## Future Implementations

### High Score
Currently, the game saves the user's current high score on window.localStorage. Since I am using a custom font for all the text, I will soon have the font hosted somewhere where I can use it on my page so I can render the user's current high score on the home page.
