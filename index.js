const main = document.getElementById('articles-container');







async function getData() {
    let data;
    let dataLength = 0;
    const res = await fetch("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=fe7d211ff7974e45be093051fd8b7bd8");
    const result = await res.json();
    data = result.articles; //to determine the length of data received.
    dataLength = data.length;
    console.log(result);
    renderUI(data);



}
getData();

function renderUI(data) {
    main.innerHTML = ``;
    for (let i = 0; i < data.length; i++) {
        const article = document.createElement('article');
        article.innerHTML = `<img class="article-image" src="${checkImage(data[i].urlToImage)}" alt="News Image 1" />
<div class="article-content">
  <h2 id="heading-2">${data[i].title}</h2>
  <p>
  ${data[i].description}
  </p>
  <a href ="${data[i].url}">Read more.....</a>

  <p>Author:${data[i].author}</p>

</div>`
        main.appendChild(article);
    }
}



function checkImage(newsThumbnail) {
    if (newsThumbnail)
        return newsThumbnail
    return `https://st5.depositphotos.com/73977922/68296/v/950/depositphotos_682960432-stock-illustration-breaking-news-transparent-template-blue.jpg`
}





document.addEventListener("DOMContentLoaded", function () {
    // Get navbar items
    const united_states = document.getElementById("us");
    const united_kingdom = document.getElementById("uk");
    const homee = document.getElementById("home");
    const japan = document.getElementById("jp");


    // Add click event listeners
    united_states.addEventListener("click", function () {
        // Define action for Home click

        getData1();
        // You can add more actions here, like showing/hiding content, navigating, etc.
    });

    united_kingdom.addEventListener("click", function () {
        // Define action for About click
        getData2();
    });

    homee.addEventListener("click", function () {

        getData();

    });

    japan.addEventListener("click", function () {

        getData3();

    });

});

async function getData1() {
    let data;
    const res = await fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fe7d211ff7974e45be093051fd8b7bd8");
    const result = await res.json();
    data = result.articles; //to determine the length of data received.
    dataLength = data.length;
    console.log(result);
    renderUI(data);

}

async function getData2() {
    let data;
    const res = await fetch("https://newsapi.org/v2/top-headlines?country=ca&category=business&apiKey=fe7d211ff7974e45be093051fd8b7bd8");
    const result = await res.json();
    data = result.articles; //to determine the length of data received.
    dataLength = data.length;
    console.log(result);
    renderUI(data);

}

async function getData3() {
    let data;
    const res = await fetch("https://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=fe7d211ff7974e45be093051fd8b7bd8");
    const result = await res.json();
    data = result.articles; //to determine the length of data received.
    dataLength = data.length;
    console.log(result);
    renderUI(data);

}



