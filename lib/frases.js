const frasesmotivacionales = [
    "No se trata de si van a derribarte, se trata de si vas a levantarte cuando lo hagan» —Vince Lombardi, entrenador de fúbol americano",
    "Nadie puede hacerte sentir inferior sin tu consentimiento» —Eleanor Roosevelt",
    "Qué maravilloso es que nadie tenga que esperar ni un segundo para empezar a mejorar el mundo» —Ana Frank"
]
const frasesgraciosas =[
    "¡Odio las tareas del hogar! Haces las camas, limpias los platos y seis meses después tienes que empezar de nuevo (Joan Rivers)",
    " Por supuesto que debes casarte. Si consigues una buena esposa, te convertirás en alguien feliz. Si consigues una mala, te convertirás en filósofo (Sócrates)",
    "El amor nunca muere de hambre; con frecuencia, de indigestión (Ninon de Lenclos)",
    "41. Todo es gracioso, siempre y cuando le esté ocurriendo a otra persona (Will Rogers)",
    "Mantengo largas conversaciones conmigo mismo, y soy tan inteligente que a veces no entiendo ni una palabra de lo que digo (Oscar Wilde)"
]
const frasespeliculas = [
    "Nací cuando ella me besó, morí el día que me abandonó, y yo viví el tiempo que me amó (En un lugar solitario)",
    "Todos los hombres mueren, pero no todos han vivido (Braveheart)",
    "Hasta el infinito y más allá (Toy Story)",
    "Hakuna Matata (El Rey León)",
    "El mejor amigo de un chico es su madre (Psicosis)"
]

export function getFrase (){
   return frases[idAleatorio(frases)]
}
export const getFrasePelicula = ()=>{
    return frasespeliculas[idAleatorio(frasespeliculas)]
}
export const getFraseMotivacional = ()=>{
    return frasesmotivacionales[idAleatorio(frasesmotivacionales)]
}
export const getFraseGraciosa = ()=>{
    return frasesgraciosas[idAleatorio(frasesgraciosas)]
}



function idAleatorio(listaFrases){
    const id =Math.floor(Math.random()*listaFrases.length)
    return id
}