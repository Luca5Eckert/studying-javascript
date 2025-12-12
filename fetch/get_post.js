const URL = "https://jsonplaceholder.typicode.com";


const customFetch = async (path) => {
    try {
        const response = await fetch(`${URL}/${path}`);
        
        if (!response.ok) {
            throw new Error(`Erro http: ${response.status}`);
        }
        
        return response.json();

    } catch (error) {
        throw new Error(`Erro em realizar a requisição: ${error.message || error}`);
    }
}

const fetchRooms = () => {
    customFetch("posts")
        .then(posts => {
            console.log(`Posts: ${JSON.stringify(posts)}`);
        }).catch(error => {
            console.log(error);
        });

}

fetchRooms();

