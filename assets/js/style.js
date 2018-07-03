/* Login Content */
function viewPasswd() {
	var x = document.getElementById("login-pass");
	var y = document.getElementById("mata");
   	if (x.type === "password") {
       	x.type = "text";
       	y.innerHTML = "visibility";
   	} else {
       	x.type = "password";
       	y.innerHTML = "visibility_off";
	} 
}

/* Dropdown Menu */
$('.dropdown-trigger').dropdown();

/* Show/Off Modal Login */
$(document).ready(function(){
    $('.modal').modal();
});

/* Menu Admin Hoverable */
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems, {
    direction: 'top'
  });
});

/* DataTables */
$(document).ready( function () {
    $('#tabel-data').DataTable();
} );