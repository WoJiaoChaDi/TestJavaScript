console.log();
console.log('---------------   JavaScript通过原型（prototype）来实现面向对象编程  ---------------');
var Student = {
    name: 'Robot',
    height: 1.2,
    run: function () {
        console.log(this.name + ' is running...');
    }
};

var Bird = {
    fly: function () {
        console.log(this.name + ' is flying...');
    }
};

var xiaoming = {
    name: '小明'
};

xiaoming.__proto__ = Student;//把xiaoming的原型指向了对象Student，看上去xiaoming仿佛是从Student继承下来的
console.log(xiaoming.name);
xiaoming.run();

xiaoming.__proto__ = Bird;
xiaoming.fly();

console.log();
console.log(`请注意，上述代码仅用于演示目的。在编写JavaScript代码时，不要直接用obj.__proto__去改变一个对象的原型，并且，低版本的IE也无法使用__proto__`);


console.log();
console.log('---------------   Object.create()  ---------------');
console.log(`Object.create()方法可以传入一个原型对象，并创建一个基于该原型的新对象，但是新对象什么属性都没有，因此，我们可以编写一个函数来创建xiaoming`);

function createStudent(name){
    var s = Object.create(Student);
    s.name = name;
    s.nickname = 'Nick_' + name;
    // s.run = function(){
    //     console.log(s.name + ' is running...');
    // }
    return s;
}

var xiaoming = createStudent('小明');
console.log(xiaoming.name);
console.log(xiaoming.nickname);
console.log(xiaoming.height);
xiaoming.run();
console.log('判断xiaoming是否Student原型：' + (xiaoming.__proto__ === Student));


console.log();
console.log('---------------   构造函数(按照约定，构造函数首字母应当大写)  ---------------');
function Student2(obj){
    this.name = obj.name;
    this.hello = function(){
        console.log('Hello, ' + this.name + '!');
    }
}

function createStudent2(props){
    return new Student2(props || {});
}

var xiaoming2 = createStudent2({
    name: '小明2'
});
console.log(xiaoming2.name);
xiaoming2.hello();
console.log();
console.log(`这个createStudent()函数有几个巨大的优点：一是不需要new来调用，二是参数非常灵活，可以不传，也可以`);
console.log(`如果创建的对象有很多属性，我们只需要传递需要的某些属性，剩下的属性可以用默认值。由于参数是一个Object，我们无需记忆参数的顺序。如果恰好从JSON拿到了一个对象，就可以直接创建出xiaoming`);








// console.log();
// console.log('---------------   AJAX请求是异步执行的，也就是说，要通过回调函数获得响应。  ---------------');


// console.log();
// console.log('---------------   try catch:错误类型  ---------------');

// try {
//     var a;
//     a.length;
// } catch (e) {
//     if (e instanceof TypeError) {
//         console.log('Type error!');
//         // console.log(e);
//         console.log(e.message);
//     } else if (e instanceof Error) {
//         console.log(e.message);
//     } else {
//         console.log('Error: ' + e);
//     }
// }

// console.log();
// console.log('---------------   try catch:抛出错误  ---------------');
// var r, n, s;
// try {
//     s = '请输入一个数字';
//     n = parseInt(s);
//     if (isNaN(n)) {
//         throw new Error('输入错误');
//     }
//     // 计算平方:
//     r = n * n;
//     console.log(n + ' * ' + n + ' = ' + r);
// } catch (e) {
//     console.log('出错了：' + e);
// }





// console.log();
// console.log('---------------   结束  ---------------');
