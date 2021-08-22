//  2. Napisati funkciju koja na klik dugmeta vrsi sabiranje 2 broja iz input polja i zbir ispisati na ekranu. HTML kreirati proizvoljno.
// 3.Nadovezivanje na predhodni zadatak. Dodati checkbox polje koje kada je selektovano prikazuje se kalkulator a obrnuto se skloni sa ekrana.

const div = document.querySelector('.div1')
const forma = document.querySelector('.forma')
const polje1 = document.querySelector('#polje1')
const polje2 = document.querySelector('#polje2')
const checkbox = document.querySelector('#check')

div.remove()

function saberi() {
    forma.addEventListener('submit', (event) => {
        event.preventDefault()
        let p1 = document.createElement('p')
        p1.innerHTML= `Zbir je: ${Number(polje1.value) + Number(polje2.value)}`
        div.appendChild(p1)
    })
}
        saberi()

function kalkulator() {
    checkbox.addEventListener('change', (event) => {
        if(checkbox.checked){
        document.body.append(div)
        }
        else {
            div.remove()
        }
    })
    
}
kalkulator()