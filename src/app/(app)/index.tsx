// import { FlashList } from '@shopify/flash-list';
// import React from 'react';

// import { Card } from '@/components/card';
// import { EmptyList, FocusAwareStatusBar, Text, View } from '@/ui';

// export default function Feed() {
//   const { data, isLoading, isError } = usePosts();
//   const renderItem = React.useCallback(
//     ({ item }: { item: Post }) => <Card {...item} />,
//     []
//   );

//   if (isError) {
//     return (
//       <View>
//         <Text> Error Loading data </Text>
//       </View>
//     );
//   }
//   return (
//     <View className="flex-1 ">
//       <FocusAwareStatusBar />
//       <FlashList
//         data={data}
//         renderItem={renderItem}
//         keyExtractor={(_, index) => `item-${index}`}
//         ListEmptyComponent={<EmptyList isLoading={isLoading} />}
//         estimatedItemSize={300}
//       />
//     </View>
//   );
// }
