
// for loop

for(let i = 3; i< 12; i+=3){
    console.log(i);
    }
    
    
    // while loop
    
    let username ="";
    
    while(username === ""){
        username = window.prompt('Enter a name');
    }
    
    console.log('Good day ${username}');

// change CSS Styles with JS 

const button = document.getElementById("myButton");
const paragraph = document.getElementById("myParagraph");

button.addEventListener("click", () => {   
paragraph.style.display = "none";
});
