//#1

function replaceCSSComments(str) {
    str = str.replace(/\/\*.*?\*\/\s?/g, '');
    return str;
};

//#2

function replaceHTMLComments(str) {
    str = str.replace(/\<\!\-\-*.*?\-\-\>\s*/g, '').trim();
    return str;
};

//#3

function validateFileType(fileName) {
    return (/(\.jpg|\.jpeg|\.png)$/).test(fileName)
};


//#4

function checkYear(year) {
    return (/^(19\d\d|20\d\d|2100)$/).test(year);
};

//#5

function checkEmail(mailName) {
    return (/^[a-zA-Z]+\W?[a-zA-Z]+@[a-zA-Z\.]+\.[a-z]{2,3}$/).test(mailName);
}

//#6

function checkDomainUrl(str) {
    return (/^(http:|https:)\/\/(?!:\/\/)([a-zA-Z0-9-_]+\.)*[a-zA-Z0-9][a-zA-Z0-9-_]+\.[a-zA-z]{2,5}?$/).test(str);
};

//#7

function createLinksFromDomains(str) {
    var reg = new RegExp('(http:|https:)\\/\\/(?!:\\/\\/)([a-zA-Z0-9-_]+\\.)*[a-zA-Z0-9][a-zA-Z0-9-_]+\\.[a-zA-Z]{2,5}', 'gi');

    str.match(reg).forEach((item) => str = str.replace(item, `<a href="${item}" target="_blank">${item.replace(/^(http:|https:)\/\//gi, '')}</a>`));

    return str;
};