import React from 'react';
import {ProgressViewIOSComponent, View} from 'react-native';

const CardSection = (props) => {
    return (
        <View style={styles.coninterStyle} >
            {props.children}
        </View>
    );
}

const styles = {

    coninterStyle : {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: "#fff",
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        postion: 'relative'
    }

};


export { CardSection};
