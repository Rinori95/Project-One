(function($, window, document) {
	"use strict";
	$(function() {
		//##Variables
		var $body = $('body'),
			$window = $(window),
			$doc = $(document),
			defaultEasing = [0.4, 0.0, 0.2, 1];
			//End Variables
		
        $(document).on('click','.btn',function(e) {
		  	//handler code here
		  	var item = $(this).closest(".item"),
		  		id = item[0].id - 1;
        	$.ajax({
				type: "GET",
				url: "users.json",
				success: function(result){
					var output="";
					output += '<div class="modal-header">';
						output += '<h5 class="modal-title" id="exampleModalLabel">Profile Modal</h5>';
					    output += '<button type="button" class="close" data-dismiss="modal" aria-label="Close">';
					        output += '<span aria-hidden="true">&times;</span>';
					    output += '</button>';
					output += '</div>';
					output += '<div class="modal-body">';
						output += '<div class="col-lg-12">';
							output += '<div class="modal-row-info">';
								output += '<h5 class="modal-title">Name: <b>'+result[id].name+'</b></h5>';
							output += '</div>';
							output += '<div class="modal-row-info">';
								output += '<h5 class="modal-title">Username: <b>'+result[id].username+'</b></h5>';
							output += '</div>';
							output += '<div class="modal-row-info">';
								output += '<h5 class="modal-title">Email: <b>'+result[id].email+'</b></h5>';
							output += '</div>';
						output += '</div>';
						output += '<div class="col-lg-12">';
							output += '<h5 class="modal-title"><b>Adress</b></h5>';
							output += '<div class="modal-row-info left-padding">';
								output += '<h5 class="modal-title"><b>'+result[id].address.street+'-' + result[id].address.suite +', ' 
										+ result[id].address.city +', ' + result[id].address.zipcode 
										+'<br/>lat: ' + result[id].address.geo.lat 
										+'<br/>lng: ' + result[id].address.geo.lng 
										+'</b></h5>';
							output += '</div>';
							output += '<div class="modal-row-info">';
								output += '<h5 class="modal-title">Phone: <b>'+result[id].phone+'</b></h5>';
							output += '</div>';
							output += '<div class="modal-row-info">';
								output += '<h5 class="modal-title">website: <b>'+result[id].website+'</b></h5>';
							output += '</div>';
							output += '<h5 class="modal-title"><b>Company</b></h5>';
							output += '<div class="modal-row-info left-padding">';
								output += '<h5 class="modal-title">name: <b>'+result[id].company.name+'</b></h5>';
								output += '<br/><h5 class="modal-title">Catch Phrase: <b>'+result[id].company.catchPhrase+'</b></h5>';
								output += '<br/><h5 class="modal-title">BS: <b>'+result[id].company.bs+'</b></h5>';
							output += '</div>';
						output += '</div>';
					output += '</div>';
					$('#modalContent').html(output);
				}
			});
		});
		$(document).ready(function () {
			$.ajax({
				type: "GET",
				url: "users.json",
				success: function(result){
					var output="";
					for (var i in result){
						var itemClass = ''; 
						if (i % 3 == 0) {
							itemClass = 'clearleft';
						}
						output+='<div class="col-lg-4 col-sm-12 item '+itemClass+'" id="'+result[i].id+'">';
							output+='<div class="well">';
								output+='<img src="images/profile.png" class="img-thumbnail" alt="profile">';
								output+='<div class="card_content">';
									output+='<h4 >'+ result[i].name +'</h4>';
									output+='<p class="cat"><strong>Email: </strong>'+ result[i].email +'</p>';
									output+='<p class="date"><strong>Website: </strong>'+ result[i].website +'</p>';
									output+='<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#meShume">View Profile</button>';
								output+='</div>';
							output+='</div>';
						output+='</div>';
					}
					$('#profilesHolder').html(output);
				}
			});
		});
	});
}(window.jQuery, window, document));
