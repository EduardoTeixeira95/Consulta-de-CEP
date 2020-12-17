function validar(){

var cep = document.getElementById("numero");
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("texto").innerHTML = cep;
      this.responseText;
    }
}   

xhttp.open("GET","https://cep.awesomeapi.com.br/json/09371110",true, )
xhttp.send(JSON.stringify(
    {
"cep": "03375000",
"address_type": "Rua",
"address_name": "Hemisfério",
"address": "Rua Hemisfério",
"state": "SP",
"district": "Chácara Belenzinho",
"city": "São Paulo",
"ddd": "11"
}
}
