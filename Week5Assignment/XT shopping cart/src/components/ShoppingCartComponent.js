import ItemComponent from './itemComponent';
import ShoppingCartService from '../service/dataLayer';

export default class ShoppingCartComponent{
    constructor(){
        this.shoppingCartService=new ShoppingCartService();
    }
    render() {
        return this.shoppingCartService.getData().then((result)=>{
    
            let markup =`<div class="shopping-cart">
                <div class="title">
                YOUR SHOPPING BAG
                </div>
                <header class="headerClass">
                <div class="header1">${result.items.length} ITEMS</div>
                <div class="header2">SIZE</div>
                <div class="header3">QTY</div>
                <div class="header4">PRICE</div>
                
                

                </header>
                ${result.items.map(item => new ItemComponent(item).render()).join('')}
            </div>
            <div class="suggestions">`;
            return markup;
        });  
    }
}