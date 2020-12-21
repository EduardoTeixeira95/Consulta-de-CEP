function validar(){

var cep = document.getElementById("numero");
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) {
        var json = JSON.parse(this.responseText);
            document.getElementById("texto").innerHTML = '<br>' + 'Endereço do CEP'+ '<ul>' +
            '<li>' + json.cep + '</li>' +
            '<li>' + json.address + '</li>' + 
            '<li>' + json.address_type + '</li>' +
            '<li>' + json.state + '</li>' +
            '<li>' + json.district + '</li>' +
            '<li>' + json.city + '</li>' +
            '<li>' + json.ddd + '</li>' +
            '</ul>'
    }
}   

xhttp.open("GET","https://cep.awesomeapi.com.br/json/" + cep.value,true,)
xhttp.send();


    }

    //formatar o texto igual no pdf informado!
    // ref do JSON linha 94 e 95 https://github.com/felipe199903/examples_validation_front/blob/master/js/script.js 