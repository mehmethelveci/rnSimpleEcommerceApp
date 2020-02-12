import moment from 'moment';

const dateSort = (array, key) => (
  array.sort((a, b) => moment(b[key]).format('YYYYMMDDHHmmss') - moment(a[key]).format('YYYYMMDDHHmmss'))
);

export default dateSort;
