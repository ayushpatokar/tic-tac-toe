# Tic Tac Toe

A browser-based Tic Tac Toe game built using HTML, CSS, and JavaScript. Two players take turns placing X and O on a 3×3 grid. The game detects a winner automatically and provides options to reset the board or start a new game.

## Features

* Two-player gameplay
* Alternate turns between X and O
* Automatic winner detection
* Displays the winner when a winning combination is found
* Reset Game button to clear the board and continue playing
* New Game button to start a fresh game after a winner is declared
* Responsive layout using Flexbox and viewport units

## Technologies Used

* HTML5
* CSS3
* JavaScript (Vanilla JS)

## How It Works

* The game board consists of 9 clickable buttons.
* Player O always starts first.
* Once a box is selected, it becomes disabled to prevent changes.
* After every move, the game checks all possible winning combinations.
* When a player wins:

  * A winner message is displayed.
  * The game board is hidden.
  * The Reset button is hidden.
  * The New Game button can be used to start over.

## Winning Combinations

The game checks the following patterns:

* Horizontal rows
* Vertical columns
* Diagonals

## Project Structure

```text
tic-tac-toe/
│
├── index.html
├── style.css
└── script.js
```

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Open the project folder.

3. Run `index.html` in your web browser.

## Author

Ayush Patokar

## License

This project is open source and available for learning and educational purposes.
