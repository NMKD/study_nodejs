document.querySelectorAll('.price').forEach(node => {
    node.textContent = new Intl.NumberFormat('ru-RU', {
        currency: 'rub',
        style: 'currency'
    }).format(node.textContent)
})

const request = async (id) => {
    const promise = await fetch(`/card/remove/${id}`, { method: 'delete' })
    return await promise.json()
}

document.querySelector('#card').addEventListener('click', (e) => {
    e.preventDefault()

    if (e.target.classList.contains('js-remove')) {
        const id = e.target.dataset.id
        console.log(e.target)
        request(id).then(location.reload())
    }
})


