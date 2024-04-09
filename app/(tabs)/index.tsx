import { FlatList } from "react-native";
import { View } from "@/components/Themed";
import ProductItem from '@/components/ProductItem';

export default function ProductList() {
  const products = [
    { id: 1, name: 'Sản phẩm 1', price: 100 },
    { id: 2, name: 'Sản phẩm 2', price: 200 },
    { id: 3, name: 'Sản phẩm 3', price: 300 },
    // Thêm dữ liệu sản phẩm khác nếu cần
  ];

  return (
    <View className="flex-1 items-center justify-center">
       <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem item={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
