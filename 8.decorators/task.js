//Задача № 1
function cachingDecoratorNew(func) {
    let cache = [];
    function wrapper(...args) {
        const hash = md5(args);
        let objectInCache = cache.find((item) => item.hash === hash);
        if (objectInCache) {
            console.log("Из кеша: " + objectInCache.element);
            return "Из кеша: " + objectInCache.element;
        }
        let result = func(...args);
        cache.push({ hash, element: result });
        if (cache.length > 5) {
            cache.shift();
        }
        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;
    }
    return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timerId = null;
    wrapper.count = 0;
    wrapper.allCount = 0;
    function wrapper(...args) {
        if (!timerId){
            func(...args);
            wrapper.count++;
        }
        wrapper.allCount++;
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            func(...args);
            wrapper.count++;
        }, delay)
    }
    return wrapper;
}
