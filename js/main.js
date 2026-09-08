const MenuItem = [
  {
    class: "fa-solid fa-layer-group",
    name: "All categries",
    link: "categories.html",
  },
  {
    name: "Accessories",
    link: "accessories.html",
    class: "fa-solid fa-computer-mouse",
    class_2: "fa-solid fa-arrow-down",
    submenu: [
      {
        name: "Fitness",
        name: "Watches",
        name: "Accessories Deals",
        link: "#",
        link: "#",
        link: "#",
      },
    ],
  },
  {
    name: "Audio",
    link: "audio.html",
    class: "fa-solid fa-file-audio",
    class_2: "fa-solid fa-arrow-down",
    submenu: [
      {
        name: "Headphones",
        name: "Speakers",
        name: "Audio Deals",
        link: "#",
        link: "#",
        link: "#",
      },
    ],
  },
  {
    name: "Computers",
    link: "computers.html",
    class: "fa-solid fa-computer",
    class_2: "fa-solid fa-arrow-down",
    submenu: [
      {
        name: "Student",
        name: "Professiaonl",
        name: "Computers Deals",
        link: "#",
        link: "#",
        link: "#",
      },
    ],
  },
  {
    class: "fa-solid fa-headset",
    name: "Gaming",
    link: "gaming.html",
    class_2: "fa-solid fa-arrow-down",
    submenu: [
      {
        name: "Console",
        name: "Controller",
        name: "Gaming Deals",
        link: "#",
        link: "#",
        link: "#",
      },
    ],
  },
  {
    name: "Laptops",
    link: "laptops.html",
    class: "fa-solid fa-laptop",
    class_2: "fa-solid fa-arrow-down",
    submenu: [
      {
        name: "Gaming laptap",
        name: "Ulterabooks",
        name: "Laptap Deals",
        link: "#",
        link: "#",
        link: "#",
      },
    ],
  },
  {
    name: "Mobile",
    link: "mobile.html",
    class: "fa-solid fa-mobile",
    class_2: "fa-solid fa-arrow-down",
    submenu: [
      {
        name: "Phone",
        name: "Tablets",
        name: "Mobile Deals",
        link: "#",
        link: "#",
        link: "#",
      },
    ],
  },
  {
    name: "TVs",
    link: "tvs.html",
    class: "fa-solid fa-tv",
    class_2: "fa-solid fa-arrow-down",
    submenu: [
      {
        name: "OLED",
        name: "LED",
        name: "TVs Deals",
        link: "#",
        link: "#",
        link: "#",
      },
    ],
  },
];
let menu = document.getElementById("options_menu");
let menuside = document.getElementById("TheOptions");
MenuItem.forEach((item) => {
let div = document.createElement("div");

  // if (item.submenu) {
  //   const dropdown = document.createElement("div");
  //   dropdown.className = "dropdown_menu";
  //   item.submenu.forEach((sub) => {
  //     const a_dropdown = document.createElement("a");
  //     a.textContent = sub.name;
  //     dropdown.appendChild(a_dropdown);
  //   });
  //   div.appendChild(dropdown);
  //   div.addEventListener("click", (e) => {
  //     e.stopPropagation();
  //     closeAllDropdowns();
  //     div.classList.toggle("active");
  //   });
  // } else {
  //   div.addEventListener("click", () => {
  //     window.location.href = item.link
  //   });
  // }

  let i = document.createElement("i");
  i.className = item.class;

  let a = document.createElement("a");
  a.textContent = item.name;
  a.href = item.link;

  let i2 = document.createElement("i");
  i2.className = item.class_2;
  i2.classList.add("arrow_down");

  div.appendChild(i);
  div.appendChild(a);
  div.appendChild(i2);
  menu.appendChild(div);

  let i1_sidebar = document.createElement("i");
  i1_sidebar.className = item.class;

  let li = document.createElement("li");
  let a_sidebar = document.createElement("a");
  a_sidebar.textContent = item.name;
  a_sidebar.href = item.href;

  let i2_sidebar = document.createElement("i");
  i2_sidebar.className = item.class_2;
  i2_sidebar.classList.add("arrow_down2");

  li.appendChild(i1_sidebar);
  li.appendChild(a_sidebar);
  li.appendChild(i2_sidebar);

  menuside.appendChild(li);
});

