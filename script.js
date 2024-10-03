// DOM element selectors
let breakingImg = document.querySelector('#breakingImg');
let breakingNews_title = document.querySelector('#breakingNews .title');
let breakingNews_desc = document.querySelector('#breakingNews .description');
let topNews = document.querySelector('.topNews');
let sportsNews = document.querySelector('#sportsNews .newsBox');
let businessNews = document.querySelector('#businessNews .newsBox');
let techNews = document.querySelector('#techNews .newsBox');

let header = document.querySelector('.header');
let toggleMenu = document.querySelector('.bar');
let menu = document.querySelector('nav ul');

// Toggle menu functionality
const toggle = (e) => {
    toggleMenu.classList.toggle('active');
    menu.classList.toggle('activeMenu');
};
toggleMenu.addEventListener('click', toggle);

// Sticky header on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// API Key and fetch function
const apiKey = "pub_55255090e1ecf39c3c34382da2160920752a2"; // Replace with your actual API key

const fetchData = async (category) => {
    const url = `https://newsdata.io/api/1/news?apikey=${apiKey}&country=pk&category=${category}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};

// Adding breaking news
const add_breakingNews = (data) => {
    const newsItem = data[0]; // First news item for breaking news
    breakingImg.innerHTML = `<img src="${newsItem.image_url || 'default-image.jpg'}" alt="Breaking news image">`;
    breakingNews_title.innerHTML = `<a href="${newsItem.link}" target="_blank"><h2>${newsItem.title}</h2></a>`;
    breakingNews_desc.innerHTML = `${newsItem.description || 'No description available.'}`;
};
fetchData('general').then(add_breakingNews);

// Adding top news
const add_topNews = (data) => {
    let html = '';
    data.forEach((newsItem) => {
        let title = newsItem.title.length < 100 ? newsItem.title : newsItem.title.slice(0, 100) + '...';
        html += `<div class="news">
                    <div class="img">
                        <img src="${newsItem.image_url || 'default-image.jpg'}" alt="news image">
                    </div>
                    <div class="text">
                        <div class="title">
                            <a href="${newsItem.link}" target="_blank"><p>${title}</p></a>
                        </div>
                    </div>
                </div>`;
    });
    topNews.innerHTML = html;
};
fetchData('general').then(add_topNews);

// Adding sports news
const add_sportsNews = (data) => {
    let html = '';
    data.forEach((newsItem) => {
        let title = newsItem.title.length < 100 ? newsItem.title : newsItem.title.slice(0, 100) + '...';
        html += `<div class="newsCard">
                    <div class="img">
                        <img src="${newsItem.image_url || 'default-image.jpg'}" alt="sports news image">
                    </div>
                    <div class="text">
                        <div class="title">
                            <a href="${newsItem.link}" target="_blank"><p>${title}</p></a>
                        </div>
                    </div>
                </div>`;
    });
    sportsNews.innerHTML = html;
};
fetchData('sports').then(add_sportsNews);

// Adding business news
const add_businessNews = (data) => {
    let html = '';
    data.forEach((newsItem) => {
        let title = newsItem.title.length < 100 ? newsItem.title : newsItem.title.slice(0, 100) + '...';
        html += `<div class="newsCard">
                    <div class="img">
                        <img src="${newsItem.image_url || 'default-image.jpg'}" alt="business news image">
                    </div>
                    <div class="text">
                        <div class="title">
                            <a href="${newsItem.link}" target="_blank"><p>${title}</p></a>
                        </div>
                    </div>
                </div>`;
    });
    businessNews.innerHTML = html;
};
fetchData('business').then(add_businessNews);

// Adding tech news
const add_techNews = (data) => {
    let html = '';
    data.forEach((newsItem) => {
        let title = newsItem.title.length < 100 ? newsItem.title : newsItem.title.slice(0, 100) + '...';
        html += `<div class="newsCard">
                    <div class="img">
                        <img src="${newsItem.image_url || 'default-image.jpg'}" alt="tech news image">
                    </div>
                    <div class="text">
                        <div class="title">
                            <a href="${newsItem.link}" target="_blank"><p>${title}</p></a>
                        </div>
                    </div>
                </div>`;
    });
    techNews.innerHTML = html;
};
fetchData('technology').then(add_techNews);

// Newsletter subscription
let subscribeButton = document.querySelector('.newsletter button');
let emailInput = document.querySelector('.newsletter input[type="email"]');

subscribeButton.addEventListener('click', () => {
    let email = emailInput.value;
    if (email && validateEmail(email)) {
        alert('Thank you for subscribing!');
        emailInput.value = ''; // Clear input field after submission
    } else {
        alert('Please enter a valid email address.');
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Search functionality
let searchButton = document.querySelector('#searchButton');
let searchInput = document.querySelector('#searchInput');

searchButton.addEventListener('click', () => {
    let query = searchInput.value;
    if (query) {
        searchNews(query);
    } else {
        alert('Please enter a search query');
    }
});

const searchNews = async (query) => {
    const url = `https://newsdata.io/api/1/news?apikey=${apiKey}&country=pk&q=${query}`;
    try {
        const data = await fetch(url);
        const response = await data.json();
        displaySearchResults(response.results);
    } catch (error) {
        console.error("Error fetching search results:", error);
    }
};

const displaySearchResults = (data) => {
    let html = '';
    data.forEach((newsItem) => {
        html += `<div class="news">
                    <div class="img">
                        <img src="${newsItem.image_url || 'default-image.jpg'}" alt="news image">
                    </div>
                    <div class="text">
                        <div class="title">
                            <a href="${newsItem.link}" target="_blank"><p>${newsItem.title}</p></a>
                        </div>
                    </div>
                </div>`;
    });
    topNews.innerHTML = html;
};
