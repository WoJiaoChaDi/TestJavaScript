// user strict
console.log('use strict ---> 使用该模式，变量就必须需要声明！');
console.log();

// JavaScript = ECMAScript

//<script>
console.dir('JavaScript应该放在<script>标签里面！');
//</script>



console.log();
console.log('---------------  == 和 ===  ---------------');
console.log('==:会忽略比较类型');
console.log('===:先比较类型，如果类型一样，再比较值');

var a = 1;
var b = '1';
console.log('a == b:' + (a == b));
console.log('a === b:' + (a === b));
console.log('false == 0:' + (false == 0));
console.log('false === 0:' + (false === 0));
console.log('true == 1:' + (true == 1));
console.log('true === 1:' + (true === 1));
console.log('NaN == NaN:' + (NaN == NaN));
console.log('NaN === NaN:' + (NaN === NaN));
console.log('isNaN(NaN):' + (isNaN(NaN)));


console.log();
console.log('---------------  || 和 && 的运用  ---------------');
console.log('在javascript中，数据类型可以分为“真值”和“假值”。');
console.log('null、undefined、""、0为假值，转换成bool为FALSE');
console.log('&& : 如果&&左侧表达式的值为真值，则返回右侧表达式的值；否则返回左侧表达式的值。');
console.log('|| : 如果||左侧表达式的值为真值，则返回左侧表达式的值；否则返回右侧表达式的值。');
console.log(undefined || 'defaultValue');
console.log(0 || 'defaultValue');
console.log(null && 'defaultValue');
console.log(3 && 'defaultValue');



console.log();
console.log('---------------   数组  ---------------');
var arr = [1, 2, 3, 'hello', null, true];
console.log(arr[3]);
console.log('arr.indexOf可以搜索指定的元素：' + arr.indexOf('hello') + `___` + arr.indexOf('helloooo'));
console.log(arr.slice(2,4));
console.log('arr的push和pop对末尾进行操作');
console.log('arr的unshift和shift对首元素进行操作');
console.log('arr的reverse反序:' + arr.reverse());
console.log('arr的reverse反序:' + arr);
arr.reverse();
console.log(`arr的splice删除元素后添加，再返回删除的元素：
arr：` + arr + 
`\narr.splice(1, 2, \'b\', \'c\', \'d\')返回的:` + arr.splice(1, 2, 'b', 'c', 'd') + 
`\n现在的arr：` + arr);
console.log('arr的join，将每个元素用指定的符号连接起来：' + arr.join('-'));


console.log();
console.log('---------------   对象  ---------------');
var person = {
	name: 'Bob',
	age: 20,
	tags: ['js', 'web', 'mobile'],
	city: 'beijing',
	hasCar: true,
	zipcode: null
};
console.log('person.hasCar:' + person.hasCar);
console.log('person.hasFriend:' + person.hasFriend);

console.log('对象属性名特殊，用\'\'包起来：');
var person2 = {
	'name-nice': '张三',
	name_normal: '张三丰',
	age: 15
};
console.log(person2['name-nice']);
console.log(person2.name_normal);

console.log('删除对象的属性：delete person2.xxx')
delete person2['name-nice'];
delete person2.name_normal;
console.log(person2['name-nice']);
console.log(person2.name_normal);

console.log('判断对象是否有该属性(包含继承的属性)：\'xx\' in person2');
console.log('age' in person2);
console.log('toString' in person2);

console.log('判断对象是否有该属性(自有属性)：person2.hasOwnProperty(\'name\')');
console.log(person2.hasOwnProperty('age'));
console.log(person2.hasOwnProperty('toString'));


console.log();
console.log('---------------   if判断  ---------------');
console.log('JavaScript把null、undefined、0、NaN、\'\'视为false');
console.log('null == false:' + (null == false));
console.log('undefined == false:' + (undefined == false));
console.log('0 == false:' + (0 == false));
console.log('NaN == false:' + (NaN == false));
console.log('\'\' == false:' + ('' == false));


console.log();
console.log('---------------   字符串  ---------------');
var strstr = `多行
字符
串`;
console.log('***ES6*** --- >多行字符串用``:\n' + strstr);