// function closeAllDropdowns() {
//   document.querySelectorAll(".option_item.active").forEach(el.classList.remove("active"))
// }
// document.addEventListener("click" , ()=>{
//   closeAllDropdowns()
// })

let sidebar = document.getElementById("SideBar");
let btn = document.getElementById("openMenuBtn");
btn.addEventListener("click", (e) => {
  e.stopPropagation();
  sidebar.classList.toggle("active");
});
document.addEventListener("click", (e) => {
  if (!sidebar.contains(e.target) && !btn.contains(e.target))
    sidebar.classList.remove("active");
});

const lableone = document.getElementById("lable-one");
const selection = document.getElementById("select_cart_one");
const price_card_one = document.getElementById("price_card_one");
const btn_first = document.getElementById("btn_first");
const overlay = document.getElementById("overlay");


lableone.addEventListener("change", () => {
  if (selection.value === "") {
    price_card_one.style.display = "none";
    btn_first.style.marginTop = "23px";
  } else if (selection.value === "value1") {
    price_card_one.style.display = "block";
    price_card_one.textContent = "740$";
    btn_first.style.marginTop = "0px";
  } else if (selection.value === "value2") {
    price_card_one.style.display = "block";
    price_card_one.textContent = "480$ Out Of Stock";
    btn_first.style.marginTop = "0px";
  } else if (selection.value === "value3") {
    price_card_one.style.display = "block";
    price_card_one.textContent = "860$";
    btn_first.style.marginTop = "0px";
  }
});

btn_first.addEventListener("click", (e) => {
  if (selection.value === "") {
    alert("please select an option");
  } else {
    overlay.classList.add("active");
    document.body.overflowY = "hidden";
  }
});

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.classList.remove("active");
    document.body.overflowY = "";
  }
});

let HajmActive = false;
const Hajm_One = document.getElementById("box_hajm_1");
const price = document.getElementById("price");
const card_two = document.getElementById("card_two");
const hr_one = document.getElementById("hr_one");
const btn_one = document.getElementById("btn_one");

function resetcard_2() {
  price.textContent = "";
  btn_one.style.marginTop = "20px";
  price.style.display = "none";
  HajmActive = false;
  HajmActive_2 = false;
  HajmActive_3 = false;
}

Hajm_One.addEventListener("click", () => {
  if (!HajmActive) {
    price.textContent = "150$";
    btn_one.style.marginTop = "0px";
    card_one.style.transition = "all 0.2s linear";
    card_two.style.transition = "all 0.2s linear";
    card_three.style.transition = "all 0.2s linear";
    price.style.display = "block";
    HajmActive = true;
  } else {
    resetcard_2();
  }
});

let HajmActive_2 = false;
const Hajm_two = document.getElementById("box_hajm_2");
Hajm_two.addEventListener("click", () => {
  if (!HajmActive_2) {
    price.textContent = "250$";
    btn_one.style.marginTop = "0px";
    card_one.style.transition = "all 0.2s linear";
    card_two.style.transition = "all 0.2s linear";
    card_three.style.transition = "all 0.2s linear";
    price.style.display = "block";
    HajmActive_2 = true;
  } else {
    resetcard_2();
  }
});

