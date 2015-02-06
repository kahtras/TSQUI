$(document).ready(function() {
	$('.contacts').hide();
	//if ($('#select').text() == "Account "){
	$('.searchbtn').click(function(event) {
		event.preventDefault();
		$('.contacts').show();
		$('.contacts tbody').empty();
		$.ajax({
			url : 'data/data.json',
			success : function(contacts) {
				$.each(contacts, function(key, value) {
					if ($('#Search').val() == value.Account) {
						var tr = "<tr><td>" + (key + 1) + "</td><td>" + value.FirstName + "</td><td>" + value.LastName + "</td><td>" + value.StreetAddress + "</td><td>" + value.City + "</td><td>" + value.State + "</td><td>" + value.ZipCode + "</td><td>" + value.Account + "</td></tr>";
						$('.contacts tbody').append(tr);
					}
				});
			},
			error : function() {
				alert("ERROR!!");
			}
		});
	//	$('#Search').val("");
	});
//	}
	$('.showAll').click(function(event) {
		event.preventDefault();
		$('.contacts').show();
		$('.contacts tbody').empty();
		$.ajax({
			url : 'data/data.json',
			success : function(contacts) {
				$.each(contacts, function(key, value) {
					var tr = "<tr><td>" + (key + 1) + "</td><td>" + value.FirstName + "</td><td>" + value.LastName + "</td><td>" + value.StreetAddress + "</td><td>" + value.City + "</td><td>" + value.State + "</td><td>" + value.ZipCode + "</td><td>" + value.Account + "</td></tr>";
					$('.contacts tbody').append(tr);
				});
			},
			error : function() {
				alert("ERROR!!");
			}
		});
	});

});
