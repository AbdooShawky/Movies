
let myRequest = new XMLHttpRequest();

myRequest.open("Get", "https://api.themoviedb.org/3/trending/movie/week?api_key=f1aca93e54807386df3f6972a5c33b50");

myRequest.send();
var posts = [];
myRequest.addEventListener("readystatechange", function () {

    if (myRequest.readyState == 4 && myRequest.status == 200) {
        posts = JSON.parse(myRequest.response).results;
        console.log(posts);
        displayPosts();
    }


});

function displayPosts() {
    var cartona = ``;



    for (var i = 0; i < posts.length; i++) {
        cartona += `
        <div class="col-lg-3 col-md-4 ">
            <div class="post position-relative">
            <div class="position-absolute rate">

            ${posts[i].vote_average}   
            </div>
          
                <img class="w-100" src="https://image.tmdb.org/t/p/w500${posts[i].poster_path}">
                <p>${posts[i].overview.substring(0, 100)}</p>
            </div>
        </div>`;
    }
    document.getElementById("myRow").innerHTML = cartona;
}