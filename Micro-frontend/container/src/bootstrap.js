import { mount as mountProducts } from 'products/ProductIndex'
import { mount as mountCart } from 'cart/Cart'

mountProducts(document.querySelector('#product-list'))
mountCart(document.querySelector('#cart-items'))