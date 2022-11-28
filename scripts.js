const userYearOfBirth = prompt('Введіть будь ласка свій рік народження?', '');
console.log(userYearOfBirth);
let date = new Date
let userAge = (date.getFullYear() - userYearOfBirth)

if (userYearOfBirth === null) {
    alert(`Шкода, що Ви не захотіли ввести свій рік народження.`);
} else if (userYearOfBirth.length === 0) {
    userAge = prompt('Ви не ввели свій рік народження, спробуйте ще раз.');
} else if (userYearOfBirth) {
    alert(`Ваш вік ${userAge} років.`)
}

const userCity = prompt('Введіть будь ласка ваше місто проживання.', '')
console.log(userCity);
if (userCity === 'Київ' || userCity === 'Kyiv' || userCity === 'Киев') {
    alert(`Ви живете у столиці України`)
} else if (userCity === 'Вашингтон' || userCity === 'Washington') {
    alert(`Ви живете у столиці Сполучених Штатів Америки`)
} else if (userCity === 'Лондон' || userCity === 'London') {
    alert(`Ви живете у столиці Великобританії`)
} else if (userCity === null) { 
    alert(`Шкода, що Ви не захотіли ввести своє місто проживання.`)
} else if (!isNaN(userCity)) {
    userCity = prompt('Введіть корректно назву міста з великої літери.', '');
} else if (userCity) {
    alert(`Ви живете у місті ${userCity}`)
}

const userSport = prompt('Який ваш улюблений вид спорту?', '');
console.log(userSport);
if (userSport === null) {
    alert(`Шкода, що Ви не захотіли вказати ваш улюблений вид спорту`);
} else if (!isNaN(userSport)) {
    userSport = prompt('Введіть корректно назву спорту з великої літери.', '');
} else if (userSport === 'Футбол'){
       alert(`Круто! Хочете стати футболістом?`);
} else if(userSport === 'Хоккей') {
    alert(`Круто! Хочете стати хоккеистом?`);
} else if (userSport === 'Баскетбол' ) {
    alert(`Круто! Хочете стати басетболистом?`);
} else {
    alert(`${userSport}, це круто! Вперед до чемпіонства!`)
}