import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import Swipeout from 'react-native-swipeout'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Notes extends Component {
    render() {
        const swipeoutBtns = [
            {
                text: <Icon
                    name='trash-o'
                    type='evilicon'
                    color='#517fa4'
                    size = {25}
                />,
                onPress: this.props.handleDelete
            }
        ]

        const { title, index } = this.props

        return (
            <Swipeout right={swipeoutBtns} style={{ borderRadius: 15 }} >
                <View style={{
                    width: '100%',
                    height: 100,
                    backgroundColor: index % 2 == 0 ? "#E59866" : "#F2F4F4",
                    position: 'relative',
                    flexDirection: 'row',
                    borderRadius: 15,
                }} >
                    <Text style={styles.note} >{title}</Text>

                </View>
            </Swipeout>
        )
    }
}
const styles = {
    note: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 40,
        marginLeft: 20,
        marginRight: 10,
        position: 'absolute',
    },
}