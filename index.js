var id ="123";
var ps ="123";
function myfunction() {
    var id_in = document.getElementById("Username").value;
    var ps_in = document.getElementById("Password").value;

    if ((id_in === "") || (ps_in === "")){
        alert("Bạn chưa nhập tài khoản hoặc mật khẩu");
    }
    else if ((id_in === id) && (ps_in === ps)){
    alert("Đăng nhập thành công!");
    document.getElementById("box_1").style.display="none";
    document.getElementById("box").style.display="block";
    }
    else alert("Bạn nhập sai tài khoản hoặc mật khẩu");
}

function calfunction1() {
    document.getElementById("trangtinh").style.display="block";
    document.getElementById("nhap").style.display="none";
    document.getElementById("b1").style.display="none";
    document.getElementById("b2").style.display="block";
}
function calfunction2() {
    document.getElementById("trangtinh").style.display="none";
    document.getElementById("nhap").style.display="block";
    document.getElementById("b1").style.display="block";
    document.getElementById("b2").style.display="none";
}