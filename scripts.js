// SELECAO DE ELEMENTOS
const op = document.getElementsByClassName("op");
const opn = document.getElementsByClassName("opn");
const ops = document.getElementsByClassName("ops");
const calcular = document.querySelector(".opi");
const display = document.getElementById("display");
const realtime = document.getElementById('realtime');


// DECLARAÇÕES DE VARIAVEIS
var n1, n2, operador;


// FUNCOES

//Capiturar n1, operador e limpar display
function N1ClearDisplay(n,opx) {
	n1 = n;
	operador = opx;
	display.value = "";
	realtime.innerText = n1 + " " + operador
}


// funcao captura qual evento dos numeros foi clicadoe add ao display  
	for(var nt = 0; nt < opn.length; nt++){
		opn[nt].addEventListener("click", function() {
			display.value += this.innerHTML;
		})
	}


// captura n2 e realiza o calculo com base no operador selecionado na funcao N1ClearDisplay
calcular.addEventListener("click", function(){
	n2 = display.value;
	if (operador == "%") {
		np1 = '0.' + n1;
		np2 = parseInt(np1);
		display.value = n2 * np1;
		realtime.innerText = String(" " + n2 );
	}else if(operador == "x"){
		display.value = n1 * n2;
		realtime.innerText += String(" " +  n2);
	}else if(operador == "/"){
		display.value = n1 / n2;
		realtime.innerText += String(" " + n2);
	}else if(operador == "-"){
		display.value = n1 - n2;
		realtime.innerText += String(" " + n2);
	}else if(operador == "+"){
		nx1 = parseInt(n1);
		nx2 = parseInt(n2);
		display.value = nx1 + nx2;
		realtime.innerText += String(" " + nx2);
	}
})



// Função para aceitar apenas numeros
display.addEventListener("keyup", function(e) {
	var n = display.value;
	if (isNaN(n)) {
		var x2 = n.substring(0, n.length - 1) // Pega a ultima posição se for string e apaga
		display.value = x2
	}else{
		console.log("number")
	}
})



// EVENTOS

// %
op[0].addEventListener("click", function() {
	N1ClearDisplay(display.value,'%');
})

// Ce
op[1].addEventListener("click", function() {
	display.value = "";
})

// <=
op[2].addEventListener("click", function() {
	var x = display.value;
	var x2 = x.substring(0, x.length - 1)
	realtime.innerText = x2
	display.value = x2
})

// X
op[3].addEventListener("click", function() {
	N1ClearDisplay(display.value,'x');
})

// /
op[4].addEventListener("click", function() {
	N1ClearDisplay(display.value,'/');
})

// -
op[5].addEventListener("click", function() {
	N1ClearDisplay(display.value,'-');
})
// +
op[6].addEventListener("click", function() {
	N1ClearDisplay(display.value,'+');
})











// Pegar dados numericos dos numeros na parte superior do teclado, 
// teclado do lado esquerdo e dos botoes da propria calculadora 

