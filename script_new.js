/*const userYearOfBirth = prompt('Введіть будь ласка свій рік народження?', '');
console.log(userYearOfBirth);
let date = new Date
let userAge = date.getFullYear() - userYearOfBirth

if (userYearOfBirth === null) {
    alert(Шкода, що Ви не захотіли ввести свій рік народження.);
} else if (userYearOfBirth.length === 0) {
    userAge = prompt('Ви не ввели свій рік народження, спробуйте ще раз.');
} else if (userYearOfBirth) {
    alert(Ваш вік ${userAge} років.)
}*/

let userCity = prompt('Введіть будь ласка ваше місто проживання.')
console.log(userCity);

let str_city = null

switch (userCity && userCity.trim()) {
    case null:
    case '':
        alert('Шкода, що Ви не захотіли вказати ваше місто проживання')
        str_city = 'Шкода, але ви не вказали ваше місто проживання'
        break;
    case 'Київ':
    case 'Киев':
    case 'Kyiv':
    case 'київ':
    case 'киев':
    case 'kyiv':
        str_city = 'Ви живете у столиці України'
    break;
    case 'Лондон':
    case 'London':
    case 'лондон':
    case 'london':
        str_city = 'Ви живете у столиці Великобританії'
        break;
    case 'Вашингтон':
    case 'Washington':
    case 'вашингтон':
    case 'washington':
        str_city = 'Ви живете у столиці Сполучених Штатів Америки'
        break;
    default:
        str_city = `Ви живете у місті ${userCity.trim()}`
}

let userSport = prompt('Який ваш улюблений вид спорту?');
console.log(userSport);

let str_sport = null

switch (userSport && userSport.trim()) {
    case null:
        alert('Шкода, що Ви не захотіли вказати ваш улюблений вид спорту')
        str_sport = 'Шкода, але ви не вказали ваш улюблений вид спорту'
        break;
    case '':
        alert('Ви не вказали ваш улюблений вид спорту')
        str_sport = 'Шкода, але ви не вказали ваш улюблений вид спорту'
        break;
    case 'Футбол':
    case 'футбол':
    case 'Soccer':
    case 'soccer':
        str_sport = 'Круто! Хочете стати Андрієм Шевченко?'
        break;
    case 'Хоккей':
    case 'хокей':
    case 'Hockey':
    case 'hockey':
        str_sport = 'Круто! Хочете стати Русланом Федотенко?'
        break;
    case 'Баскетбол':
    case 'баскетбол':
    case 'Basketball':
    case 'basketball':
         str_sport = 'Круто! Хочете стати Олександром Волковим?'
         break;
     default:
         str_sport = `${userSport.trim()}, це круто! Вперед до чемпіонства!`    
}

/* alert(`${str_city}`) */
alert(`${str_city}\n${str_sport}`)