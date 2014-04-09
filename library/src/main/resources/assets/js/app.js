
$(":button").click(function() {
    var isbn = this.id;
    alert('About to report lost on ISBN ' + isbn);
    
    var text = jQuery.parseJSON($.ajax({
		type: "put",
		async: false,
		cache: false,
		url : "/library/v1/books/" + isbn + "?status=lost",
	}).responseText);
    alert( (text) ? 'Book ISBN ' + isbn + ' was reported lost.' : 'Failed to report Book ISBN ' + isbn + ' lost.');
});