console.log();
console.log('***ES6*** --- >字符串模板：');

var name = '小明';
var age = 20;
var message = `你好，${name}, 你今年${age}岁了`;
console.log(message);


console.log();
console.log('字符串操作：');
var s = 'Hello,World!';
console.log(s[1]);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.indexOf('World'));
console.log(s.indexOf('world'));
console.log('substring-->a开始，截取到b:', s.substring(3,5));
console.log('substr-->a开始，截取b个:', s.substr(3,5));


console.log();
console.log('---------------   for in  ---------------');
for(var key in person){
	if(person.hasOwnProperty(key)){//过滤掉继承的属性
		console.log(key + ':' + person[key]);
	}
}

for(var i in arr){
	console.log(i + ' : ' + arr[i]);
}


console.log();
console.log('***ES6***---------------   map  ---------------');
console.log(`JavaScript的默认对象表示方式{}可以视为其他语言中的Map或Dictionary的数据结构，即一组键值对。
但是JavaScript的对象有个小问题，就是键必须是字符串。但实际上Number或者其他数据类型作为键也是非常合理的。
为了解决这个问题，最新的ES6规范引入了新的数据类型Map。
`);

var nameMap = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]]);
console.log('Michael:' + nameMap.get('Michael'));

var nameMap2 = new Map();
nameMap2.set('Adam', 67);
nameMap2.set('Bob', 59);
console.log('Adam:' + nameMap2.get('Adam'));
console.log('has Adam:' + nameMap2.has('Adam'));
nameMap2.delete('Adam');
console.log('Adam:' + nameMap2.get('Adam'));


console.log();
console.log('***ES6***---------------   set  ---------------');
var mySet = new Set([1, 2, '2', 'a', 'b']);
console.log(mySet);
mySet.add(3);
console.log(mySet);
mySet.delete(2);
console.log(mySet);


console.log();
console.log('***ES6***---------------   iterable  ---------------');

console.log('***ES6***---------------   for of  ---------------');
console.log(arr);
for(var x of arr){//for of 相对于 for in，只会循环集合里面的内容，for in则会循环出多余的属性
	console.log(x);
}

console.log();
console.log('***ES5.1***---------------   forEach(arr)  ---------------');
arr.forEach(function(element, index, array){
	// element: 指向当前元素的值
    // index: 指向当前索引
    // array: 指向Array对象本身
    console.log(element + ', index = ' + index);
});

console.log();
console.log('***ES5.1***---------------   forEach(map)  ---------------');
console.log(nameMap);
nameMap.forEach(function(value, key, map){
	console.log(key + ':' + nameMap.get(key));
});


console.log();
console.log('***ES5.1***---------------   forEach(set)  ---------------');
console.log(mySet);
mySet.forEach(function(element, sameElement, set){
	console.log(element);
});


console.log();
console.log('---------------   函数：arguments参数，每一个入参  ---------------');
var myCons = function(x){
	console.log('这是个myCons函数！');
	console.log('x的参数为：' + x);
	console.log('arguments是JavaScript免费送的参数，类似Array但不是Array！');
	for(var i=0; i<arguments.length; i++){
		console.log('arguments有：' + arguments[i]);
	}
};
myCons();
myCons('喝多了');
myCons(1, 2, 3, 4);


console.log();
console.log('***ES6***---------------   函数：rest参数，定义外的入参  ---------------');
var myCons2 = function(a, b, ...rest){
	console.log('a=' + a);
	console.log('b=' + b);
	console.log(rest);
};
console.log('---rest1---')
myCons2(1);
console.log('---rest2---')
myCons2(1, 2, 3, 4, 5, 6, 7);


console.log();
console.log('---------------   变量提升  ---------------');
function mycons3(){
	var x = 'Hello, ' + y;
	console.log(x);
	var y = 'Bob';
	//相当于
	//var y;
	//var x = 'Hello, ' + y;
	//console.log(x);
	//y = 'Bob';
}
mycons3();


console.log();
console.log('---------------   默认全局对象window  ---------------');
var course = 'Learn JavaScript';
console.log(course);
// console.log(window.course);
console.log(global.course);


console.log();
console.log('---------------   名字空间  ---------------');
// 唯一的全局变量myapp
var myapp = {};

