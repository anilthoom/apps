import faker from 'faker'

const PRODUCTS_COUNT = 5

const mount = (element) => {
    // generating fake data
    let productsArr = []
    for (let i = 0; i < PRODUCTS_COUNT; i++) {
        const product = faker.commerce.productName();
        productsArr.push(`<div>${product}</div>\n`)
    }

    const products = productsArr.join('')
    element.innerHTML = products
}

const mountPt = document.querySelector('#dev-products')
if (process.env.NODE_ENV === 'development' && mountPt) {
    mount(mountPt)
}

export { mount } // sharing generic mount function