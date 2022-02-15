// heder burger menu
function openMenu(){
    document.getElementsByClassName('burger-btn')[0].classList.toggle('active');
    document.getElementsByClassName('burger_main')[0].classList.toggle('active');
    document.getElementsByClassName('header_burger')[0].classList.toggle('active');
}



// Caloria full view
function openFull(card){
    document.getElementsByClassName(card)[0].classList.toggle('full_card');
    document.getElementsByClassName(card)[1].classList.toggle('full_card');
}



// Change menu content 
function openDayMenu(pageName, element){
    let i, tabcontent, tablinks;
    
    tabcontent =  document.getElementsByClassName('tabcontent');

    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }

    tablinks = document.getElementsByClassName('tablink');
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove('tablink_active');
    }
    document.getElementById(pageName).style.display = 'block';
    element.classList.add('tablink_active');
}

document.getElementById('defaultOpen').click();




// Open cantact menu

function popupMenu(){
    document.getElementsByClassName("popup")[0].classList.toggle('popup_active');
    document.getElementsByClassName("popup")[0].classList.toggle('popup_close');
    document.getElementsByClassName('popup_container')[0].style.display = "flex";
    document.getElementsByClassName('popup_thanks')[0].style.display = "none";
    document.getElementsByClassName('popup')[0].classList.remove('thanks_active');
    document.getElementsByClassName('invalid_message')[0].style.display = 'none';
}
function popupMenuThanks(){
    document.getElementsByClassName("popup")[0].classList.toggle('popup_active');
    document.getElementsByClassName("popup")[0].classList.toggle('popup_close');
    document.getElementsByClassName('popup_container')[0].style.display = "flex";
    document.getElementsByClassName('popup_thanks')[0].style.display = "none";
}


// Sending forn values
let form = document.getElementById("form");

document.querySelector('.call_me').addEventListener('click', event => {
    if(form.checkValidity() && phone.value.length == 16){
        submitVal();
}
else
    document.getElementsByClassName('invalid_message')[0].style.display = 'block';

});

document.querySelector('.whatsapp').addEventListener('click', event => {
    if(form.checkValidity()){
        sendWhats();
} 
else
    document.getElementsByClassName('invalid_message')[0].style.display = 'block';
});


let name = document.getElementById('name');
let phone = document.getElementById('phone');

function submitVal(){
    let phoneVal = phone.value ;
    let nameVal = name.value ;

    let d = new Date();
    let dformat =  [d.getMonth()+1,
                    d.getDate(),
                    d.getFullYear()].join('-')+' '+
                   [d.getHours(),
                    d.getMinutes(),
                    d.getSeconds()].join(':');

    // Создаем экземпляр класса XMLHttpRequest
    const request = new XMLHttpRequest();

    // Указываем путь до файла на сервере, который будет обрабатывать наш запрос 
    const url = "../php/send-message-to-telegram.php";
    
    // Так же как и в GET составляем строку с данными, но уже без пути к файлу 
    const params = "name=" + nameVal + "&phone=" + phoneVal + "&date=" + dformat;
    
    /* Указываем что соединение	у нас будет POST, говорим что путь к файлу в переменной url, и что запрос у нас
    асинхронный, по умолчанию так и есть не стоит его указывать, еще есть 4-й параметр пароль авторизации, но этот
        параметр тоже необязателен.*/ 
    request.open("POST", url, true);
    
    //В заголовке говорим что тип передаваемых данных закодирован. 
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
    request.addEventListener("readystatechange", () => {

        if(request.readyState === 4 && request.status === 200) {       
            console.log(request.responseText);
        }
    });
    
    //	Вот здесь мы и передаем строку с данными, которую формировали выше. И собственно выполняем запрос. 
    request.send(params);



    document.getElementsByClassName('popup_container')[0].style.display = "none";
    document.getElementsByClassName('popup_thanks')[0].style.display = "flex";
    document.getElementsByClassName('popup')[0].classList.add('thanks_active');
}


function sendWhats(){
    popupMenu();

    let nameVal = name.value ;
    const phoneNumber = "77086267795";

    let message = '';

        message += 'Здравствуйте!' + '\r\n';
        message += 'Меня зовут ' + nameVal +'.'+ '\r\n';
        message += 'Я хочу получить консультацию.';

    window.location = 'https://wa.me/'+phoneNumber+'?text=' + encodeURI(message);
}


// formating phone number
const isNumericInput = (event) => {
    const key = event.keyCode;
    return ((key >= 48 && key <= 57) || // Allow number line
            (key >= 96 && key <= 105) // Allow number pad
    );
};

const isModifierKey = (event) => {
    const key = event.keyCode;
    return (event.shiftKey === true || key === 35 || key === 36) || // Allow Shift, Home, End
        (key === 8 || key === 9 || key === 13 || key === 46) || // Allow Backspace, Tab, Enter, Delete
        (key > 36 && key < 41) || // Allow left, up, right, down
        (
            // Allow Ctrl/Command + A,C,V,X,Z
            (event.ctrlKey === true || event.metaKey === true) &&
            (key === 65 || key === 67 || key === 86 || key === 88 || key === 90)
        )
};

const enforceFormat = (event) => {
    // Input must be of a valid number format or a modifier key, and not longer than ten digits
    if(!isNumericInput(event) && !isModifierKey(event)){
        event.preventDefault();
    }
};

const formatToPhone = (event) => {
    if(isModifierKey(event)) {return;}

    const input = event.target.value.replace(/\D/g,'').substring(0,10); // First ten digits of input only
    const areaCode = input.substring(0,3);
    const middle = input.substring(3,6);
    const last = input.substring(6,10);

    if(input.length > 6){event.target.value = `(${areaCode}) ${middle} - ${last}`;}
    else if(input.length > 3){event.target.value = `(${areaCode}) ${middle}`;}
    else if(input.length > 0){event.target.value = `(${areaCode}`;}
};

const inputElement = document.getElementById('phone');
inputElement.addEventListener('keydown',enforceFormat);
inputElement.addEventListener('keyup',formatToPhone);


//Slider parametres
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".next_btn",
      prevEl: ".prev_btn",
    },
  });