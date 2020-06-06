

function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        //.then( (res) => {return res.json()}) 
        .then(res => res.json()) //Forma reduzida de uma Arrow Function
        .then(states => {

            for (let state of states) {
                ufSelect.innerHTML += `<option value='${state.id}'>${state.nome}</option> `
            }

        })
}

populateUFs()


function getCities(event) {
    const ufCities = document.querySelector('select[name=city]')
    const stateInput = document.querySelector("input[name=state]")
    

    

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex

    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    ufCities.innerHTML = '<option value="">Selecione a Cidade</option>'
    ufCities.disabled = true
    
    

    

    fetch(url)
        .then( res => res.json() )
        .then( cities => {
            
            for(let city of cities) {
                
                ufCities.innerHTML += `<option value='${city.nome}'>${city.nome}</option>`
            }
            ufCities.disabled = false
    } )
    
}



document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)



// Itens de coleta

    //pega todos os li's

const itemsToCollect = document.querySelectorAll('.items-grid li')


for (let item of itemsToCollect) {
    item.addEventListener('click', handleSelectedItem)
}

const collectedItems = document.querySelector('input[name=items]')


let selectedItems = []

function handleSelectedItem(event){
    const itemLi = event.target
    
    // adicionar ou remover uma classe com JS
    // classList.add() - adiciona uma classe
    // classList.remove() - remove uma classe
    // classList.toggle() - adicionar/remove uma classe

    itemLi.classList.toggle('selected')
    
    const itemId = itemLi.dataset.id //seleciona os números do target data-id no HTML


    console.log('ITEM: ' + itemId)

    // verificar se existem itens selcionados, se sim
    // pegar os itens selecinados

    const alreadySelected = selectedItems.findIndex( item => {
        let itemFound = item == itemId  // retorna true ou false
        return itemFound
    } )

    // se já tiver selecionado

    if ( alreadySelected >= 0 ) {
        // tirar da seleção
        const filteredItems = selectedItems.filter( item => {
            const itemIsDifferent = item != itemId // false
            return itemIsDifferent
        })

        selectedItems = filteredItems
    } else {
    // se nao estiver selecionado  
    // adicionar à seleção

    selectedItems.push(itemId)

    }

    console.log('SELECTED ITEMS: ' + selectedItems)
    
    //atualizar o campo escondido com os itens selecionados

    collectedItems.value = selectedItems

}
