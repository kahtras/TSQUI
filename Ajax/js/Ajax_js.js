$(document).ready(function() {
	var selected = "";
	$('.select-opt a').click(function(){
		console.log("dd")
		selected = $(this).text()
		console.log(selected)
	})
	$('.contacts').hide();
	$('.searchbtn').click(function(event) {
		event.preventDefault();
		$('.contacts').show();
		$('.contacts tbody').empty();
		//console.log($('#options').val())
		var searchAcc = $('#Search').val();
		$.ajax({
			url : 'data/data.json',
			success : function(contacts) {
				$.each(contacts, function(key, value) {
					//if (selected == "Account "){
						console.log($('#Search').val())
						console.log(value.Account)
					if (searchAcc == value.Account) {
						var tr = "<tr><td>" + (key + 1) + "</td><td>" + value.FirstName + "</td><td>" + value.LastName + "</td><td>" + value.StreetAddress + "</td><td>" + value.City + "</td><td>" + value.State + "</td><td>" + value.ZipCode + "</td><td>" + value.Account + "</td></tr>";
						$('.contacts tbody').append(tr);
					}
					//	}
				});
			},
			error : function() {
				alert("ERROR!!");
			}
		});
			$('#Search').val("");
	});

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