let HajmActive_3 = false;
const Hajm_three = document.getElementById("box_hajm_3");
Hajm_three.addEventListener("click", () => {
  if (!HajmActive_3) {
    price.textContent = "530$";
    btn_one.style.marginTop = "0px";
    card_one.style.transition = "all 0.2s linear";
    card_two.style.transition = "all 0.2s linear";
    card_three.style.transition = "all 0.2s linear";
    price.style.display = "block";
    HajmActive_3 = true;
  } else {
    resetcard_2();
  }
});
let ColorActive = false;
const ColorOne = document.getElementById("color_1");
const price_color = document.getElementById("price_color");
const card_three = document.getElementById("card_three");
const hr_two = document.getElementById("hr_two");
const hr_three = document.getElementById("hr_three");
const btn_three = document.getElementById("btn_three");
function resetcard_3() {
  price_color.textContent = "";
  btn_three.style.marginTop = "20px";
  price_color.style.display = "";
  ColorActive = false;
  ColorActive_2 = false;
  ColorActive_3 = false;
}

ColorOne.addEventListener("click", () => {
  if (!ColorActive) {
    price_color.textContent = "40$";
    btn_three.style.marginTop = "0px";
    card_one.style.transition = "all 0.2s linear";
    card_two.style.transition = "all 0.2s linear";
    card_three.style.transition = "all 0.2s linear";
    price_color.style.display = "block";
    ColorActive = true;
  } else {
    resetcard_3();
  }
});

let ColorActive_2 = false;
const ColorTwo = document.getElementById("color_2");

ColorTwo.addEventListener("click", () => {
  if (!ColorActive_2) {
    price_color.textContent = "20$";
    btn_three.style.marginTop = "0px";
    card_one.style.transition = "all 0.2s linear";
    card_two.style.transition = "all 0.2s linear";
    card_three.style.transition = "all 0.2s linear";
    price_color.style.display = "block";
    ColorActive_2 = true;
  } else {
    resetcard_3();
  }
});

let ColorActive_3 = false;
const ColorThree = document.getElementById("color_3");

ColorThree.addEventListener("click", () => {
  if (!ColorActive_3) {
    price_color.textContent = "90$";
    btn_three.style.marginTop = "0px";
    card_one.style.transition = "all 0.2s linear";
    card_two.style.transition = "all 0.2s linear";
    card_three.style.transition = "all 0.2s linear";
    price_color.style.display = "block";
    price_color.style.marginBottom = "300px";
    ColorActive_3 = true;
  } else {
    resetcard_3();
  }
});

let ColorActive_four = false;
const ColorOne_2 = document.getElementById("color_1_four");
const price_color_2 = document.getElementById("price_color_four");
const card_four = document.getElementById("card_three");
const hr_four = document.getElementById("hr_four");
const btn_four = document.getElementById("btn_four");
function resetcard_4() {
  price_color_2.textContent = "";
  btn_four.style.marginTop = "20px";
  price_color_2.style.display = "";
  ColorActive_four = false;
  ColorActive2_four = false;
}

ColorOne_2.addEventListener("click", () => {
  if (!ColorActive_four) {
    price_color_2.textContent = "40$";
    btn_four.style.marginTop = "0px";
    card_one.style.transition = "all 0.2s linear";
    card_two.style.transition = "all 0.2s linear";
    card_three.style.transition = "all 0.2s linear";
    price_color_2.style.display = "block";
    ColorActive_four = true;
  } else {
    resetcard_4();
  }
});

let ColorActive2_four = false;
const ColorTwo_card_four = document.getElementById("color_2_four");

ColorTwo_card_four.addEventListener("click", () => {
  if (!ColorActive2_four) {
    price_color_2.textContent = "75$";
    btn_four.style.marginTop = "0px";
    card_one.style.transition = "all 0.2s linear";
    card_two.style.transition = "all 0.2s linear";
    card_three.style.transition = "all 0.2s linear";
    price_color_2.style.display = "block";
    ColorActive2_four = true;
  } else {
    resetcard_4();
  }
});

const addToCartBtnOne = document.getElementById("btn_one");

addToCartBtnOne.addEventListener("click", () => {
  if (!HajmActive & !HajmActive_2 & !HajmActive_3) {
    alert(`please select an option.`);
  } else {
    overlay.classList.add("active");
    document.body.style.overflowY = "hidden";
  }
});
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }
});

