function openMenu() {
  document.getElementsByClassName("burger-btn")[0].classList.toggle("active"),
    document
      .getElementsByClassName("burger_main")[0]
      .classList.toggle("active"),
    document
      .getElementsByClassName("header_burger")[0]
      .classList.toggle("active");
}
        let el
        function openFull(e) {
            if ( document.getElementsByClassName("full_card")[0] && el != e){
                document.getElementsByClassName("full_card")[0].classList.remove("full_card");
            }

            document.getElementsByClassName(e)[0].classList.toggle("full_card");
            el = e;
        }
function openDayMenu(e, t) {
  let n, s;
  n = document.getElementsByClassName("tabcontent");
  for (let e = 0; e < n.length; e++) n[e].style.display = "none";
  s = document.getElementsByClassName("tablink");
  for (let e = 0; e < s.length; e++) s[e].classList.remove("tablink_active");
  (document.getElementById(e).style.display = "block"),
    t.classList.add("tablink_active");
}
function popupMenu() {
  document.getElementsByClassName("popup")[0].classList.toggle("popup_active"),
    document.getElementsByClassName("popup")[0].classList.toggle("popup_close"),
    (document.getElementsByClassName("popup_container")[0].style.display =
      "flex"),
    (document.getElementsByClassName("popup_thanks")[0].style.display = "none"),
    document
      .getElementsByClassName("popup")[0]
      .classList.remove("thanks_active"),
    (document.getElementsByClassName("invalid_message")[0].style.display =
      "none");
}
function popupMenuThanks() {
  document.getElementsByClassName("popup")[0].classList.toggle("popup_active"),
    document.getElementsByClassName("popup")[0].classList.toggle("popup_close"),
    (document.getElementsByClassName("popup_container")[0].style.display =
      "flex"),
    (document.getElementsByClassName("popup_thanks")[0].style.display = "none");
}
let form = document.getElementById("form");
document.querySelector(".call_me").addEventListener("click", (e) => {
  form.checkValidity() && 16 == phone.value.length
    ? submitVal()
    : (document.getElementsByClassName("invalid_message")[0].style.display =
        "block");
}),
  document.querySelector(".whatsapp").addEventListener("click", (e) => {
    form.checkValidity()
      ? sendWhats()
      : (document.getElementsByClassName("invalid_message")[0].style.display =
          "block");
  });
let name = document.getElementById("name"),
  phone = document.getElementById("phone");
function submitVal() {
  let e = phone.value,
    t = name.value,
    n = new Date(),
    s =
      [n.getMonth() + 1, n.getDate(), n.getFullYear()].join("-") +
      " " +
      [n.getHours(), n.getMinutes(), n.getSeconds()].join(":");
  const a = new XMLHttpRequest(),
    l = "name=" + t + "&phone=" + e + "&date=" + s;
  a.open("POST", "../php/send-message-to-telegram.php", !0),
    a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
    a.addEventListener("readystatechange", () => {
      4 === a.readyState && 200 === a.status && console.log(a.responseText);
    }),
    a.send(l),
    (document.getElementsByClassName("popup_container")[0].style.display =
      "none"),
    (document.getElementsByClassName("popup_thanks")[0].style.display = "flex"),
    document.getElementsByClassName("popup")[0].classList.add("thanks_active");
}
function sendWhats() {
  popupMenu();
  let e = "";
  (e += "Здравствуйте!\r\n"),
    (e += "Меня зовут " + name.value + ".\r\n"),
    (e += "Я хочу получить консультацию."),
    (window.location = "https://wa.me/77051611222?text=" + encodeURI(e));
}
const isNumericInput = (e) => {
    const t = e.keyCode;
    return (t >= 48 && t <= 57) || (t >= 96 && t <= 105);
  },
  isModifierKey = (e) => {
    const t = e.keyCode;
    return (
      !0 === e.shiftKey ||
      35 === t ||
      36 === t ||
      8 === t ||
      9 === t ||
      13 === t ||
      46 === t ||
      (t > 36 && t < 41) ||
      ((!0 === e.ctrlKey || !0 === e.metaKey) &&
        (65 === t || 67 === t || 86 === t || 88 === t || 90 === t))
    );
  },
  enforceFormat = (e) => {
    isNumericInput(e) || isModifierKey(e) || e.preventDefault();
  },
  formatToPhone = (e) => {
    if (isModifierKey(e)) return;
    const t = e.target.value.replace(/\D/g, "").substring(0, 10),
      n = t.substring(0, 3),
      s = t.substring(3, 6),
      a = t.substring(6, 10);
    t.length > 6
      ? (e.target.value = `(${n}) ${s} - ${a}`)
      : t.length > 3
      ? (e.target.value = `(${n}) ${s}`)
      : t.length > 0 && (e.target.value = `(${n}`);
  },
  inputElement = document.getElementById("phone");
inputElement.addEventListener("keydown", enforceFormat),
  inputElement.addEventListener("keyup", formatToPhone);
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: !0,
    autoplay: { delay: 1e4, disableOnInteraction: !1 },
    pagination: { el: ".swiper-pagination", clickable: !0 },
    navigation: { nextEl: ".next_btn", prevEl: ".prev_btn" },
  }),
  lazyLoadInstance = new LazyLoad({ elements_selector: ".lazy" });
