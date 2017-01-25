/**
 * Created by mac on 17/1/20.
 */

//使用Object.create建立原型链继承关系
function createPrototypeChain() {
    console.log(arguments);
    if (typeof arguments[0] !== 'object') {
        console.error('原型链属性为对象类型');
        return;
    }

    if (arguments.length === 1) {
        console.log(arguments);
        return Object.create(Object.prototype, arguments[0]);
    } else {
        return Object.create(
            createPrototypeChain.apply(null, Array.prototype.slice.call(arguments, 1)),
            arguments[0]
        );
    }
}

// 获取精确类型
function getVariableType(o) {
    return Object.prototype.toString.call(o).slice(8, -1);
}

export {createPrototypeChain, getVariableType}