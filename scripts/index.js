// console.log(data)
let cart= [
]

data.forEach((e,i)=>{
    document.getElementById("listproduct").innerHTML += `
    <div ${e.id} class="col-4  ps-4">
        <img class= "mt-2 border" src="${e.image}" class="imgprd" alt="" width="100%" height="auto" onclick="addCart(${e.id})" >
        <h1 class="TitleProduct mb-0 mt-2">${e.productname}</h1>
        <p class = "fw-bold fs-15">Rp ${e.price}.000</p>
    </div>`
})

const datacart = () =>{
    // console.log(cart)
    document.getElementById("cartlength").innerHTML = cart.length
    document.getElementById("listcart").innerHTML = ""
    cart.forEach((e,i)=>{
        document.getElementById("listcart").innerHTML += 
        `<div class="row mb-3 w-100 ">
            <div class="col-3 p-0 ">
            <img class="bordercart " src="${e.image}" alt="" width="auto" height="100%" >
            </div>
            <div class=" col-9 ">
                <h1 class="TitleCart">${e.productname}
                    <i class="ms-2 fa fa-trash pointer" onclick ="btndellete(${e.id})" aria-hidden="true"></i>
                </h1>
                <div class="row mt-3 ">
                    <div class="col-5 d-flex ">
                        <button type="" class="button" onclick ="btnadd(${e.id})"> +</button>
                        <div class=" bdrbutton">${e.qty}</div>
                        <button class="button" onclick ="btnrem(${e.id})"> - </button>
                    </div>
                    <div class="col-7">
                        <h1 class="price  d-flex justify-content-end ">Rp ${e.price * e.qty}.000 </h1>
                    </div>
                </div>
            </div>
        </div>`
    })  
    
    if (cart.length > 0){
        let total=0
        cart.forEach ((e)=>{
            total += e.price * e.qty
            document.getElementById("total").innerHTML = `
            <div class="position-fixed bottom-0">
                <div class="row ms-2">
                    <div class="col-6 fw-bold price"> Total</div>
                    <div class="col-6 d-flex justify-content-end fw-bold pe-3 price">Rp ${total}.000*</div>
                    <p class="fw-normal fs-15 mb-2 mt-1">*Belum Termasuk ppn</p>
                </div>
                <div class="d-flex flex-column checkout ms-2">
                    <button onclick="" class="mb-3 p-2 blue "data-bs-toggle="modal" data-bs-target="#exampleModal">CheckOut</button>
                    <button onclick="cancel()" class="p-2 mb-3 pink">Cancel</button>
                </div>
                
            </div>`
        })
    }else {
        document.getElementById("total").innerHTML = `
            <div class="d-flex mt-4 flex-column align-items-center">
            <img src="./images/empty.png" width="150px" height="auto" >
            <h1 class="TittleEmpty fw-normal mt-2 mb-0">Your Cart is Empty</h1>
            <p class="Textempty"> Please add some items from the menu</p>
        </div>`
    }
}

const checkdatacart = (id) =>{
    const finddata = cart.find((e)=>{
        if (e.id == id){
            return e
        }
    })
    return finddata
}

const addqty = (id) =>{
    add = cart.findIndex((x=> x.id == id))
    cart[add].qty += 1
}

const btnadd = (id) =>{
    addqty(id) //update qty
    datacart() //update tampilan
}

const removeqty = (id) =>{
    min = cart.findIndex((x=> x.id == id))
    if (cart[min].qty <= 1){
        cart.splice([min],1)
    }else{
        cart[min].qty -= 1
    }
}

const btnrem = (id) =>{
    removeqty(id) //update qty
    datacart() //update tampilan
}
const btndellete = (id)=>{
    const newcart = cart.filter((e)=>{
        if(e.id !==id){
            return e
        }
    })
    cart = newcart
    datacart()
}
const cancel = ()=>{
    cart = []
    datacart()
}

const addCart = (id) => {
    const obj = data.find((e) => {
        if(e.id === id){
            return e
        }
    })
    // console.log(obj)
    const datawithqty = {
        ...obj, qty : 1
    }

    const check = checkdatacart(id)
    if (check == undefined){
        cart.push(datawithqty)
    }else{
        addqty(id)
    }

    datacart()
}





