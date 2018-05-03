import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://react-burger-shop-lcy.firebaseio.com/'
});

export default instance;