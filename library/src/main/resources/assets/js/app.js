
$(":button").click(function() {
    var isbn = this.id;
    alert('About to report lost on ISBN ' + isbn);
    
    var msg = jQuery.parseJSON($.ajax({
		type: "put",
		async: false,
		cache: false,
		url : "/library/v1/books/" + isbn + "?status=lost",
		  success: function(response) {
		        alert(JSON.stringify(response));
		        $('#'+isbn).prop("disabled",true);
		        $('#'+isbn+'Status').html("lost");
		    }
	}).responseText);
    alert( (msg) ? 'Book of ISBN ' + isbn + ' is lost.' : 'Cant report Book of ISBN ' + isbn + ' as lost due to some internal server error.');
});