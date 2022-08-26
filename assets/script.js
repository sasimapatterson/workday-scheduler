var today = document.querySelector('#currentDay');
var scheduleForm = $('.scheduler');
var textArea = $('.note');
var saveIcon = $('.saveBtn');

today.textContent = moment().format('dddd, MMMM, Do YYYY, hh:mm:ss a');


$('.scheduler').on('click', '.saveBtn', function (event) {
    var parentId = $(event.target).parent().attr('data-id');
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


