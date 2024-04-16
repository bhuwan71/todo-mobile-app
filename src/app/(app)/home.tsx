import React, { useEffect } from 'react';
import { showMessage } from 'react-native-flash-message';
import { useDispatch, useSelector } from 'react-redux';

import { fetchData } from '@/redux/features/apiSlice';
import type { RootState } from '@/redux/store';
import {
  Button,
  FocusAwareStatusBar,
  Modal,
  ScrollView,
  Text,
  useModal,
  View,
} from '@/ui';
const Profile = () => {
  const { ref, present } = useModal();
  const showModal = () => {
    present();
    showMessage({
      animated: true,
      color: 'red',
      backgroundColor: 'purple',
      message: 'ok',
    });
  };
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.api.data); // Assuming `api` is the name of your slice

  console.log(JSON.stringify(data));

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <>
      <FocusAwareStatusBar />
      <ScrollView>
        <View className="flex-1 px-4 pt-16 ">
          <Text className="text-red-800">Profile</Text>
          <View>
            <Button label="Show Modal" onPress={showModal} />
            <Modal
              snapPoints={['60%']} // optional
              title="Modal Title"
              ref={ref}
            >
              <Text>{JSON.stringify(data)}</Text>
            </Modal>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Profile;
