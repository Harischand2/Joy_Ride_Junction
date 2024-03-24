# Joy-Ride-Junction

### [Explore Joy Ride Junction](https://joy-ride-junction.vercel.app/)
<p align="center">
  <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="GitHub License">
  <img src="https://img.shields.io/github/stars/Harischand2/Joy_Ride_Junction" alt="GitHub Repo stars">
</p>

## Demo
![Demo](Demo_JJF.gif)


## Description
This is a mental health application which has a nature-themed design to foster user engagement. It implements a one time secure user authorization system via the Spotify API, and optimizes accessibility for uninterrupted exploration of diverse moods, accompanied by curated playlists from Spotify and steps to achieve each mood, complemented by relevant quotes.
## Challenge 
* Implementing secure user authorization is crucial for protecting user data and ensuring the integrity of your application. However, integrating authentication mechanisms can be complex, especially when dealing with third-party services like the Spotify API.
## Solution
#### Here's how it works:

* One-Time User Authorization: Users are directed to the Spotify authentication page, where they grant permission for our application to access their Spotify account.

* Secure Token Exchange: Once the user grants permission, Spotify redirects them back to our application with an authorization code.

* Token Retrieval: We then exchange this authorization code for access and refresh tokens and the expire time from the Spotify API. These tokens act as credentials to access the user's data on behalf of the user. The expire time allows us to determine when to send a request to Spotify to refesh our token.

* Token Management: We store these tokens securely in local storage, ensuring they are protected from unauthorized access. Additionally, we implement mechanisms to handle token expiration gracefully, refreshing tokens when necessary to maintain uninterrupted access to the Spotify API.

## Tech Stack

[![My Skills](https://skillicons.dev/icons?i=html,css,react,js,bootstrap)](https://skillicons.dev)


## Getting Started
### Prerequistes
* Need to create a [Spotify APP](https://developer.spotify.com/documentation/web-api/concepts/apps) to get your client ID and client Secret which you will use when making request to spotify web api.

### 1. Clone the repository
```shell
git clone https://github.com/Harischand2/Joy_Ride_Junction.git
cd joy-ride-junction
```
### 2. Install npm dependencies
```shell
npm install
```
### 3. Copy the environment variables to .env and change the values
```shell
cp .env.example .env
```
### 4. Start your App
```shell
npm start
```
### 5. Open the app in your browser
* Visit http://localhost:3000 in your browser.

## Author
### Adrian Harischand

[![My Skills](https://skillicons.dev/icons?i=github)](https://github.com/Harischand2)
[![My Skills](https://skillicons.dev/icons?i=linkedin)](https://www.linkedin.com/in/adrian-harischand-94b803236/)


## License
* Copyright @ 2014 <b>Adrian Harischand</b> <br>
 <img src="https://img.shields.io/badge/license-MIT-yellow.svg" alt="GitHub License">
