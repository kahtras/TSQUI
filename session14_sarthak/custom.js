/*function updateUser() {
var firstName = document.getElementById('firstName').value;
var lastName = document.getElementById('lastName').value;
var phone = document.getElementById('lastName').value;
var email = document.getElementById('email').value;
var edit = '<button type="button" onclick=edit(this)><span class="glyphicon glyphicon-pencil" aria-hidden="true" onclick='edit()'></span></button>';
var dlt = '<button type="button" onclick=dlt(this)><span class="glyphicon glyphicon-trash" aria-hidden="true" onclick='dlt()'></span></button>';

var table = document.getElementById('userTable');
var rowLength = table.rows.length;
console.log(rowLength);

var row = table.insertRow();
var td0 = row.insertCell(0);
var td1 = row.insertCell(1);
var td2 = row.insertCell(2);
var td3 = row.insertCell(3);
var td4 = row.insertCell(4);
var td5 = row.insertCell(5);

td0.innerHTML = rowLength;
td1.innerHTML = firstName;
td2.innerHTML = lastName;
td3.innerHTML = email;
td4.innerHTML = edit;
td5.innerHTML = dlt;

q = td5.parentNode.rowIndex;
console.log(q);

clear();
return false;

}

function edit() {
document.getElementById('firstName').value = row.insertCell(1).innerHTML;
document.getElementById('lastName').value = row.insertCell(2).innerHTML;
document.getElementById('email').value = row.insertCell(2).innerHTML;
}

function dlt(r) {
var i = r.parentNode.rowIndex;
console.log(i);
document.getElementById('userTable').deleteRow(i);
}

function clear() {
document.getElementById('firstName').value = "";
document.getElementById('lastName').value = "";
document.getElementById('email').value = "";
}*/

//var submit = $('#submit').show();
//var update = $('#update').hide();

function updateUser() {
	console.log("dd")
	var firstName = $('#firstName').val();
	var lastName = $('#lastName').val();
	var email = $('#email').val();
	var sno = $('tr', $('#userTable')).length;
	var edit = ('<button type="button" class="edit"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></button>');
	var dlt = ('<button type="button" onclick="dlt(this)"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></button>');
	var id = Math.floor(Math.random() * 10000000);
	var submit = $('#submit').show();
	var update = $('#update').hide();
	console.log(firstName, lastName, email, sno, id);

	$('<tr><td>' + sno + '</td><td>' + firstName + '</td><td>' + lastName + '</td><td>' + email + '</td><td>' + edit + '</td><td>' + dlt + '</td><td>' + id + '</td></tr>').appendTo('#userTable');

	clear();

	//return false;

}


$(document).ready(function(){
	
	$('body').on('click','#submit',function(event){
		event.preventDefault();
		var firstName = $('#firstName').val();
	var lastName = $('#lastName').val();
	var email = $('#email').val();
	var sno = $('tr', $('#userTable')).length;
	var edit = ('<button type="button" class="edit"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></button>');
	var dlt = ('<button type="button" onclick="dlt(this)"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></button>');
	var id = Math.floor(Math.random() * 10000000);
	var submit = $('#submit').show();
	var update = $('#update').hide();
	console.log(firstName, lastName, email, sno, id);

	$('<tr><td>' + sno + '</td><td>' + firstName + '</td><td>' + lastName + '</td><td>' + email + '</td><td>' + edit + '</td><td>' + dlt + '</td><td>' + id + '</td></tr>').appendTo('#userTable');

	clear();
	});
	
	$('body').on('click','.edit',function(event){
		var submit = $('#submit').hide();
	var update = $('#update').show();
		var targetId = $(this).parent().parent().find('td:last-child').text();
		$('#firstName').val($(this).parent().parent().find('td:eq(1)').text());
	$('#lastName').val($(this).parent().parent().find('td:eq(2)').text());
	$('#email').val($(this).parent().parent().find('td:eq(3)').text());
	
	$('form').attr("data-target",targetId)
	});
});

function clear() {
	$('#firstName').val("");
	$('#lastName').val("");
	$('#email').val("");
}

function edit(localThis) {
	console.log($(this))
	//console.log($('this').parent().parent().find('td:last-child').text())
	var submit = $('#submit').hide();
	var update = $('#update').show();
	//var index = $(localThis).parent().parent().index();
	//console.log(index);
	//$(localThis).parent().parent().find('td:eq(1)').remove();
	$('#firstName').val($(localThis).parent().parent().find('td:eq(1)').text());
	$('#lastName').val($(localThis).parent().parent().find('td:eq(2)').text());
	$('#email').val($(localThis).parent().parent().find('td:eq(3)').text());
	
}

function dlt(localThis) {
	$(localThis).parent().parent().remove();
	//.css({"border":"10px solid red"});
}

$('#update').click(function(event) {
	event.preventDefault();
		// $(localThis).parent().parent().find('td:eq(1)').text($('#firstName').val());
		// $(localThis).parent().parent().find('td:eq(2)').text($('#lastName').val());
		// $(localThis).parent().parent().find('td:eq(3)').text($('#email').val());
		
		//var array = ["a","b","c","d"]
		var targetId = $('form').attr('data-target');
		
		// $.each(array,function(key,value){
			// console.log("Key : "+ key)
			// console.log("value :" + value)
		// })
		
		$.each($('#userTable tr'),function(key,value){
			var localId = $(value).find('td:last-child').text()
			if(localId == targetId){
				$(value).find('td:eq(1)').text($('#firstName').val());
				$(value).find('td:eq(2)').text($('#lastName').val());
				$(value).find('td:eq(3)').text($('#email').val());
			}
			// $.each($(value).find('td'),function(i,v){
				// console.log(v);
			// })
		})
		
		var submit = $('#submit').show();
		var update = $('#update').hide();
		clear();
	});
