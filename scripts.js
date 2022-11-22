const userYearOfBirth = prompt('запитати у користувача рік народження;')
const userCity = prompt('запитати в нього, в якому місті він живе;')
const userSport = prompt('запитати його улюблений вид спорту.')
console.log(userYearOfBirth, userCity, userSport)

let date = new Date
const userAge = (date.getFullYear() - userYearOfBirth)
alert(`Ваш вік ${userAge}`)


const capitalUkraine = ('Київ', 'Kyiv', 'Киев')

if (userCity == capitalUkraine) {
    alert(`Ти живеш у столиці ${userCity}`)
} else { 
    alert(`ти живеш у місті ${userCity}`)
}


