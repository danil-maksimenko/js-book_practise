// Какие значения выведет цикл while?
// Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.

// 1. Префиксный вариант ++i:
let i = 0;
while (++i < 5) alert(i);

// Выведет: 1, 2, 3, 4

// 2. Постфиксный вариант i++
let j = 0;
while (j++ < 5) alert(j);

// Выведет: 1, 2, 3, 4, 5
// Потому что постфиксный вариант возвращает число до увеличения, по этому (4 < 5), хотя по факту j = 5.

// Оба цикла выводят alert с одинаковыми значениями или нет?
// Нет, выводят с разными.