const addToCartBtnTwo = document.getElementById("btn_three");

addToCartBtnTwo.addEventListener("click", () => {
  if (!ColorActive & !ColorActive_2 & !ColorActive_3) {
    alert(`please select an option.`);
  } else {
    overlay.classList.add("active");
    document.body.style.overflowY = "hidden";
  }
});
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.classList.remove("active");
    document.body.style.overflowY = "";
  }
});

const addToCartBtnFour = document.getElementById("btn_four");

addToCartBtnFour.addEventListener("click", () => {
  if (!ColorActive_four & !ColorActive2_four) {
    alert(`please select an option.`);
  } else {
    overlay.classList.add("active");
    document.body.style.overflowY = "hidden";
  }
});
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.classList.remove("active");
    document.body.style.overflowY = "";
  }
});

const addToCartBtnOne_2 = document.getElementById("Btn2_One");

addToCartBtnOne_2.addEventListener("click", () => {
  overlay.classList.add("active");
  document.body.style.overflowY = "hidden";
});
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.classList.remove("active");
    document.body.style.overflowY = "";
  }
});

const addToCartBtnTwo_2 = document.getElementById("Btn2_Two");

addToCartBtnTwo_2.addEventListener("click", () => {
  overlay.classList.add("active");
  document.body.style.overflowY = "hidden";
});
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.classList.remove("active");
    document.body.style.overflowY = "";
  }
});

let HajmCartOne_3 = false;
const HajmOne_1 = document.getElementById("box3_hajm_1");
const PriceCart = document.getElementById("PriceCartThree");
const BtnThree = document.getElementById("Btn_Three");
const CartThree_2 = document.getElementById("Cart2_Three");
const CartFour_2 = document.getElementById("Cart2_Four");

function rsetcartseven() {
  PriceCart.textContent = "";
  BtnThree.style.marginTop = "28px";
  PriceCart.style.display = "";
  HajmCartOne_3 = false;
  HajmCartTwo_3 = false;
}

HajmOne_1.addEventListener("click", () => {
  if (!HajmCartOne_3) {
    PriceCart.textContent = "$550";
    BtnThree.style.marginTop = "0px";
    CartThree_2.style.transition = "all 0.2s linear";
    CartFour_2.style.transition = "all 0.2s linear";
    PriceCart.style.display = "block";
    HajmCartOne_3 = true;
  } else {
    rsetcartseven();
  }
});

let HajmCartTwo_3 = false;
const HajmOne_2 = document.getElementById("box3_hajm_2");

HajmOne_2.addEventListener("click", () => {
  if (!HajmCartTwo_3) {
    PriceCart.textContent = "$450";
    BtnThree.style.marginTop = "0px";
    CartThree_2.style.transition = "all 0.2s linear";
    CartFour_2.style.transition = "all 0.2s linear";
    PriceCart.style.display = "block";
    HajmCartTwo_3 = true;
  } else {
    rsetcartseven();
  }
});

const addToCartBtnTwo_3 = document.getElementById("Btn_Three");

addToCartBtnTwo_3.addEventListener("click", () => {
  if (!HajmCartOne_3 & !HajmCartTwo_3) {
    alert(`please select an option...`);
  } else {
    overlay.classList.add("active");
    document.body.style.overflowY = "hidden";
  }
});
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.classList.remove("active");
    document.body.style.overflowY = "";
  }
});

let OptionCartFour = false;
const OptionOne = document.getElementById("Box_Hajm_1");
const PriceCartFour = document.getElementById("PriceCartFour");
const BtnFour = document.getElementById("Btn_Four");

function rsetcarteight() {
  PriceCartFour.textContent = "";
  BtnFour.style.marginTop = "28px";
  PriceCartFour.style.display = "";
  OptionCartFour = false;
  OptionCartFour_2 = false;
}

