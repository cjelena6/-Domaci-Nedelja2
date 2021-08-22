//1. Napisati funkciju koja na klik dodaje jedan red u tabeli. HTML kreirati proizvoljno.

const div1 = document.querySelector('.prvi')
const tabela = document.querySelector('#tabela')


function noviRed() {
    tabela.addEventListener('click', (event) => {
        let red = tabela.insertRow()
        for (let i = 0; i < tabela.rows[0].cells.length; i++) {
            red.insertCell(i).textContent = 'Novo'
        }
        tabela.append(red)
    })

}
noviRed()

