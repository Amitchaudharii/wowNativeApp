import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import {
  Button,
  ButtonText,
  Container,
  Input,
  Label,
  MainHeading,
  DescriptionText,
  TextLink,
} from '../styles/Main.style';

const SignIn = ({navigation}: {navigation: any}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Container>
      <MainHeading>welcome back!</MainHeading>

      <View style={{width: '100%'}}>
        <Label>Email</Label>
        <Input value={email} onChangeText={(text: any) => setEmail(text)} />
      </View>

      <View style={{width: '100%'}}>
        <Label>Password</Label>
        <Input
          secureTextEntry
          value={password}
          onChangeText={(text: any) => setPassword(text)}
        />
      </View>

      <Button onPress={handleLogin}>
        <ButtonText>Sign In</ButtonText>
      </Button>
      <DescriptionText>
        Not have an account?{' '}
        <TextLink onPress={() => navigation.navigate('SignUp')}>
          Sign Up
        </TextLink>
      </DescriptionText>
    </Container>
  );
};

export default SignIn;
