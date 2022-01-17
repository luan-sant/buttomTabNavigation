import React from 'react'
import { View, Text } from 'react-native'

import  {styles} from '../../Global'

export default function Search() {
    return (
        <View style={styles.search}>
            <Text style={styles.text}>Pesquisar</Text>
        </View>
    )
}
