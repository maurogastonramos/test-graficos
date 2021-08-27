getRandomInt = (max) => {
    let number = Math.floor(Math.random() * max) +1;
    return number;
};

const brandColors = {
  gardena: "#f15922",
  husqvarna: "#273a60",
  metabo: "#224b44",
  niwa: "#217861",
};
getBrandColor = (brand) => {
    brand = brand.trim().toLowerCase();
    brandColor = brandColors[brand];
    return brandColor ? brandColor : getRandomColor;
}
getRandomColor = () => {
    return '#' + Math.floor(Math.random()*16777215).toString(16)
}