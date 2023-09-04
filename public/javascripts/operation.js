

const calculate = (inputStr) => {
    let accumulation = 0
    let operations = inputStr.split(/[0-9]/)
    operations = operations.filter((e) => e !== '')
    let numbers = inputStr.split(/[-*+/]/)

    let operationIndex = 0
    numbers.forEach((element) => {
        if(accumulation === 0) {
            accumulation = parseInt(element)
        } else {
            switch (operations[operationIndex]) {
                case '+':
                    accumulation += parseInt(element)
                    break
                case '-':
                    accumulation -= parseInt(element)
                    break
                case '*':
                    accumulation *= parseInt(element)
                    break
                case '/':
                    accumulation /= parseInt(element);
                    break
                default:
                    break
            }
            operationIndex++
        }
    })

    return accumulation;
}