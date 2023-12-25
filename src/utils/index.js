import VueCookies from 'vue-cookies'
// 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
    return Object.prototype.toString.call(arr) === '[object Array]';
}

// 深度克隆
export function deepClone(obj) {
    // 对常见的“非”值，直接返回原来值
    if ([null, undefined, NaN, false].includes(obj)) return obj;
    if (typeof obj !== "object" && typeof obj !== 'function') {
        //原始类型直接返回
        return obj;
    }
    var o = isArray(obj) ? [] : {};
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            o[i] = typeof obj[i] === "object" ? deepClone(obj[i]) : obj[i];
        }
    }
    return o;
}

// 表单重置
export function resetForm(refName) {
    if (this.$refs[refName]) {
        this.$refs[refName].resetFields();
    }
}

//时间格式化
export function formatDate(cellValue) {
    if (cellValue == null || cellValue == "") return "";
    var date = new Date(cellValue)
    var year = date.getFullYear()
    var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
    var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
    var hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
    var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    var seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
    return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds
}

let timer, flag;
/**
 * 节流原理：在一定时间内，只能触发一次
 * 
 * @param {Function} func 要执行的回调函数 
 * @param {Number} wait 延时的时间
 * @param {Boolean} immediate 是否立即执行
 * @return null
 */
export function throttle(func, wait = 1000, immediate = true) {
    if (immediate) {
        if (!flag) {
            flag = true;
            // 如果是立即执行，则在wait毫秒内开始时执行
            typeof func === 'function' && func();
            timer = setTimeout(() => {
                flag = false;
            }, wait);
        }
    } else {
        if (!flag) {
            flag = true
            // 如果是非立即执行，则在wait毫秒内的结束处执行
            timer = setTimeout(() => {
                flag = false
                typeof func === 'function' && func();
            }, wait);
        }

    }
};

let timeout = null;

/**
 * 防抖原理：一定时间内，只有最后一次操作，再过wait毫秒后才执行函数
 * 
 * @param {Function} func 要执行的回调函数 
 * @param {Number} wait 延时的时间
 * @param {Boolean} immediate 是否立即执行 
 * @return null
 */
export function debounce(func, wait = 1000, immediate = false) {
    // 清除定时器
    if (timeout !== null) clearTimeout(timeout);
    // 立即执行，此类情况一般用不到
    if (immediate) {
        var callNow = !timeout;
        timeout = setTimeout(function () {
            timeout = null;
        }, wait);
        if (callNow) typeof func === 'function' && func();
    } else {
        // 设置定时器，当最后一次操作后，timeout不会再被清除，所以在延时wait毫秒后执行func回调方法
        timeout = setTimeout(function () {
            typeof func === 'function' && func();
        }, wait);
    }
}

export const cookie = {
    set(table, settings, time) {
        var _set = JSON.stringify(settings)
        return VueCookies.set(table, _set, time);
    },
    get(table) {
        var data = VueCookies.get(table);
        try {
            data = JSON.parse(data)
        } catch (err) {
            return null
        }
        return data;
    },
    remove(table) {
        return VueCookies.remove(table);
    }
}

/*sessionStorage*/
export const session = {
	set(table, settings) {
		var _set = JSON.stringify(settings)
		return sessionStorage.setItem(table, _set);
	},
	get(table) {
		var data = sessionStorage.getItem(table);
		try {
			data = JSON.parse(data)
		} catch (err) {
			return null
		}
		return data;
	},
	remove(table) {
		return sessionStorage.removeItem(table);
	},
	clear() {
		return sessionStorage.clear();
	}
}

//精度计算
export const accuracyCalculation = {
    // 两个浮点数求和
    accAdd(num1, num2) {
        var r1, r2, m;
        try {
            r1 = num1.toString().split('.')[1].length;
        } catch (e) {
            r1 = 0;
        }
        try {
            r2 = num2.toString().split(".")[1].length;
        } catch (e) {
            r2 = 0;
        }
        m = Math.pow(10, Math.max(r1, r2));
        // return (num1*m+num2*m)/m;
        return Math.round(num1 * m + num2 * m) / m;
    },

    // 两个浮点数相减
    accSub(num1, num2) {
        let r1, r2, m;
        try {
            r1 = num1.toString().split('.')[1].length;
        } catch (e) {
            r1 = 0;
        }
        try {
            r2 = num2.toString().split(".")[1].length;
        } catch (e) {
            r2 = 0;
        }
        m = Math.pow(10, Math.max(r1, r2));
        n = (r1 >= r2) ? r1 : r2;
        return (Math.round(num1 * m - num2 * m) / m).toFixed(n);
    },
    // 两数相除
    accDiv(num1, num2) {
        let t1, t2, r1, r2;
        try {
            t1 = num1.toString().split('.')[1].length;
        } catch (e) {
            t1 = 0;
        }
        try {
            t2 = num2.toString().split(".")[1].length;
        } catch (e) {
            t2 = 0;
        }
        r1 = Number(num1.toString().replace(".", ""));
        r2 = Number(num2.toString().replace(".", ""));
        return (r1 / r2) * Math.pow(10, t2 - t1);
    },
    // 两数相乘
    accMul(num1, num2) {
        let m = 0,
            s1 = num1.toString(),
            s2 = num2.toString();
        try {
            m += s1.split(".")[1].length
        } catch (e) {};
        try {
            m += s2.split(".")[1].length
        } catch (e) {};
        return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
    }
}