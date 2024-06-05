import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 24px;
`;

export const HeaderWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  font-size: 20px;
  font-family: 'DMMedium';
  color: #312651;
`;

export const HeaderBtn = styled.Text`
  font-size: 16px;
  font-family: 'DMMedium';
  color: #83829a;
`;

export const CardWrapper = styled.View`
  margin-top: 16px;
`;

const styles = StyleSheet.create<any>({
  container: (selectedJob: string, item: string | any) => ({
    width: 250,
    padding: 24,
    backgroundColor: selectedJob === item.job_id ? '#312651' : '#FFF',
    borderRadius: 16,
    justifyContent: 'space-between',
    // shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: '#F3F4F8',
  }),
  logoContainer: (selectedJob: string, item: string | any) => ({
    width: 50,
    height: 50,
    backgroundColor: selectedJob === item.job_id ? '#FFF' : '#F3F4F8',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  logoImage: {
    width: '70%',
    height: '70%',
  },
  companyName: {
    fontSize: 16,
    fontFamily: 'DMRegular',
    color: '#B3AEC6',
    marginTop: 12 / 1.5,
  },
  infoContainer: {
    marginTop: 20,
  },
  jobName: (selectedJob: string, item: string | any) => ({
    fontSize: 20,
    fontFamily: 16,
    color: selectedJob === item.job_id ? '#F3F4F8' : '#312651',
  }),
  infoWrapper: {
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  publisher: (selectedJob: string, item: string | any) => ({
    fontSize: 16 - 2,
    fontFamily: 'DMRegular',
    color: selectedJob === item.job_id ? '#F3F4F8' : '#312651',
  }),
  location: {
    fontSize: 16 - 2,
    fontFamily: 'DMRegular',
    color: '#B3AEC6',
  },
});

export default styles;
