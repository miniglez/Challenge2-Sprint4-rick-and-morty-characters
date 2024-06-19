const pageOne = "https://rickandmortyapi.com/api/character?page=1"

const GetID = (identifier) => document.getElementById(identifier)


const todoelresultado = []
const array = [1,2,3,4,5,5]
console.log(array)

const guardarData = (data) => {
    todoelresultado.pop()
    todoelresultado.pop()
    todoelresultado.push(data.info)
    todoelresultado.push(data.results)
    
}

const addCharacters = (link) => {
    todoelresultado.pop()
    fetch(link)
    .then((resp) => {
        if (!resp.ok){
            throw new Error('La solicitud del chiste no ha sido exitosa');
        }
        else{
            return resp.json();
        }
    })
    .then((data) => {
        guardarData(data)
        //todoelresultado.push(data.info)
        //todoelresultado.push(data.results)
        //console.log(todoelresultado)
    })
    todoelresultado.pop()
}


const nextButton = GetID("next-page") 
const prevButton = GetID("prev-page")
addCharacters(pageOne)

console.log(todoelresultado[0])


//characterJson = nextButton.addEventListener("click", addCharacters(todoelresultado[0].next))
//characterJson = prevButton.addEventListener("click", addCharacters(todoelresultado[0].prev))
