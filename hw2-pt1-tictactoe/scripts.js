$(document).ready(function(){

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            $(".board").append( $("<div class='square'></div>") );
        }
    }

});