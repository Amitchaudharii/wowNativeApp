import styled from 'styled-components/native';

export const Container = styled.View`
  width: 90%;
  margin: 0 auto;
  display: grid;
  justify-content: center;
  flex: 1;
  gap: 10px;
  background-color: #f0f0f0;
`;

export const Input = styled.TextInput`
  width: 100%;
  background-color: #dde2e7;
  padding: 15px;
  border-radius: 10px;
  font-size: 18px;
  color: #3c3c3c;
`;

export const Label = styled.Text`
  margin-bottom: 5px;
  font-size: 17px;
  font-weight: 500;
  color: #3c3c3c;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  background-color: #007bff;
  padding: 15px 0;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: 600;
`;

export const SecondaryButton = styled.TouchableOpacity`
  width: 100%;
  border: 1px solid #007bff;
  padding: 15px 0;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;

export const SecondaryButtonText = styled.Text`
  color: #007bff;
  font-size: 20px;
  font-weight: 600;
`;

export const MainHeading = styled.Text`
  color: #3c3c3c;
  font-size: 65px;
  font-weight: 500;
  text-transform: capitalize;
`;

export const DescriptionText = styled.Text`
  font-size: 14px;
  color: #686767;
  font-weight: 500;
`;

export const TextLink = styled.Text`
  color: #007bff;
  font-weight: 600;
  text-decoration: underline;
  text-decoration-color: #007bff;
`;
