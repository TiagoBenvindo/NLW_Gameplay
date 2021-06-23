import React from "react";
import { View, Text, Image } from 'react-native';
import { styles } from "./styles";

export function GuildIcon () {
    const uri = 'https://www.ultimaficha.com.br/wp-content/uploads/2021/03/baixados-20.jpg'

    return (
        <Image 
            source={{ uri }}
            style={styles.image}
            resizeMode='cover'
        />
    );
}