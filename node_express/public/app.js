document.querySelectorAll('.price').forEach(node => {
    node.textContent = new Intl.NumberFormat('ru-RU', {
        currency: 'rub',
        style: 'currency'
    }).format(node.textContent)
})

// const toCurrency = price => {
//     return new Intl.NumberFormat('ru-RU', {
//       currency: 'rub',
//       style: 'currency'
//     }).format(price)
//   }

//   document.querySelectorAll('.price').forEach(node => {
//     node.textContent = toCurrency(node.textContent)
//   })

async function requestDelete(id) {
    return await fetch(`/card/remove/${id}`, { method: 'delete' })
}

const CARD = document.querySelector('#card')

CARD.addEventListener('click', (e) => {
    e.preventDefault()
    if (e.target.classList.contains('js-remove')) {
        const id = e.target.dataset.id
        console.log(id)
        requestDelete(id).then(res => res.json()).then(document.location.reload())
    }
})


