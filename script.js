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

    // Feel free to change the gif, or get rid of it entirely
    let image = document.createElement("img");
    image.src = "tole-cat.gif"
    image.style.width = "165px";
    image.style.height = "294px";
    document.body.appendChild(image);

    /*
    UNCOMMENT the following to add images.
    The template is correct, just change the image names (such as image1.png) to the destinations of the desired images
    Do not forget to change the rest of the code (an easy way to do this is with CTRL/COMMAND + F)
    Resize appropriately
    */
    /*
    let image1 = document.createElement("img");
    image1.src = "image1.png";
    image1.style.width = "336px";
    image1.style.height = "252px"

    let image2 = document.createElement("img");
    image2.src = "image2.png";
    image2.style.width = "193px";
    image2.style.height = "258px"

    let image3 = document.createElement("img");
    image3.src = "image3.png";
    image3.style.width = "181px";
    image3.style.height = "241px";

    let image4 = document.createElement("img");
    image4.src = "image4.png";
    image4.style.width = "189px";
    image4.style.height = "252px";

    let imageContainer = document.createElement("div");
    imageContainer.id = "imageContainer";
    imageContainer.style.textAlign = "center";
    imageContainer.style.display = "flex";
    imageContainer.style.gap = "20px";
    imageContainer.appendChild(image1);
    imageContainer.appendChild(image2);
    imageContainer.appendChild(image3);
    imageContainer.appendChild(image4);
    imageContainer.style.justifyContent = "center";
    imageContainer.style.alignItems = "center"
    */
    
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
    // UNCOMMENT THE FOLLOWING AFTER YOU FINISHED THE IMAGE CONTAINER (if desired)
    // container.appendChild(imageContainer); 
    
    document.body.appendChild(container);

    // UNCOMMENT this for music playback when the 'Yes' button is pressed. Ideally, it should be long (or you can add a line to loop the music, Google it)
    /*
    let audio = new Audio("valentines.mp3");
    audio.play()
    audio.volume = 1;
    */

    /* let cursorImage = "heart-anatomy.png";
    document.body.style.cursor = "url(" + cursorImage + "), auto";
    document.body.style.cursor = "url(cursorImage), auto"
    */
}
