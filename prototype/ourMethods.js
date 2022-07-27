Array.prototype.ourForEach = function (cb) {
    for (let i = 0; i < this.length; i++) {
        cb(this[i], i, this);
    }
};

Array.prototype.ourMap = function (cb) {
    const newArr = [];
    // console.log(this);
    for (let i = 0; i < this.length; i++) {
        const newEle = cb(this[i], i, this);
        // console.log(newEle)
        newArr.push(newEle);
    }
    return newArr;
};

Array.prototype.ourFilter = function (cb) {
    const newArr = [];
    for (let i = 0; i < this.length; i++) {
        const filter = cb(this[i], i, this);
        if (filter) newArr.push(this[i]);
    }
    return newArr;
};

Array.prototype.ourReduce = function (cb, initValue) {
    const hasInit = initValue !== undefined;
    let prev = hasInit ? initValue : this[0];
    for (let i = hasInit ? 0 : 1; i < this.length; i++) {
        if (prev === undefined) {
            prev = this[0];
            continue;
        }
        prev = cb(prev, this[i], i, this);
    }
    return prev;
};
