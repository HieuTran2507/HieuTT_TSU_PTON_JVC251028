const btnAddBookmark = document.getElementById("addBookmarkBtn"); 
const bookmarksList = document.getElementById("bookmarksList");
const btnClose = document.getElementById("closeBtn");
const websiteName = document.getElementById("websiteName");
const websiteURL = document.getElementById("websiteURL");
const btnSave = document.getElementById("saveBtn");
const modal = document.getElementById("modal");
let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

// update local storage
function saveBookmark(){
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

// open - close modal
btnAddBookmark.addEventListener("click", function(){
    modal.style.display = "block";
});
function closeModal(){
    modal.style.display = "none";
    websiteName.value = "";
    websiteURL.value = "";
}
btnClose.addEventListener("click", function(){
    closeModal();
});

// save button
btnSave.addEventListener("click", function(){
    const webName = websiteName.value.trim();
    const webURL = websiteURL.value.trim();
    if(webName==="" || webURL===""){
        alert("Website name or website URL is empty.");
        return;
    }
    const bookmark = {
        name: webName,
        url: webURL
    }
    bookmarks.push(bookmark);
    saveBookmark();
    closeModal();
    render();
});

function render(){
    // reset bookmarks list
    bookmarksList.innerHTML = "";

    //check bookmarks lenght
    const arr = JSON.parse(localStorage.getItem("bookmarks")) || [];
    
    if(arr.length === 0){
        bookmarksList.innerText = "Your bookmarks are empty, add your first bookmark";
    } else {
        for(let i in bookmarks){
            const div_item = document.createElement("div");
            div_item.className = "divItem";
            bookmarksList.appendChild(div_item);

            const itemName = document.createElement("div");
            itemName.className = "itemName";
            itemName.innerText = bookmarks[i].name;
            div_item.appendChild(itemName);

            const itemURL = document.createElement("div");
            itemURL.className = "itemURL";
            itemURL.innerText = bookmarks[i].url;
            div_item.appendChild(itemURL);

            const deleteBtn = document.createElement("button");
            deleteBtn.className = "deleteBtn";
            deleteBtn.innerText = "X";
            div_item.appendChild(deleteBtn);
            deleteBtn.addEventListener("click",function(){
                bookmarks.splice(i,1);
                saveBookmark();
                render();
            });
        }
    }
}

render();