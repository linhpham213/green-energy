// DATA RESOURCES
let dataResource = [
    {
        heading: "History",
        bodyText: "The cat (Felis catus) is a small carnivorous mammal. It is the only domesticated species in the family Felidae and often referred to as the domestic cat to distinguish it from wild members of the family. The cat is either a house cat, kept as a pet, or a feral cat, freely ranging and avoiding human contact.A house cat is valued by humans for companionship and for its ability to hunt rodents. About 60 cat breeds are recognized by various cat registries.",
        imgUrl: "./img/cat-1.jpg"
    },
    {
        heading: "Behavior",
        bodyText: "Outdoor cats are active both day and night, although they tend to be slightly more active at night. The timing of cats' activity is quite flexible and varied, which means house cats may be more active in the morning and evening, as a response to greater human activity at these times. Although they spend the majority of their time in the vicinity of their home, housecats can range many hundreds of meters from this central point, and are known to establish territories that vary considerably in size, in one study ranging from 7 to 28 hectares (17–69 acres).",
        imgUrl: "./img/cat-2.jpg"
    },
    {
        heading: "Lifespan",
        bodyText: "The average lifespan of pet cats has risen in recent decades. In the early 1980s, it was about seven years, rising to 9.4 years in 1995 and 15.1 years in 2018. Some cats have been reported as surviving into their 30s, with the oldest known cat, Creme Puff, dying at a verified age of 38.",
        imgUrl: "./img/cat-3.jpg"
    }
];

let $btn = document.querySelectorAll("a");
let $content = document.querySelector(".content");
/*console.log($btn);*/

// EVENT-OBJECT IS ACCESSED 
// AS THE FIRST PARAMETER OF THE EVENT HANDLER
function eventHandler(ev){
    
    // fetch the clicked button
    let btnClass = this.className
    
    // print the text of the clilcked button
    // console.log(ev.target);
    
    if (btnClass === "history"){
        $content.innerHTML = `<h3>${dataResource[0].heading}</h3><img src="${dataResource[0].imgUrl}" atl=""><p>${dataResource[0].bodyText}</p>`;
    } else if (btnClass === "type"){
        $content.innerHTML = `<h3>${dataResource[1].heading}</h3><img src="${dataResource[1].imgUrl}" atl=""><p>${dataResource[1].bodyText}</p>`;       
    } else {
        $content.innerHTML = `<h3>${dataResource[2].heading}</h3><img src="${dataResource[2].imgUrl}" atl=""><p>${dataResource[2].bodyText}</p>`;       
    }
    
    
}
/*$btn[0].addEventListener("click", clickEvent);
$btn[1].addEventListener("click", clickEvent);
$btn[2].addEventListener("click", clickEvent);*/

for(let i=0; i< $btn.length; i++){
    $btn[i].addEventListener("click", eventHandler);
}