export default class ImageCarouselComponent{
    constructor(parent,carouselSuggestion){
        this.imgUrl=carouselSuggestion.imgUrl;
        this.price= carouselSuggestion.price;
        this.parent=parent;
        this.render();
    }
    render(){
        let markup=`
        <div class="mySlides fade">
          
          <div class="imageDiv">
            <img  class="imageClass" src=${this.imgUrl} >
          </div>
          <div class="carouselPrice">$${this.price}</div>
        </div>`;
        $(this.parent).append(markup);
    }
}