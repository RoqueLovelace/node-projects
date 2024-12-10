import cors from 'cors';
import corsConfig from '../config/corsConfig';

const corsMW = cors(corsConfig);

export default corsMW;