const userYearOfBirth = prompt('запитати у користувача рік народження;')
const userCity = prompt('запитати в нього, в якому місті він живе;')
const userSport = prompt('запитати його улюблений вид спорту.')

let date = new Date
const userAge = (date.getFullYear() - userYearOfBirth)

if (userCity === 'Київ' || userCity === 'Kyiv' || userCity === 'Киев') {
    alert(`Ваш вік ${userAge} років; Ти живеш у столиці України`)
} else if (userCity === 'Вашингтон' || userCity === 'Washington') {
    alert(`Ваш вік ${userAge} років; Ти живеш у столиці Сполучених Штатів Америки`)
} else if (userCity === 'Лондон' || userCity === 'London') {
    alert(`Ваш вік ${userAge} років; Ти живеш у столиці Великобританії`)
} else if (userCity === null) { 
    alert('Ну ты и Вася')
} else {
    alert(`Ваш вік ${userAge} років; ти живеш у місті ${userCity} ${userSport}`)
}

if (userSport === 'Футбол') {
    alert('Круто! Хочеш стати Андрієм Шевченко?')
} else if (userSport === 'Хоккей') {
    alert('Круто! Хочеш стати Андрієм Шевченко?')
} else if (userSport === 'Баскетбол') {
    alert('Круто! Хочеш стати Андрієм Шевченко?')
} else if (userSport === null) {
    alert('Как можно не увлекаться спортом???')
}