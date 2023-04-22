export const loadPosts = async () => {
     //O fetch retorna uma promise para quando pegar os dados ele retorna
    const promisePost = fetch("https://jsonplaceholder.typicode.com/posts");
    const promiseFoto = fetch("https://jsonplaceholder.typicode.com/photos");

    /*
        O promise.all ele recebe um array de promise e devolve quando todas
        resolver ou quando uma dar problema
    */
    let [posts, photos] = await Promise.all([promisePost, promiseFoto]);
    /*
        O response.json retorna uma promise com os dados da resposta
        não pode esquecer de usar then oi await
    */

    posts = await posts.json();
    photos = await photos.json();

    const postWithPhotos = posts.map((post, index) =>{
        return {...post, photo: photos[index].url}
    });

    return postWithPhotos;
}