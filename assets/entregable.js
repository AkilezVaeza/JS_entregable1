//Ciclo FOR
let numMultiplicar = parseInt(prompt("Ingrese el numero que requiere multiplicar"))
for(let num = 0; num <= 10; num++){
    console.log(`${numMultiplicar} x ${num} = ${numMultiplicar*num}`)
}

//Ciclo Condicional WHILE
let videojuegos = prompt("¿Te gustan los videojuegos? Rta: si o no")
while(videojuegos.toLowerCase() == "si"){
    let genero = prompt("Ingresa el genero que te gusta")
    let titulo = prompt("Ingresa el titulo del videojuego")

    console.log(`El genero que te gusta es de: ${genero} y el titulo de tu videojuego es: ${titulo}`)

    alert('Eres todo un GAMER');

    videojuegos = prompt("¿Quieres ingresar otro videojuego? Rta: si o no")
}