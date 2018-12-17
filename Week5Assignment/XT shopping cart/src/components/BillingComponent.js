import ShoppingCartService from '../service/dataLayer';

export default class BillingComponent{
    constructor(parent,billingAmount){
        this.parent=parent;
        this.billingAmount=billingAmount;
        this.render();
    }
    render(){
        // this.shoppingCartService.getDataShoppingCart().then((result)=>{

        // });
        $(this.parent).append ( `
        
                    <section class="questions">
                        <p>Need Help<br>or have questions?</p>
                        <p>Call Customer Service at <br>1-800-555-5555</p>
                        <a href="#">Chat with one of <br/>our stylists</a>
                        <a href="#">See return <br/>&amp; exchange policy</a>
                    </section>
                    
                    <section id="payment">
                        <section id="promotion">
                            <label>ENTER PROMOTION CODE OR GIFT CARD</label>
                            <input type="textbox">
                            <button>Apply</button>
                        </section>
                        <section class="pricebox">
                                <div class="insidePrice">
                                    <div class="leftCol">Subtotal</div>
                                    <div class="rightCol">$${this.billingAmount}</div>
                                </div>
                                <div class="insidePrice">
                                    <div class="leftCol" >Promotion JF10 Applied</div>
                                    <div class="rightCol">-$0.0</div>
                                </div>
                                <div class="insidePrice">
                                    <div class="leftCol"><p>Estimated Shipping</p>
                                        <p class="ship-text">you qualify for free shipping because your order is over $50.
                                        </p>
                                    </div>
                                    <div class="rightCol">FREE</div>
                                </div>
                                <div class="insidePrice">
                                    <div class="leftCol">
                                        <p>Estimated Total</p>
                                        <p class="ship-text">Tax will be applied during checkout</p>
                                    </div>
                                    <div class="rightCol ">$${this.billingAmount}</div>
                                </div>

                                        <div class="footerButtons">
                                                <div class="btnwrap">
                                                    <a href="#" class="checkout">CHECKOUT</a>
                                                    <a href="#" class="Shipping">Continue Shopping</a>

                                                </div>
                                                <p>Secure Checkout Shopping is always safe &amp; Secure</p>
                                            </div>
                        </section>
                    </section>
            `);
    }
}