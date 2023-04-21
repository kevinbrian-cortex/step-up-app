import { SafeAreaView, ScrollView, View } from "react-native";
import MainBanner from "../../components/MainBanner";
import PromotionBanner from "../../components/PromotionBanner";
import CatalogList from "../../wrappers/CatalogList";
import CategoryPreview from "../../wrappers/CategoryPreview";
import WelcomeHeader from "../../components/WelcomeHeader";

export default () => {
  return (
    <>
      <WelcomeHeader />
      <PromotionBanner />
      <MainBanner />
      <CategoryPreview />
      <CatalogList />
    </>
  );
};
