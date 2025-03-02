const months = [
	"Январь",
	"Февраль",
	"Март",
	"Апрель",
	"Май",
	"Июнь",
	"Июль",
	"Август",
	"Сентябрь",
	"Октябрь",
	"Ноябрь",
	"Декабрь",
]

const monthDec = [
	"месяц",
	"месяца",
	"месяцев",
]

const yearDec = [
	"год",
	"года",
	"лет",
]

function num_word(value, words){  
	value = Math.abs(value) % 100; 
	var num = value % 10;
	if(value > 10 && value < 20) return words[2]; 
	if(num > 1 && num < 5) return words[1];
	if(num === 1) return words[0]; 
	return words[2];
}

function ParseDate(dateStr)
{
	let month = parseInt(dateStr.substr(0, 2))
	let year = parseInt(dateStr.substr(3, 4))

	return [month, year]
}

function DateToMonth(dateStr)
{
	dateStr = ParseDate(dateStr)
	let month = dateStr[0]
	let year = dateStr[1]

	return `${months[month - 1]} ${year}`
}

function DateDiffer(dateStart, dateEnd)
{
	dateStart = ParseDate(dateStart)
	let monthStart = dateStart[0]
	let yearStart = dateStart[1]
	dateStart = new Date(yearStart, monthStart - 1)

	if (dateEnd)
	{
		dateEnd = ParseDate(dateEnd)
		let monthEnd = dateEnd[0]
		let yearEnd = dateEnd[1]
		dateEnd = new Date(yearEnd, monthEnd)
	}
	else
	{
		dateEnd = new Date()
	}
	let dateDiff = new Date(dateEnd.getTime() - dateStart.getTime());

	let yearDiff = dateDiff.getFullYear() - 1970
	let monthDiff = dateDiff.getMonth()

	let str = ""
	if (yearDiff > 0)
	{
		str = `${yearDiff} ${num_word(yearDiff, yearDec)}`
	}
	if (monthDiff > 0)
	{
		if (str !== '')
			str = str + ' '
		str = str + `${monthDiff} ${num_word(monthDiff, monthDec)}`
	}
	return str
}

export {
	ParseDate,
	DateToMonth,
	DateDiffer,
}