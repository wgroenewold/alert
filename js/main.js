jQuery(function ($) {
alert('You are nice');
$('.alert').addClass('good');

$(this).on('click', '.alert', function(){
	$(this).fadeOut();
});
});

function alert(message) {
    jQuery('body').prepend('<div class="alert">'+message+'</div>');
}


