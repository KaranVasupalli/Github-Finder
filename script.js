async function fetchData() {
    let inputText = document.getElementById("inputText").value;
    console.log(inputText);
    let response = await fetch(`https://api.github.com/users/${inputText}`);
    let data = await response.json();
    console.log(data);

    let h6 = document.querySelector("h6").style.display= "none";
    let img = document
      .querySelector("img")
      .setAttribute("src", data.avatar_url);
    let name = document.querySelector("h3").innerText = data.name;
    let login = document.querySelector("h4").innerText = data.login;
    let repo = data.public_repos;
    let followers = data.followers;
    let following = data.following;

    let location = data.location;
    let blog = data.blog;
    let twitter = data.twitter_username;
    let company = data.company;

    let container = document.getElementById("container");
    container.style.height = "360px";
  

    let follower = (document.getElementById("following-tab").innerHTML = `
    
    <div class="following-tab-list">
      <div class="list">
        <h4>Repos</h4>
        <span id="repo">${repo}</span>
      </div>
      <div class="list">
        <h4>Followers</h4>
        <span id="followers">${followers}</span>
      </div>
      <div class="list">
        <h4>Following</h4>
        <span id="following">${following}</span>
      </div>
    </div>
    `);

    let foot = (document.getElementById("footer").innerHTML = `
    <div class="footer-container">
    <div class="footer-list">
        <div>
            <span class="material-symbols-outlined">
                location_on
            </span>
            <h4>${location}</h4>
        </div>
        <div>
            <span class="material-symbols-outlined">
                link
            </span>
            <h4>${blog}</h4>
        </div>
    </div>
    <div class="footer-list">
        <div>
            <img src="./assets/icons8-twitter.svg" alt="" class="img1">
            <h4>${twitter}</h4>
        </div>
        <div>
            <span class="material-symbols-outlined">
                apartment
            </span>
            <h4>${company}</h4>
        </div>
    </div>
</div>
    
    
    
    `);
  }
  document
    .getElementById("search-btn")
    .addEventListener("click", fetchData);