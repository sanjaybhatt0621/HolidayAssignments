export default class ShoppingCartService{
    constructor(){
        this.url='./src/resources/data.json';
    }
    async getData(){
        try{
            const res = await fetch(this.url);
            return  res.json();
        }catch(err){
            console.log(err);
        }
    }
}