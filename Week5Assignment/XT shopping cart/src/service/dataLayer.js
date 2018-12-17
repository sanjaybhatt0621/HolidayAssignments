export default class ShoppingCartService{
    constructor(){
        this.shoppingUrl='http://localhost:3000/items';
        this.carouselUrl = 'http://localhost:3000/suggestionCarousel';
    }
    async getDataShoppingCart(){
        try{
            const res = await fetch(this.shoppingUrl);
            return  res.json();
        }catch(err){
            console.log(err);
        }
    }

    async getDataCarousel(){
        try{
            const res = await fetch(this.carouselUrl);
            return  res.json();
        }catch(err){
            console.log(err);
        }
    }

    async getDataShoppingCartById(id){
        try{
            const res = await fetch(`${this.shoppingUrl}?id=${id}`);
            return  res.json();
        }catch(err){
            console.log(err);
        }
    }

    async addData(item){
        try{
            const id= Math.floor(Math.random() * 100);
            item.id=id;
            
            const response = await fetch(this.shoppingUrl,{
                method: "POST", // *GET, POST, PUT, DELETE, etc.
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(item) // body data type must match "Content-Type" header
            });
            return response.json();
        }catch(err){
            console.log(err);
        }
    }

    async editData(item){
        try{
            //const toUpdate= new Profile(id,name,city);
            const response=await fetch(`${this.shoppingUrl}/${item.id}`,{
                method: "PUT", // *GET, POST, PUT, DELETE, etc.
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(item)
            });
            return response.json();
        }catch(err){
            console.log(err);
        }
    }
    /* async remove(id){
        try{
            const response=await fetch(`${this.url}/${id}`,{
                method: "DELETE", // *GET, POST, PUT, DELETE, etc.
                headers: {
                    "Content-Type": "application/json"
                }
            });
            return response.json();
        }catch(err){
            console.log(err);
        }
    } */
}
