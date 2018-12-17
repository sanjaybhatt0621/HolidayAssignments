import ShoppingCartService from '../service/dataLayer';
var  self
export default class OverlayComponent{
    constructor(parent,dataCounter,operation){
        this.parent=parent;
        this.dataCounter=dataCounter;
        this.operation=operation;
        this.shoppingCartService = new ShoppingCartService();
        this.render();
        self=this;
    }
    render(){
        this.getData().then((result)=>{
            let imageObj;
            let operationButton;
            let buttonText;
            if(this.operation=='add'){
                buttonText='ADD TO BAG';
                imageObj=result[this.dataCounter];
                
            }else{
                buttonText='EDIT';
                imageObj=result[0];
            }
            operationButton=`<button class="overlayButton">${buttonText}</button>`
            
            let markUp=`<div class="overlay">
            
            <div class="overlay-content">
            <span class="close">&times;</span>
            <div class="overlaySections">
                    <section class="overlayLeft">
                    <div class="overlayLeftContent"> 
                        <div class="overlayTitle">${imageObj.title}</div>
                        <div class="overlayPrice">
                            <div>$</div>${imageObj.price}
                        </div>
                        <div class="sizeandqty">
                            <div class="overlaySize">SIZE
                            <select id="size_${this.id}">
                                <option value="Small">Small</option>
                                <option value="Medium">Medium</option>
                                <option value="Large">Large</option>
                            </select>
                            </div>
                            <div class="overlayQty">QTY
                                <select id="quantity_${this.id}">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="overlayOperationButton">
                            ${operationButton}
                        </div>
                        
                        <div>
                            <a class="overlayAnchor">See product details</a>
                        </div>
                        </div>
                    </section>
                    <section class="overlayRight">
                        <div class= "overlayImage">
                            <img src="${imageObj.imgUrl}"></img>
                        </div>
                    </section>
                    </div>
                    </div>
                </div>`;
                $(this.parent)[0].innerHTML=markUp;
            if(this.operation == 'add'){
                $('.overlayButton').on('click',{"obj":imageObj},this.addProduct);
            }else{
                $('.overlayButton').on('click',{"obj":imageObj},this.editProduct);
            }
            $('.close').on('click',function(){
                $('.overlay')[0].style.display ="none";
            });
        });     
    }
addProduct(obj){
    obj.data.obj.size=$("#size_"+`${self.id}`).val();
    obj.data.obj.quantity=$("#quantity_"+`${self.id}`).val();
    self.shoppingCartService.addData(obj.data.obj).then((result)=>console.log(result));
}
editProduct(obj){
    obj.data.obj.size=$("#size_"+`${self.id}`).val();
    obj.data.obj.quantity=$("#quantity_"+`${self.id}`).val();
    self.shoppingCartService.editData(obj.data.obj,this.dataCounter);
}

    getData(){
        if(this.operation == 'add'){
            return this.shoppingCartService.getDataCarousel();
        }else{
            return this.shoppingCartService.getDataShoppingCartById(this.dataCounter);
        }
    }
    
}