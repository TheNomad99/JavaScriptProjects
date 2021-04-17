
function gen(length,lan){
    const letters = "ABCDFGHIJKLMNOPQRSTUVWYZÆØÅabcdfghjklmnopqrstuvwyzæøå_-,.£$€$£@!|/{[]}++?+";
    const letters2 = "ABCDFGHIJKLMNOPQRSTUVWYZabcdfghjklmnopqrstuvwyz_-,.£$€$£@!|/{[]}++?+";
    let psw = "";
    let len = length;
    if(lan == "Nor"){
        for(let i = 0; i<len; i++){
            psw += letters.charAt(Math.floor(Math.random() * letters.length));
        }
    } else {
        for(let i = 0; i<len; i++){
            psw += letters2.charAt(Math.floor(Math.random() * letters2.length));
        }
    }   
    return psw;
}



console.log(gen(16).length)
console.log(gen(16))