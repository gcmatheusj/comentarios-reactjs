import Rebase from 're-base'
import firebase from 'firebase'

//Configuração de inicialização do firebase
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAwsZjRzquIEfsgaxTn-mZvYAUozvUM3RY",
    authDomain: "reactjs-c3268.firebaseapp.com",
    databaseURL: "https://reactjs-c3268.firebaseio.com",
    projectId: "reactjs-c3268",
    storageBucket: "reactjs-c3268.appspot.com",
    messagingSenderId: "533659968890"
})
const db = firebase.database(firebaseApp)
const base = Rebase.createClass(db)

export const providers = {
    'facebook': new firebase.auth.FacebookAuthProvider()
}

export const auth = firebaseApp.auth()
export default base