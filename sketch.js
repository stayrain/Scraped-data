let files=[];
let par;
let index=0;
function setup() {
  fetch("newspaper.json").then(function(response) {
    return response.json();
  }).then(function(data) {

    par = data.newspaper;
        for (let i=0; i<par.length; i++){

    console.log(par[i].name);
    showText(par[i].name);
    showText('page:'+par[i].page);
    showText(par[i].loaction);
    showText(par[i].date);
    showText(par[i].image);
        }
  });
}



function showText(text){
  let textContainer = select("#text-container");
//  textContainer.elt.innerHTML = "";//add this in if you want to replace the text each time
  let p = createP(text);
  p.parent("text-container");
}
