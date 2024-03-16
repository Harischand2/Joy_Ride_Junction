# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)





  // const requestAccessToken = async () => {
  //   const clientId = process.env.REACT_APP_BASIC_CLIENT_ID;
  //   const clientSecret = process.env.REACT_APP_BASIC_CLIENT_SECRET;
  //   const headers = {
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //        Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
  //     }
  //   };
  //   const data = {
  //     grant_type: 'authorization_code',
  //     code: code,
  //     redirect_uri: 'http://localhost:3000'
  //   };
  
  //   try {  const authString = btoa(`${clientId}:${clientSecret}`);
  //   headers['Authorization'] = `Basic ${authString}`;
  //     const response_ac = await axios.post(
  //       'https://accounts.spotify.com/api/token',
  //       qs.stringify(data),
  //       headers
  //     );
  //     // console.log("my data "  + JSON.stringify(response.data));
  //     return response_ac;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  //  Refresh the access token



  // const RefreshToken = async () => {
  //   const refreshToken = localStorage.getItem("refreshToken");
  //   const clientId = process.env.REACT_APP_BASIC_CLIENT_ID;
  //   const clientSecret = process.env.REACT_APP_BASIC_CLIENT_SECRET;
  //   const headers = {
  //     headers:{
  //        Accept: 'application/json',
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //        Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
  //     }
  //   };
  //   const data = {
  //     grant_type: 'refresh_token',
  //     refresh_token: refreshToken,
  //     client_id: clientId,
  //   };

  //   try{
  //     const response = await axios.post(
  //       'https://accounts.spotify.com/api/token',
  //       qs.stringify(data),
  //       headers
  //     );
  //     console.log("Refresh...  "  + JSON.stringify(response.data));
  //     return response;
  //   }
  //   catch(error){
  //     console.log(error);
  //   }

  // };

  // useEffect(() => {

  //    if(code){
  //     const checkAuth = async () => {
  //       const storedAccessToken = localStorage.getItem("accessToken");
  //       if (!storedAccessToken){
  //         const response_a= await requestAccessToken();
  //         console.log("this is access_token" , response_a.data.access_token);
  //         const date = new Date().getTime();
  //         localStorage.setItem("accessToken", response_a.data.access_token);
  //         localStorage.setItem("refreshToken", response_a.data.refresh_token);
  //         // temp val , actual val = date+response_a.data.expires_in*1000;
  //         console.log("time: " , date);
  //         localStorage.setItem("expiresIn", date +1000);
  //         setAccessToken(response_a.data.access_token);
  //         console.log("Im here");
  //       }
  //       else{
  //         // we have a valid access token
  //         console.log("refreshinh...");
  //         const refresh_date = new Date().getTime();
  //         const compare_date = refresh_date;
  //         const storedExpiresIn = localStorage.getItem("expiresIn");
  //         if( compare_date >= storedExpiresIn){
  //           console.log("Refreshing tokens");
  //           const res = await RefreshToken();
  //           localStorage.setItem("accessToken", res.data.access_token);
  //           // no need to store the refresh token as it is being reused
  //           localStorage.setItem("expiresIn",refresh_date + 1000);
  //           setAccessToken(res.data.access_token);
  //         }

  //       }
  //     }
  //     checkAuth();
  //    }
     
  //   }, []);


  



  


  // console.log("our code " + code);
  // const accessToken = Auth_(code);