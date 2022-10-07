// Selecao de elementos
const op = document.getElementsByClassName("op");
const opn = document.getElementsByClassName("opn");
const ops = document.getElementsByClassName("ops");
const resultado = document.querySelector("opi");
const display = document.getElementById("display");



// funcoes


// Eventos
var n1, n2;
var operador;


// %
op[0].addEventListener("click", function() {
	display.value = "%";
})

// Ce
op[1].addEventListener("click", function() {
	display.value = "Ce";
})

// <=
op[2].addEventListener("click", function() {
	display.value = "<=";
})

// X
op[3].addEventListener("click", function() {
	n1 = display.value;
	display.value = n1 + " X ";

	display.style.cursor = "pointer";
})

// /
op[4].addEventListener("click", function() {
	display.value = "/";
})

// -
op[5].addEventListener("click", function() {
	display.value = "-";
})
// +
op[6].addEventListener("click", function() {
	display.value = "+";
})



function calcular(n1,n2,operador){
	var n1 = n1;
	var n2 = n2;
	var p = operador;
	if(p == "%"){

	}else if(p == "ce"){

	}else if(p == "<="){

	}else if(p == "x"){
		return n1 * n2;
	}else if(p == "/"){

	}else if(p == "-"){

	}else if(p == "+"){

	}else if(p == "="){

	}
}

// Pegar dados numericos dos numeros na parte superior do teclado, 
// teclado do lado esquerdo e dos botoes da propria calculadora 

