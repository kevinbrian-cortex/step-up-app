import { SafeAreaView, ScrollView, View } from "react-native";
import MainBanner from "../../components/MainBanner";
import PromotionBanner from "../../components/PromotionBanner";
import CatalogList from "../../wrappers/CatalogList";
import CategoryPreview from "../../wrappers/CategoryPreview";

export default () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} className="m-3">
      <PromotionBanner />
      <MainBanner />
      <CategoryPreview />
      <CatalogList />
    </ScrollView>
  );
};
