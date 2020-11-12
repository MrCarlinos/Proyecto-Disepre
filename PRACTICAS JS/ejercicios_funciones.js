/*
let meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

for(let i=0;i<meses.length;i++)
	alert(meses[i]);



let numeros=[10,5,14,3];

document.write("Inicial: "+numeros.join("==>")+"<br>");

numeros.push(23,13);
document.write("push: "+numeros.join("==>")+"<br>");
numeros.unshift(31,2);
document.write("unshift: "+numeros.join("==>")+"<br>");

numeros.splice(3,3);
document.write("splice: "+numeros.join("==>")+"<br>");

numeros.splice(numeros.length-1,0,4,8);
document.write("splice_replace: "+numeros.join("==>")+"<br>");

numeros.reverse();
document.write("reverse: "+numeros.join("==>")+"<br>");

numeros.sort();
document.write("sort: "+numeros.join("==>")+"<br>");


let a=[4,6,8];

let b=new Array();

for(i=0;i<a.length;i++)
	b[i]=a[i];


let ejercicio6b = function (vector,elemento){
							let posicion=-1;
							for(let i=0;i<vector.length;i++)
								if(vector[i]==elemento)
								{
									posicion=i;
									break;
								}
							return posicion;	
						}


document.write("Poscion: "+ejercicio6b([4,32,2,4,3],32))	;



	let a = [20, 6, 100, 51, 28,9];
	console.log(a); 
	a.sort(); 
	// Ordena el array original 
	console.log(a); // Imprime [100, 20, 28, 51, 6,9] 
	a.sort(function(n1, n2){
			document.write(n1+" "+n2+"<br>");
			return n2 -n1;
		   });
	console.log(a); 


	function todoPoI(vector, buscar="pares"){
		return vector.every(function(item){
			if(buscar=="pares"){
				if(item%2==0)
					return true;
				else
					return false;
			}
			else{
				if(item%2==0)
					return false;
				else
					return true;
			}
		});
	}
	
	function todoPoI(vector, buscar="pares"){
		return vector.every(function(item){
			if(buscar=="pares")
				return item%2==0;
			else // busco IMPARES
				return item%2==1;
		});
	}
	
	let a=[3,7,10,5];
	if(todoPoI(a))
		document.write("TODOS SON PARES<br>");
	else 
		document.write("NO LO SON PARES<br>");

	if(todoPoI(a,"impares"))
		document.write("TODOS SON IMPARES<br>");
	else 
		document.write("NO LO SON IMPARES<br>");

	let ordenar=function (n1,n2){
		if(n1<n2)
			return -1;
		else if(n1>n2)
			return 1;
		else
			return 0;	
	};

	a.sort(ordenar);

	
	console.log(a.join());
	
	let b=["Pablo","Diego","Pilar","Nestor","Victor","Javier","Eugenia","Carolina"];
	
	b.sort(ordenar);
	
	console.log(b.join());
	
	b.forEach(function(elemento,indice){
		console.log(elemento+" "+indice+" ");
	});
	
	for(let i=0;i<b.length;i++)
		console.log(b[i]+" "+i+" ");
	
	let i=0;
	while(i<b.length){
		console.log(b[i]+" "+i+" ");
		i++;
	}
	
	for(let i in b)
		console.log(b[i]+" "+i+" ");
	
	for(let elemento of b)
		console.log(elemento+" ");
	
*/	
	/*
	let a = [4, 21, 33, 12, 9,54];
	
	let b = a.map(function (elemento){
		if(elemento%2==0){
			return elemento/2;
		}
		else
			return elemento*2;
	});
	
	console.log(a.join());
	console.log(b.join());
	
	
	let array=["elemento1","elemento2","elemento3","elemento4"];
	
	let resultado=array.map(function(item){
		return "<li>"+item+"</li>";
	});

	document.write("<ul>");
	for(let elemento of resultado)
		document.write(elemento);
	document.write("</ul>");
	
	let resultado=array.map(function(item){
		return "<li>"+item;
	});
	
	document.write("<ul>"+resultado.join("</li>")+"</ul");
	*/
	
	let numeros=[-4,30,-33,2,-23,33,-50,-5,12,-1];
	
	let res=numeros.filter(function (elemento){
		return elemento%2==-1 && elemento<0;
	});
	
	document.write(res.join());
	
	
	
	
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	