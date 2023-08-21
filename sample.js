let products = []

// const renderProducts = function (products) {
//     document.querySelector('#to-do-list').innerHTML = ''
//     products.forEach(function (item) {
//         let htmlItem = `<div class="item">
//         <label for="items${item.id}">
//             <input type="checkbox" class="items" id="items${item.id}"/>
//             ${item.title}
//         </label>
//         <i class="fal fa-trash-alt remove-icon" id="${item.id}"></i>
//     </div>`
//         document.querySelector('#to-do-list').insertAdjacentHTML('beforeend', htmlItem);
//     })
// }



const renderProducts = (product) =>{
    document.querySelector('#to-do-list').innerHTML = ''
        // products.forEach( item => {
            const parentElement = document.createElement('div')
            const checkBox = document.createElement('input')
            const productItem = document.createElement('span')
            const removeIcon = document.createElement('button')
        // })

        checkBox.setAttribute('type','checkbox')
        parentElement.appendChild(checkBox)

        productItem.textContent = product.title
        parentElement.appendChild(productItem)

        removeIcon.textContent = 'remove'
        parentElement.appendChild(removeIcon)

        return parentElement

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

const onSubmitClicked = (e) => {
    e.preventDefault()
    products.push({
        title: e.target.elements.productTitle.value,
        id: uuidv4(),
        icon : '<i class="fal fa-trash-alt></i>'
    })
    e.target.elements.productTitle.value = ''
    saveProducts()
    renderProducts(products)
}

document.querySelector('.add-product').addEventListener('submit', onSubmitClicked)
loadProducts()
renderProducts(products)

document.querySelector('#to-do-list').addEventListener('click',function(e){
    
})