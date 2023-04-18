import { SafeAreaView, ScrollView, View } from "react-native";
import MainBanner from "./components/MainBanner";
import PromotionBanner from "./components/PromotionBanner";
import CatalogList from "./wrappers/CatalogList";
import CategoryPreview from "./wrappers/CategoryPreview";

export default function App() {
  return (
    <View className="p-2 flex-1">
      <ScrollView showsVerticalScrollIndicator={false}>
        <PromotionBanner />
        <MainBanner />
        <CategoryPreview />
        <CatalogList />
      </ScrollView>
    </View>
  );
}
