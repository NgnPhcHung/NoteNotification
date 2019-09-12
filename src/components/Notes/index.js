import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, TouchableHighlight, ScrollView } from 'react-native'
import Note from './notes'
import Dialog, { DialogContent, DialogTitle } from 'react-native-popup-dialog';
import Icon from 'react-native-vector-icons/Entypo';

export default class index extends Component {
    state = {
        arr: [],
        value: '',
        visible: false,
    }
    add = (value) => {
        if (this.state.value == '') {
            this.setState({
                visible: false
            })
        }
        else {
            const { submit } = this.props
            submit(value)
            this.setState({
                value: ''
            })
        }
    }

    handleDelete = (i) => {
        const { del } = this.props
        del(i)
    }
    render() {
        const { arr, value } = this.state
        const { note } = this.props.note

        return (
            <View
                style={{ paddingTop: 60 }}>
                <View style={{ flexDirection: 'row', marginLeft: '37%' }} >
                    <Text style={{ fontSize: 24, fontWeight: 'bold' }} >Note List!</Text>
                    <View style={styles.add_style} >
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({ visible: true });
                            }}
                        >
                            <Icon
                                name='add-to-list'
                                size={30} color="#900"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <Dialog
                    visible={this.state.visible}
                    dialogTitle={<DialogTitle title="Thêm ghi chú" />}
                    onTouchOutside={() => {
                        this.setState({ visible: false });
                    }}
                >
                    <DialogContent>
                        <View style={{ flexDirection: 'row' }} >
                            <Text style={styles.note} > Ghi chú: </Text>
                            <TextInput
                                style={{
                                    borderWidth: 5,
                                    borderRadius: 20,
                                    marginTop: '9%',
                                    paddingLeft: '3%',
                                    paddingRight: '3%',
                                    fontSize: 20,
                                    height: 30,
                                }}
                                value={value}
                                placeholder='type there'
                                onChangeText={(value) => this.setState({ value })}
                            />
                        </View>
                        <TouchableOpacity
                            onPress={() => this.add(value)}
                        >
                            <View style={styles.btnContainer} >
                                <Text style={styles.add} >Thêm</Text>
                            </View>
                        </TouchableOpacity>
                    </DialogContent>
                </Dialog>
                <View style={styles.noteContainer} >
                    <ScrollView>
                        {
                            note.map((e, i) =>
                                <Note
                                    onSubmit={this.state.add}
                                    title={e.note}
                                    index={i}
                                    handleDelete={() => { this.handleDelete(i) }}
                                    key={i}
                                />
                            )
                        }
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = {
    add_style: {
        marginLeft: '30%',
    },
    input: {
        borderWidth: 30,
        borderRadius: 20,
        marginTop: '5%',
        paddingLeft: '6%',
        paddingRight: '3%',
        fontSize: 20,
        height: 30,
        color: '#141823',
    },
    note: {
        top: "10%",
        fontWeight: 'bold',
        fontSize: 20,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25,
        paddingTop: '5%',
        marginRight: '5%'
    },
    add: {
        color: '#FDFEFE',
    },
    btnContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 45, width: 80,
        borderRadius: 15,
        backgroundColor: '#85929E',
        marginLeft: '35%',
        marginTop: 10
    },
    noteContainer: {
        margin: 20
    }
}