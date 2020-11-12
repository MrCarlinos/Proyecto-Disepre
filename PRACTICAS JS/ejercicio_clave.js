document.write("<h1>EJERCICIO 2</h1>");

 function hacerParrafos(tabla,filas){
 	document.write("<div>");
	for(let i=1;i<=filas;i++)
		document.write("<p>"+tabla+"x"+i+"="+ tabla*i +"</p>");	
	document.write("</div>"); 
 }
 
 function hacerLista(tabla,filas){
	document.write("<ul>");
	for(let i=1;i<=filas;i++)
		document.write("<li>"+tabla+"x"+i+"="+ tabla*i +"</li>");	
	document.write("</ul>");	 
 }
 
 function hacerTabla(tabla,filas){
	document.write("<table>");
	for(let i=1;i<=filas;i++){
		document.write("<tr>");
			document.write("<td>"+tabla+"x"+i+"</td>")
			document.write("<td>=</td>");
			document.write("<td>"+tabla*i+"</td>");
		document.write("</tr>");	
	}
	document.write("</table>");	 
 }


 let numero1; 
 do{
	 numero1=prompt("Dame un número entre 1 y 10"); 
 }while(isNaN(numero1) || numero1<1 || numero1>10);
 numero1=+numero1;
 
 let numero2; 
 do{
	 numero2=prompt("Dame un número entre 1 y 10"); 
 }while(isNaN(numero2) || numero2<1 || numero2>10);
 numero2=+numero2;
 
 let opcion; 
 do{
	 opcion=prompt("Indica una estructura (TABLA,LISTA o PARRAFOS)"); 
 }while(opcion!="TABLA" && opcion!="LISTA" && opcion!="PARRAFOS");

 let peque;
 let grande;

 if(numero1<numero2){
	peque=numero1;
	grande=numero2;
 }
 else{
	peque=numero2;
	grande=numero1;		 
 }
 
 switch(opcion){
	 case "PARRAFOS":
						hacerParrafos(peque,grande);
						break;
	 case "LISTA":
						hacerLista(peque,grande);
						break;	 
	 case "TABLA":
						hacerTabla(peque,grande);
						break;	 
 }
 
 
 