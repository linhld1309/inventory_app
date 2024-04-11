import { FlatList, SafeAreaView, TextInput } from "react-native";
import { View } from "@/components/Themed";
import ProductItem from '@/components/ProductItem';

export default function ProductList() {
  const products = [
    { id: 1, name: 'Sản phẩm 1', code: '001', input_price: 100, sale_price: 150, profits: 50, product_image: 'https://gialainews.com/wp-content/uploads/2021/05/abb3563f427dab23f26c.jpg' },
    { id: 2, name: 'Sản phẩm 2', code: '002', input_price: 200, sale_price: 232, profits: 32, product_image: 'https://gialainews.com/wp-content/uploads/2021/05/abb3563f427dab23f26c.jpg' },
    { id: 3, name: 'Sản phẩm 3', code: '003', input_price: 300, sale_price: 300, profits: 0, product_image: 'https://gialainews.com/wp-content/uploads/2021/05/abb3563f427dab23f26c.jpg' },
    // Thêm dữ liệu sản phẩm khác nếu cần
  ];

  return (
    <SafeAreaView className="flex-1 items-center justify-center">
        <View className="w-9/12 my-3">
          <TextInput
            className="w-full border rounded-lg border-sky-600 py-3 px-2"
            placeholder="Search..."
          />
        </View>
       <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem item={item} />}
        keyExtractor={(item) => item.id.toString()}
        className="w-11/12"
      />
    </SafeAreaView>
  );
}