OptionOne.addEventListener("click", () => {
  if (!OptionCartFour) {
    PriceCartFour.textContent = "$199";
    BtnFour.style.marginTop = "0px";
    CartThree_2.style.transition = "all 0.2s linear";
    CartFour_2.style.transition = "all 0.2s linear";
    PriceCartFour.style.display = "block";
    OptionCartFour = true;
  } else {
    rsetcarteight();
  }
});

let OptionCartFour_2 = false;
const OptionTwo = document.getElementById("Box_Hajm_2");

OptionTwo.addEventListener("click", () => {
  if (!OptionCartFour_2) {
    PriceCartFour.textContent = "$265";
    BtnFour.style.marginTop = "0px";
    CartThree_2.style.transition = "all 0.2s linear";
    CartFour_2.style.transition = "all 0.2s linear";
    PriceCartFour.style.display = "block";
    OptionCartFour_2 = true;
  } else {
    rsetcarteight();
  }
});

const addToCartBtnTwo_4 = document.getElementById("Btn_Four");

addToCartBtnTwo_4.addEventListener("click", () => {
  if (!OptionCartFour & !OptionCartFour_2) {
    alert(`please select an option...`);
  } else {
    overlay.classList.add("active");
    document.body.style.overflowY = "hidden";
  }
});
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.classList.remove("active");
    document.body.style.overflowY = "";
  }
});

const addToCartBtnPartOne = document.getElementById("BtnCartPartOne");

addToCartBtnPartOne.addEventListener("click", () => {
  overlay.classList.add("active");
  document.body.style.overflowY = "hidden";
});
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.classList.remove("active");
    document.body.style.overflowY = "";
  }
});

let colorpart1_1 = document.getElementById("ColorPart1_1");
let javab = document.getElementById("javab");
let addToCartBtnPartTwo = document.getElementById("BtnCartPartTwo");
let CartSealsOne = document.getElementById("CartSealsOne");
let CartSealsTwo = document.getElementById("CartSealsTwo");
let cartpartone_one = false;

function resetcardPartOne() {
  javab.textContent = "";
  addToCartBtnPartTwo.style.marginTop = "45px";
  javab.style.display = "none";
  cartpartone_one = false;
  cartpartone_Two = false;
}
colorpart1_1.addEventListener("click", () => {
  if (!cartpartone_one) {
    javab.textContent = "85$";
    addToCartBtnPartTwo.style.marginTop = "0px";
    CartSealsOne.style.transition = "all 0.2s linear";
    CartSealsTwo.style.transition = "all 0.2s linear";
    javab.style.display = "block";
    cartpartone_one = true;
  } else {
    resetcardPartOne();
  }
});

let colorpart1_2 = document.getElementById("ColorPart1_2");
let cartpartone_Two = false;

colorpart1_2.addEventListener("click", () => {
  if (!cartpartone_Two) {
    javab.textContent = "115$";
    addToCartBtnPartTwo.style.marginTop = "0px";
    CartSealsOne.style.transition = "all 0.2s linear";
    CartSealsTwo.style.transition = "all 0.2s linear";
    javab.style.display = "block";
    cartpartone_Two = true;
  } else {
    resetcardPartOne();
  }
});

const addToCartBtnPartOne_over = document.getElementById("BtnCartPartTwo");

addToCartBtnPartOne_over.addEventListener("click", () => {
  if (!cartpartone_one & !cartpartone_Two) {
    alert(`please select an option...`);
  } else {
    overlay.classList.add("active");
    document.body.style.overflowY = "hidden";
  }
});
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.classList.remove("active");
    document.body.style.overflowY = "";
  }
});

let BtnThreeCart3 = document.getElementById("BtnCartPartThree");
BtnThreeCart3.addEventListener("click", () => {
  overlay.classList.add("active");
  document.body.style.overflowY = "hidden";
});
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.classList.remove("active");
    document.body.style.overflowY = "";
  }
});

