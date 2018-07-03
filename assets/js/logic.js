/* Fungsi Login */
function goToLogin() {
	var a = "";
	var b = "admin";
	var x = document.getElementById("login-mail");
	var y = document.getElementById("passwd");
	var z = document.getElementById("notification");
   	if (x.value === a && y.value === y) {
   		 window.open("/admin/index.html");
   	}
   	else if (x.value="" || x.value=null) {
   		z.innerHTML = "Isi Email Anda !!!!!!!!!";
   	}
   	else if (y.value="" || y.value=null) {
   		z.innerHTML = "Isi Password Anda !!!!!!!!";
   	}
   	else if (x.value!=a) {
   		z.innerHTML = "Email tidak terdaftar !!!...";
	} 
	else if (y.value!=a) {
		z.innerHTML = "Password Salah!!!!....";
	}
}

var checkLoginPass = function () {
    var login = document.getElementById("login-mail").value;
    var pass = document.getElementById("login-pass").value;
    if (login === "admin@pesut.com" && pass === "admin") {
        window.location("http://www.google.com");
    }
    else {
    	window.close();
    }
};