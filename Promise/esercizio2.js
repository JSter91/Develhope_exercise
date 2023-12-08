/* -Crea una catena di Promises per simulare un'operazione asincrona in più fasi.
 -La prima Promise recupera i dati dell'utente { id: 1, name: 'John' }. 
 -La seconda Promise recupera i post dell'utente ['Post 1', 'Post 2', 'Post 3']. 
 -Infine, chiama le funzioni per recuperare e stampare in console il nome dell'utente e i titoli dei post. */

function fetchUserData() {
  return new Promise((resolve, reject) => {
    let user = { id: 1, name: "John" };
    if (user) {
      resolve(user);
    } else {
      reject("Errore");
    }
  });
}

function fetchUserPosts(userId, userName) {
  return new Promise((resolve, reject) => {
    if (userId && userName) {
      let posts = ["Post 1", "Post 2", "Post 3"];
      resolve(posts);
    } else {
      reject("Errore durante il recupero dei post");
    }
  });
}

fetchUserData()
  .then((user) => {
    console.log(user);
    return fetchUserPosts(user.id, user.name);
  })
  .then((posts) => {
    console.log(posts);
  })
  .catch((error) => {
    console.error(error);
  });
