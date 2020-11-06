import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:
    {
        Authorization: 
             'Client-ID Sb3dIg7tmZdNKfECtUmcyivJdJ0mUr6lltJJaarHovw'
    },
});