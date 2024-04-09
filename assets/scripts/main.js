const leftNav = document.getElementById('left-nav')
const mainScreen = document.getElementById('main-screen')
const popup = document.getElementById('details-popup');

function openLeftNav() {
    leftNav.style.left = "0";

    mainScreen.style.left = "80%";
    mainScreen.style.height = "80%";

    mainScreen.style.borderRadius = "40px";

    popup.style.left = "80%";
    popup.style.height = "calc(91% - 60px)";
}

function closeLeftNav() {
    leftNav.style.left = "-80%";

    mainScreen.style.left = "0";
    mainScreen.style.height = "100%";

    mainScreen.style.borderRadius = "0";

    popup.style.left = "0";
    popup.style.height = "calc(100% - 60px)";
}

const pages = Array.from(document.getElementsByClassName('page'));
const mainMenu = document.getElementById('main-menu')
const menuItems = Array.from(mainMenu.getElementsByClassName('item'));
let tmpPage = pages[0];
pages[1].style.pointerEvents = "none";
pages[2].style.pointerEvents = "none";

 function toggleMenuItem(item) {
  // Get all elements with the class "item"
  const items = document.querySelectorAll('.item');

  // Loop through each item
  for (const otherItem of items) {
    // Remove the "active" class from all items except the provided one
    otherItem.classList.remove('active');
  }

  // Add the "active" class to the provided item
  item.classList.add('active');
}

menuItems.forEach((item, index) => {
    item.onclick = () => {
    toggleMenuItem(item);
        if (tmpPage != null) {
            if (tmpPage.classList.contains('active')){
                tmpPage.classList.remove('active');
                tmpPage.style.pointerEvents = "none";
            }
        }

        if (!pages[index].classList.contains('active')){
            pages[index].classList.add('active');
            pages[index].style.pointerEvents = "auto";
        }

        tmpPage = pages[index];
    };
});

const cardviews = Array.from(document.getElementsByClassName('cardview'));

function openHomeScreen() {
    popup.style.bottom = "-100%";
}

const mainSplashscreen = document.getElementById('main-splashscreen')

setInterval(() => {
    mainScreen.display = "flex";
    mainSplashscreen.style.pointerEvents = "none";
    mainSplashscreen.style.opacity = "0";
    mainSplashscreen.style.left = "-20px";
    mainSplashscreen.style.top = "-20px";
}, 1400);