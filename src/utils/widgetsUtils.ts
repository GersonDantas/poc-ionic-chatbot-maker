import { apiWithToken } from "src/services";
import { WidgetPanel } from "src/types";

interface ReturnAllWidgetsProps {
  tokenSession: string;
  platformUserId: string;
  chatbotConnectedId: string;
  initialDate: string;
  finalDate: string;
}

const returnAllWidgets = async (
  props: ReturnAllWidgetsProps
): Promise<Array<WidgetPanel>> => {

  const { chatbotConnectedId, platformUserId, tokenSession, finalDate, initialDate} = props;

  let tempArray: Array<WidgetPanel> = [];

  if (tokenSession) {
    await apiWithToken(`Bearer ${tokenSession}:${platformUserId}`)
      .get(
        `/api/v1/chatbots/${chatbotConnectedId}/dashboard?start=${initialDate}&end=${finalDate}&channel=all`
      )
      .then((res) => {
        tempArray = res.data;
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return tempArray;
};

export { returnAllWidgets };
