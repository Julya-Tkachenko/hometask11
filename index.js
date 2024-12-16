'Use strict'

// Дано ціле число (ввести через 'prompt'). З'ясувати, чи просте воно (простим називається число, більше 1,
//  що не має інших дільників, крім 1 і себе).

// валідація: програма має писати

// помилку на такі дані від юзера:
// null
// '   '
// ' 12dsdf '
// ' 12.12 '
// число не є простим на такі дані від юзера
// ‘ -10   ’
// ‘   0  ’
// ‘   1   ’
// ‘   27   ’

const userNumber = prompt('Enter an integer');

if (!userNumber?.trim() || isNaN(userNumber) || !Number.isInteger(+userNumber)) {
    alert ('Error: invalid number');
} else {
    const num = Number(userNumber);
    let numberDivider = 0;
        for(let i = 1; i <= num; i++) {
            if (num % i === 0) {
               numberDivider++  
            }
        }

    if ( numberDivider < 2 ) {
    alert('invalid number')
    } else if (numberDivider > 2) {
        alert( 'Number is not prime')
    } else {
        alert('Number is prime')
    }
}