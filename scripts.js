/* const userYearOfBirth = prompt('запитати у користувача рік народження;') */
const userCity = prompt('В якому місті ви проживаєте;')
const userSport = prompt('запитати його улюблений вид спорту.')

let Soccer = 'Футбол'
let Hockey = 'Хоккей'
let Basketball = 'Баскетбол'

let answerSoccer = 'Ви хочите стати футболістом'
let answerHockey = 'Ви хочите стати хокеїстом'
let answerBasketball = 'Ви хочите стати баскетболістом'

/* let date = new Date
const userAge = (date.getFullYear() - userYearOfBirth) */


if (userCity === 'Київ' || userCity === 'Киев' || userCity === 'Kyiv') {
    alert(`Ви живете у столиці України;`)
} else if (userCity === 'Лондон' || userCity === 'London') { 
    alert(`Ви живете у столиці Великобританії;`)
} else if (userCity === 'Вашингтон' || userCity === 'Washington') { 
    alert('Ви живете у столиці Сполучених Штатів Америки')
} else if (userCity === null) { 
    alert('Шкода, що Ви не захотіли ввести своє місце проживання')
} else {
    alert(`Ви живете у місті ${userCity}`)
}


    
if (userSport === Soccer) {
    console.log(` ${answerSoccer}`)
} else if (userSport === Hockey) { 
    console.log(`${answerHockey}`)
} else if (userSport === Basketball) { 
    console.log(`${answerBasketball}`)
} else if (userCity === null) { 
    console.log('Шкода, що Ви не захотіли ввести свій улюблений вид спорту')
} else {
    console.log(`${userSport}, це круто! Вперед до чемпіонства!`)
}