import { View, Text } from 'react-native'
import React from 'react'

const About = () => {
    return (
        <View style={{
            backgroundColor: 'black',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={{
                color: 'orange',
                fontSize: 30
            }
            }>About</Text>
        </View>
    )
}

export default About