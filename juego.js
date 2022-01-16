

function inicializa(){
	
	lienzo = document.getElementById("lienzo");
	
	ctx = lienzo.getContext("2d");
	
	cargaImagenes();
	
};


//-------------Zona de Variables-----------------------

let personaje = {x : 50 , y : 150, vy: 0, gravity : 2, salto : 20, vymax : 9, saltando : false, caminando : false, caminando_pa_tras: false}; // objeto de json

let fps = 25;

let ancho = 500;

let alto = 250;

let lienzo, ctx;




//----------- Bucle principal del juego----------------



setInterval(function(){
	
	principal();

}, 1000/fps);



function principal(){
	
	borrarLienzo();
	gravedad();
	dibujarPersonaje()
};


function borrarLienzo(){
	
	// propiedades del canvas
	
	lienzo.width = ancho; 
	
	lienzo.height = alto;
	
	
};




//---------------- función oyente para leer por teclado----------------------


document.addEventListener("keydown", function(evento){
	
	if (evento.keyCode == 32){
		console.log("Salta");
		
		saltar();
		
	}
	if (evento.keyCode == 39){
		console.log("Camina pa' delante");
		
		caminar();
		
	}
	if (evento.keyCode == 37){
		console.log("Camina pa' tras");
		
		caminarPaTras();
		
	}
	
	
});

//-----------------Empezando a trabajar con las imágenes-------------------



function cargaImagenes(){
	
	img_personaje = new Image();
	
	img_personaje.src = "imagenes/personaje1_der.png";
	
	img_personaje2 = new Image();
	
	img_personaje2.src = "imagenes/personaje2_der.png";
	
	img_personaje3 = new Image();
	
	img_personaje3.src = "imagenes/personaje_izq1.png";
	
	img_personaje4 = new Image();
	
	img_personaje4.src = "imagenes/personaje2_izq.png";
	
}





function dibujarPersonaje(){
	
	
	if (personaje.caminando == false){
		
			ctx.drawImage(img_personaje, 0, 0, 46, 46, personaje.x, personaje.y, 50, 50);
			
			personaje.caminando = true;
			
	}
	else{
		
			ctx.drawImage(img_personaje2, 0, 0, 46, 46, personaje.x, personaje.y, 50, 50);
			
			
		
	}
	
	if (personaje.caminando_pa_tras == false){
		
			//ctx.drawImage(img_personaje, 0, 0, 46, 46, personaje.x, personaje.y, 50, 50);
			
			personaje.caminando_pa_tras = true;
			
	}
	else{
		
			//ctx.drawImage(img_personaje2, 0, 0, 46, 46, personaje.x, personaje.y, 50, 50);
			
		
		
	}
	
	
	
}



//----------- Estableciendo la mecanica del juego--------------------


function caminar(){
	
	if (personaje.caminando == false){
		
		personaje.caminando = true;
	
		personaje.x += 10;
						
	}
	
	if (personaje.caminando == true){
		
		personaje.caminando = false;
	
		personaje.x += 10;
						
	}
	
	
	
}

function caminarPaTras(){
	
	if (personaje.caminando_pa_tras == false){
		
			personaje.caminando_pa_tras = true;
	
			personaje.x -= 10;
						
	}
	
	if (personaje.caminando_pa_tras == true){
		
			personaje.caminando_pa_tras = false;
	
			personaje.x -= 10;
						
	}
	
	
	
}

function saltar(){
	
		personaje.saltando = true;
	
		personaje.vy = personaje.salto;
	
	
}

function gravedad(){
	
	if (personaje.saltando == true){
		
		if (personaje.y > 150){
			
				personaje.saltando = false;
			
				personaje.vy = 0;
			
				personaje.y = 150;
		}
		else{
			
			personaje.vy -= personaje.gravity;
		
			personaje.y -= personaje.vy;
			
			
		}
		
		
	}
	
	
}




	
