import React from 'react';
import {TouchableOpacity,Text} from 'react-native';


const Button = ({onPress, children}) => {
    return (
        <TouchableOpacity onPress={ onPress} style={styles.buttonStyle} >
            <Text style={styles.textStyle} >{children}</Text>
        </TouchableOpacity>
    );
}

const styles = {
    textStyle: {
        fontSize: 16,
        fontWeight: '600',
        alignSelf: 'center',
        color: '#007aff',
        paddingTop: 10,
        paddingBottom: 10,
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        backgroundColor: '#fff',
        marginLeft: 5,
        marginRight: 5,
    },
};

export { Button};