export const pathnameToArray = (pathname) => {
    if (typeof pathname != "undefined") {
        let pathArray = pathname.split("/");
        return pathArray.filter(function(p) {
            if(p != "") {
                return p;
            }
        });
    }
    return [];
};

export const pathnameToObject = (pathname, startIndex = 1) => {
    let pathArray = pathnameToArray(pathname);

    let ret = {};
    let index = 0;
    for (let i = startIndex; i < pathArray.length; i++, index++) {
        if (index % 2 == 0) {
            ret[pathArray[i]] = "";
        } else {
            ret[pathArray[i-1]] = pathArray[i];
        }
    }
    return ret;
};

export const getValueByPathName = (path, name) => {
    let pathArray = pathnameToArray(path);

    const indexOfName = pathArray.indexOf(name);
    if (indexOfName === -1) {
        return "";
    }
    return pathArray[indexOfName + 1];
};

export const changePathValueByName = (path, name, newValue) => {
    let pathArray = pathnameToArray(path);

    const indexOfName = pathArray.indexOf(name);
    if (indexOfName === -1) {
        return path;
    }
    pathArray[indexOfName + 1] = newValue;
    return '/' + pathArray.join('/');
};