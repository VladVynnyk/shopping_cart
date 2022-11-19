let products = [{name:"Пралка 1", price:4000},{name:"SONY", price:5000}, {name:"Philips", price:7400}, {name:"Samsung", price:10200}]
let cartProducts = []
if(document.title == 'Document'){
    products.map((product)=>{
        document.write(`<div class="box">
                        <div class="top_block">
                            <p><a href="#">ХУДОЖНЯ ЛІТЕРАТУРА</a></p>
                        </div>
                        <div class="midll_block">
                            <img src="img/169302548.jpg">
                            <a href="https://rozetka.com.ua/ua/287646223/p287646223/">
                                <p>${product.name}</p>
                            </a>
                        </div>
                        <div class="bottom_block">
                            <span><span>${product.price}грн</span><p><sapan class="bold">${product.price}</sapan>грн</p></span>
                            <button class="product_to_cart">У КОРЗИНУ</button>
                        </div>
                    </div>`
                    )
                }
            )



    let cart = document.getElementById("header-button")
    console.log(cart)

    cart.addEventListener("click", ()=>{
        if(cartProducts.length<=0){
            alert("cart is empty")    
        }
        else{

            window.location.href="./cart.html"
        }
    })

    let productButtons = document.getElementsByClassName("product_to_cart")

    for(let i = 0; i<productButtons.length; i++)
    {
        productButtons[i].addEventListener("click", ()=>{
            let amount = prompt("Enter amount of products:", 1)

            let product = {
                "name":products[i].name, "price":products[i].price, "amount":amount,
            }
            console.log(product)
            cartProducts.push(product)
            window.localStorage.setItem('cartProducts', JSON.stringify(cartProducts))
            alert("Product was added successfully")
            window.location.href="./cart.html"
        })
    }
}
else{
    let handleClick = () => {
        window.localStorage.removeItem('cartProducts')
    }


    let cart = JSON.parse(window.localStorage.getItem('cartProducts'))
    console.log("CARt")
    cart.forEach((product)=>{
        console.log("asdfasdf")
        document.write(`<br/><div>Name: ${product.name}</div>
        <br/>
        <div>Price: ${product.price}</div>
        <br/>
        <div>Amount of product: ${product.amount}</div>
        <br/>
        <div><button onclick="handleClick()">Delete</button></div>
        `
            )
        }
    ) 
}