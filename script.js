//Tweet
const tweetBtn = document.querySelector(".post-btn");

const modalWrapper = document.querySelector(".modal-wrapper");
const modal = document.querySelector(".modal");
const modalPostBtn = document.querySelector(".modal-header button");
const modalInput = document.querySelector(".modal-input");
const modalX = document.querySelector(".modal-header i");

const openModal = () => {
  modalWrapper.classList.add("modal-wrapper-display");
  modal.style.display = "block";
};

const closeModal = () => {
  modalWrapper.classList.remove("modal-wrapper-display");
  modal.style.display = "none";
  modalInput.value = "";
};


tweetBtn.addEventListener("click", openModal);


modalX.addEventListener("click", closeModal);


modalPostBtn.addEventListener("click", () => {
  const tweetContent = modalInput.value;
  if (tweetContent.trim() !== "") {

    console.log("تم إرسال التغريدة: " + tweetContent);
    closeModal();
  }
});


//search box

var searchInput = document.getElementById('search-input');
var searchResults = document.getElementById('search-results');
var isSearchVisible = false;

searchInput.addEventListener('click', function() {
    if (!isSearchVisible) {
        populateSearchResults();
        searchResults.classList.remove('hidden');
        isSearchVisible = true;
    } else {
        searchResults.classList.add('hidden');
        isSearchVisible = false;
    }
});

document.addEventListener('click', function(event) {
    var targetElement = event.target;
    if (!searchInput.contains(targetElement) && !searchResults.contains(targetElement)) {
        searchResults.classList.add('hidden');
        isSearchVisible = false;
    }
});

function populateSearchResults() {
    var resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';

    var dummyResults = [
        { name: 'شغف', image: 'images/tweet10.jpg' },
        { name: 'بَلاغَة', image: 'images/tweet-4.jpg' },
        { name: 'عَلْقَّمة|فَصِيح', image: 'images/tweet5.jpg' },
        { name: ' أدبيَّات', image: 'images/tweet7.jpg' },
        { name: ' ᷂مُدهش', image: 'images/tweet8.jpg' },
        { name: ' لستُ أهلاً.', image: 'images/tweet9.jpg' },
        { name: 'حِسّ' ,  image: 'images/tweet3.jpg' },
        { name: 'دَجْـن | فُصحى' ,  image: 'images/tweet-1.jpg' },
        { name: 'بالفُـصحى' ,  image: 'images/tweet-2.jpg' },
    ];

    dummyResults.forEach(function(result) {
        var resultItem = document.createElement('div');
        resultItem.classList.add('user-result');

        var userImage = document.createElement('img');
        userImage.src = result.image;
        resultItem.appendChild(userImage);

        var username = document.createElement('span');
        username.classList.add('username');
        username.textContent = result.name;
        resultItem.appendChild(username);

        var deleteButton = document.createElement('span');
        deleteButton.classList.add('delete-result');
        deleteButton.textContent = 'X';

        deleteButton.addEventListener('click', function(event) {
          event.stopPropagation();
          resultItem.remove();
      });

      var deleteButton = document.createElement('span');
deleteButton.textContent = 'X';
deleteButton.style.color = 'red';
deleteButton.style.cursor = 'pointer';
deleteButton.style.marginTop = '10px';
deleteButton.style.marginLeft = '50%';
deleteButton.style.fontSize = '25px';

deleteButton.addEventListener('click', function(event) {
  event.stopPropagation();
  resultItem.remove();
});
      resultItem.appendChild(deleteButton);

      resultsContainer.appendChild(resultItem);
  });
  
}