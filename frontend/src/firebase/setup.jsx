
// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// import { getDatabase, ref, set, onValue } from 'firebase/database'
// // Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDdEImFrK54LZ8iK_Ou8IiBfvLhVx7fd94",
//   authDomain: "dash-ecom-59.firebaseapp.com",
//   projectId: "dash-ecom-59",
//   storageBucket: "dash-ecom-59.appspot.com",
//   messagingSenderId: "734434827320",
//   appId: "1:734434827320:web:c64c1a54c6ea63654cdacd",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const writeProductData = (productId, image, company, item_name, original_price, current_price, discount_percentage, return_period, delivery_date, rating) => {
//   const db = getDatabase()
//   const userReference = ref(db, 'products/' + productId)
//   set(userReference, {
//     productId, image, company, item_name, original_price, current_price, discount_percentage, return_period, delivery_date, rating
//   })
// }

// writeProductData("001", "images/1.jpg", "Carlton London", "Rhodium-Plated CZ Floral Studs", 1045, 606, 42, 14, "10 Oct 2023", { "stars": 4.5, "count": 1400 })


// const readData = () => {
//   const distanceRef = ref(db, 'users/' + userId + '/distance')
//   onValue(distanceRef, (snapshot) => {
//     const data = snapshot.val();
//     updateDistance(postElement, data)
//   })
// }


// readData()

// export const auth = getAuth(app)


// const authProvider = new GoogleAuthProvider()