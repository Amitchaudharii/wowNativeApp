import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import styles, {
  HeaderWrapper,
  SearchBtn,
  SearchBtnImage,
  SearchContainer,
  SearchInputText,
  SearchWrapper,
  TabContainer,
  UserName,
  WelcomeMessage,
} from './Welcome.style';
import icons from '../../../constant/icons';

const jobTypes = ['Full-time', 'Part-time', 'Contractor'];

interface WelcomeInterfaces {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  handleClick: () => any;
}

const Welcome = (WelcomeProps: WelcomeInterfaces) => {
  const {handleClick, searchTerm, setSearchTerm} = WelcomeProps;

  const [activeJobType, setActiveJobType] = useState<string>('Full-time');

  return (
    <View>
      <HeaderWrapper>
        <UserName>Hello Amit</UserName>
        <WelcomeMessage>Find your perfect job</WelcomeMessage>
      </HeaderWrapper>

      <SearchContainer>
        <SearchWrapper>
          <SearchInputText
            value={searchTerm}
            placeholder="What are you looking for?"
            onChange={(text: any) => setSearchTerm(text)}
          />
        </SearchWrapper>
        <SearchBtn onPress={handleClick}>
          <SearchBtnImage
            source={icons.search}
            resizeMode="contain"
            style={{tintColor: '#F3F4F8'}}
          />
        </SearchBtn>
      </SearchContainer>

      <TabContainer>
        <FlatList
          data={jobTypes}
          keyExtractor={item => item}
          contentContainerStyle={{columnGap: 12}}
          horizontal
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                // router.push(`/search/${item}`);
              }}>
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </TabContainer>
    </View>
  );
};

export default Welcome;
