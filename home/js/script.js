var i=[];
var total=0;
var counter=0;
let flag = true;
function addQty(id){
    for(x=0;x<i.length;x++){
        if(i[x].id===id && i[x].quantity<10){
            i[x].quantity++;
            document.getElementById(`qty-${id}`).innerHTML = i[x].quantity;
            break;
        }
    }
    total=0;
    for(z=0;z<i.length;z++){
        total+=i[z].price*i[z].quantity;
    }
    document.getElementById('total').innerHTML = total;

    

}
function decQty(id){
    for(x=0;x<i.length;x++){
        if(i[x].id===id && i[x].quantity>1){
            i[x].quantity--;
            document.getElementById(`qty-${id}`).innerHTML = i[x].quantity;
            break;
        }
        else if(i[x].id===id && i[x].quantity<=1){
            i=i.filter((item)=>item.id!=i[x].id);
            document.getElementById('cart-number').innerHTML = i.length;
            document.getElementById('cart-items-list').innerHTML=i.map((item)=>{
                return `
                <div class="cart-item">
                    <div class="image-and-info-container">
                        <img src=${item.image} alt="error">
                        <div class="car-info-container">
                            <h3>${item.name}</h3>
                            <p>${item.price}</p>
                        </div>
                    </div>
                    <div class="cart-inc-dec-container">
                        <button onclick="addQty(${item.id})">+</button>
                        <p id="qty-${item.id}">${item.quantity}</p>
                        <button onclick="decQty(${item.id})">-</button>
                    </div>
                </div>`
                }).join("");
        
        }
        

    }
    total=0;
    for(z=0;z<i.length;z++){
        total+=i[z].price*i[z].quantity;
    }
    document.getElementById('total').innerHTML = total;
    

}
function addToCart1(name,price,image,id){
    for(j=0;j<i.length;j++){
        if(name===i[j].name){
            flag = false;
            break;
        }
    }
    if(flag===true){
        i.push({name:name,price:price,image:image,quantity:1,id:id});
        document.getElementById('cart-number').innerHTML = i.length;
        total=0;
        for(z=0;z<i.length;z++){
            total+=i[z].price*i[z].quantity;
        }
        document.getElementById('total').innerHTML = total;
        document.getElementById('cart-items-list').innerHTML= i.map((item)=>{
        return `
        <div class="cart-item">
            <div class="image-and-info-container">
                <img src=${item.image} alt="error">
                <div class="car-info-container">
                    <h3>${item.name}</h3>
                    <p>${item.price}</p>
                </div>
            </div>
            <div class="cart-inc-dec-container">
                <button onclick="addQty(${item.id})">+</button>
                <p id="qty-${item.id}">${item.quantity}</p>
                <button onclick="decQty(${item.id})">-</button>
            </div>
        </div>`
        }).join("");

    }
    flag=true;
    console.log(i);
}
document.getElementById('cart').addEventListener("click",()=>{
    document.getElementById('cart-pop-up').classList.toggle("show");
})
