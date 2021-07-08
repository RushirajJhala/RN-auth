import React, { Component } from 'react';
import {View } from 'react-native';
import firebase from 'firebase'
import {Button, Header, Spinner} from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {
    state = {loggedIn: null}

    componentDidMount() {
        console.log("Did mount called ")
        firebase.initializeApp({
            apiKey: "AIzaSyDqLzj_rsaEw48TTJ-7xBUryBxf7XIsJ1o",
            authDomain: "auth-2a6c3.firebaseapp.com",
            projectId: "auth-2a6c3",
            storageBucket: "auth-2a6c3.appspot.com",
            messagingSenderId: "583402846138",
            appId: "1:583402846138:web:2f9a42b1186303509bcf83",
            measurementId: "G-9DFRFW5S9C"
          });

          firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    this.setState({loggedIn: true})
                }
                else {
                    this.setState({loggedIn: false})
                }
          });
    }

    renderContent () {

        switch (this.state.loggedIn) {
            case true:
                return (
                    <Button onPress= { () => firebase.auth().signOut()} > Log Out</Button>  
                ); 
            case false:
                return <LoginForm />
            default:
                return <Spinner size='large' />
        }
        
    }

    render() {
        return (
            <View >
                <Header headerText = "Authentication" ></Header>
                {this.renderContent() }
            </View>
        );
    }
}

export default App;