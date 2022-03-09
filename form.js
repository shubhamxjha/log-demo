// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBs89gdg8s1M5itA3TmZHdkflnul4NG-DE",
    authDomain: "login-demo-e71f0.firebaseapp.com",
    databaseURL: "https://login-demo-e71f0-default-rtdb.firebaseio.com",
    projectId: "login-demo-e71f0",
    storageBucket: "login-demo-e71f0.appspot.com",
    messagingSenderId: "157440354952",
    appId: "1:157440354952:web:51606476448908a9058d3d",
    measurementId: "G-B95ENS199Q"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

//signup function
function signUp() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    //
    promise.catch(e => alert(e.message));
    alert("SignUp Successfully");
}

//signIN function
function signIn() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

}


//signOut

function signOut() {
    auth.signOut();
    alert("SignOut Successfully from System");
}

//active user to homepage
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        var email = user.email;
        alert("Active user " + email);
        window.open(
            'dashboard.html',
            '_blank' // <- This is what makes it open in a new window.
        );

    } else {
        alert("No Active user Found")
    }
})