import { ButtonSecondary } from "../Button";
import { Button, Card, Text, useTheme } from "react-native-paper";

export default () => {
  const theme = useTheme();

  return (
    <Card
      contentStyle={{
        flexDirection: "row",
        justifyContent: "space-between",
      }}
      className="bg-green-400 p-2"
    >
      <Card.Content>
        <Text className="font-bold text-2xl">Summer Sale!</Text>
        <Text className="text-md pb-4">Now up to -70% offs</Text>
      </Card.Content>

      <Card.Actions>
        <Button
          mode="contained"
          buttonColor={"white"}
          textColor={theme.colors.primary}
          icon={"arrow-right"}
          contentStyle={{ flexDirection: "row-reverse" }}
          className="rounded-md p-0"
        >
          Check it out
        </Button>
      </Card.Actions>
    </Card>
  );
};
