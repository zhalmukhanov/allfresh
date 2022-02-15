<?php
 
// Токен
  const TOKEN = '5084773421:AAHEW7KipO42ZYKXZT7--7KKTdjIXC7hro0';
 
  // ID чата
  const CHATID = '-797110064';
 
   
    $txt = "";

    $txt .= "Имя клиента: " . '*'. strip_tags(trim(urlencode($_POST['name']))) .'*' . "%0A";

    $txt .= "Телефон: " . strip_tags(trim(urlencode('+7'.$_POST['phone']))) . "%0A";  

    $txt .= "Время: " . strip_tags(trim(urlencode($_POST['date']))) . "%0A";    


 
    $textSendStatus = @file_get_contents('https://api.telegram.org/bot'. TOKEN .'/sendMessage?chat_id=' . CHATID . '&parse_mode=Markdown&text=' . $txt); 
 
