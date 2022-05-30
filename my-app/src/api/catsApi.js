const API_KEY = '4803a456-cfe5-4115-88ed-5179c868fc35';

const getCats = () => {
    const apiUrl = 'https://api.thecatapi.com/v1/images/search?limit=15';

    return fetch(apiUrl, {
        headers: {
            'x-api-key': API_KEY,
        }
    })
        .then(res => res.json());
}

export default getCats;
