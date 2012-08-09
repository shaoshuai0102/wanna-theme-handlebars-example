exports.wrap = function(viewEngine, data) {
    data.year = (new Date()).getFullYear();
    return data;
};
