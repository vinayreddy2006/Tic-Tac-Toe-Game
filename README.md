# Tic-Tac-Toe Game

A simple, interactive Tic-Tac-Toe game implemented using JavaScript, HTML, and CSS. This project allows two players to play Tic-Tac-Toe in the browser, with the game board consisting of a 3x3 grid. Players take turns to place either "X" or "O" in the grid, and the first player to align three of their symbols in a row wins.

## Features

- **Two-player gameplay**: Players alternate between placing "X" and "O" on the board.
- **Winner detection**: The game checks for a winner after each move and displays a message when a winner is found.
- **Draw detection**: If all spaces on the board are filled without a winner, a draw message is displayed.
- **Game reset**: Players can restart the game at any time using the reset button.
- **Responsive UI**: The game is designed to work well on different screen sizes.

  
- ## Installation

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/vinayreddy2006/tic-tac-toe.git
   Navigate to the project directory:

bash
Copy
cd tic-tac-toe
Open the index.html file in your browser to play the game.

- ## Usage
Upon opening the game, the board will display a 3x3 grid.
Players alternate placing "X" and "O" in the boxes by clicking on them.
The game checks for a winner after every move, and if a winner is found, a message is displayed.
If the game ends in a draw (all boxes are filled with no winner), a draw message is shown.
Players can restart the game by clicking the "Reset" button, or start a new game with the "New Game" button after the game ends.

- ## Code Overview
# JavaScript (app.js)
The game logic is contained within the app.js file.
The game uses event listeners to handle user interaction (clicking on the grid boxes).
The game keeps track of the number of moves and checks for winning patterns after each move.
Functions like checkWinner(), display_winner(), and reset_game() are responsible for game flow and handling the user interface updates.

# CSS (style.css)

The game board and layout are styled using CSS.
The board and buttons are responsive, scaling to fit various screen sizes.
There are styles for the game messages and buttons, including colors and positioning.

# HTML (index.html)
The HTML structure defines the layout of the Tic-Tac-Toe game.
A 3x3 grid of buttons represents the game board.
Buttons for "Reset" and "New Game" are provided for restarting or starting a new game.