// 其他变量
myapp.name = 'myapp';
myapp.version = 1.0;

// 其他变量
myapp.foo = function(){
	return 'foo';
};


console.log();
console.log('***ES6***---------------   常量const  ---------------');
const pi = 3.14;
// pi = 3;
console.log(pi);


console.log();
console.log('***ES6***---------------   解构赋值:数组[x, y ,z]  对象{name, age, city}  ---------------');
console.log('---数组---');
console.log(arr);
var [a, b, c, d, e, f, g, h] = arr;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);


var person = {
	name: 'Bob',
	age: 20,
	tags: ['js', 'web', 'mobile'],
	city: 'beijing',
	hasCar: true,
	zipcode: null
};
console.log();
console.log('---对象---');
console.log(person);
var {tags, city, age, name, hasCar , hasCar: hasGirl, hasBoy='no Boy'} = person;//对象可以不用注意顺序，另外可以更改引用、默认值
console.log('name:' + name);
console.log('age:' + age);
console.log('tags:' + tags);
console.log('city:' + city);
console.log('hasCar:' + hasGirl);
console.log('hasGirl:' + hasGirl);
console.log('hasBoy:' + hasBoy);

var x, y;
({x, y} = {name: '小明', x: 100, y: 200});
console.log(x);
console.log(y);

console.log();
console.log('---------------   解构赋值：使用场景  ---------------');
var x=1;
var y=2;
[x, y] = [y, x];
console.log('x:' + x);
console.log('y:' + y);

// console.log();
// var {hostname: domain, pathname: path} = location;
// console.log(domain);
// console.log(path);

console.log();
console.log('用解构赋值创建方法：');
function buildDate({year, month, day, hour=2, minute=22, second=23}){
	return new Date(year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second);
}
var mydate = buildDate({year: 2017, month: 11, day: 24});
console.log(mydate);

console.log();
console.log('用解构赋值从对象取属性：');
var {name, single=true} = person;
console.log(name);
console.log(single);

var name2;
var single2;
({name: name2, single: single2 =true} = person)
console.log(name2);
console.log(single2);


console.log();
console.log('---------------   方法：在一个对象中绑定函数，称之为方法  ---------------');
var xiaoming = {
	name: '小明',
	birth: 1991,
	age: function(){
		var y = new Date().getFullYear();
		return y - this.birth;
	}
}
xiaoming.age2 = function(){
	var y = new Date().getFullYear();
		return (y - this.birth) * 10;
}
console.log(xiaoming.age());
console.log(xiaoming.age2());


console.log();
console.log('---------------   方法：apply重新指定this的指向  ---------------');

function getAge(){
	var y = new Date().getFullYear();
	return y - this.birth;	
}

var xiaoming2 = {
	name: '小明',
	birth: 1989,
	age: getAge
	}

console.log(xiaoming2.age());
console.log(getAge());
console.log(getAge.apply(xiaoming2, []));

console.log();
console.log('---------------   方法：apply继承对象的属性  ---------------');
function Person(name,age) {   
    this.name=name; this.age=age;   
}   
 /*定义一个学生类*/   
function Student(name,age,grade) {   
    Person.apply(this,arguments); 
    this.grade=grade;   
}   

var student = new Student('111', 222, '333');
console.log(student)


console.log();
console.log('---------------   方法：call()：与apply()相比，apply()是把参数打包成Array再传入；call()把参数按顺序传入。  ---------------');
console.log(getAge.call(xiaoming2));
console.log(Math.max.call(null, 3, 4, 5, 6));

console.log();
console.log('---------------   装饰器：利用apply()，我们还可以动态改变函数的行为  ---------------');
var count = 0;
var oldParseInt = parseInt;//保留原函数
global.parseInt = function(){
	count += 1;
	return oldParseInt.apply(null, arguments);//调用原函数
}
parseInt('10');
parseInt('20');
console.log(parseInt('30'));
console.log('count = ' + count);


console.log();
console.log('---------------   高阶函数  ---------------');
console.log('一个函数就可以接收另一个函数作为参数，这种函数就称之为高阶函数。');
function add(x, y, f){
	return f(x) + f(y);
}
console.log(add(-5, 5, Math.abs));
console.log(add(-5, 5, Math.cos));
console.log(add(-5, 5, function(param){return param + 5}));


