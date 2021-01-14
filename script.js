function validar(){

var cep = document.getElementById("numero");
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
if (this.readyState == 4 && this.status == 200) {
var json = JSON.parse(this.responseText);
document.getElementById("texto").innerHTML = '<h2>' + 'Endereço do CEP'+ '</h2>' + '<ul>' +
'<li>' + "CEP: " + json.cep + '</li>' +
'<li>' + "Endereço: " + json.address + '</li>' + 
'<li>' + "Tipo de endereço: " + json.address_type + '</li>' +
'<li>' + "Estado: " + json.state + '</li>' +
'<li>' + "Bairro: " + json.district + '</li>' +
'<li>' + "Cidade: " + json.city + '</li>' +
'<li>' + "DDD: " + json.ddd + '</li>' +
'</ul>'
}
}        
xhttp.open("GET","https://cep.awesomeapi.com.br/json/" + cep.value,true,)
xhttp.send();
}