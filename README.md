# Instagram Clone

An Instagram clone built with React.js, Firebase, and Chakra UI.

## Features

- User authentication
- Posting images
- Liking and commenting on posts
- Following users

## Demo

[Live Demo](https://social-insta-clone-nilanchal.vercel.app/)

## Installation

To run this project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/nilanchala-samal/instagram-clone.git`
2. Navigate to the project directory: `cd instagram-clone`
3. Create a new file named .env in the root directory of your project.
4. Set up Firebase:
   - Create a Firebase project
   - Copy your Firebase config and paste it into `.env` file. Make sure to add `VITE_` prefix to the variables. 
     Example: `VITE_FIREBASE_API_KEY=your-api-key` ('FIREBASE' is optional)
   - Create a new file named `firebase.js` in the `src/firebase` directory of your project.
   - Copy and paste the Firebase initialization code into the `firebase.js` file and remove the hard quoted values 
     from the Firebase config.
     Example: Instead of writing `apiKey: api-key`, write `apiKey: import.meta.env.VITE_FIREBASE_API_KEY`. Replace     ` api-key` with your actual apiKey.
5. Install the project dependencies using npm: `npm install`
6. Start the deployment server with Vite: `npm run dev`

## Technologies Used

- React.js
- Vite
- Firebase (Authentication, Firestore, Storage)
- Chakra UI

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

