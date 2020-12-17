// Hli6hiygtXtcgRwGkbZTHTazQjZjBcnZ

// https://api.nytimes.com/svc/topstories/v2/world.json?api-key=Hli6hiygtXtcgRwGkbZTHTazQjZjBcnZ

let url = "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=Hli6hiygtXtcgRwGkbZTHTazQjZjBcnZ";

let headlines = document.getElementById("headlines");

// take the response you get and convert it to a json file
// then get the data and log it out
fetch(url).then(response => response.json()).then(data => {
  // console.log(data);
  // map function allows us to repeat the code for every article block on the page

// iterate over the headlines and display them

  data.results.map(article => {
    // for each article, do this
    console.log(article);

    let a = document.createElement("a");
    a.setAttribute("href", article.url)
    a.innerHTML = article.title;

    let img = document.createElement("img");
    img.setAttribute("src", article.multimedia[2].url);

    let p = document.createElement("p");
    p.innerHTML = article.abstract;

    let story = document.createElement("div");
    story.setAttribute("class", "story");

    story.appendChild(img);
    story.appendChild(a);
    story.appendChild(p);
    
    
    headlines.appendChild(story);

  }
  )
})

// create the element in html, set the attribute to a picture 
