function no() {

    let noButton = document.getElementById("no-button");
    let minWidth = 50;
    let minHeight = 25;
    let minFontSize = 15;

    if (noButton.offsetWidth > minWidth && noButton.offsetHeight > minHeight) {
        noButton.style.width = (noButton.offsetWidth - 10) + "px";
        noButton.style.height = (noButton.offsetHeight - 5) + "px";
        noButton.style.fontSize = (noButton.offsetHeight - 10) + "px";
    }

    let yesButton = document.getElementById("yes-button");

    yesButton.style.width = (yesButton.offsetWidth + 10) + "px";
    yesButton.style.height = (yesButton.offsetHeight + 10) + "px";
    yesButton.style.fontSize = (yesButton.offsetHeight - 10) + "px";
}

function yes() {
    let noButon = document.getElementById("no-button");
    let yesButton = document.getElementById("yes-button");

    var divs = document.getElementsByTagName("div"); // get all div elements
    for (var i = 0; i < divs.length; i++) { // loop through them
        divs[i].style.display = "none"; // hide each one
    }

    let image = document.createElement("img");
    image.src = "tole-cat.gif"
    image.style.width = "165px";
    image.style.height = "294px";
    document.body.appendChild(image);

    let emma1 = document.createElement("img");
    emma1.src = "emma1.png";
    emma1.style.width = "336px";
    emma1.style.height = "252px"

    let emma2 = document.createElement("img");
    emma2.src = "emma2.png";
    emma2.style.width = "193px";
    emma2.style.height = "258px"

    let emma3 = document.createElement("img");
    emma3.src = "emma3.png";
    emma3.style.width = "181px";
    emma3.style.height = "241px";

    let emma4 = document.createElement("img");
    emma4.src = "emma4.png";
    emma4.style.width = "189px";
    emma4.style.height = "252px";

    let emmaContainer = document.createElement("div");
    emmaContainer.id = "emmaContainer";
    emmaContainer.style.textAlign = "center";
    emmaContainer.style.display = "flex";
    emmaContainer.style.gap = "20px";
    emmaContainer.appendChild(emma1);
    emmaContainer.appendChild(emma2);
    emmaContainer.appendChild(emma3);
    emmaContainer.appendChild(emma4);
    emmaContainer.style.justifyContent = "center";
    emmaContainer.style.alignItems = "center"
    
    let container = document.createElement("div");
    container.id = "container";
    container.style.textAlign = "center";

    let text = document.createElement("p");
    text.id = "text";
    text.style.color = "#FF3334";
    text.style.fontFamily = "Comic Sans MS";  
    text.style.fontSize = "40px"
    text.innerHTML = "YAYYYY";

    container.appendChild(image);
    container.appendChild(text);
    container.appendChild(emmaContainer);
    
    document.body.appendChild(container);

    let audio = new Audio("putongdao.mp3");
    audio.play()
    audio.volume = 1;

    /* let cursorImage = "heart-anatomy.png";
    document.body.style.cursor = "url(" + cursorImage + "), auto";
    document.body.style.cursor = "url(cursorImage), auto"
    */
}
