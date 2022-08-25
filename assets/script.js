var today = $('#currentDay');
var scheculeForm = $('.scheduler');
var textArea = $('.note');
var saveIcon = $('.save-icon');

today.textContent = moment().format('dddd, MMMM, Do YYYY, hh:mm:ss a');

// text input area
// $('.container').on('click', '.note', function () {
//     var parentId = $(this).parent().attr('data-id');
//     var textArea = $(this).prev().val();
//     console.log(textArea);
//     localStorage.setItem(parentId, textArea);
// });

// $('.note').each(function () {
//     var parentId = $(this).parent().attr('data-id');
//     var textArea = localStorage.getItem(parentId);
//     $(this).val(textArea);
// });


var currentTime = moment().hour();
for (var i = 9; i < 20; i++) {
    if(i == currentTime){
        $("textarea").css({"background-color": "#ff6961", color: "white"});
    } else if (i < currentTime) {
        $("textarea").css({"background-color": "#d3d3d3", color: "white"});
    } else {
        $("textarea").css({"background-color": "#77dd77", color: "white"});
    }
}  
    
    // var currentTime = moment().format('HH');
    // console.log(currentTime);
    

    // for (var i = 9; i < 20; i++){
    //     if(i == currentTime)$('.note$[i]').addClass('present');
    //     if(i < currentTime)$('.note$[i]').addClass('past');
    //     if(i > currentTime)$('.note$[i]').addClass('future');
    // }
 
 
    
