import React, { FC } from 'react';
import { Image } from 'react-native';
import { Text, View } from "@/components/Themed";
import tw from 'twrnc';

interface Props {
  item: Product;
}

const ProductItem: FC<Props> = ({ item }) => {
  return (
    <View style={tw`flex-row items-center grid grid-cols-3 h-14 bg-sky-100 rounded-xl border border-sky-500 my-2 p-2`}>
      <View style={tw`bg-inherit w-2/12`}>
        <Image
          source={{ uri: item.product_image }}
          style={tw`h-10 w-10 rounded-3xl grayscale`}
        />
      </View>
      <View style={tw`flex flex-row justify-between bg-inherit w-10/12`}>
        <View style={tw`flex-1 bg-inherit`}>
          <Text style={tw`text-lg font-semibold text-gray-800`}>{item?.name}</Text>
          <Text style={tw`text-sm text-gray-600`}>{item?.input_price}</Text>
        </View>
        <View style={tw`flex-1 bg-inherit`}>
          <Text style={tw`text-lg font-semibold text-gray-800`}>{item?.name}</Text>
          <Text style={tw`text-sm text-gray-600`}>{item?.input_price}</Text>
        </View>
      </View>
    </View>
  );
}

export default ProductItem;

type Product = {
  id: number
  name: string;
  code: string;
  input_price: number;
  sale_price: number;
  profits: number;
  product_image: string;
};
