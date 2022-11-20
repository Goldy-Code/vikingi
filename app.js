// Есть викинги, викинги убивают детей.
// Есть колличество деревень, за месяц уничтожают 2 деревни
// Есть колличество месяцов, за которое уничтожаются деревни, указывается вами, в годах
// Рассчитать колличество убитых детей за n колличество времени, учитывая что,
// деревня состоит из m колличества человек (генерация рандомная от 20 - 100), где 20% это дети
// В случае если колличество детей в деревне выйдет больше 15, деревная не умирает.  
alert('You are King of Vikings')
let years = +prompt('How many years do you want for vikings to travel?', '1');
years *= 12;
let randomNum;
let kids = 0;
let sum = 0;
let village = years * 2;

for (let countCycles = 1; countCycles <= village; countCycles++) {

	randomNum = Math.round((Math.random() * 100 + 20) / 100 * 20);

	if (randomNum < 15) {
		// console.log(randomNum); //uncomment if you want to see that randomizer filters numbers less than 15
		sum += randomNum;
	}


}
alert(`Your vikings visited ${village} villages
in ${years} months`);
kids = sum
alert(`They killed ${kids} kids in these villsages`);

