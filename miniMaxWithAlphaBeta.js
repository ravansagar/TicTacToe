// var Player = 'X';
// var Opponent = 'O';
// var Count = 0;

// function isMovesLeft(board){
//     for(let i = 0; i < 3; i++){
//         for(let j = 0; j < 3; j++){
//             if(board[i][j] == '_')
//                 return true;
//         }
//     }
//     return false;
// }

// function evaluate(board){
//     //Row Evaluation
//     for(let row = 0 ; row < 3; row++){
// 		if (board[row][0] == board[row][1] && board[row][1] == board[row][2]){
// 			if (board[row][0] == Player)
// 				return 10;
// 			else if (board[row][0] == Opponent)
// 				return -10;
//         }
//     }
//     //Column Evaluation
//     for(let col = 0 ; col < 3; col++){
//         if(board[0][col] == board[1][col] && board[1][col] == board[2][col]){
//             if(board[0][col] == Player)
//                 return 10;
// 			else if (board[0][col] == Opponent)
// 				return -10;
//         }
//     }
//     //Digonal Evaluation
//     if(board[0][0] == board[1][1] && board[1][1] == board[2][2])
//         if(board[0][0] == Player)
//             return 10;
//         else if (board[0][0] == Opponent)
//             return -10;
//     if(board[[0][2] == board[1][1] && board[1]][1] == board[2][0])
//         if(board[0][2] == Player)
//             return 10;
//         else if (board[0][2] == Opponent)
//             return -10;
//     return 0;
// }

// function miniMaxWithAlphaBeta(board, depth, isMax, alpha, beta){
//     var best;
//     Count = Count + 1;
//     //Evaluate Score
//     var score = evaluate(board);
//     if(score == 10)
//         return score;
//     if(score == -10)
//         return score;
//     if(isMovesLeft(board) == false)
//         return 0;

//     if(isMax){
//         best = -Infinity;
//         for(let i = 0; i < 3; i++){	
// 			for(let j = 0; j < 3; j++){
//                 //Check if cell is empty
// 				if (board[i][j] == '_'){
// 					//Make the move
// 					board[i][j] = Player;
// 					best = max( best, miniMaxWithAlphaBeta(board, depth + 1, !isMax, alpha, beta));
// 					board[i][j] = '_';
// 					alpha = max(alpha, best);
// 					if(alpha >= beta)
// 						break;	
//                 }
//             }
//         }
// 		return best;
//     }
//     else{
// 		best = Infinity;
//         for(let i = 0; i < 3; i++){	
// 			for(let j = 0; j < 3; j++){
// 				if (board[i][j] == '_'){
// 					board[i][j] = Opponent
// 					best = Math.min(best, miniMaxWithAlphaBeta(board, depth + 1, !isMax, alpha, beta))
// 					board[i][j] = '_'
// 					beta = Math.min(beta, best)
// 					if(alpha >= beta)
// 						break;
//                 }
//             }
//         }
// 		return best
//     }
// }

// function findBestMove(board){
//     var moveVal;
// 	Count = 0;
// 	bestVal = Infinity;
// 	bestMove = (-1, -1)

// 	for(let i = 0; i < 3; i++){	
// 			for(let j = 0; j < 3; j++){
// 			if (board[i][j] == '_'){
// 				board[i][j] = Opponent;
// 				moveVal = miniMaxWithAlphaBeta(board, 0, true, -Infinity, Infinity);
// 				board[i][j] = '_';
// 				if (moveVal < bestVal){				
// 					bestMove = (i, j);
// 					bestVal = moveVal;
//                 }
//             }
//         }
//     }
// 	return [bestMove, Count];
// }

// // function main() {
// //     var board = [
// //         ['_', '_', '_'],
// //         ['_', '_', '_'],
// //         ['_', '_', '_']
// //     ];
// //     var temp, row, col, tag;
// //     var eBoard;
// //     var result = new Array(2);
// //     document.addEventListener('DOMContentLoaded', function () {
// //         document.addEventListener('click', function (tagID) {
// //             tag = tagID.target;
// //             temp = tag.id;
// //             row = parseInt(temp[0]);
// //             col = parseInt(temp[1]);
// //             if (isMovesLeft(board) == false) {
// //                 if (board[row][col] != '_') {
// //                     alert('Illegal Move');
// //                     return;
// //                 }
// //                 board[row][col] = Player;
// //                 document.getElementById(temp).value = board[row][col];
// //                 result = findBestMove(board);
// //                 console.log(result);
// //                 board[result[0][0]][result[0][1]] = Opponent;
// //                 var r = result[0][0];
// //                 var c = result[0][1];
// //                 board[r][c] = Opponent;
// //                 var rs = r.toString();
// //                 var cs = c.toString();
// //                 var id = rs.concat(cs);
// //                 document.getElementById(id).value = board[r][c];
// //                 eBoard = evaluate(board);
// //                 if (eBoard == 10)
// //                     alert('Player X won!!!');
// //                 else if (eBoard == -10)
// //                     alert('Player O won!!!');
// //                 else
// //                     alert('Draw!!!');
// //             }
// //         });
// //     });
// // }
// // main();
var Player = 'X';
var Opponent = 'O';
var Count = 0;

