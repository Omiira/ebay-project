// ---------------Dynamic picture----------------------
var images =[];
images[0] = "Resources/1.jpg";
images[1] = "Resources/2.jpg";
images[2] = "Resources/3.jpg";
images[3] = "Resources/4.jpg";
images[4] = "Resources/5.jpg";

var counter = 0;
parseInt(counter);
var stopimg;
function dynamic_img()
          {
            if (counter<5 && counter >-1)
              {
                  document.getElementById("frontimg").src = images[counter];
              }
              else
              {
                  counter = 0;
                  document.getElementById("frontimg").src = images[counter];
              }            
            //   addtext();
              counter++;  
          }
function start_dyimg ()
          {
              stopimg = setInterval(dynamic_img,2000);
          }

// ----------set Counter value by Buttons---------

function count(x)
{
    clearInterval(stopimg);
    counter = x;
    stopimg = setInterval(dynamic_img,2000);
}

function nextarr()
{
    clearInterval(stopimg);
    if (counter == 4)
    {
        counter = 0;
        document.getElementById("frontimg").src = images[counter];
    }
    else if (counter == 3)
    {
        counter = 4;
        document.getElementById("frontimg").src = images[counter];
    }
    else if (counter == 2)
    {
        counter = 3;
        document.getElementById("frontimg").src = images[counter];
    }
    else if (counter == 1)
    {
        counter = 2;
        document.getElementById("frontimg").src = images[counter];
    }
    else if (counter == 0)
    {
        counter = 1;
        document.getElementById("frontimg").src = images[counter];
    }
    stopimg = setInterval(dynamic_img,2000);
}

function lastarr()
{
    clearInterval(stopimg);
    if (counter == 4)
    {
        counter = 3;
        document.getElementById("frontimg").src = images[counter];
    }
    else if (counter == 3)
    {
        counter = 2;
        document.getElementById("frontimg").src = images[counter];
    }
    else if (counter == 2)
    {
        counter = 1;
        document.getElementById("frontimg").src = images[counter];
    }
    else if (counter == 1)
    {
        counter = 0;
        document.getElementById("frontimg").src = images[counter];
    }
    else if (counter == 0)
    {
        counter = 4;
        document.getElementById("frontimg").src = images[counter];
    }
    stopimg = setInterval(dynamic_img,2000);
}

// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------

var x = new XMLHttpRequest();

var product = '[{"id": 1,"title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price": 109.95,"description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category": "mens clothing","image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating": {"rate": 3.9,"count": 120}},{"id": 2,"title": "Mens Casual Premium Slim Fit T-Shirts ","price": 22.3,"description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.","category": "mens clothing","image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg","rating": {"rate": 4.1,"count": 259}},{"id": 3,"title": "Mens Cotton Jacket","price": 55.99,"description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.","category": "mens clothing","image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg","rating": {"rate": 4.7,"count": 500}}]';
var sproduct = JSON.parse(product);


//****************************************************************************************************/
//****************************************************************************************************/
//****************************************************************************************************/
//*************************************Brands Info Page***********************************************/
var brands = [
    {
        Name:"Samsung",
        ID: 1,
        shop_by_category: ["cat1","cat2","cat3"],
        product: [1,2,3,4,5],
        Description:""
    }
];

var products =[
    {
        ID: 1,
        Name: "phone1",
        model: "999"
    },
    {
        ID: 2,
        Name: "phone2",
        model: "989"
    },
    {
        ID: 3,
        Name: "phone3",
        model: "979"
    },
    {
        ID: 4,
        Name: "phone4",
        model: "969"
    },
    {
        ID: 5,
        Name: "phone5",
        model: "959"
    }
];



//  فاضل لما ادوس كليك على سامسونج سفتحلي الصفحة بالبيانات الخاصة بسامسونج
var brandpage;
var a = new XMLHttpRequest();

