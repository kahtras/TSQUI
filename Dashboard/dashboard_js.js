$(document).ready(function() {
//	$('Form').validate(event1);
//	event1.preventDefault();
	$('#signin').click(function(event) {
		event.preventDefault();
		var email = $('#email').val();
		var password = $('#password').val();
		$.ajax({
			url : 'Dashboard_users.json',
			success : function(result) {
				$.each(result, function(key, value) {
					if (email == value.username && password == value.password) {
						console.log("yes");
						$('#error').text(" ");
						window.location = "Dashboard_main.html";
					} else {
						console.log("no");
						$('#error').text("Please enter valid user name or password");
					
					}
				});

			},
			error : function() {
				console.log("wrong");
			}
		});
	});
});
