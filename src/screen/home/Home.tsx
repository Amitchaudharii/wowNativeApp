import React, {useState} from 'react';
import {HomeWrapper, SafeContainer} from './Home.style';
import {ScrollView, Text} from 'react-native';
import Welcome from '../../components/home/welcome/Welcome';
import Popular from '../../components/home/popular/Popular';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  return (
    <SafeContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeWrapper>
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {}}
          />
          <Popular />
        </HomeWrapper>
      </ScrollView>
    </SafeContainer>
  );
};

export default Home;
