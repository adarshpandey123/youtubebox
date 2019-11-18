import axios from 'axios';

const KEY ='AIzaSyCI4gUl-1m7HogDFYAp0Pl3RXJ-DLzdkwQ';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        maxResults: 5,
        key: KEY
    }
});
