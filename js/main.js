$(function(){
alert('You are nice');
$('.alert').addClass('good');

$('.alert').click(function(){
	$(this).fadeOut();
});
});

function alert(message) {
    $('body').append('<div class="alert">'+message+'</div>');
}


