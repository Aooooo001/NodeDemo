const path = require("path");

// basename :路径最后一部分
// dirname: 目录名 即路径出去最后
// parse  解析路径为对象
// format 对象解析为路径 与parse相反
// resolve 把当前路径解析为绝对路径
// join 路径拼接


//设置路径
let pathStr = "D:/a/b/c/index.html";

const basenamePath = path.basename(pathStr);
console.log(basenamePath);

const dirnamePath = path.dirname(pathStr);
console.log(dirnamePath);

const parsePath = path.parse(pathStr);
console.log(parsePath);

let objStr = {
    root: 'D:/',
    dir: 'D:/c/b/a',
    base: 'index.ts',
    ext: '.ts',
    name: 'index'
}
const formatPath = path.format(objStr);
console.log(formatPath);

const resolvePath = path.resolve(__dirname, "a", "b", "c", "index.html");
const resolvePath1 = path.resolve('../../', "a", "index.html");
console.log(resolvePath);
console.log(resolvePath1);
console.log("当前文件的绝对路径",__dirname);

const  joinPath = path.join(__dirname, "c", "c", "index.ts");
console.log(joinPath); 


