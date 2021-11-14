exports.truncate = (str) => {
    if (str.length > 100){
        const truncated = str.substring(0, 100 - 3) + "...";
        return truncated;
    }else{
        return str;
    };
};