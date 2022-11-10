//REST
function insertData(name, ...rest){
    console.log(name)
    for(let value of rest){
        console.log(value)
    }
}
let n = new String('hola')
insertData('Info', 'Pepe', 'Bea', 'Angel', n, 5)
//SPREAD
function doActions(start, edit, finish){
    console.log(start, edit,finish)
}

let listaAcciones = ['A', 'B', 'C']
doActions(...listaAcciones)

function max(...values){

}
let numbers = [20,5,2,1,200,5,8,100]
console.log( Math.max(...numbers)  )

