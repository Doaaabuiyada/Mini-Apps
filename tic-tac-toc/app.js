var player = true; 
var playTimes = 0 ; 
 
function getTexts(){
    var board =[ [$("#00").text() , $("#01").text() ,$("#02").text() ],
    [$("#10").text() , $("#11").text() ,$("#12").text() ],
    [$("#20").text() , $("#21").text() ,$("#22").text() ]]
    return board ; 
}
 

function clickme(elem) {
    
    var id = $(elem).attr("id");
    var buttonText = $('#' + id).text(); 
     
    if(buttonText === '-' ) {
        playTimes++; 
        if(player ){
            $('#' + id).text('X'); 
            player = !player;
        }else{
            $('#' + id).text('O');
            player = !player;
        }
    }
    else{
        alert("choose an empty box.");
        
    }
    var board = getTexts();
    // check if there any winner 
    var win = rules(board);
    //console.log(win); 
    
    //check if the board full 
    var fullBoardvar = fullBoard() ; 
    //console.log(fullBoard()); 
    var endGameval = endGame(win , fullBoardvar);
    if (endGameval){
        alert("Game Over"); 
    } 
    //console.log(endGameval); 
}

function rules (board){
    var checkRows = function(board){
        // row 0 
        for (var i = 0 ; i < 3 ; i++){
            
            if (board[i][0] === board[i][1] &&  board[i][1] ===board[i][2] && board[i][2] !=='-'){
                return true ; 
            }
        }
        return false ; 
    }
    var checkColons = function(board){
        for (var i = 0 ; i < 3 ; i++){
            if (board[0][i] === board[1][i] &&  board[1][i] === board[2][i] && board[2][i] !=='-'){
                return true ; 
            }
        }
        return false; 
    }
    var checkDiagonal = function(board){
        if (board[0][0] === board[1][1]  && board[1][1] === board[2][2] && board[2][2] !=='-'){
            return true ; 
        }else if (board[2][0] === board[1][1]  && board[1][1]=== board[0][2] && board[0][2] !=='-' ){
            return true ; 
        }

    }
    var bool = false ; 
    if (checkRows(board) || checkColons(board) || checkDiagonal(board)){
        bool = true ; 
    }
    



return bool; 
}

var fullBoard = function (){
    if (playTimes === 9 ){
        return true ; 
    }else{
        return false; 
    }
    
}

var endGame = function (full , win){
    if (full || win ){
        return true ; 
    }
    return false ; 
}

var reset = function(){
    console.log("Reset"); 
    window.location.reload()
}