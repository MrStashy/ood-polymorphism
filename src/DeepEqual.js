class DeepEqual {
    constructor(obj1, obj2) {
        this.obj1 = obj1
        this.obj2 = obj2
    }

    check() {
        const obj1Values = Object.values(this.obj1)
        const obj2Values = Object.values(this.obj2)
        if (obj1Values.every((value) => obj2Values.includes(value)) && obj1Values.length === obj2Values.length) {
            const obj1Keys = Object.keys(this.obj1)
            const obj2Keys = Object.keys(this.obj2)
            if (obj1Keys.every((key) => obj2Keys.includes(key)) && obj1Keys.length === obj2Keys.length) {
                return true
            }
        }
        return false
    }
}

module.exports = DeepEqual;