const currencyUnit = '$';

const prices = (price) => `${currencyUnit} ${parseFloat(price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;

export default prices;
