 const ulRef = document.querySelector("#categories");
 console.log(`В списке ${ulRef.children.length} категории.`);
 for (let  i = 0; i<= 2; i++) {
     console.log(`Категория: ${document.querySelectorAll(".item")[i].children[0].outerText}`)    
     console.log(`Количество элементов: ${document.querySelectorAll(".item")[i].children[1].children.length}`)    
 }


    //  console.log(ulRef.innerHTML) 
 