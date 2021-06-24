import React from "react";
import { View, Text, Image, ActivityIndicator,Alert } from "react-native";

import { styles } from './styles'
import IllustrationImg from '../../assets/illustration.png'
import { ButtonIcon } from "../../components/Buttonicon";
import { useNavigation } from "@react-navigation/native";
import { Background } from "../../components/Background";
import { useAuth } from "../../hooks/auth";
import { theme } from "../../global/styles/theme";

export function SignIn(){
  async function handleSignIn() {
    try {
      await signIn();
    } catch (error) {
      Alert.alert(error);
    }
  }

  const { loading, signIn } = useAuth();

  return(
    <Background>
      <View style={styles.container}>
        <Image 
          source={IllustrationImg} 
          style={styles.image} 
          resizeMode="stretch"
        />
        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {'\n'}
            e organize suas {'\n'}
            jogatinas {'\n'}
          </Text>
          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {'\n'}
            favoritos com seus amigos
          </Text>

          {
            loading ? <ActivityIndicator color={theme.colors.primary} />
            :
            <ButtonIcon 
              title='Entrar com Discord'
              onPress={handleSignIn}
            />
          }

        </View>
      </View>
    </Background>
  );
}
