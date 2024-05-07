import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const HeaderWrapper = styled.View`
  width: 100%;
`;

export const UserName = styled.Text`
  font-size: 20px;
  color: #444262;
  font-family: 'DMRegular';
`;

export const WelcomeMessage = styled.Text`
  font-size: 24px;
  color: #312651;
  font-family: 'DMBold';
  margin-top: 2px;
`;

export const SearchContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 20px;
  height: 50px;
`;

export const SearchWrapper = styled.View`
  flex: 1;
  background-color: #f3f4f8;
  margin-right: 12px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  height: 100%;
`;

export const SearchInputText = styled.TextInput`
  font-family: 'DMRegular';
  width: 100%;
  height: 100%;
  padding: 0px 16px;
`;

export const SearchBtn = styled.TouchableOpacity`
  width: 50px;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background-color: #007bff;
`;

export const SearchBtnImage = styled.Image`
  width: 50%;
  height: 50%;
`;

export const TabContainer = styled.View`
  width: 100%;
  margin-top: 16px;
`;

const styles = StyleSheet.create<any>({
  tab: (activeJobType: string, item: string) => ({
    paddingVertical: 12 / 2,
    paddingHorizontal: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: activeJobType === item ? '#444262' : '#C1C0C8',
  }),
  tabText: (activeJobType: string, item: string) => ({
    fontFamily: 'DMMedium',
    color: activeJobType === item ? '#444262' : '#C1C0C8',
  }),
});

export default styles;
