import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './Popular.style';
import {checkImageURL} from '../../../utils';

interface PopularCardInterface {
  item: any;
  selectedJob: any;
  handleCardPress: (item: any) => any;
}

const PopularCard = (PopularCardProps: PopularCardInterface) => {
  const {handleCardPress, item, selectedJob} = PopularCardProps;

  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}>
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          resizeMode="contain"
          style={styles.logoImage}
          source={{
            uri: checkImageURL(item?.employer_logo)
              ? item.employer_logo
              : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg',
          }}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.employer_name}
      </Text>

      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item.job_title}
        </Text>
        <View style={styles.infoWrapper}>
          <Text style={styles.publisher(selectedJob, item)}>
            {item?.job_publisher} -
          </Text>
          <Text style={styles.location}> {item.job_country}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PopularCard;
