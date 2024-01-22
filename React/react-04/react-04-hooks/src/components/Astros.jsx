import './Astros.css'
import { useEffect, useState } from 'react'
import Astro from './Astro'



//Función para agregar la información de la API Astros dentro de las cards
const Astros = () => {
    
    //definir la url de la API
    const ASTROS_URL='http://api.open-notify.org/astros.json';
    
  //Implementando useState
    const [astros, setAstros] = useState([]);
    
    //implementando useEffect
    useEffect(() => {
        fetchAstros(); /* Hoisting de una función que voy a definir */
    }, []);

    //Crear función fetch para conectarse a la API
const fetchAstros = () => {
    fetch(ASTROS_URL)
    .then(response => response.json())
    .then(data => setAstros(data.people)) //para que la info viva dentro del componente actualizado traigo setAstros y le paso los datos de 'people' de la API.
    .catch(error => console.log(error))
}

console.log(astros); //vive en consola del navegador
//enviar la información de la API a las card utilizando .map sobre el array 'astros'.


    return (
        <>
        {/* astro funciona como los elementos que se recorren en el array astros y .map recibe dichos elementos, más un index y una función de tipo callback*/}
        {
        astros.map((astro, index) => {
            //Exporta el componente Astro
            //Crear una llave única para cada elemento del array (key)
                    //Desestructurar el array para que cada elemento reciba los props definidos dentro de Astro ({name, craft})
<Astro key={index} {...astro}/>
        })
        }
        </>
    )
}

export default Astros