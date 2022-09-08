import { createClient } from 'microcms-js-sdk';

export const client = createClient({
    serviceDomain: 'nextjs-blog-ksk',
    apiKey: process.env.API_KEY
});