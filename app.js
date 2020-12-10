//Teljes project leírás : toDo with plus and minus, 10 ures mező alapböp de lehet tobbet,text input es torles

//kijelölni class alapján az összes törlés gombot queryAll, és elmeni egy valtozoba

//for cikl a törlés gombokra

function pageLoaded() {
  const root = document.querySelector("#root");

  const maxItemNumber = 10;

  //el kell tarolni h egy sornal mi lesz a html strukturaja
  const oneListItem = `<div class = "oneListItem"><input type="text"><button class = "deleteButton">X</button></div>`;
  // console.log(oneListItem);

  //10x kell duplikalni az egy sort forral, hozzá  adni a 10x a root kezdő elementhez
  for (let i = 0; i < maxItemNumber; i++) {
    root.insertAdjacentHTML("beforeend", oneListItem);
  }

  //gomb amivel hozzá tudunk adni még egyet, click eventlistenerrel, újra hozza adunk egy sort a listához
  root.insertAdjacentHTML(
    "afterend",
    `<div><button id = "add">Add More</button></div>`
  );

  function addClick() {
    root.insertAdjacentHTML("beforeend", oneListItem);
  }
  document.querySelector("#add").addEventListener("click", addClick);

  //Remove list items
  let removeBtnList = root.querySelectorAll(".deleteButton");

  function deleteListItem(e) {
    e.target.parentElement.remove();
  }

  for (let i = 0; i < removeBtnList.length; i++) {
    removeBtnList[i].addEventListener("click", deleteListItem);
  }

  //TODO RÁ KELL TENNI AZ ÚJ ITEMEKRE IS AZ ESEMÉNYFIGYELŐT
}

window.addEventListener("load", pageLoaded);
