import  axios  from 'axios';

const instance= axios.create({

  baseURL:'https://eemployee-data-55702.firebaseio.com/'

});

export default instance;