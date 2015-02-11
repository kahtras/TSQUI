$(document).ready(function() {
	$('#Form').validate({
		submitHandler: function(form) {
    // do other things for a valid form
    var email = $('#email').val();
		var password = $('#password').val();
		var login = false;
		$.ajax({
			url : 'Dashboard_users.json',
			success : function(result) {
				$.each(result, function(key, value) {
					if (email == value.username && password == value.password) {
						console.log("yes");
						login = true;
						
						return ;
					} 
				});
				if(login){
					$('#error').text(" ");
						window.location = "Dashboard_main.html";
				}
				else{
					$('#error').text("Please enter valid user name or password");
				}

			},
			error : function() {
				console.log("wrong");
			}
		});
   }
  }
	);
//	event1.preventDefault();
	// $('#signin').click(function(event) {
		// event.preventDefault();
		// var email = $('#email').val();
		// var password = $('#password').val();
		// $.ajax({
			// url : 'Dashboard_users.json',
			// success : function(result) {
				// $.each(result, function(key, value) {
					// if (email == value.username && password == value.password) {
						// console.log("yes");
						// $('#error').text(" ");
						// window.location = "Dashboard_main.html";
					// } else {
						// console.log("no");
						// $('#error').text("Please enter valid user name or password");
// 					
					// }
				// });
// 
			// },
			// error : function() {
				// console.log("wrong");
			// }
		// });
	// });
});
