// https://habr.com/ru/company/ruvds/blog/423701/

/**
 * Работа с аргументами командной строки в Node.js-скриптах
 * npm install minimist
 */

// 1 запускаем в терминале команду
// node app.js flavio
// Обратиться к этому аргументу можно так:

const args = process.argv.slice(2);
args[0];

// Теперь попробуем воспользоваться конструкцией вида ключ-значение:
// 2 второй вариант запуска
// node app.js name=flavio
// При таком подходе, после формирования массива args, в args[0] окажется строка name=flavio. Прежде чем пользоваться аргументом, эту строку надо разобрать. Самый удобный способ это сделать заключается в использовании библиотеки minimist, которая предназначена для облегчения работы с аргументами командной строки:

const args = require("minimist")(process.argv.slice(2));
args["name"]; //flavio

/**
 * Создание индикатора выполнения операции
 * npm install progress
 */

/**
 * Приём пользовательского ввода из командной строки
 * npm install inquirer
 */