
function GetUserInfo(params) {
    $.get("https://api.github.com/users/TheNomad99",function(data,status){
     //   console.log(status);
        let profile="";
        $.map(data,(e) => {
            // profile += `<div href="${e.html_url}" class="profile">
            // <h3>${e.name}</h3>
            // <span>@${e.login}</span>
            // </div>`;
            console.log(`Username:${data["login"]} \nName:${data["name"]}\nUrl:${data["html_url"]}`);
        }) 
        console.log(profile);
        // $("#table").html(profile);    
})    
}

GetUserInfo();
let username = "w3cj";
//
$.get(`https://api.github.com/users/${username}/repos`, function(data, status){
   // console.log(status);
   if(data.length > 0){
    let ut = "";
    data.map((e) => {
        ut += `<tr><td><a target="_blank" href="${e.html_url}">${e.name}</a></td><td>${e.language}</td></tr>`;
    })
    $("tbody").html(ut);   
   } else {
       $("#display").css("display","block")
   }
    
})

