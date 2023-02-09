$(document).ready(function(){

    for (let i = 0; i < 9; i++) {
        $(".board").append( $("<div class='square'></div>") );
    }

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            $(".board2").append( $("<div class='square2'></div>") );
        }
    }

});