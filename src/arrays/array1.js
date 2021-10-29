//0остаток от деления
const isEven = (n) => {
    return !(n % 2)
}

//1возвращение строки наоборот 
const reverseString = (str) => {

    return str.split("").reverse().join("");

}

//2удаление всех пробелов
const clean = (str) => {

    return str.replace(/\s/g, '');
}

//3 преобразует строки в числа
someStr = '1 2 3 4 5'
const numbers = someStr.split(' ').map(numStr => parseInt(numStr));

//4Возвращает самое большое и самое маленькое число в строке
//A) мое решение 
const handl = (str) => {
    const numbers = str.split(' ').map(numStr => parseInt(numStr));
    const max = numbers.reduce(function (a, b) { return a > b ? a : b; }); //(нагуглил, сам не понимаю как работает)
    const min = numbers.reduce(function (a, b) { return a < b ? a : b; });
    return [max, min].join(' ')

}
//B)наверное best practise 
function highAndLow(numbers) {
    numbers = numbers.split(' ').map(Number);
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}


//5 превращает строку в массив, затем если цифра меньше 5 заменяет его на 0 если больше то на 1

const handl = (str) => {

    const numbers = str.split('').map(numStr => parseInt(numStr))
    for (var i = 0; i < numbers.length; i++)
        if (numbers[i] < 5) {
            numbers[i] = 0;
        } else numbers[i] = 1
    return numbers.join([])

}
// best practise 
const handl = (str) => {
    return str.split('').map(n => n < 5 ? 0 : 1).join('');
}

//fuzz bizz на минималках 
// поспешил и не до конца прочитал задание
const fizz = (num) => {
    return !(num % 3 && 5) ? console.log('fizz-buzz') : !(num % 3) ? console.log('fizz') : console.log(num)

}


fizz(15)


//возвращает негативные числа 
const makeNegative = num => (num > 0) ? num - num * 2 : num

//best practices 
makeNegative = n => -Math.abs(n)

function makeNegative(num) {
    return num < 0 ? num : -num;
}

//вернуть средний символ слова. Если длина слова нечетная, вернуть средний символ. Если длина слова четная, вернуть 2 средних символа.
//не понял про второй пункт, думал надо возвращать 2 символа если они идентичны 
const middle = (str) => {
    str.split('')
    let mid = Math.floor(str.length / 2)
    return str[mid]
}
//решение который я нашел
function getMiddle(s) {
    return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

//умножает число на 2
const multToTwo = n =>  n.map((el) => el * 2)


//проверяет имя на допустимую длину в 4 буквы
const friend = arr => arr.filter((el) => el.length === 4)
