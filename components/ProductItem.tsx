import React, { FC } from 'react';
import { Text, View } from "@/components/Themed";
import tw from 'twrnc';

interface Props {
  item: Product;
}

const ProductItem: FC<Props> = ({ item }) => {
  return (
    <View style={tw`flex-row items-center h-14 bg-slate-200 rounded-md border border-sky-500 my-2`}>
      <View style={tw`flex-1`}>
        <Text style={tw`text-lg font-semibold text-gray-800`}>{item?.name}</Text>
        <Text style={tw`text-sm text-gray-600`}>{item?.price}</Text>
      </View>
    </View>
  );
}

export default ProductItem;

type Product = {
  id: number
  name: string;
  price: number;
};
