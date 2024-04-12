import React, { FC } from 'react';
import { Image } from 'react-native';
import { Text, View } from "@/components/Themed";
import tw from 'twrnc';
import { Product } from '@/constants/types';
interface Props {
  item: Product;
}

const ProductItem: FC<Props> = ({ item }) => {
  return (
    <View style={tw`flex-row items-center h-20 bg-sky-100 rounded-xl border border-sky-500 my-2 p-2`}>
      <View style={tw`bg-inherit w-2/12`}>
        <Image
          source={{ uri: item.image_url }}
          style={tw`h-10 w-10 rounded-3xl`}
        />
      </View>
      <View style={tw`flex flex-row justify-between bg-inherit w-10/12 items-center`}>
        <View style={tw`flex-1 bg-inherit`}>
          <Text style={tw`text-base font-semibold text-gray-800`}>
            <Text style={tw`text-sky-400 mx-1`}>Name:</Text>
            <Text style={tw`text-teal-500 mx-1`}>{item.name}</Text>
          </Text>
          <Text style={tw`text-base font-semibold text-gray-800`}>
            <Text style={tw`text-sky-400 mx-1`}>Code:</Text>
            <Text style={tw`text-teal-500 mx-1`}>{item.code}</Text>
          </Text>
        </View>
        <View style={tw`flex-1 bg-inherit`}>
          <Text style={tw`text-sm text-gray-600`}>
            <Text style={tw`text-sky-400 mx-1`}>Sale price:</Text>
            <Text style={tw`text-purple-500 mx-1`}>{`${item?.sale_price}円`}</Text>
          </Text>
          <Text style={tw`text-sm text-gray-600`}>
            <Text style={tw`text-sky-400 mx-1`}>Input price:</Text>
            <Text style={tw`text-purple-500 mx-1`}>{`${item?.input_price}円`}</Text>
          </Text>
          <Text style={tw`text-sm text-gray-600`}>
            <Text style={tw`text-sky-400 mx-1`}>Profits:</Text>
            <Text style={tw`text-rose-600 mx-1 underline`}>{`${item?.profits}円`}</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

export default ProductItem; 
