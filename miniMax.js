var player = 'X';
var opponent = 'O';
var count = 0;
//////////////////
function isMovesLeft(board) {
    for (let i = 0; i < 3; i++) {
        for(let j = 0; j<3;j++){
            if (board[i][j] == '_')
                return true;
        }
    }
    return false;
}
/* Evaluation of AI */
function evaluate(b){
    for(var row = 0; row<3; row++){
        if(b[row][0] == b[row][1] && b[row][1] == b[row][2]){
            if(b[row][0] == player)
                return 10;
            else if(b[row][0] == opponent)
                return -10;
        }
    }
    for(var col = 0; col<3;col++){
        if(b[0][col] == b[1][col] && b[1][col] == b[2][col]){
            if(b[0][col] == player)
                return 10;
            else if(b[0][col] == opponent)
                return -10;
        }
    }
    if(b[0][0] == b[1][1] && b[1][1] == b[2][2]){
        if(b[0][0] == player)
                return 10;
        else if(b[0][0] == opponent)
                return -10;
    }
    if(b[0][2] == b[1][1] && b[1][1] == b[2][0]){
        if(b[0][2] == player)
                return 10;
        else if(b[0][2] == opponent)
                return -10;
    }
    return 0;
}
/////
function minimax(board, depth, isMax){
    count++;
    var score = evaluate(board);
    if(score == 10)
        return score;
    if(score == -10)
        return score;
    if(isMovesLeft(board) == false)
        return 0;
    if(isMax){
        var best = -Infinity;
        for(var i = 0; i<3; i++){
            for(var j = 0; j<3; j++){
                if(board[i][j] == '_'){
                    board[i][j] = player;
                    best = Math.max(best, minimax(board, depth+1, !isMax));
                    board[i][j] = '_';
                }
            }
        }
        return best;
    }
    else{
        var best = Infinity;
        for(var i = 0; i<3; i++){
            for(var j = 0; j<3; j++){
                if(board[i][j] == '_'){
                    board[i][j] = opponent;
                    best = Math.min(best, minimax(board, depth+1, !isMax));
                    board[i][j] = '_';
                }  
            }
        }
        return best;
    }
}
////////////////
function findBestMove(board){
    var bestVal = Infinity;
    var bestMove = [-1, -1];
    for(var i = 0; i<3; i++){
        for(var j = 0; j<3; j++){
            if(board[i][j] == '_'){
                board[i][j] = opponent;
                var moveVal = minimax(board, 0, true);
                board[i][j] = '_';
                if(moveVal < bestVal){
                    bestMove = [i,j];
                    bestVal = moveVal;
                }
            }
        }
    }
    return [bestMove, count];
}
/* Display Board */
// function display(board){
//     for(var i = 0;i<3;i++){
//         for(var j = 0;j<3;j++){
//             document.write(board[i][j]+' ');
//         }
//         document.write('<br>');
//     }
// }
/*-------It's my area-------*/
document.addEventListener('DOMContentLoaded', function () {
    var board = [
        ['_', '_', '_'],
        ['_', '_', '_'],
        ['_', '_', '_']
    ];
    var buttons = document.querySelectorAll('#board input[type="button"]');
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            var pos = button.id.split('');
            var row = parseInt(pos[0]);
            var col = parseInt(pos[1]);

            if (board[row][col] == '_') {
                button.value = player;
                board[row][col] = player;

                var eBoard = evaluate(board);

                if (eBoard == 10) {
                    document.write('<h1 style="text-align: center; font-weight: 900; font-size: 30px; color: #00f2ff; margin-top: 20%;">player X won!!!</h1><br>');
                    return;
                } 
                else if (eBoard == -10) {
                    document.write('<h1 style="text-align: center; font-weight: 900; font-size: 30px; color: #00f2ff; margin-top: 20%;">player O won!!!</h1><br>');
                    return;
                } 
                else if (!isMovesLeft(board)) {
                    document.write('<h1 style="text-align: center; font-weight: 900; font-size: 30px; color: #00f2ff; margin-top: 20%;">Draw!!!</h1><br>');
                    return;
                }

                var result = findBestMove(board);
                var moveRow = result[0][0];
                var moveCol = result[0][1];
                board[moveRow][moveCol] = opponent;
                var moveButton = document.getElementById(moveRow.toString() + moveCol.toString());
                moveButton.value = opponent;
                document.getElementById("count").textContent = "AI thought "+result[1]+" times";

                eBoard = evaluate(board);
                if (eBoard == 10) {
                    document.write('<h1 style="text-align: center; font-weight: 900; font-size: 30px; color: #00f2ff; margin-top: 20%;">player X won!!!</h1><br>');
                    return;
                } 
                else if (eBoard == -10) {
                    document.write('<h1 style="text-align: center; font-weight: 900; font-size: 30px; color: #00f2ff; margin-top: 20%;">player O won!!!</h1><br>');
                    return;
                } 
                else if (!isMovesLeft(board)) {
                    document.write('<h1 style="text-align: center; font-weight: 900; font-size: 30px; color: #00f2ff; margin-top: 20%;">Draw!!!</h1><br>');
                    return;
                }
            } 
            else 
                alert('Illegal Move');
        });
    });
});