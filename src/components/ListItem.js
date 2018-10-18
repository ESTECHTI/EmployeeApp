import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

export default class ListItem extends Component {
    onItemPress () {
        Actions.employeeEdit({ employee: this.props.employee.item });
    };
        render(){

            const { name } = this.props.employee.item;

            return(
                <TouchableOpacity onPress={this.onItemPress.bind(this)}>
                    <View>
                        <CardSection>
                            <Text style={styles.titleStyle}>{name}</Text>
                        </CardSection>
                    </View>
                </TouchableOpacity>
            );
        }
};

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}

