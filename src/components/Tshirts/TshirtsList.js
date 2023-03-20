function saveData(event) {
    event.preventDefault();
  
    const product = event.target.productDetails.value;
    const description = event.target.DescriptionDetails.value;
    const category = event.target.CategoryDetails.value;
  
    const obj = {
      product,
      description,
      category,
    };
    displayListOnScreen(obj);
    localStorage.setItem(obj.description, JSON.stringify(obj));
  }
  
  function displayListOnScreen(obj) {
    const parentNode = document.getElementById("users");
    const childHTML = `<li id=${obj.description}> <span class="font-style">${obj.product}</span> - <span class="crimson-text">${obj.description}</span>
                                  <button id="btn1"  onclick=deleteList('${obj.description}')> Delete </button>
                                  <button id="btn2" onclick=editList('${obj.description}','${obj.product}','${obj.category}')>Edit</button>
                               </li>`;
  
    parentNode.innerHTML = parentNode.innerHTML + childHTML;
  }
  
  function editList(description, product, category) {
    document.getElementById("productDetails").value = product;
    document.getElementById("DescriptionDetails").value = description;
    document.getElementById("CategoryDetails").value = category;
  
  
    localStorage.removeItem(description);
    removeListFromScreen(description);
  }
  
  function deleteList(description) {
    localStorage.removeItem(description);
    removeListFromScreen(description);
  }
  
  function removeListFromScreen(description) {
    const parentNode = document.getElementById("users");
    const childNodeToBeDeleted = document.getElementById(description);
    parentNode.removeChild(childNodeToBeDeleted);
  }
      //onload
    window.addEventListener("DOMContentLoaded", () => {
      const localStorageObj = localStorage;
      const localstoragekeys = Object.keys(localStorageObj);
  
      for (var i = 0; i < localstoragekeys.length; i++) {
        const key = localstoragekeys[i];
        const userDetailsString = localStorageObj[key];
        const userDetailsObj = JSON.parse(userDetailsString);
        displayListOnScreen(userDetailsObj);
      }
    });