console.log();
console.log('---------------   map/reduce  ---------------');
console.log();
console.log('---------------   map  ---------------');
console.log('---------------   map()会向所调用的函数中传入3个参数：currentValue, index, array  ---------------');


function pow(x){
	return x * x;
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var results = arr.map(pow);
console.log(results);
var resultsStr = arr.map(String);
console.log(resultsStr);

console.log();
console.log('---------------   reduce  ---------------');
//reduce接受两个参数，将arr的数据前后放进函数中，并进行计算后返回值当做新的x，下一个数当做y
var arr = [1, 3, 5, 7];
var arrSum =  arr.reduce(function(x, y){
					return x + y * y;
				});
console.log(arrSum);

var arrNumber = arr.reduce(function(x, y){
					return x * 10 + y;
});
console.log(arrNumber);


var arr13579 = '13579';
arr13579


var arrName = ['adam', 'LISA', 'barT'];
var realArrName = arrName.map(function(elem) {
	var lowName = elem.toLowerCase();
	var fir = elem.substr(0, 1).toUpperCase();
	var realName = fir + lowName.substring(1, lowName.length);
	return realName;
});
console.log(realArrName);


console.log();
console.log('---------------   filter  ---------------');
console.log('---------------   filter()把传入的函数依次作用于每个元素，然后根据返回值是true还是false决定保留还是丢弃该元素。  ---------------');
var arr = [1, 2, 3, 4, 5, 6, 7, 8];
var arrTwo = arr.filter(function(element, index, self) {
		console.log('filter中的element:' + element);
		console.log('filter中的index:' + index);
		// console.log('filter中的self:' + self);
		var inFlag = element % 2 == 0;
		return inFlag;
	});
console.log(arrTwo);

console.log();
console.log('---------------   用filter去重  ---------------');
var arr = ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'orange', 'strawberry'];
r = arr.filter(function(element, index, self){
	return self.indexOf(element) === index;
});
console.log(r);
console.log(r.toString());

console.log();
console.log('---------------   sort()  ---------------');
console.log('---------------   sort方法会直接对Array进行修改，它返回的结果仍是当前Array  ---------------');
console.log('---------------   sort():Array的sort()方法默认把所有元素先转换为String再排序，所以\'10\'排在了\'2\'的前面  ---------------');
var arr = [10, 20 ,1 ,2];
arr.sort();
console.log(arr);
arr.sort(function(x, y){
	if(x < y){
		return -1;
	}
	if(x > y){
		return 1;
	}
	return 0;
});
console.log(arr);


console.log();
console.log('---------------   闭包（返回内容是一个函数）  ---------------');
console.log('---------------   创建一个匿名函数并且立即执行  ---------------');
var noName = (function (x) {
			    return x * x;
			})(3);
console.log(noName);

console.log('---------------   闭包(懒加载)  ---------------');
console.log('---------------   返回的函数并没有立刻执行，而是直到调用了f()才执行  ---------------');
function lazy_sum(arr){
	var sum = function(){
		return arr.reduce(function(x, y){
			return x + y;
		});
	};
	return sum;
};
var f1 = lazy_sum([1, 2, 3, 4, 5]);
var f2 = lazy_sum([1, 2, 3, 4, 5]);
console.log(f1());
console.log('闭包每次调用都会返回一个新的函数');
console.log(f1 === f2);
console.log('闭包时牢记的一点就是：返回函数不要引用任何循环变量，或者后续会发生变化的变量。');

console.log(undefined || '2');
console.log(0 || '2');

console.log();
console.log('---------------   闭包例子：创建计数器  ---------------');
function create_counter(initial) {
    var x = initial || 0;
    return {
        inc: function () {
            x += 1;
            return x;
        }
    }
}

var c1 = create_counter();
console.log(c1.inc());
console.log(c1.inc());
console.log(c1.inc());

var c2 = create_counter(10);
console.log(c2.inc());
console.log(c2.inc());
console.log(c2.inc());

