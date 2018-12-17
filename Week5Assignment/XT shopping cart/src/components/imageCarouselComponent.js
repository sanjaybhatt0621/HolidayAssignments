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
          <div class="numbertext"></div>
          <img src=${this.imgUrl} style="width:100%">
          <div class="text">${this.price}</div>
        </div>`;
        $(this.parent).append(markup);
    }
}