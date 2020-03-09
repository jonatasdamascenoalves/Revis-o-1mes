document.getElementById('botao').addEventListener('click', function(e) {
    var nome = document.getElementById("nome").value
    if (nome.length <= 3) {
        document.getElementById("nome").style.backgroundColor = "red";
    } else {
        document.getElementById("nome").style.backgroundColor = "white";
    }
});
var email = document.getElementById('email').value;
if (email.indexof('@') == -1 ||
    email.indexof('.') == -1 ||
    email.length == 0) {
    e.prevenDefault()
    document.getElementById('email').style.borderColor = 'black'
} else {
    document.getElementById('email').style.borderColor = 'red'
}