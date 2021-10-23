const links = {
  github: "gabrielcardosodev",
  linkedin: "in/gabrielcardosodev",
  facebook: "cardjoso",
  instagram: "cardjoso",
  twitter: "cardjoso",
};

function changeLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute("class");

    li.children[0].href = `https://${social}.com/${links[social]}`;
  }
}

changeLinks();

function getUser() {
  const url = `https://api.github.com/users/${links.github}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      userName.textContent = data.name;
      userBio.textContent = data.bio;
      userGithub.href = data.html_url;
      userImage.src = data.avatar_url;
      userLogin.textContent = data.login;
    });
}

getUser();
