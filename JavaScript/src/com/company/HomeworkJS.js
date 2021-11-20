const getFieldInfo = className => {
    let classes = Array.from(document.getElementsByClassName(className))
    let array = []
    classes.forEach(el => {
        array.push(el.value)
    })
    return array
}
const task1 = () => {
    alert('Hello, ' + getFieldInfo('task1')[0])
}

const year = new Date().getFullYear()

const task2 = () => {
    alert('age: ' + (year - getFieldInfo('task2')))
}

const task3 = () => {
    alert(getFieldInfo('task3') * 4)
}

const task4 = () => {
    alert(3.14 * Math.pow(getFieldInfo('task4'), 2))
}

const task5 = () => {
    let mass = getFieldInfo('task5')
    alert(mass[0] / mass[1])
}
const convert = 0.88
const task6 = () => {
    alert(getFieldInfo('task6') * convert)
}

const task7 = () => {
    alert(Math.floor(getFieldInfo('task7') / 820))
}

const task8 = () => {
    let mass = getFieldInfo('task8')
    let res = Math.floor(mass[0] / mass[1])
    alert(res + " ost: " + (mass[0] - res * mass[1]))
}

const task9 = () => {
    let num = getFieldInfo('task9')
    let num1 = num % 10
    let num2 = Math.floor(num/100)
    let res = num - (num2*100) - num1 + (num1 * 100) + num2
    alert(res)
}

const task10 = () => {
    alert(getFieldInfo('task10') % 2 === 0 ? 'True' : 'False')
}