console.log();
console.log('---------------   闭包例子：将多参数的函数变成单参数  ---------------');
console.log('例如 Math.pow(x, y)计算x的y次方，但是经常用x平方和x的立方，可以用闭包创建常用函数');
function make_pow(n){
	return function(x){
		return Math.pow(x, n);
	}
}
var pow2 = make_pow(2);
var pow3 = make_pow(3);
console.log(pow2(2));
console.log(pow3(2));


console.log();
console.log('---------------   箭头函数（Arrow Function）  ---------------');
var fn1 = x => x * x;

var fn2 = function(x){
			return x * x;
		}
console.log(fn1(3));
console.log(fn2(3));

console.log();
console.log('如果参数不是一个，要用括号括起来');
(x, y) => x * x + y * y;
() => 3.14;
(x, y, ...rest) => {
	var sum = x + y;
	for (var i = 0; i < rest.lenth; i++) {
		sum += rest[i];
	}
	return sum;
}
console.log();
console.log('如果返回一个对象，要用()括起来');
var x1 = x => ({name: 'Jack'});
console.log(x1().name);

console.log();
console.log('箭头函数修复了this指向，this总是指向词法作用域，也就是外层调用者');
console.log(`由于this在箭头函数中已经按照词法作用域绑定了，所以，用call()或者apply()调用箭头函数时，无法对this进行绑定，即传入的第一个参数被忽略：`);
var obj = {
	birth: 1990,
	getAge: function(){
		var b = this.birth;
		var fn = () => new Date().getFullYear() - this.birth;//修复了this的指向，现在this指向obj对象了，之前用匿名函数会指向window或者undefined
		return fn.call({birth:2000}, year);//箭头函数，调用call和apply无法对this进行绑定
	}
}


console.log();
console.log('***ES6***---------------   生成器（generator）  ---------------');
function* yFoo(x){
	yield x + 1;
	yield x + 2;
	return x + 3;
}
var f = yFoo(1);//创建了一个generator对象
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());


console.log();
console.log('***ES6***---------------   for ... of(不需要我们自己判断done)  ---------------');
function* fib(max) {
    var
        t,
        a = 0,
        b = 1,
        n = 0;
    while (n < max) {
        yield a;
        [a, b] = [b, a + b];
        n ++;
    }
    return;
}

for(var x of fib(10)){
	console.log(x);
}


console.log();
console.log(`因为generator可以在执行过程中多次返回，所以它看上去就像一个可以记住执行状态的函数，
	利用这一点，写一个generator就可以实现需要用面向对象才能实现的功能。
	例如，用一个对象来保存状态`);

console.log();
console.log(`generator还有另一个巨大的好处，就是把异步回调代码变成“同步”代码。这个好处要等到后面学了AJAX以后才能体会到。`);


console.log();
console.log(`生成一个自增的ID`);
function* next_id() {
	var current_id = 0;
	while(true){
		yield current_id += 1;	
	}
}

var g = next_id()
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());


console.log();
console.log('---------------   标准对象  ---------------');
console.log(`
1.不要使用new Number()、new Boolean()、new String()创建包装对象；
2.用parseInt()或parseFloat()来转换任意类型到number；
3.用String()来转换任意类型到string，或者直接调用某个对象的toString()方法；
4.通常不必把任意类型转换为boolean再判断，因为可以直接写if (myVar) {...}；
5.typeof操作符可以判断出number、boolean、string、function和undefined；
6.判断Array要使用Array.isArray(arr)；
7.判断null请使用myVar === null；
8.判断某个全局变量是否存在用typeof window.myVar === 'undefined'；
9.函数内部判断某个变量是否存在用typeof myVar === 'undefined'。`)


console.log();
console.log('---------------   Date  ---------------');
console.log('当前时间是浏览器从本机操作系统获取的时间，所以不一定准确');
var now = new Date();
now; // Wed Jun 24 2015 19:49:22 GMT+0800 (CST)
now.getFullYear(); // 2015, 年份
now.getMonth(); // 5, 月份，注意月份范围是0~11，5表示六月
now.getDate(); // 24, 表示24号
now.getDay(); // 3, 表示星期三
now.getHours(); // 19, 24小时制
now.getMinutes(); // 49, 分钟
now.getSeconds(); // 22, 秒
now.getMilliseconds(); // 875, 毫秒数
now.getTime(); // 1435146562875, 以number形式表示的时间戳


