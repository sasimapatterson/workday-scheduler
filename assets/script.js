var today = document.querySelector('#currentDay');
var scheculeForm = $('.scheduler');
var textArea = $('.note');
var saveIcon = $('.save-icon');

today.textContent = moment().format('dddd, MMMM, Do YYYY, hh:mm:ss a');

// text in
$('.schedule').on('click', '.save-icon', function () {
    var parentId = $(this).parent().attr('data-id');
    console.log(parentId);
    var textArea = $(this).prev().val();
    console.log(textArea);
    localStorage.setItem(parentId, textArea);
});

var currentTime = moment().hour();


$('.note').each(function () {
    var parentId = $(this).parent().attr('data-id');
    var textArea = localStorage.getItem(parentId);
    $(this).val(textArea);

    if(parentId < currentTime){$(this).css("background-color", '#d3d3d3');}
    if(parentId == currentTime){$(this).css("background-color", '#ff6961');}
    if(parentId > currentTime){$(this).css("background-color", '#77dd77');}
});


