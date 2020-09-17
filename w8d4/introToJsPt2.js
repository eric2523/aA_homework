function titleize(arrOfNames, printCallback) {
    const titleizedNames = arrOfNames.map(name => `Mx. ${name} Jingleheimer Schmidt`)
    titleizedNames.forEach(ele => printCallback(ele))
    return titleizedNames;
}

// const printCallback = (ele) => console.log(ele);
// titleize(["Mary", "Brian", "Leo"], printCallback);

