import { StyleSheet, Image, Platform, TouchableOpacity, TextInput, Alert } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import React, { FC, ReactElement, useState } from 'react';
import { useNavigation } from 'expo-router';
import { useThemeColor } from '@/hooks/useThemeColor';

export const UserRegistration: FC<{}> = ({}): ReactElement => {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const color = useThemeColor({ light: '#000000', dark: '#FFFFFF' }, 'text');
  const color1 = useThemeColor({ light: '#222222', dark: '#DDDDDD' }, 'text');

  const Styles = {
    login_wrapper: {
      marginTop: 8,
      marginBottom: 8
    },
    form_input: {
      height: 32,
      color: color,
      borderColor: color1,
      borderWidth: 1,
      marginBottom: 8
    },
    form: {},
    button: {},
    button_label: {},
  };



  const doUserSignUp = async function () {
    // Note that these values come from state variables that we've declared before
    const usernameValue: string = username;
    const passwordValue: string = password;
    
    if(usernameValue === ""){
      const message = `Username field is empty!`;
      // TODO: reduce duplication
      Platform.OS === "web" ? alert(message) : Alert.alert(
        'Error!',
        message,
      );
      return;
    }

    if(passwordValue === ""){
      const message = `Password field is empty!`;
      // TODO: reduce duplication
      Platform.OS === "web" ? alert(message) : Alert.alert(
        'Error!',
        message,
      );
      return;
    }


    const message = `User ${usernameValue} was successfully created!`
    // TODO: reduce duplication
    Platform.OS === "web" ? alert(message) : Alert.alert(
      'Success!',
      message,
    );
    // navigation.navigate('Home');
  };

  return (
    <ThemedView style={Styles.login_wrapper}>
      <ThemedView style={Styles.form}>
        <TextInput
          style={Styles.form_input}
          value={username}
          placeholder={'Username'}
          onChangeText={(text) => setUsername(text)}
          autoCapitalize={'none'}
          keyboardType={'email-address'}
        />
        <TextInput
          style={Styles.form_input}
          value={password}
          placeholder={'Password'}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity onPress={() => doUserSignUp()}>
          <ThemedView style={Styles.button}>
            <ThemedText style={Styles.button_label}>{'Log in'}</ThemedText>
          </ThemedView>
        </TouchableOpacity>
      </ThemedView>
    </ThemedView>
  );
};




export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Login</ThemedText>
      </ThemedView>
      <ThemedText>Use your account credentials to log in.</ThemedText>
      <UserRegistration></UserRegistration>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
