/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const entryPoint = document.querySelector('.cards');
const followersArray = ['lateralcreativity', 'tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

function fetchUsers(userNameArray){
  userNameArray.forEach(user => {
    axios.get(`https://api.github.com/users/${user}`)
    .then(resolve => {
      entryPoint.appendChild(cardCreator(resolve));
    })
    .catch(error => {
      console.log('Error', error);
    })
    .finally(() => {
      console.log('Finished promise');
    });
  });
};

// Call function with my name and the array passed
fetchUsers(followersArray);

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

function cardCreator(userData) {

  // Create each element
  const userCard = document.createElement('div');
  const userImage = document.createElement('img');
  const userInfo = document.createElement('div');
  const name = document.createElement('h3');
  const userName = document.createElement('p');
  const userLocation = document.createElement('p');
  const userProfile = document.createElement('p');
  const userLink = document.createElement('a');
  const userFollowers = document.createElement('p');
  const userFollowing = document.createElement('p');
  const userBio = document.createElement('p');

  // Attach classes to elements
  userCard.classList.add('card');
  userInfo.classList.add('card-info');
  name.classList.add('name');
  userName.classList.add('username');

  // Fill elements with information
  userImage.src = userData.data.avatar_url;
  name.textContent = `${userData.data.name}`;
  userName.textContent = `${userData.data.login}`;
  userLocation.textContent = `Location: ${userData.data.location}`;
  userLink.href = userData.data.html_url;
  userLink.textContent = userData.data.html_url;
  userProfile.innerHTML = `Profile: <br>${userLink}`;
  userFollowers.textContent = `Followers: ${userData.data.followers}`;
  userFollowing.textContent = `Following: ${userData.data.following}`;
  userBio.textContent = `Bio: ${userData.data.bio}`;
  
  // Fill userCard div
  userCard.appendChild(userImage);
  userCard.appendChild(userInfo);
  userInfo.appendChild(name);
  userInfo.appendChild(userName);
  userInfo.appendChild(userLocation);
  userInfo.appendChild(userProfile);
  userInfo.appendChild(userFollowers);
  userInfo.appendChild(userFollowing);
  userInfo.appendChild(userBio);

  // Finally return userCard
  return userCard;
}

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/



/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
