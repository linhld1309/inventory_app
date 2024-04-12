import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, TextInput } from "react-native";
import { View } from "@/components/Themed";
import ProductItem from "@/components/ProductItem";
import { db } from "@/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import _ from "lodash";
import { Product } from "@/constants/types"

export default function ProductList() {
  const [products, setproducts] = useState<Product[]>([]);

  useEffect(() => {
    getDataProduct();
  }, []);

  async function getDataProduct() {
    try {
      const product_data: never[] = [];
      const productsCol = collection(db, 'products');
      const querySnapshot = await getDocs(productsCol);
      querySnapshot.forEach((doc) => {
        setproducts([..._.concat(product_data, doc?.data())])
      });
    } catch (error) {
      return false
    }
  }

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
        keyExtractor={(item) => item?.code.toString()}
        className="w-11/12"
      />
    </SafeAreaView>
  );
}
