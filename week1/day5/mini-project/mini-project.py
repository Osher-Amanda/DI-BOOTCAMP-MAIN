## Tic Tac Toe Game with Numbered Guide

# Step 1: Represent the board
def create_board():
    # Board starts numbered 1–9 so players know positions
    return [str(i) for i in range(1, 10)]


# Step 2: Display the board
def display_board(board):
    print()
    print(f" {board[0]} | {board[1]} | {board[2]} ")
    print("---+---+---")
    print(f" {board[3]} | {board[4]} | {board[5]} ")
    print("---+---+---")
    print(f" {board[6]} | {board[7]} | {board[8]} ")
    print()


# Step 3: Get player input
def player_input(board, player):
    while True:
        try:
            pos = int(input(f"Player {player}, enter a position (1-9): "))
            if pos < 1 or pos > 9:
                print("❌ Invalid choice, pick between 1-9.")
            elif board[pos - 1] in ["X", "O"]:
                print("❌ That spot is taken, try again.")
            else:
                return pos - 1
        except ValueError:
            print("❌ Please enter a number between 1-9.")


# Step 4: Winning combinations
coords = [
    (1, 2, 3), (4, 5, 6), (7, 8, 9),  # rows
    (1, 4, 7), (2, 5, 8), (3, 6, 9),  # columns
    (1, 5, 9), (3, 5, 7)              # diagonals
]

def check_win(board, player):
    for combo in coords:
        if all(board[i - 1] == player for i in combo):
            return True
    return False


# Step 5: Check for a tie
def check_tie(board):
    return all(space in ["X", "O"] for space in board)


# Step 6: Main game loop
def play():
    board = create_board()
    current_player = "X"

    while True:
        display_board(board)
        move = player_input(board, current_player)
        board[move] = current_player

        # Check win
        if check_win(board, current_player):
            display_board(board)
            print(f"🎉 Player {current_player} wins!")
            break

        # Check tie
        if check_tie(board):
            display_board(board)
            print("🤝 It's a tie!")
            break

        # Switch player
        current_player = "O" if current_player == "X" else "X"


# Run the game
if __name__ == "__main__":
    play()

    