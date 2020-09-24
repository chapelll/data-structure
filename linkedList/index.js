let a = { value: 'a' }
let b = { value: 'b' }
let c = { value: 'c' }
let d = { value: 'd' }

a.next = b
b.next = c
c.next = d

// 遍历链表
let p // 声明指针
p = a // 指针指向a
while (p) {
    console.log(p.value);
    p = p.next
}

// 插入
let s = { value: 's' }
b.next = s
s.next = c
console.log(a);

// 删除
b.next = c
console.log(a);

// 反转链表
var reverseList = function(head) {
    let p1 = head
    let p2 = null
    while(p1) {
        let tmp = p1.next
        p1.next = p2
        p2 = p1
        p1 = tmp
    }
    return p2
};

