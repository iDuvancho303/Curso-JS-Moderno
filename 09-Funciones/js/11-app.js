// las ventajas de los arrow functions
const aprendiendo = function(tecnologia) {
    console.log(`Aprendiendo ${tecnologia}`);
}

aprendiendo('JavaScript');

//con arrow function
const aprendiendo2 = (tecnologia, tecnologia2) => {
    console.log(`Aprendiendo mas con ${tecnologia} y ${tecnologia2}`)
}

aprendiendo2('Python', 'React');
