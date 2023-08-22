let products = []

const renderProducts = function (products) {
    document.querySelector('#to-do-list').innerHTML = ''
    products.forEach(function (item) {
        let htmlItem = `<div class="item">
        <label for="items${item.id}">
            <input type="checkbox" class="items" id="items${item.id}"/>
            ${item.title}
        </label>
        <i class="fal fa-trash-alt remove-icon" id="${item.id}"></i>
    </div>`
        document.querySelector('#to-do-list').insertAdjacentHTML('beforeend', htmlItem);
    })
}


const removeButton = (id) => {
    const removeIndex = products.findIndex(item => {
        return item.id == id
    })
    if (removeIndex > -1) {
        products.splice(removeIndex, 1)
    }
}


const saveProducts = () => {
    localStorage.setItem('products', JSON.stringify(products))

}
const loadProducts = () => {
    const productsJSON = localStorage.getItem('products')
    if (productsJSON !== null) {
        products = JSON.parse(productsJSON)
    } else {
        products = []
    }
}

const SubmitClicked = (e) => {
    e.preventDefault()
    products.push({
        title: e.target.elements.productTitle.value,
        id: uuidv4()
    })
    e.target.elements.productTitle.value = ''
    saveProducts()
    renderProducts(products)
}

document.querySelector('.add-product').addEventListener('submit', SubmitClicked)
loadProducts()
renderProducts(products)


document.querySelector('#to-do-list').addEventListener('click', function () {
    removeButton(products.id)
    saveProducts()
    renderProducts(products)

})