import {makeAutoObservable} from 'mobx'
export default class CartStore {
    constructor() {
        this._cart = []
        this._quantityCartItems = 110

        makeAutoObservable(this)
    }

    setQuantityCartItems () {
        console.log('clicked')
        this._quantityCartItems = 10000000000
    }
    
    setCart (items) {
        this._cart = items
    }

    addOne (item) {
        this._cart.push(item)
    }

    removeOne(id) {
       this._cart = this._cart.filter(i => i.id !== id)
    }

    clearCart() {
        this._cart = []
    }

    increaseQuantity(id) {
    const index = this._cart.findIndex(item => item.id === id)
    this._cart[index].quantity ++  
    }

    decreaseQuantity(id) {
        const index = this._cart.findIndex(item => item.id === id)
        this._cart[index].quantity --  
        }


    get cart() {
        return this._cart
    }

    get quantityCartItems () {
        return this._quantityCartItems
    }
}