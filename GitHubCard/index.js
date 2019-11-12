/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
// const container = document.querySelector('.cards');

// const followersArray = ['alisonludick', 'banksleisha', 'Catherinesjkim', 'mtlovelace', 'AniiGar', 'sicklesium'];


axios
    .get("https://api.github.com/users/RSibaja88")
    .then(response => {
        console.log(response.data);
        const container = document.querySelector('.cards');
        container.append(printFlwCard(response.data));

    })



/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/
const followersArray = ['alisonludick', 'banksleisha', 'Catherinesjkim', 'mtlovelace', 'AniiGar', 'sicklesium'];


//I can pull whatever data i want from each persons github profile with this function
//
followersArray.forEach(follower => {
    axios.get(`https://api.github.com/users/${follower}`)
        .then(response => {
            console.log(response.data);
            const cardRes = printFlwCard(response.data);
            const container = document.querySelector('.cards');
            container.append(printFlwCard(response.data));
        })
})

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}><{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
// 

function printFlwCard(flwInfo) {
    //Create all the things
    const flwCard = document.createElement('div');
    const flwProPic = document.createElement('img');
    const flwCardInfo = document.createElement('div');
    const flwName = document.createElement('h3');
    const flwUserN = document.createElement('p');
    const flwLocation = document.createElement('p');
    const flwProfile = document.createElement('p');
    const flwProfileLink = document.createElement('a');
    const flwFollowers = document.createElement('p')
    const flwFollowing = document.createElement('p');
    const flwBio = document.createElement('p');

    //Add Classes
    flwCard.classList.add('card');
    flwCardInfo.classList.add('card-info');
    flwName.classList.add('name');
    flwUserN.classList.add('username');

    //Append all the things
    flwCard.appendChild(flwProPic);
    flwCardInfo.appendChild(flwName);
    flwCardInfo.appendChild(flwUserN);
    flwCardInfo.appendChild(flwLocation);
    flwProfile.appendChild(flwProfileLink);
    flwCardInfo.appendChild(flwProfile);
    flwCardInfo.appendChild(flwFollowers);
    flwCardInfo.appendChild(flwFollowing);
    flwCardInfo.appendChild(flwBio);
    flwCard.appendChild(flwCardInfo);

    //Add Text Content
    flwProPic.src = flwInfo.avatar_url;
    flwName.textContent = flwInfo.name;
    flwUserN.textContent = flwInfo.login;
    flwLocation.textContent = `Location: ${flwInfo.location}`;
    flwProfile.textContent = "Profile: ";
    flwProfileLink.textContent = flwInfo.html_url;
    flwFollowers.textContent = `Followers: ${flwInfo.followers}`;
    flwFollowing.textContent = `Following: ${flwInfo.following}`;
    flwBio.textContent = `Bio: ${flwInfo.bio}`;

    return flwCard;
}



/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/