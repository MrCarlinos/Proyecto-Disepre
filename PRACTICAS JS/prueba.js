/*
EJERCICIO 4

let variable1 = true;
let variable2 = 5;
let variable3 = false;
let variable4 = "hola";
let variable5 = "adios"; 
let variable6 = 2;  

let aux=variable4>variable5;

console.log("Comparando strings: "+aux);

console.log("Boolean 1:"+variable1 || variable3);

console.log("Boolean 2:"+ !variable3);

let booleano=variable1 && variable3;

console.log("Boolean 3:"+booleano);

console.log(variable2+variable6);
console.log(variable2*variable6);
console.log(variable2/variable6);
console.log(variable2%variable6);
var numero1 = 5;
var numero2 = 8;
if(numero1+1 < numero2) {
  alert("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}

console.log(numero1);
*/
/* EJERCICIO 6
	let num1=+prompt("Dame el primer número");
	let num2=+prompt("Dame el segundo número");

	if(num1>num2)
		console.log("NUM1 "+num1+" es mayor que NUM2 "+num2);
	else if(num1<num2)
		console.log("NUM1 "+num1+" es menor que NUM2 "+num2);
	else
		console.log("NUM1 "+num1+" es igual que NUM2 "+num2);
	
	let operador=prompt("Dame la operación (Elige S/R/M/D/P)")
	
	if(operador=="S")
		console.log(num1+num2);
	else if(operador=="R")
		console.log(num1-num2);
	else if(operador=="M")
		console.log(num1*num2);
	else if(operador=="D")
		console.log(num1/num2);
	else if(operador=="P")
		console.log(num1%num2);
	else
		console.error("Error, operador no válido");
	
	
	if(!isNaN(num1))
		console.log("num1 ES un número");
	
	if(isNaN(num1))
		console.log("num1 NO es un numero");
	else
		console.log("SI ES UN NUMERO");
	
	1.17
*/

/* EJERCICIO 7 

	let euros=+prompt("Dame euros");
	
	if(isNaN(euros))
		document.write("Importe incorrecto");
	else{
		let dolares=euros*1.17;
		document.write(euros+"€ son "+dolares+" $");
	}
	*/
	/* EJEMPLO CON SWITCH
	switch(operador){
		case "S":
				console.log(num1+num2);
				break;
		case "R":
				console.log(num1-num2);
				break;		
		case "M":
				console.log(num1*num2);
				break;		
		case "D":
				console.log(num1/num2);
				break;		
		case "P":
				console.log(num1%num2);
				break;	
		default: 
			console.error("Error, operador no válido");
	}
	
	if(operador=="S")
		console.log(num1+num2);
	else if(operador=="R")
		console.log(num1-num2);
	else if(operador=="M")
		console.log(num1*num2);
	else if(operador=="D")
		console.log(num1/num2);
	else if(operador=="P")
		console.log(num1%num2);
	else
		console.error("Error, operador no válido");
	
	switch(true){
		case operador=="S":
				console.log(num1+num2);
				break;
		case operador=="R":
				console.log(num1-num2);
				break;		
		case operador=="M":
				console.log(num1*num2);
				break;		
		case operador=="D":
				console.log(num1/num2);
				break;		
		case operador=="P":
				console.log(num1%num2);
				break;	
		default: 
			console.error("Error, operador no válido");
	}
	
	*/
	
	
	
	/* EJERCICIO 9 
	do{
		 let moneda;
		 do{
			moneda=prompt("Dame la moneda a convertir (LIBRA/DOLAR/YEN)");
		 }while(moneda!="LIBRA" && moneda!="DOLAR" && moneda!="YEN");
		 
		 let euros; 
		 do{
			 euros=prompt("Dame cantidad de euros"); 
		 }while(isNaN(euros));
		 euros=+euros;

		 let resultado;

		 switch(moneda){
			case "LIBRA":
				 resultado=euros*0.9;
				 break;
			case "DOLAR":
				 resultado=euros*1.17;
				 break;
			case "YEN":
				 resultado=euros*122.177;
				 break;
		}
			 
		document.write("<p>Resultado es:"+resultado+" "+ moneda+"</p>");
	}while(confirm("¿Desea realizar otra conversión?"));
	
	alert("Que tenga un buen día");
	
	*/
	
	/* EJERCICIO 11 
	
	
	let num1;
	let num2	 
	do{
		 num1=prompt("Dame un número"); 
	}while(isNaN(num1));	
	do{
		 num2=prompt("Dame otro número"); 
	}while(isNaN(num2));	
	num1=+num1;
	num2=+num2;
	
	let peque;
	let grande;
	
	if(num1<num2){
		peque=num1;
		grande=num2;
	}
	else{
		peque=num2;
		grande=num1;		
	}
	
	let pares=0;
	let impares=0;
	let positivos=0;
	let negativos=0;
	let suma=0;
	let cadena="";
	for(let x=peque;x<=grande;x++){
		if(x%2==0)
			pares++;
		else
			impares++;
		
		if(x>0)
			positivos++;
		else
			negativos++;
		
		//document.write(x+" ");
		cadena=cadena+x+" ";
		suma=suma+x;
		
	}
	let y=grande;
	let factorial=1;
	while(y>1){
		factorial=factorial*y;
		y--;
	}
	 
	document.write("<p>PARES:"+pares+"</p>");
	document.write("<p>IMPARES:"+impares+"</p>");
	document.write("<p>POSITIVOS:"+positivos+"</p>");
	document.write("<p>NEGATIVOS:"+negativos+"</p>");
	document.write("<p>SUMA:"+suma+"</p>");
	document.write("<p>FACTORIAL:"+factorial+"</p>");
	document.write("<p>LA CADENA:"+cadena+"</p>");
	 
	 */
	 
	/*Ejercicio 12
	
	let cadena=prompt("Dame un texto");
	
	for(let i=cadena.length-1;i>=0;i--)
		document.write(cadena.charAt(i));
	 */
  /*Ejercicio 1 FUNCIONES */
   
	'use strict';
  
   function ejercicio1(producto="Producto genérico",precio=100,impuesto=21){
		
		
		producto=String(producto);
		if(isNaN(precio))
			alert("El precio no es un número");
		else if(isNaN(impuesto))
			alert("El impuesto no es un número");
		else{
		    coste=precio+(precio*impuesto/100);
			document.write("<p>El producto es"+producto+"Y su coste es:"+coste+"</p>");	
			
		}
		return coste;
   }
   
	x=9;

	ejercicio1("manzanas",x,21);
	
	ejercicio1();
	ejercicio1("peras");
	let resultado=ejercicio1("fresas",20);
	ejercicio1("f","f");
	
	document.write(ejercicio1());
	
	

	