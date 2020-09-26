//去重
let arr = [1,1,2,2]
let arr2 = [...new Set(arr)]
console.log(arr2);

//判断元素是否在集合中
let set = new Set(arr)
let has = set.has(3)
console.log(has);

//求交集
let set2 = new Set([2,3])
let set3 = new Set([...set].filter(item => set2.has(item)))
console.log([...set3])