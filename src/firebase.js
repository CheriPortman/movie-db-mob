const config = {
    apiKey: 'AIzaSyAov7XFqE3tSHDbR6jdRt6UJYWoIDfXLso',
    authDomain: 'my-first-firebase-1c545.firebaseapp.com',
    databaseURL: 'https://my-first-firebase-1c545.firebaseio.com',
    projectId: 'my-first-firebase-1c545',
    storageBucket: 'my-first-firebase-1c545.appspot.com',
    messagingSenderId: '91351338545'
};

firebase.initializeApp(config);

export const auth = firebase.auth();