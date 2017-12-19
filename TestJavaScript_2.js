console.log('---------------   AJAX请求是异步执行的，也就是说，要通过回调函数获得响应。  ---------------');


console.log();
console.log('---------------   try catch:错误类型  ---------------');

try {
    var a;
    a.length;
} catch (e) {
    if (e instanceof TypeError) {
        console.log('Type error!');
        console.log(e);
        console.log(e.message);
    } else if (e instanceof Error) {
        console.log(e.message);
    } else {
        console.log('Error: ' + e);
    }
}

console.log();
console.log('---------------   try catch:抛出错误  ---------------');
var r, n, s;
try {
    s = '请输入一个数字';
    n = parseInt(s);
    if (isNaN(n)) {
        throw new Error('输入错误');
    }
    // 计算平方:
    r = n * n;
    console.log(n + ' * ' + n + ' = ' + r);
} catch (e) {
    console.log('出错了：' + e);
}





console.log();
console.log('---------------   结束  ---------------');
