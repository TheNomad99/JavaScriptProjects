$.get("https://api.github.com/users/TheNomad99",function(data,status){
    console.log(status);
    console.log(data["login"]);
    const profile = `<div href="${data["html_url"]}" class="profile">
     <h3>${data["name"]}</h3>
     <span >@${data["login"]}</span>
    </div>`;
    $("#table").html(profile);    
})