console.log();
console.log('---------------   RegExp  ---------------');
var re1 = /.*\-jsp.*/;
var re2 = new RegExp('.*\\jsp.*');//如果使用第二种写法，因为字符串的转义问题，字符串的两个\\实际上是一个\
console.log(re1.test('aaa-jspbbb'));
console.log(re1.test('aaa\-jspbbb'));
console.log(re1.test('aaa\\jspbbb'));

console.log(re1.test('aaa-jspbbb'));
console.log(re1.test('aaa\-jspbbb'));
console.log(re1.test('aaa\\jspbbb'));


console.log();
console.log(`全局搜索
JavaScript的正则表达式还有几个特殊的标志，
最常用的是g，表示全局匹配：
i标志，表示忽略大小写
m标志，表示执行多行匹配
`);
var r1 = /test/g;
// 等价于:
var r2 = new RegExp('test', 'g');

var s = 'JavaScript, VBScript, JScript and ECMAScript';
var re=/[a-zA-Z]+Script/g;

// 使用全局匹配:
console.log(re.exec(s)); // ['JavaScript']
console.log(re.lastIndex); // 10

console.log(re.exec(s)); // ['VBScript']
console.log(re.lastIndex); // 20

console.log(re.exec(s)); // ['JScript']
console.log(re.lastIndex); // 29

console.log(re.exec(s)); // ['ECMAScript']
console.log(re.lastIndex); // 44

console.log(re.exec(s)); // null，直到结束仍没有匹配到


console.log();
console.log('---------------   JSON(JavaScript Object Notation)  ---------------');
console.log(`
在JSON中，一共就这么几种数据类型：

number：和JavaScript的number完全一致；
boolean：就是JavaScript的true或false；
string：就是JavaScript的string；
null：就是JavaScript的null；
array：就是JavaScript的Array表示方式——[]；
object：就是JavaScript的{ ... }表示方式。
`);

var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp']
};
var s = JSON.stringify(xiaoming);
var s1 = JSON.stringify(xiaoming, null, '    ');
var s2 = JSON.stringify(xiaoming, ['name', 'skills'], '    ');
console.log();
console.log(s);
console.log();
console.log(s1);
console.log();
console.log(`第二个参数(可以传入函数)用于控制如何筛选对象的键值，如果我们只想输出指定的属性，可以传入Array`);
console.log(s2);

function convert(key, value){
	if(typeof value === 'string'){
		return value.toUpperCase();
	}
	return value;
}
var s3 = JSON.stringify(xiaoming, convert, '    ');
console.log(s3);

console.log();
console.log('---------------   如果我们还想要精确控制如何序列化小明，可以给xiaoming定义一个toJSON()的方法，直接返回JSON应该序列化的数据  ---------------');
var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp'],
    toJSON: function () {
        return { // 只输出name和age，并且改变了key：
            'Name': this.name,
            'Age': this.age
        };
    }
};
console.log(JSON.stringify(xiaoming));

console.log();
console.log('---------------   反序列化:JSON.parse()  ---------------');
var xiaomingStr = `
{
    "name": "小明",
    "age": 14,
    "gender": true,
    "height": 1.65,
    "grade": null,
    "middle-school": "\'W3C\' Middle School",
    "skills": [
        "JavaScript",
        "Java",
        "Python",
        "Lisp"
    ]
}`;
console.log(JSON.parse(xiaomingStr));
console.log(JSON.parse(123));
console.log(JSON.parse('333'));
console.log(JSON.parse('true'));
console.log(JSON.parse('{"name": "小明", "age": 4}'));
console.log(JSON.parse('[1, 2, true]'));

console.log();
console.log('---------------   JSON.parse():还可以接收一个函数，用来转换解析出的属性  ---------------');
var obj = JSON.parse('{"name":"小明","age":14}', function (key, value) {
    if (key === 'name') {
        return value + '同学';
    }
    return value;
});
console.log(JSON.stringify(obj)); // {name: '小明同学', age: 14}







console.log();
console.log('---------------   结束  ---------------');