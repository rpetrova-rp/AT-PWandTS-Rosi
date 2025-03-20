// get elemet by tag name
document.getElementsByName("h1")[0];
//get h1 tag by css selector
document.querySelector("h1");
//create DOM element
var paragraph = document.createElement("p");
paragraph.textContent = "This is our created paragraph";
//get elemtnat by class name
var addItemsContent = document.getElementsByClassName("add-items");
console.log("addItemsContent", addItemsContent);
//append element in the html structure
addItemsContent[0].append(paragraph);
// remove element
var spanEl = document.getElementsByTagName("span")[0];
spanEl.remove();
//add event listener on keyboard press
document.addEventListener("keypress", function (event) {
    console.log("Key pressed, event.key");
});
//Add/Remove  list items
var itemInput = document.querySelector("#itemInput");
var addButton = document.querySelector("#addButton");
var list = document.querySelector("#list");
function addListItem() {
    var listItem = document.createElement("li");
    var listItemValue = itemInput.value;
    if (listItemValue !== "" && listItemValue !== " ")
        // added input value as list item text
        listItem.textContent = listItemValue;
    //display list item on the screen
    list.append(listItem);
    // clear input value after adding it to the list
    itemInput.value = "";
    itemInput.focus();
    paragraph.remove();
    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    listItem.append(deleteBtn);
    deleteBtn.style.margin = "5px";
    deleteBtn.addEventListener("click", function () {
        listItem.remove();
    });
}
addButton.addEventListener("click", function () { return addListItem(); });
itemInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addListItem();
    }
});
