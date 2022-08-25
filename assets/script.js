var today = document.querySelector('#currentDay');
// var scheculeForm = document.querySelector('.scheduler');
// var textArea = document.querySelector('.note');
// var saveIcon = document.querySelector('.save-icon');

today.textContent = moment();

// text input area
$('.scheduler').on('click', '.note', function () {
    var parentId = $(this).parent().attr('data-id');
    var textArea = $(this).prev().val();
    console.log(textArea);
    localStorage.setItem(parentId, textArea);
});

$('.scheduler').each(function () {
    var parentId = $(this).parent().attr('data-id');
    var textArea = localStorage.getItem(parentId);
    $(this).val(textArea);
});