let JavabCartFour = document.getElementById("javab_CartFour");
let ColorCartFour_1 = document.getElementById("ColorCartFour_1");
let BtnCartPartFour = document.getElementById("BtnCartPartFour");
let ColorCartFourActive = false;

function resetCartFourBox() {
  JavabCartFour.textContent = "";
  BtnCartPartFour.style.marginTop = "45px";
  JavabCartFour.style.display = "";
  ColorCartFourActive = false;
  ColorCartFourActive_2 = false;
  ColorCartFourActive_3 = false;
}
ColorCartFour_1.addEventListener("click", () => {
  if (!ColorCartFourActive) {
    JavabCartFour.textContent = "50$";
    BtnCartPartFour.style.marginTop = "0px";
    JavabCartFour.style.display = "block";
    ColorCartFourActive = true;
  } else {
    resetCartFourBox();
  }
});

let ColorCartFour_2 = document.getElementById("ColorCartFour_2");
let ColorCartFourActive_2 = false;

ColorCartFour_2.addEventListener("click", () => {
  if (!ColorCartFourActive_2) {
    JavabCartFour.textContent = "65$";
    BtnCartPartFour.style.marginTop = "0px";
    JavabCartFour.style.display = "block";
    ColorCartFourActive_2 = true;
  } else {
    resetCartFourBox();
  }
});

let ColorCartFour_3 = document.getElementById("ColorCartFour_3");
let ColorCartFourActive_3 = false;

ColorCartFour_3.addEventListener("click", () => {
  if (!ColorCartFourActive_3) {
    JavabCartFour.textContent = "45$";
    BtnCartPartFour.style.marginTop = "0px";
    JavabCartFour.style.display = "block";
    ColorCartFourActive_3 = true;
  } else {
    resetCartFourBox();
  }
});

BtnCartPartFour.addEventListener("click", () => {
  if (!ColorCartFourActive & !ColorCartFourActive_2 & !ColorCartFourActive_3) {
    alert(`please select an option...`);
  } else {
    overlay.classList.add("active");
    document.style.overflowY = "hidden";
  }
});
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.classList.remove("active");
    document.body.style.overflowY = "";
  }
});

const words = document.querySelectorAll(".word");
const hero = document.querySelector(".TextOne_2");

window.addEventListener("scroll", () => {
  const rect = hero.getBoundingClientRect();

  const start = window.innerHeight;
  const end = -hero.offsetHeight + window.innerHeight;

  const progress = Math.min(Math.max((start - rect.top) / (start - end), 0), 1);

  const visibleWords = Math.floor(progress * words.length);

  words.forEach((word, index) => {
    if (index < visibleWords) {
      word.classList.add("show");
    } else {
      word.classList.remove("show");
    }
  });
});

const word2 = document.querySelectorAll(".word-2");
const hero2 = document.querySelector(".text-parent-post");

window.addEventListener("scroll", () => {
  const rect = hero2.getBoundingClientRect();

  const start = window.innerHeight * 0.95;
  const end = window.innerHeight * 0.3;

  const progress = Math.min(Math.max((start - rect.top) / (start - end), 0), 1);
  const visibleWords = Math.floor(progress * word2.length);

  word2.forEach((word, index) => {
    if (index < visibleWords) {
      word.classList.add("show1");
    } else {
      word.classList.remove("show1");
    }
  });
});

let selectBox = document.getElementById("option");
let javab_title = document.getElementById("writing-text");
let btnlastcart1 = document.getElementById("btn-last-cart-1");

selectBox.addEventListener("change", () => {
  console.log(selectBox.value);
  if (selectBox.value === "") {
    javab_title.style.display = "none";
    btnlastcart1.style.marginTop = "20px";
  } else if (selectBox.value === "grafics") {
    javab_title.style.display = "block";
    btnlastcart1.style.marginTop = "0px";
    javab_title.textContent = "740$";
  } else if (selectBox.value === "pardazande") {
    javab_title.style.display = "block";
    btnlastcart1.style.marginTop = "0px";
    javab_title.textContent = "480$ Out Of stock";
  } else if (selectBox.value === "pardazande2") {
    javab_title.style.display = "block";
    btnlastcart1.style.marginTop = "0px";
    javab_title.textContent = "860$";
  }
});

