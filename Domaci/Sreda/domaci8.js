

let pokemoni = [{
    Ime: 'Pikachu',
    Vrsta: 'Elektricni',
    Sposobnosti: ['Gromoviti šok', 'Udarni Val', 'Iskra'],
    Karakteristike: {
        napad: 10,
        odbrana: 7,
        brzina: 9
    }
},
{
    Ime: 'Bulbasaur',
    Vrsta: 'Travnati',
    Sposobnosti: ['Ostri list', 'Obaranje', 'Semeni metak'],
    Karakteristike: {
        napad: 8,
        odbrana: 6,
        brzina: 10
    }
},
{
    Ime: 'Charmander',
    Vrsta: 'Vatreni',
    Sposobnosti: ['Bacač plamena', 'Vatreni vrtlog', 'Pregrejavanje'],
    Karakteristike: {
        napad: 5,
        odbrana: 7,
        brzina: 8
    }
},
{
    Ime: 'Squirtle',
    Vrsta: 'Vodeni',
    Sposobnosti: ['Vodena pumpa', 'Mutna voda ', 'Vodeni top'],
    Karakteristike: {
        napad: 7,
        odbrana: 4,
        brzina: 9
    }
}]
// console.log(pokemoni);

function sposobnostiJednogPokemona(pokemon) {
    let nizSposobnosti = ''
    pokemon.Sposobnosti.forEach(sposobnost => { 
        nizSposobnosti += sposobnost + '\n'
        });
    return nizSposobnosti
}
// console.log(sposobnostiJednogPokemona(pokemoni[0]));

//nadovezivanje na 3 zadatak sa predhodnog domaceg
//1. Napraviti html strukturu da se na pocetku vide 2 button-a. Kada se klikne na oba (naravno ponaosob), 
//trebaju se izlistati svi pokemoni iz niza u svom dugmetu. Na klik jednog dugmeta, trebaju se izlistati
//sve informacije o tom pokemonu.


let div1 = document.createElement('div')
div1.classList.add('prvi')
div1.style.height = '300px'

let btn1 = document.createElement('button')
btn1.id = 'btn1'
btn1.textContent = 'Izaberi pokemona'
btn1.style.display = 'block'
btn1.style.marginBottom = '150px'

div1.appendChild(btn1)

btn1.addEventListener('click', (event) => {
    btn1.remove()
    div1.append(btnPk1, btnPk2, btnPk3, btnPk4)
})


let btnPk1 = document.createElement('button')
btnPk1.textContent = 'Pikachu'

btnPk1.addEventListener('click', (event) => {
    let p1 = document.createElement('p')
    p1.innerHTML = sposobnostiJednogPokemona(pokemoni[0])
    div1.appendChild(p1)
})

let btnPk2 = document.createElement('button')
btnPk2.textContent = 'Bulbasaur'

btnPk2.addEventListener('click', (event) => {
    let p2 = document.createElement('p')
    p2.innerHTML = sposobnostiJednogPokemona(pokemoni[1])
    div1.appendChild(p2)
})

let btnPk3 = document.createElement('button')
btnPk3.textContent = 'Charmander'

btnPk3.addEventListener('click', (event) => {
    let p3 = document.createElement('p')
    p3.innerHTML = sposobnostiJednogPokemona(pokemoni[2])
    div1.appendChild(p3)
})

let btnPk4 = document.createElement('button')
btnPk4.textContent = 'Squirtle'

btnPk4.addEventListener('click', (event) => {
    let p4 = document.createElement('p')
    p4.innerHTML = sposobnostiJednogPokemona(pokemoni[3])
    div1.appendChild(p4)
})

let div2 = document.createElement('div')
div2.classList.add('drugi')

let btn2 = document.createElement('button')
btn2.id = 'btn2'
btn2.textContent = 'Izaberi protivnika'
div2.appendChild(btn2)
div2.style.display = 'block'

btn2.addEventListener('click', (event) => {
    btn2.remove()
    div2.append(btnPr1, btnPr2, btnPr3, btnPr4)
})

let btnPr1 = document.createElement('button')
btnPr1.textContent = 'Pikachu'

btnPr1.addEventListener('click', (event) => {
    let p5 = document.createElement('p')
    p5.innerHTML = sposobnostiJednogPokemona(pokemoni[0])
    div2.appendChild(p5)
})

let btnPr2 = document.createElement('button')
btnPr2.textContent = 'Bulbasaur'

btnPr2.addEventListener('click', (event) => {
    let p6 = document.createElement('p')
    p6.innerHTML = sposobnostiJednogPokemona(pokemoni[1])
    div2.appendChild(p6)
})

let btnPr3 = document.createElement('button')
btnPr3.textContent = 'Charmander'

btnPr3.addEventListener('click', (event) => {
    let p7 = document.createElement('p')
    p7.innerHTML = sposobnostiJednogPokemona(pokemoni[2])
    div2.appendChild(p7)
})

let btnPr4 = document.createElement('button')
btnPr4.textContent = 'Squirtle'

btnPr4.addEventListener('click', (event) => {
    let p8 = document.createElement('p')
    p8.innerHTML = sposobnostiJednogPokemona(pokemoni[3])
    div2.appendChild(p8)
})


document.body.append(div1,div2)
