function validar(){

var cep = document.getElementById("numero");
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
if (this.readyState == 4 && this.status == 200) {
var json = JSON.parse(this.responseText);
document.getElementById("texto").innerHTML = '<br>'+ '<h2>' + 'Endereço do CEP'+ '</h2>' + '<ul>' +
'<li>' + "CEP: " + json.cep + '</li>' + '<br>' +
'<li>' + "Endereço: " + json.address + '</li>' + '<br>' +
'<li>' + "Tipo de endereço: " + json.address_type + '</li>' + '<br>' + 
'<li>' + "Estado: " + json.state + '</li>' + '<br>' +
'<li>' + "Bairro: " + json.district + '</li>' + '<br>' +
'<li>' + "Cidade: " + json.city + '</li>' + '<br>' + 
'<li>' + "DDD: " + json.ddd + '</li>' + '<br>' +
'</ul>'
}
}   
        
xhttp.open("GET","https://cep.awesomeapi.com.br/json/" + cep.value,true,)
xhttp.send();
}