import React, { Component } from 'react';
import {Text} from 'react-native';
import {Card,CardSection,Button, Input, Spinner} from './common'
import firebase from 'firebase'

class LoginForm extends Component {
    state = {email: '', password: '', error: '', loading: false} 
 
    onButtonPress (){
        this.setState({error: '',loading : true })
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then( this.onLoginSucess.bind(this))
        .catch ( () => {
            firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then( this.onLoginSucess.bind(this))
            .catch( this.onLoginFail.bind(this));
        });
    }

    onLoginFail() {
        this.setState({error: "Authenticaion Failed!",loading : false})
    }

    onLoginSucess() {
        this.setState({
            email: '',
            password: '',
            error: '',
            loading : false
        })
    }

    renderButton(){
        if (this.state.loading) {
             return <Spinner size= 'small'></Spinner>
        }
        else {
            return (
                <Button onPress = {this.onButtonPress.bind(this)}> 
                    Login 
                </Button>
            );
        }
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        label = "Email"
                        placeholder = "user@gamil.com"
                        value = {this.state.email}
                        onChangeText= {text => this.setState({email : text })}
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        label = "Password"
                        placeholder = "password"
                        secureTextEntry = {true}
                        value= {this.state.password}
                        onChangeText = {text => this.setState({password : text})}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle} >
                    {this.state.error}
                </Text>

                <CardSection>                    
                    {this.renderButton()}
                </CardSection>
                
            </Card>
        );
    }



}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    },
};


export default LoginForm;