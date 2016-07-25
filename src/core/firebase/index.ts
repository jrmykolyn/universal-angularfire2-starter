import {
  AuthMethods,
  defaultFirebase,
  FIREBASE_PROVIDERS,
  firebaseAuthConfig
} from 'angularfire2';


export const FIREBASE_APP_PROVIDERS: any[] = [
  FIREBASE_PROVIDERS,
  defaultFirebase({
    apiKey: "AIzaSyBZj5XUbxcsz5qX9fjZDT8w8aY3sBESWu4",
    authDomain: "newtest-c1817.firebaseapp.com",
    databaseURL: "https://newtest-c1817.firebaseio.com",
    storageBucket: "newtest-c1817.appspot.com",
  }),
  firebaseAuthConfig({
    method: AuthMethods.Popup,
    remember: 'default'
  })
];