function isMovesLeft(board) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] == '_')
                return true;
        }
    }
    return false;
}

function evaluate(board) {
    //Row Evaluation
    for (let row = 0; row < 3; row++) {
        if (board[row][0] == board[row][1] && board[row][1] == board[row][2]) {
            if (board[row][0] == Player)
                return 10;
            else if (board[row][0] == Opponent)
                return -10;
        }
    }
    //Column Evaluation
    for (let col = 0; col < 3; col++) {
        if (board[0][col] == board[1][col] && board[1][col] == board[2][col]) {
            if (board[0][col] == Player)
                return 10;
            else if (board[0][col] == Opponent)
                return -10;
        }
    }
    //Diagonal Evaluation
    if (board[0][0] == board[1][1] && board[1][1] == board[2][2]) {
        if (board[0][0] == Player)
            return 10;
        else if (board[0][0] == Opponent)
            return -10;
    }
    if (board[0][2] == board[1][1] && board[1][1] == board[2][0]) {
        if (board[0][2] == Player)
            return 10;
        else if (board[0][2] == Opponent)
            return -10;
    }
    return 0;
}

function miniMaxWithAlphaBeta(board, depth, isMax, alpha, beta) {
    var best;
    Count = Count + 1;
    //Evaluate Score
    var score = evaluate(board);
    if (score == 10)
        return score;
    if (score == -10)
        return score;
    if (isMovesLeft(board) == false)
        return 0;

    if (isMax) {
        best = -Infinity;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                //Check if cell is empty
                if (board[i][j] == '_') {
                    //Make the move
                    board[i][j] = Player;
                    best = Math.max(best, miniMaxWithAlphaBeta(board, depth + 1, !isMax, alpha, beta));
                    board[i][j] = '_';
                    alpha = Math.max(alpha, best);
                    if (alpha >= beta)
                        break;
                }
            }
        }
        return best;
    } else {
        best = Infinity;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] == '_') {
                    board[i][j] = Opponent;
                    best = Math.min(best, miniMaxWithAlphaBeta(board, depth + 1, !isMax, alpha, beta));
                    board[i][j] = '_';
                    beta = Math.min(beta, best);
                    if (alpha >= beta)
                        break;
                }
            }
        }
        return best;
    }
}

function findBestMove(board) {
    var moveVal;
    Count = 0;
    var bestVal = Infinity;
    var bestMove = [-1, -1];

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] == '_') {
                board[i][j] = Opponent;
                moveVal = miniMaxWithAlphaBeta(board, 0, true, -Infinity, Infinity);
                board[i][j] = '_';
                if (moveVal < bestVal) {
                    bestMove = [i, j];
                    bestVal = moveVal;
                }
            }
        }
    }
    return [bestMove, Count];
}

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
                button.value = Player;
                board[row][col] = Player;

                var eBoard = evaluate(board);

                if (eBoard == 10) {
                    document.write('<h1 style="text-align: center; font-weight: 900; font-size: 30px; color: #00f2ff; margin-top: 20%;">Player X won!!!</h1><br>');
                    return;
                } 
                else if (eBoard == -10) {
                    document.write('<h1 style="text-align: center; font-weight: 900; font-size: 30px; color: #00f2ff; margin-top: 20%;">Player O won!!!</h1><br>');
                    return;
                } 
                else if (!isMovesLeft(board)) {
                    document.write('<h1 style="text-align: center; font-weight: 900; font-size: 30px; color: #00f2ff; margin-top: 20%;">Draw!!!</h1><br>');
                    return;
                }

                var result = findBestMove(board);
                var moveRow = result[0][0];
                var moveCol = result[0][1];
                board[moveRow][moveCol] = Opponent;
                var moveButton = document.getElementById(moveRow.toString() + moveCol.toString());
                moveButton.value = Opponent;
                document.getElementById("count").textContent = "AI thought "+result[1]+" times";

                eBoard = evaluate(board);
                if (eBoard == 10) {
                    document.write('<h1 style="text-align: center; font-weight: 900; font-size: 30px; color: #00f2ff; margin-top: 20%;">Player X won!!!</h1><br>');
                    return;
                } 
                else if (eBoard == -10) {
                    document.write('<h1 style="text-align: center; font-weight: 900; font-size: 30px; color: #00f2ff; margin-top: 20%;">Player O won!!!</h1><br>');
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