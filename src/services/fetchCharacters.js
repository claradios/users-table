const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

const fetchCharacters = ()=> {
    return fetch(ENDPOINT)
    .then(response=>response.json());
};

export{fetchCharacters};

