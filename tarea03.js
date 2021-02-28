
/* Función que me permita encontrar todas las ordenes que contengan de ingredients lechuga y palta
 */


const filterIngredients = () => {
    /* console.time('filtro por ingredientes') */

        const resultado = sandwichOrders.filter(sandwichOrder => 
        sandwichOrder.ingredients.includes('lechuga') && sandwichOrder.ingredients.includes('palta')
    ) 

   /*  console.timeEnd('filtro por ingredientes') */

    console.log(resultado)
}

/* Función que me permita encontrar una orden a través del id y que me devuelva un string con el siguiente formato de ejemplo: La orden fue realizada el (09-10-2020), la orden llevó (mechada) y (bagette). En caso de no encontrar nada a través del id, el mensaje, a modo de ejemplo, deberá ser: No se encontró la orden con id (800)
Las palabras encerradas en paréntesis corresponden a información que debe venir desde la búsqueda.
Usar destructuración -> Documentación <- */




const findById = (id) => {
   /*  console.time('encontrar id') */

    const resultado = sandwichOrders.find(objeto => objeto.id === id);

    /* console.timeEnd('encontrar id') */




    if(resultado){

        const  {
            id,
            picture,
            ordered,
            protein,
            sauces:  [primerSalsa, ...restoSalsas],
            ingredients: [primerIngrediente, ...restoIngredientes],
            bread,
          } = resultado;


        console.log(`La orden fue realizada el ${ordered}, la orden llevó ${protein} y pan ${bread}.`)

    }else{
        console.log(`No se encontró la orden con id ${id}`);
    }

}



/* Función que me permita encontrar una orden a través del id y que me indique si la orden incluye pepinillos entre sus ingredients, debería devolver un true|false como respuesta.
 */

const findByIdPepinillos = (id) => {
    /*  console.time('encontrar id') */
 
     const resultado = sandwichOrders.find(objeto => objeto.id === id);

     /* console.timeEnd('encontrar id') */

     if(resultado.ingredients.includes('pepinillos')){
         console.log('tiene')
 
     }else{
        console.log('no tiene')
     }
 
 }


/* Función que me permita encontrar todas las orden que se hicieron en un día en específico, es decir, si yo coloco 20-10-2020, la función me debería devolver: Se encontraron N ordenes para la fecha 20-10-2020.
 */


 const findByDate = (date) => {
    console.time('Inicio Filtro de Ordenes')

    const resultado = sandwichOrders.filter(sandwichOrder => 
        sandwichOrder.ordered === date
    ).length;

    console.timeEnd('Inicio Filtro de Ordenes')

    console.log(`Se encontraton ${resultado} órdenes para el día ${date}`)
}


/* Función que me devuelva las fechas de todas las ordenes que tuvieron como proteina not burger y de ingredients cebolla caramelizada
 */


const filterBurgerOnion = () => {

        const resultado = sandwichOrders.filter(sandwichOrder => 
        sandwichOrder.ingredients.includes('cebolla caramelizada') && sandwichOrder.protein.includes('not burger')
        )

          resultado.map(function(date){
            const dates = date.ordered
            console.log(dates)
          }) 
}

/*Reduce*/
/*No funciona, probando */

const orderbyBread = () =>{
    const breads = ["bagette", "brioche", "pita", "marraqueta", "hallulla"]
    
    breads.forEach(element => {
        orderSandwichOrdersByBread(element)
    });
}


const orderSandwichOrdersByBread = (element) => sandwichOrders.reduce(
    function(contador,bread){

        return contador + (bread.bread == element);
       
    },0)
