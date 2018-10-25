function carousel() {
	var emotions = document.getElementsByClassName("emotion");
	var currentVisible = -1;
	for (i = 0; i < 4; ++i) {
		if (emotions[i].style.visibility == "visible") {
			currentVisible = i;
			break;
		}
	}
	if (currentVisible == -1) {
		document.getElementsByClassName("emotion")[0].style.visibility = "visible";
	}
	moveEmotion();
	setTimeout(carousel, 2000);
}

function moveEmotion() {
	var emotions = document.getElementsByClassName("emotion");
	var currentVisible;
	for (i = 0; i < 4; ++i) {
		if (emotions[i].style.visibility == "visible") {
			currentVisible = i;
			break;
		}
	}
	for (i = 0; i < 4; ++i) {
		emotions[i].style.visibility = "hidden";
	}
	emotions[(currentVisible + 1) % 4].style.visibility = "visible";
}

$(document).ready(function() {
	$("a[href='#go-to-top']").click(function() {
		$("html, body").animate({
			scrollTop : 0
		}, "slow");
		return false;
	});
});

$(document).ready(function() {
	$(".btn-dang-nhap").click(function() {
		window.location.replace("signin.jsp");
	});
});

function setCookie(username) {
	var d = new Date();
	d.setTime(d.getTime() + 10 * 24 * 60 * 60 * 1000);
	var expires = "expires=" + d.toUTCString();
	document.cookie = "username=" + username + ";" + expires + ",path=/";
}

function readCookie() {
	if (document.cookie) {
		var theCookie = document.cookie;
		var theElements = theCookie.split(";");
		for (i = 0; i < theElements.length; ++i) {
			var specificElement = theElements[i];
			if (specificElement.indexOf("username=") == -1) {
				continue;
			}
			return specificElement.split("=")[1];
			break;
		}
	}
	return "";
}

function setUsername() {
	document.getElementsByName('username')[0].value = readCookie();
}

$(document).ready(function() {
	$(".btn-register").click(function() {
		var name = document.getElementsByName('username')[0].value;
		var email = document.getElementsByName('email')[0].value;
		var graduated = document.getElementsByName('graduated')[0].value;
		var address = document.getElementsByName('address')[0].value;
		var password = document.getElementsByName('password')[0].value;
		$.ajax({
			url : 'RegisterServlet',
			data : {
				"name" : name,
				"address" : address,
				"email" : email,
				"graduated" : graduated,
				"password" : password,
			},
			type : 'post',
			cache : false,
			success : function(data) {
				alert(data);
			},
			error : function() {
				alert('error');
			}
		});

	});
});

$(document).ready(function() {
	$(".btn-signin").click(function() {
		var name = document.getElementsByName('username')[0].value;
		var password = document.getElementsByName('password')[0].value;
		$.ajax({
			url : 'SignInServlet',
			data : {
				"name" : name,
				"password" : password
			},
			type : 'post',
			cache : false,
			success : function(data) {
				alert(data);
			},
			fail : function() {
				alert('error');
			}
		});

	});
});

$(document).ready(function() {
	$("td").click(function() {
		if($(this).hasClass("Delete")){
			var id = $(this).closest('tr').children(':first').text();
			var elementToHide = $(this).closest('tr');
			$.ajax({
				url : 'CarManipulationServlet',
				data : {
					"action" : "delete",
					"id" : id,
				},
				type : 'post',
				cache : false,
				success : function(data) {
					elementToHide.css("display", "none");
				},
				fail : function() {
					alert('error');
				}
			});
			
		}

	});
});


$(document).ready(function() {
	$("td").click(function() {
		if($(this).hasClass("Update")){
			
			var former_id = $(this).closest('tr').children(':first').text();
			var former_maker = $(this).closest('tr').children('td:nth-child(2)').text();
			var former_model = $(this).closest('tr').children('td:nth-child(3)').text();
			var former_year = $(this).closest('tr').children('td:nth-child(4)').text();
			var former_color = $(this).closest('tr').children('td:nth-child(5)').text();
			var former_note = $(this).closest('tr').children('td:nth-child(6)').text();

			document.getElementsByName('action_type')[0].value = 'update';
			document.getElementsByName('form_id')[0].value = former_id;
			document.getElementsByName('form_maker')[0].value = former_maker;
			document.getElementsByName('form_model')[0].value = former_model;
			document.getElementsByName('form_year')[0].value = former_year;
			document.getElementsByName('form_color')[0].value = former_color;
			document.getElementsByName('form_note')[0].value = former_note;
			$(".carform")[0].style.visibility = "visible";
		}

	});
});


$(document).ready(function() {
	$(".btn-insert").click(function() {
		document.getElementsByName('action_type')[0].value = 'insert';
		document.getElementsByName('form_id')[0].value = "";
		document.getElementsByName('form_maker')[0].value = "";
		document.getElementsByName('form_model')[0].value = "";
		document.getElementsByName('form_year')[0].value = "";
		document.getElementsByName('form_color')[0].value = "";
		document.getElementsByName('form_note')[0].value = "";
		$(".carform")[0].style.visibility = "visible";

	});
});


$(document).ready(function() {
	$(".btn-done").click(function() {
		var actionType = document.getElementsByName('action_type')[0].value;
		var id = document.getElementsByName('form_id')[0].value;
		var maker = document.getElementsByName('form_maker')[0].value;
		var model = document.getElementsByName('form_model')[0].value;
		var year = document.getElementsByName('form_year')[0].value;
		var color = document.getElementsByName('form_color')[0].value;
		var note = document.getElementsByName('form_note')[0].value;
		var self = this;
		var tableElement = $('#carTable')[0];
		var rows = $('#carTable tr');
		var count =  rows.length;
		alert(count);
		$.ajax({
			url : 'CarManipulationServlet',
			data : {
				"action" : actionType,
				"id" : id,
				"maker" : maker,
				"model" : model,
				"year" : year,
				"color" : color,
				"note" : note,
			},
			type : 'post',
			cache : false,
			success : function(data) {
				alert('done');
				if(data == 'true' && actionType == 'update'){
					for(var i = 0 ; i < count ; ++i){
						if(rows.eq(i).children(':first').text() == id){
							rows.eq(i).children('td:nth-child(2)').text(maker);
							rows.eq(i).children('td:nth-child(3)').text(model);
							rows.eq(i).children('td:nth-child(4)').text(year);
							rows.eq(i).children('td:nth-child(5)').text(color);
							rows.eq(i).children('td:nth-child(6)').text(note);
							break;
						}
					}
					document.getElementsByClassName("carform")[0].style.visibility = "hidden";
				}else if (data == 'true' && actionType == 'insert'){
					($(self).closest('body')).find('#carTable').append('<tr><td>' + id + '</td><td>' + maker + '</td><td>' 
							+ model + '</td><td>' + year + '</td><td>' + color + '</td><td>' + note + '</td></tr>');
					document.getElementsByClassName("carform")[0].style.visibility = "hidden";
				}
				
			},
			fail : function() {
				alert('error');
			}
		});

	});
});
