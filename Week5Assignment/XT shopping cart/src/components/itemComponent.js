import OverlayComponent from './OverlayComponent';

export default class ItemComponent{
    constructor(parent,item){
      this.parent=parent;
        this.imgUrl=item.imgUrl;
        this.title= item.title;
        this.style=item.style;
        this.color=item.color;
        this.quantity=item.quantity;
        this.size=item.size;
        this.price=item.price;
        this.id = item.id;

        this.render();
    }
    render(){
      const self={context: this};
      let markUp =`<section class="item-container">
            <section class="item">
                    <section class="itemTop">
                      <article class="img">
                        <img class="image" src="${this.imgUrl}">
                      </article>
                      <div class="rightUp">
                            <section class="description">

                                      <section class="leftItem">
                                          <div class="heading">${this.title} <br/>COTTON TSHIRT</div>
                                          <div>
                                            <span>Style #:</span> <span>${this.style}</span>
                                          </div>
                                          <div>
                                            <span>Colour :</span> <span>${this.color}</span>
                                          </div>
                                      </section>

                                      <section class="rightItem">
                                            <div class="Size1">
                                              <span class="SizeSpan">Size :</span>  <span>${this.size}</span>
                                            </div>
                                            <div class="qty"> 
                                              <span class="QtySpan">QTY:</span>
                                              <input type="text" value=${this.quantity} disabled id="textbox"/>
                                            </div>
                                            <div class="amount">
                                              $ <span class="amt">${this.price}</span>
                                            </div>
                                      </section>

                            </section>
                      </div> 
                    </section>     
                      <section class="buttonsSection">
                      <button class="edit" id="edit_${this.id}">EDIT</button>
                      <button class="remove">X REMOVE</button>
                      <button class="save">SAVE FOR LATER</button>
                  </section>         
            </section>
      </section>`;
      let openModal=function(){
        new OverlayComponent("#overlay",this.context.id,"edit");
      }
      $(this.parent).append(markUp);
      let boundFunc=openModal.bind(self);
      
      $('#edit_'+`${this.id}`).on('click',boundFunc);
      
      
    }
}
