/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/

//1.1

pElement=document.querySelectorAll("p")
    console.log("all the p element nodes of the document");
   console.log(pElement);

//1.2
divFirstChild=document.querySelector("div");
    console.log(divFirstChild);
//1.3
jumbotron=document.querySelector("#jumbotron-text");
    console.log(jumbotron);
//1.4

primaryContent=document.querySelectorAll(".primary-content p");
console.log(primaryContent);

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
alertButton=document.querySelector("#alertBtn");
    alertButton.addEventListener("click",function(){
        alert("Thanks for visiting Bikes for Refugees!")
    });
    

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.

backgroundChangeButton=document.querySelector("#bgrChangeBtn");
backgroundChangeButton.addEventListener("click",function(){
    document.body.style.background="lightblue";
})
*/




/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/
addTextButton=document.querySelector("#addTextBtn");
addTextButton.addEventListener("click",function(){
    createParagraph("We need lots of bikes and bike accessories! If you have an old bike you don't use, bring it to one of our dropoff events. Or come attend one of our fundraisers.");
})

function createParagraph (text) {
    mainArticle=document.querySelector("#mainArticles");
    newParagraph=document.createElement("p");
    mainArticle.appendChild(newParagraph);
    newParagraph.innerText=text;
}



/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
- how do we increase the font size in CSS?
- how do we know if an element is a link?
- how do we select a link and increase its font size?
- how do we select all links?
- how do we do _something_ for each of the links? (check the module on this one, it's a bit tricky)
*/
largerLinksButton=document.querySelector("#largerLinksBtn");
largerLinksButton.addEventListener("click",function(){
    const linkElements = document.querySelectorAll('a');
    linkElements.forEach((linkElement)=>{
        linkElement.style.fontSize="2em";
    })
    })
/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/

addArticleButton=document.querySelector("#addArticleBtn");
textInput=document.querySelector("input");
addArticleButton.addEventListener("click",function(){

    createParagraph(textInput.value);
/*
    mainArticle=document.querySelector("#mainArticles");
    newParagraph=document.createElement("p");
    mainArticle.appendChild(newParagraph);
    newParagraph.innerText=textInput.value;
*/
    textInput.value="";
    

});
 
/*
Task 7
======
Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.

*/
arrayColors=["lightblue","red","yellow","violet","blue"];

backgroundChangeButton=document.querySelector("#bgrChangeBtn");
backgroundChangeButton.addEventListener("click",function(){
    
    const color=arrayColors.shift();
    document.body.style.background=color;
    arrayColors.push(color);
    console.log(color);

})
