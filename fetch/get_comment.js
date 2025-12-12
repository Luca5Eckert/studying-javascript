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

const fetchCommentsByPost = (postId) => {
    customFetch(`posts/${postId}/comments`)
        .then(comments => {
            const commentsDolar = comments.filter(comment => {
                return comment.body == "Dolor";
            })
            console.log(`comments: ${JSON.stringify(commentsDolar)}`);

        }).catch(error => {
            console.log(error);
        });

}

fetchCommentsByPost(1);

