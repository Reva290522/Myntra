//user-register-name,email,password---->save in localstorage
//login-email and password----->localstorage same email,password
//if he logged in then only he can access cart page

function register() {
    var nameFromHtml = document.getElementById("name");
    if (nameFromHtml){
        var name =nameFromHtml.value ;
        console.log("name");
    }
    var emailFromHtml = document.getElementById("email");
    if (emailFromHtml){
        var email =emailFromHtml.value ;
        console.log("email");
    }
    var passwordFromHtml = document.getElementById("password");
    if (passwordFromHtml){
        var password =passwordFromHtml.value ;
        console.log("password");
    }
    if(name && email && password){
        localStorage.setItem("userData",JSON.stringify({nameOfUser:name,emailOfUser:email,passwordOfUser:password}));
        localStorage.setItem("isUserloggedIn","false");
        alert("registeration done!!");
        window.location.href ="./login.html";
    }
    else{
        alert("Error:write all fields");
    }
}
 
function login(){
    var emailFromHtml = document.getElementById("email");
    if (emailFromHtml){
        var emailFromLogin = emailFromHtml.value;
        console.log("emailFromLogin");
    }
    var passwordFromHtml = document.getElementById("password");
    if (passwordFromHtml){
        var passwordFromLogin =passwordFromHtml.value ;
        console.log("passwordFromLogin");
    }
    if(emailFromLogin && passwordFromLogin){
        var dataFromLocal = localStorage.getItem("userData");
        var parsedData = JSON.parse(dataFromLocal);
        console.log(parsedData.emailOfUser,"parsedData.emailOfUser");
        if(emailFromLogin == parsedData.emailOfUser && passwordFromLogin==parsedData.passwordOfUser){
            localStorage.setItem("isUserLoggedIn","true");
            alert("Login successfull");
            window.location.href ="./home.html";
        }else {
            alert("wrong cred")
        }
    }
}

//create product page and cart page
//from products page save products into localstorage,{"products",[{}]}
//then fetch that products in cart page

function addToCart(proId){
    alert ("Adding to cart");
     console.log(proId,"proId");
     var existingProducts = JSON.parse(localStorage.getItem("allProducts"));
     console.log(existingProducts);
     if(existingProducts == null){existingProducts=[]};

     console.log(existingProducts);
     var proPs = proId.querySelectorAll("p");
     var proName = proPs[0].innerText;
     //console.log(proName,"proName");
     var proImg = proId.querySelector("img").src;
     console.log(proImg);
     var proPrice = proPs[2].innerText;
     //console.log(proPrice);
     var proObj = {pN:proName,pP:proPrice,pI:proImg}
     //console.log(proObj)
     existingProducts.push(proObj);
     //console.log(existingProducts,"existingProducts 2");
     localStorage.setItem("allProducts",JSON.stringify(existingProducts));
     alert("Product added !");
}

