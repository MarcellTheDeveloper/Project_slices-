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
  //TODO RÁ KELL TENNI AZ ÚJ ITEMEKRE IS AZ ESEMÉNYFIGYELŐT
  //If multiple identical EventListeners are registered on the same EventTarget with the same parameters, the duplicate instances are discarded. They do not cause the EventListener to be called twice, and they do not need to be removed manually
  function addClick() {
    root.insertAdjacentHTML("beforeend", oneListItem);
    let removeBtnList = root.querySelectorAll(".deleteButton");
    for (let i = 0; i < removeBtnList.length; i++) {
      removeBtnList[i].addEventListener("click", deleteListItem);
    }
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
}

window.addEventListener("load", pageLoaded);
