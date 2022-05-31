function getCats() {
    return fetch('https://api.thecatapi.com/v1/images/search?limit=15&mime_types=jpg,png')
            .then((response) => response.json());
}

export default getCats;
