const userYearOfBirth = prompt('запитати у користувача рік народження;')
const userCity = prompt('запитати в нього, в якому місті він живе;')
const userSport = prompt('запитати його улюблений вид спорту.')

let date = new Date
const userAge = (date.getFullYear() - userYearOfBirth)

/* const capitalUkraine = ('Київ')
const capitalUSA = ('Вашингтон')
const capitalGB = ('Лондон') */

if (userCity === 'Київ' || userCity === 'Kyiv' || userCity === 'Киев') {
    console.log(`Ваш вік ${userAge} років; Ти живеш у столиці України`)
} else if (userCity === 'Вашингтон' || userCity === 'Washington') {
    console.log(`Ваш вік ${userAge} років; Ти живеш у столиці Сполучених Штатів Америки`)
} else if (userCity === 'Лондон' || userCity === 'London') {
    console.log(`Ваш вік ${userAge} років; Ти живеш у столиці Великобританії`)
} else if (userCity === null) { 
    console.log('Ну ты и Вася')
} else {
    console.log(`Ваш вік ${userAge} років; ти живеш у місті ${userCity}`)
}

if (userSport === 'Футбол') {
    console.log('Круто! Хочеш стати Андрієм Шевченко?')
} else if (userSport === 'Хоккей') {
    console.log('Круто! Хочеш стати Андрієм Шевченко?')
} else if (userSport === 'Баскетбол') {
    console.log('Круто! Хочеш стати Андрієм Шевченко?')
} else if (userSport === null) {
    console.log('Как можно не увлекаться спортом???')
}