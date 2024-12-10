import { CorsOptions } from 'cors';

const corsConfig: CorsOptions = {
  origin: ['http://example.com', 'http://anotherexample.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

export default corsConfig;
