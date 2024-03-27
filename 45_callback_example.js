// function fetchUserData(usernames, callback) {
//     const userData = [];
//     let completedCount = 0;
//     let errorOccurred = false;

//     // Fetch user data for each username
//     usernames.forEach(username => {
//         fetchUserDataFromAPI(username, (userDataResult, error) => {
//             if (error) {
//                 errorOccurred = true;
//                 callback(null, 'Failed to fetch user data for: ' + username);
//             } else {
//                 userData.push(userDataResult);
//                 completedCount++;
//                 if (completedCount === usernames.length && !errorOccurred) {
//                     callback(userData, null); // All data fetched successfully
//                 }
//             }
//         });
//     });
// }

// function fetchUserDataFromAPI(username, callback) {
//     // Simulated API call to fetch user data
//     setTimeout(() => {
//         const userData = { username: username, age: Math.floor(Math.random() * 50) + 18 };
//         // Simulated API call to fetch additional user data
//         fetchAdditionalUserDataFromAPI(username, (additionalData, error) => {
//             if (error) {
//                 callback(null, 'Failed to fetch additional user data for: ' + username);
//             } else {
//                 userData.additionalData = additionalData;
//                 callback(userData, null);
//             }
//         });
//     }, Math.random() * 2000); // Simulate random delay
// }

// function fetchAdditionalUserDataFromAPI(username, callback) {
//     // Simulated API call to fetch additional user data
//     setTimeout(() => {
//         const additionalData = { email: username + '@example.com', role: 'user' };
//         callback(additionalData, null);
//     }, Math.random() * 2000); // Simulate random delay
// }


function fetchWeatherData(location, callback) {
    setTimeout(() => {
        const weatherData = {
            location: location,
            temperature: 25,
            humidity: 60,
            windSpeed: 10
        };
        if (location === 'New York') {
            callback(weatherData, null);
        } else {
            callback(null, 'Invalid location');
        }
    }, Math.random() * 2000);
}   

function displayWeather(weatherData) {
    if (weatherData) {
        console.log('Weather:', weatherData);
    } else {
        console.error('Error fetching weather data');
    }
}


fetchWeatherData('New York', displayWeather);