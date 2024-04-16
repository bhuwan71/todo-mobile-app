import { useRouter } from 'expo-router';
import React from 'react';

import { Cover } from '@/components/cover';
import { useIsFirstTime } from '@/core/hooks';
import { Button, SafeAreaView, Text, View } from '@/ui';

export default function Onboarding() {
  const [_, setIsFirstTime] = useIsFirstTime();
  const router = useRouter();

  return (
    <View className="flex h-full items-center justify-center bg-white ">
      <View className="py-5">
        <Cover />
      </View>
      <View className="justify-end">
        <Text className="my-3 text-center text-5xl font-bold">
          📝 To Do App
        </Text>
        <Text className="mb-2 text-center text-lg text-gray-600">
          The right way to organize your tasks!
        </Text>

        <Text className="my-1 text-left text-lg">
          📝 Stay organized, stay productive!
        </Text>
        <Text className="my-1 text-left text-lg">✅ Your tasks, your way!</Text>
        <Text className="my-1 text-left text-lg">
          🚀 Achieve more with less effort!
        </Text>
      </View>
      <SafeAreaView className="mt-6">
        <Button
          label="Let's Get Started 🎉"
          onPress={() => {
            setIsFirstTime(false);
            router.replace('/');
          }}
        />
      </SafeAreaView>
    </View>
  );
}
