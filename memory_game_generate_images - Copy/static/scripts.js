const brands = ["bootstrap", "buromobelexperte", "buy-n-large", "buysellads", "canadian-maple-leaf",
    "bandcamp", "battle-net", "bitcoin", "black-tie", "bluetooth",
    "apple", "angrycreative", "angellist", "android", "avianex",
    "mailchimp", "python", "raspberry-pi", "rocketchat", "snapchat-ghost",
    "soundcloud", "tripadvisor", "twitter", "twitch", "waze",
    "wordpress-simple", "youtube", "instagram", "facebook-messenger", "facebook",
    "git", "github", "google-drive", "gripfire", "hackerrank",
    "html5", "internet-explorer", "itunes-note", "java", "js",
    "linkedin", "linux", "meetup", "mixcloud", "napster",
    "node", "node-js", "phoenix-framework", "php", "pinterest"]; 

const allowed = [2, 4, 6, 8, 10];

function startGame() {
    let gameContainer = document.getElementById('gameContainer');
    gameContainer.innerHTML = '';
    let difficulty = parseInt(document.getElementById('difficulty').value);

    if (allowed.indexOf(difficulty) !== -1) {
        let brandsCopy = JSON.parse(JSON.stringify(brands));  // to create a copy of the brands array
        let pickedBrands = [];
        for (let i = (difficulty * difficulty) /2; i>0; i--) {
            let randomBrand = brandsCopy.splice(Math.floor(Math.random() * brandsCopy.length), 1);   // when we use SPLICE, the element picked is removed from the array
            pickedBrands.push(randomBrand);
            pickedBrands.push(randomBrand); 
        }

        // creating rows and columns for the game board
        for (let i = 0; i < difficulty; i++) {
            let row = document.createElement('div');
            for (let j = 0; j < difficulty; j++) {
                // <i class="fab fa-instagram"></i>  - creating elements for the font icons
                let brand = document.createElement('i');
                brand.classList.add('fab');
                brand.classList.add('fa-' + pickedBrands.splice(Math.floor(Math.random() * pickedBrands.length), 1));
                row.append(brand);
                brand.addEventListener('click', function(event) {
                    let revealed = document.querySelectorAll('.reveal');
                    if (revealed.length == 2) {
                        if (revealed[0].getAttribute('class') == revealed[1].getAttribute('class')) {
                            revealed[0].classList.add('matched');
                            revealed[1].classList.add('matched');
                        }
                        revealed[0].classList.remove('reveal');
                        revealed[1].classList.remove('reveal');
                    }
                    event.currentTarget.classList.add('reveal');
                });
            }
            gameContainer.append(row);
        }          
    } else {
        alert('Invalid value found on difficulty!');
    }
};