function displayBrandInfo()
{

    brandpage = window.open('samsung.html','_blank','');
    brandpage.document.getElementById("shoplist").innerHTML = "<h1>Asmaaa</h1>";
    
    document.getElementsbyId("shoplist").innerHTML = "<h4>sam</h4>";
    brandpage.console.log("asmaa");
    
    


    
    // https://reqres.in/api/users

    // a.open("GET","demoooo.json",true);
    // a.onreadystatechange = function (){
    //     if (a.readyState == 4 && a.status == 200)
    //     {
    //         var retrievjson = a.responseText;
    //         var retrievpars = JSON.parse(retrievjson);
    //         console.log(retrievjson);
    //         document.getElementById("demo").innerHTML =
    //         "<br>First Name: "+ retrievpars.data[0].first_name +
    //         "<br>Last Name: "+ retrievpars.data[0].last_name +
    //         "<br>User Avatar image:<br>"+ retrievpars.data[0].avatar;
    //     }

    // }
    //     a.send();

}

// displayBrandInfo();













function showDetails()
{

}


 


//****************************************************************************************************************/
//*****************************************Product page***********************************************************/
function product_details(x)
{
    let id = x.value;
    
    let xhr = new XMLHttpRequest();

    xhr.open("GET","product.json",true);

    xhr.onreadystatechange = function()
    {
        if (xhr.readyState == 4 && xhr.status == 200)
        {
            var B_allData = xhr.responseText;
            var allData = JSON.parse(B_allData);

            document.getElementById("productphoto").src = allData[id-1].image;

            document.getElementById("detailsspan2").innerHTML ="<h2>"+allData[id-1].name+
            "</h2><p style='text-align: left;'><b>Title</b>: "+allData[id-1].title+
            "<br><b>Description:</b>"+allData[id-1].description +"<br><b>Category:</b>"+
            allData[id-1].category +"<br><b>Price:</b>"+allData[id-1].price +
             "<br><b>Rate:</b>"+ allData[id-1].rating.rate +"<br><b>Count:</b>"+
              allData[id-1].rating.count +"<button type='button' id='addCart' value='"+
              id+"' onclick='addToCart(this)'>Add To Cart</button></p>";
        }
    }

    xhr.send();

}


//**********Add to Cart***********/
var cartarr = new Array();

function addToCart(btn)
{
    let id = btn.value;
    cartarr.push(id);

    window.localStorage.arr = JSON.stringify(cartarr);

    if (window.localStorage.counter)
    {
       window.localStorage.counter = parseInt(window.localStorage.counter)+1;
    } 
    else
    {
       window.localStorage.counter=1;
    }  

}

    // window.location.reload();

var select = new Array();
function show_card()
{
    if (window.localStorage.counter>0)
    {
       window.localStorage.selected = JSON.parse(window.localStorage.arr);
    //    console.log(window.localStorage.selected);
       select = window.localStorage.selected.split(",");

    //    console.log(select);
        for(let i =select.length-1; i>=0 ;i--)
        {
            
            let val = select[i];
            pro_details_on_card(val);
        }
    }
    else
    {
        document.getElementById("carddiv").innerHTML = "<h2>You didnot select any product!</h2><br><h4>Select Products to show here.</h4>"
        +"<br><a href='products.html'> Go To Products Page</a>";
    }

}

