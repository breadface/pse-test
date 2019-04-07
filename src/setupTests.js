import "isomorphic-fetch";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

// jest.mock("fetch", () => {
// eslint-disable-next-line global-require
// const firebasemock = require("firebase-mock");
//
// const mockauth = new firebasemock.MockAuthentication();
// // var mockdatabase = new firebasemock.MockFirebase();
// const mockfirestore = new firebasemock.MockFirestore();
// const mockstorage = new firebasemock.MockStorage();
// // var mockmessaging = new firebasemock.MockMessaging();
//
// const mocksdk = new firebasemock.MockFirebaseSdk(
//   // use null if your code does not use RTDB
//   () => null, // path ? mockdatabase.child(path) : mockdatabase;
//   // use null if your code does not use AUTHENTICATION
//   () => mockauth,
//   // use null if your code does not use FIRESTORE
//   () => mockfirestore,
//   // use null if your code does not use STORAGE
//   () => mockstorage,
//   // use null if your code does not use MESSAGING
//   () => null // mockmessaging;
// );
//
// return mocksdk;
// });
