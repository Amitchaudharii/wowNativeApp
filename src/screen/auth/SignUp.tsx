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
  SecondaryButton,
  SecondaryButtonText,
} from './Auth.style';

const SignUp = ({navigation}: {navigation: any}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    rePassword: '',
  });

  const handleLogin = () => {
    console.log('Sign Up Form Data', formData);
  };

  return (
    <Container>
      <MainHeading>create account!</MainHeading>

      <View style={{width: '100%'}}>
        <Label>Full Name</Label>
        <Input
          value={formData.fullName}
          onChangeText={(text: any) =>
            setFormData(prevData => ({...prevData, fullName: text}))
          }
        />
      </View>

      <View style={{width: '100%'}}>
        <Label>Email</Label>
        <Input
          value={formData.email}
          onChangeText={(text: any) =>
            setFormData(prevData => ({...prevData, email: text}))
          }
        />
      </View>

      <View style={{width: '100%'}}>
        <Label>Password</Label>
        <Input
          secureTextEntry
          value={formData.password}
          onChangeText={(text: any) =>
            setFormData(prevData => ({...prevData, password: text}))
          }
        />
      </View>
      <View style={{width: '100%'}}>
        <Label>Confirm Password</Label>
        <Input
          secureTextEntry
          value={formData.rePassword}
          onChangeText={(text: any) =>
            setFormData(prevData => ({...prevData, rePassword: text}))
          }
        />
      </View>

      <Button onPress={handleLogin}>
        <ButtonText>Create Account</ButtonText>
      </Button>

      <SecondaryButton>
        <SecondaryButtonText>Sign Up with google</SecondaryButtonText>
      </SecondaryButton>

      <DescriptionText>
        Already have an account?{' '}
        <TextLink onPress={() => navigation.navigate('SignIn')}>
          Sign In
        </TextLink>
      </DescriptionText>
    </Container>
  );
};

export default SignUp;