function pro_details_on_card(a)
{
    let xhr = new XMLHttpRequest();

    xhr.open("GET","product.json",true);

    xhr.onreadystatechange = function()
    {
        if (xhr.readyState == 4 && xhr.status == 200)
        {
            var B_allData = xhr.responseText;
            var allData = JSON.parse(B_allData);


            let Bigdiv = document.getElementById("carddiv");
            let div = document.createElement("div");
            Bigdiv.appendChild(div);
            div.className='createddiv';

            div.innerHTML ="<span class='phocart'><img class='imgcart' src='"+allData[a-1].image+"'></span>"+
            "<span class='spancart'><h2>"+allData[a-1].name+
            "</h2><p style='text-align: left;'><b>Title</b>: "+allData[a-1].title+
            "<br><b>Description:</b>"+allData[a-1].description +"<br><b>Category:</b>"+
            allData[a-1].category +"<br><b>Price:</b>"+allData[a-1].price +
             "<br><b>Rate:</b>"+ allData[a-1].rating.rate +"<br><b>Count:</b>"+
              allData[a-1].rating.count +"<button type='button' id='removeCart' value='"+
              a+"' onclick='removeElement(this)'>Remove From Cart</button></p><br></span>";
        }
    }

    xhr.send();
}

function removeAll()
{
    window.localStorage.counter=0;
    window.localStorage.arr ='';
}

var delarr = new Array();
var d = -1;

function removeElement(x)
{    
    id = x.value;
    window.localStorage.toDelete = JSON.parse(window.localStorage.arr);
    delarr = window.localStorage.toDelete.split(',');
    console.log(delarr);

    for(let i =delarr.length-1; i>=0; i--)
    {
        if (delarr[i] == id)
        {
            d = i;
            console.log("done");
            console.log(d);
        }
        
    }
    if (d > -1)
    {
        for(let i=d; i<delarr.length; i=parseInt(i)+1)
        {
            delarr[i]=delarr[parseInt(i)+1];
        }
        delarr.length--;

        window.localStorage.counter = parseInt(window.localStorage.counter)-1;
        window.localStorage.arr = JSON.stringify(delarr);
        window.location.reload();
    }

console.log(delarr);
console.log(d);

}

function show_Number_of_pro()
{
    if (window.localStorage.counter>0)
    {
                        
        document.getElementById("cart").innerHTML = "<button id='n_of_prod'>"+window.localStorage.counter+"</button>";

        document.getElementById("incart").innerHTML = "<h3> Go To Cart To see Your products.</h3>";
    }
}

show_Number_of_pro();



//********************************************************************************************/
//**************************************Search********************************************** */

function searchAbout()
{
    var value = document.getElementById("search").value;

    window.localStorage.item_search = value;
}


function searchinJson()
{
    var searchname = window.localStorage.item_search;

    let xhr = new XMLHttpRequest();

    xhr.open("GET","product.json",true);

    xhr.onreadystatechange = function()
    {
        if (xhr.readyState == 4 && xhr.status == 200)
        {
            var B_allData = xhr.responseText;
            var allData = JSON.parse(B_allData);

            let i = 0;
            for(var element of allData)
            {
                if (searchname == element.name)
                {
                    window.localStorage.item_id =element.id;
                    i= 1;
                }
            }
                if (i ==1)
                {
                    var index = window.localStorage.item_id -1;

                    document.getElementById("resbox").innerHTML ="<h2>"+allData[index].name+
                    "</h2><p style='text-align: left;'><b>Title</b>: "+allData[index].title+
                    "<br><b>Description:</b>"+allData[index].description +"<br><b>Category:</b>"+
                    allData[index].category +"<br><b>Price:</b>"+allData[index].price +
                    "<br><b>Rate:</b>"+ allData[index].rating.rate +"<br><b>Count:</b>"+
                    allData[index].rating.count +"<button type='button' id='addCart' value='"+
                    window.localStorage.item_id+"' onclick='addToCart(this)'>Add To Cart</button></p><br>"
                    + "<img src='"+ allData[index].image + "' style='width: 300px; height:250px;position:absolute ;right:50px ;bottom: 40px;'>";
                }
                else
                {
                    document.getElementById("resbox").innerHTML ="<h2>Not Found</h2>";
                }
        }
    }

    xhr.send();



}


function logged()
{
    if (window.localStorage.connect == 1)
    {
        
        document.getElementById("logged").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Hi!" + "&nbsp;&nbsp;&nbsp;"+window.localStorage.name + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    }
}


logged();




