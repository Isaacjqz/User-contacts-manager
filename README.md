USER CONTACT MANAGER

This is a contact manager web application built using React and Firebase. It allows users to manage their contacts, including adding, editing, and deleting contacts. Firebase is used for authentication, database storage, and file storage.

Features

- Allows users to sign up and log in to their account
- Users can add, edit, and delete contacts
- Contact data is stored in Firebase Realtime Database
- Routing between views is handled using React Router
- Redux Thunk middleware is used to handle asynchronous actions, such as making API calls
- Firebase is used for user authentication and authorization

Deployment

The application is deployed on Firebase hosting and can be accessed using the following URL:

https://react-firebase-auth-16ed5.web.app/login

- Dummy Email: ike@gmail.com
- Dummy password: 1234567

Getting Started

To run the application locally, follow these steps:

- Clone the repository to your local machine
- Navigate to the project directory and run npm install to install the necessary dependencies
- Create a Firebase project and configure the Firebase SDK in the application (see below for instructions)
- Run npm start to start the development server
- Configuring Firebase

To configure Firebase for the application, follow these steps:

- Create a Firebase project in the Firebase console
- Enable Firebase authentication and database storage for the project
- Create a new web app in the Firebase console and copy the configuration object
- Replace the configuration object in src/firebase/firebase.js with your own configuration object
- Create a .env file in the root of the project and add the Firebase storage bucket URL as REACT_APP_STORAGE_BUCKET_URL=your_storage_bucket_url

Technologies Used

- React
- Firebase
- React Router
- Redux Thunk

Contributing

Contributions to the project are welcome. To contribute, follow these steps:

- Fork the project repository
- Create a new branch for your feature or bug fix
- Make changes to the code in your branch
- Submit a pull request to the main repository

License

This project is licensed under the MIT License. See the LICENSE file for more information.
