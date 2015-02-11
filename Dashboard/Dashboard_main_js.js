$(document).ready(function() {
	$('#usrtbl').hide();
	$('#searchbtn').click(function(event) {
		event.preventDefault();
		$('#usrtbl').show();
		$('.usertable tbody').empty();
		var searchinfo = $('#search').val();
		var searchcrit = $('#criteria').val();
		console.log(searchcrit);
		$.ajax({
			url : 'data.json',
			success : function(result) {
				$.each(result, function(key, value) {
					if (searchcrit == "Account") {
						if (searchinfo == value.Account) {
							var tr = "<tr><td>" + value.FirstName + "</td><td>" + value.LastName + "</td><td>" + value.Account + "</td><td>" + value.Relationship + "</td></tr>";
							$('.usertable tbody').append(tr);
						}
					} else if (searchcrit == "First Name") {
						if (searchinfo == value.FirstName) {
							var tr = "<tr><td>" + value.FirstName + "</td><td>" + value.LastName + "</td><td>" + value.Account + "</td><td>" + value.Relationship + "</td></tr>";
							$('.usertable tbody').append(tr);
						}
					} else if (searchcrit == "Last Name") {
						if (searchinfo == value.LastName) {
							var tr = "<tr><td>" + value.FirstName + "</td><td>" + value.LastName + "</td><td>" + value.Account + "</td><td>" + value.Relationship + "</td></tr>";
							$('.usertable tbody').append(tr);
						}
					} else if (searchcrit == "Email") {
						if (searchinfo == value.Account) {
							var tr = "<tr><td>" + value.FirstName + "</td><td>" + value.LastName + "</td><td>" + value.Account + "</td><td>" + value.Relationship + "</td></tr>";
							$('.usertable tbody').append(tr);
						}
					}
				});
			},
			error : function() {
				console.log("Error!");
			}
		});
	});
});

