import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, SafeAreaView, TextInput } from "react-native";
import { View } from "@/components/Themed";
import ProductItem from "@/components/ProductItem";
import { db } from "@/firebaseConfig";
import { collection, getDocs, limit, orderBy, query, startAfter } from "firebase/firestore";
import _, { isNull } from "lodash";
import { Product } from "@/constants/types"

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [lastVisible, setLastVisible] = useState(null);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getDataProduct();
  }, []);

  async function getDataProduct() {
    try {
      if (isNull(lastVisible)) {
        setLoading(true)
      } else {
        setRefreshing(true)
      }
      let product_data: any[] = []; 
      const productsCol = collection(db, 'products');
      const querySnapshot = await getDocs(query(productsCol, orderBy('code'), startAfter(lastVisible), limit(5)));
      querySnapshot.forEach((doc) => {
        product_data = [..._.concat(product_data, doc?.data())]
      });

      setProducts([...products,...product_data])
      setLastVisible(product_data[product_data.length - 1].code);
      if (isNull(lastVisible)) {
        setLoading(false)
      } else {
        setRefreshing(false)
      }
    } catch (error) {
      return false
    }
  }

  const renderFooter = () => {
    try {
      if (loading) {
        return (
          <ActivityIndicator />
        )
      }
      else {
        return null;
      }
    }
    catch (error) {
      console.log(error);
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
        onEndReached={getDataProduct}
        onEndReachedThreshold={0}
        refreshing={refreshing}
        keyExtractor={(item) => item?.code.toString()}
        className="w-11/12"
        ListFooterComponent={renderFooter}
        showsVerticalScrollIndicator={ false }
      />
    </SafeAreaView>
  );
}
