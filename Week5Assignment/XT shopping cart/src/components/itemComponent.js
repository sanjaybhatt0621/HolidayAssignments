export default class ItemComponent{
    constructor(item){
        this.imgUrl=item.imgUrl;
        this.brand= item.brand;
        this.description=item.description;
        this.quantity=item.quantity;
        this.size=item.size;
        this.price=item.price;
    }
    render(){
        let markUp=` <div class="item">
        <div class="image">
          <img src=${this.imgUrl}  />
        </div>
       
        <div class="right-content">
        <div class="description">
          <p>
              ${this.brand}
          </p>
          <p>${this.description}</p>
          
          <div class="buttons">
              <button class="btns">EDIT</button>
              <button class="btns">X REMOVE</button>
              <button class="btns">SAVE FOR LATER</button>
          </div>
        </div>
      
        <span class="size">
          ${this.size} 
        </span>
        <span class="quantity">
         <input type="text" value="${this.quantity}" name="quant" id="quant"/> 
        </span>
        
     
        <div class="total-price">$ ${this.price}</div>
      </div>
      
      </div>
      <div class="button-480">
              <button class="btns">EDIT</button>
              <button class="btns">X REMOVE</button>
              <button class="btns">SAVE FOR LATER</button>
          </div>`;

      return markUp;
    }
}
