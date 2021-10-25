import faker from 'faker'

const mount = (element) => {
  // generating fake data
  element.innerHTML = `
  <p>You have ${faker.datatype.number(10)} items in your cart</p>
`
}

const mountPt = document.querySelector('#dev-cart')
if (process.env.NODE_ENV === 'development' && mountPt) {
  mount(document.querySelector('#dev-cart'))
}

export { mount } // sharing generic mount function