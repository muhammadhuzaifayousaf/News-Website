# THE NEWS - A News Aggregator Website

[![THE NEWS](https://github.com/user-attachments/assets/5e2a9a63-fab2-44bc-9b55-0ff168709673)](https://muhammadhuzaifayousaf.github.io/THE-NEWS_EcodeCamp-Internship/)

Welcome to **THE NEWS**, a fully functional, dynamic news aggregator website that fetches live news from various sources using the NewsData API. The website categorizes news into various sections such as Top News, Technology, World, Business, Politics, Sports, and Entertainment.

## Live Demo
🌐 [Live Website](https://muhammadhuzaifayousaf.github.io/THE-NEWS_EcodeCamp-Internship/)

## Video Demo
🎥 [Video Walkthrough](https://youtu.be/aiY8mJUfRjs)

## Features
- Fetches live news using the NewsData API.
- Responsive design with categories like Top News, Technology, World, Business, Politics, Sports, and Entertainment.
- Sticky navigation bar for easy navigation.
- Newsletter subscription feature.
- Toggleable mobile menu.
- Smooth scrolling and elegant design.

## Technologies Used
- **HTML** for the structure of the website.
- **CSS** for styling and layout.
- **JavaScript** for dynamic content loading and API integration.
- **FontAwesome** for icons.

## Setup Instructions

1. **Clone the repository:**
    ```bash
    git clone https://github.com/muhammadhuzaifayousaf/THE-NEWS_EcodeCamp-Internship.git
    cd THE-NEWS_EcodeCamp-Internship
    ```

2. **Open the project in your browser:**
    You can directly open the `index.html` file in your browser to view the website.

3. **Add your API key:**
    - Replace the existing API key in `script.js` with your own API key from [NewsData](https://newsdata.io/).
    ```javascript
    const apiKey = "your-api-key"; // Replace with your actual API key
    ```

## How to Integrate and Update News Sources

This project uses the [NewsData API](https://newsdata.io/) to fetch live news. To update the news sources or categories, follow the steps below:

1. **Get your API key from NewsData.io:**
    - Go to [NewsData.io](https://newsdata.io/) and sign up for an account.
    - Navigate to the API section and generate your API key.

2. **Update the API key in `script.js`:**
    - Replace the existing API key in the `script.js` file with your own:
    ```javascript
    const apiKey = "your-new-api-key";
    ```

3. **Change News Categories:**
    - In the `fetchData` function, modify the category parameter to change the news categories (e.g., 'top', 'world', 'technology', 'business', 'sports', 'entertainment', 'politics'). You can view the available categories in the [NewsData API Documentation](https://newsdata.io/docs).
    ```javascript
    const url = `https://newsdata.io/api/1/news?apikey=${apiKey}&country=pk&category=${category}`;
    ```

4. **Run the website:**
    - Open `index.html` in your browser to see the updated news.

## Contribution
Contributions are welcome! Please feel free to submit a Pull Request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
