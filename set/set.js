let mySet = new Set()

mySet.add(1)
mySet.add(5)
mySet.add(5)
mySet.add('hello')
mySet.add({
    name: 'jack',
    age: 18
})
mySet.add({
    name: 'jack',
    age: 18
})

// 对象的内存地址不相同，视为两个对象
console.log(mySet);

mySet.delete(5)

console.log(mySet);

let myArr = Array.from(mySet)

console.log(myArr);