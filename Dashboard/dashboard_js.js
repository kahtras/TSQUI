$(document).ready(function() {
	$('#signin').click(function() {
		var email = $('#email').val();
		var password = $('#password').val();
		$.ajax({
			url : 'Dashboard_users.json',
			success : function(result) {
				$.each(result, function(key, value) {
					if (email == value.username && password == value.password) {
						console.log("yes");
					}
				});
			}
		});
	});
});