btnlastcart1.addEventListener("click", () => {
  if (selectBox.value === "") {
    alert("please select an option");
  } else {
    overlay.classList.add("active");
    document.body.style.overflowY = "hidden";
  }
});
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.classList.remove("active");
    document.body.style.overflowY = "";
  }
});

let memories1 = document.getElementById("memories-one");
let answer = document.getElementById("writing-text2");
let buttoncarttwo = document.getElementById("btn-last-cart-2");
let memoriesone = false;

function restmemoriesone() {
  answer.textContent = "";
  answer.style.display = "none";
  buttoncarttwo.style.marginTop = "8px";
  memoriesone = false;
  memoriestwo = false;
  memoriesthree = false;
}

memories1.addEventListener("click", () => {
  if (!memoriesone) {
    answer.textContent = "180$";
    answer.style.display = "block";
    buttoncarttwo.style.marginTop = "0px";
    memoriesone = true;
  } else {
    restmemoriesone();
  }
});

let memories2 = document.getElementById("memories-two");
let memoriestwo = false;

memories2.addEventListener("click", () => {
  if (!memoriestwo) {
    answer.textContent = "250$";
    answer.style.display = "block";
    buttoncarttwo.style.marginTop = "0px";
    memoriestwo = true;
  } else {
    restmemoriesone();
  }
});

let memories3 = document.getElementById("memories-three");
let memoriesthree = false;

memories3.addEventListener("click", () => {
  if (!memoriesthree) {
    answer.textContent = "530$";
    answer.style.display = "block";
    buttoncarttwo.style.marginTop = "0px";
    memoriesthree = true;
  } else {
    restmemoriesone();
  }
});

buttoncarttwo.addEventListener("click", () => {
  if (!memoriesone & !memoriestwo & !memoriesthree) {
    alert("please select an option");
  } else {
    overlay.classList.add("active");
    document.body.overflowY = "hidden";
  }
});
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.classList.remove("active");
    document.body.style.overflowY = "";
  }
});

let colors1 = document.getElementById("colors-one");
let button3 = document.getElementById("btn-last-cart-3");
let answer2 = document.getElementById("writing-text3");
let colorsshow1 = false;

function resetcolorscart() {
  answer2.textContent = "";
  answer2.style.display = "none";
  button3.style.marginTop = "8px";
  colorsshow1 = false;
  colorsshow2 = false;
  colorsshow3 = false;
}

colors1.addEventListener("click", () => {
  if (!colorsshow1) {
    answer2.textContent = "45$";
    answer2.style.display = "block";
    button3.style.marginTop = "0px";
    colorsshow1 = true;
  } else {
    resetcolorscart();
  }
});

let colors2 = document.getElementById("colors-two");
let colorsshow2 = false;

colors2.addEventListener("click", () => {
  if (!colorsshow2) {
    answer2.textContent = "90$";
    answer2.style.display = "block";
    button3.style.marginTop = "0px";
    colorsshow2 = true;
  } else {
    resetcolorscart();
  }
});

let colors3 = document.getElementById("colors-three");
let colorsshow3 = false;

colors3.addEventListener("click", () => {
  if (!colorsshow3) {
    answer2.textContent = "29$";
    answer2.style.display = "block";
    button3.style.marginTop = "0px";
    colorsshow3 = true;
  } else {
    resetcolorscart();
  }
});

button3.addEventListener("click", () => {
  if (!colorsshow1 & !colorsshow2 & !colorsshow3) {
    alert("please select an option");
  } else {
    overlay.classList.add("active");
    document.body.style.overflowY = " hidden";
  }
});
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.classList.remove("active");
    document.body.style.overflowY = "";
  }
});
