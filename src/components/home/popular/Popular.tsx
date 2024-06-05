import React, {useState} from 'react';
import {
  CardWrapper,
  Container,
  HeaderBtn,
  HeaderTitle,
  HeaderWrapper,
} from './Popular.style';
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import useFetch from '../../../hook/useFetch';
import PopularCard from './PopularCard';

const Popular = () => {
  const [selectedJob, setSelectedJob] = useState<number>();

  const handleCardPress = (item: any) => {
    // PUSH ON VIEW JOB DETAILS
    setSelectedJob(item.job_id);
  };

  const {data, error, isLoading} = useFetch('search', {
    query: 'React developer',
    num_pages: '1',
  });

  return (
    <Container>
      <HeaderWrapper>
        <HeaderTitle>Popular jobs</HeaderTitle>
        <TouchableOpacity>
          <HeaderBtn>Show all</HeaderBtn>
        </TouchableOpacity>
      </HeaderWrapper>

      <CardWrapper>
        {isLoading ? (
          <ActivityIndicator size="large" color="#312651" />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={data}
            keyExtractor={(item: any) => item?.job_id}
            contentContainerStyle={{columnGap: 16}}
            horizontal
            renderItem={({item}) => (
              <PopularCard
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
          />
        )}
      </CardWrapper>
    </Container>
  );
};

export default Popular;
