import ShoppingCartComponent  from './components/ShoppingCartComponent';

class MainComponent{
    constructor(){
        this.shoppingCart = new ShoppingCartComponent();
    }
    render(){
        const mainDiv=this.shoppingCart.render().then(result =>{
            document.getElementById("homeDiv").innerHTML=result;
        });
        
        //return shoppingCart();
        

    }
}
const mainComponent= new MainComponent();
mainComponent.render();
