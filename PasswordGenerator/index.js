
function gen(){
    const letters2 = "ABCDFGHIJKLMNOPQRSTUVWYZabcdfghjklmnopqrstuvwyz_-,.£$€$£@!|/{[]}++?+";
    let psw = "";
    let len = 16;
        for(let i = 0; i<len; i++){
            psw += letters2.charAt(Math.floor(Math.random() * letters2.length));
        }
   alert(psw)
}


