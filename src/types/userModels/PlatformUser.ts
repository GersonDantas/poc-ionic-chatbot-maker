import type { ChatbotItem } from '../chatbotModels';
import type { CbmTeam } from '../enums';

export interface PlatformUser {
  id: string;
  name: string;
  email: string;
  whatsApp: string;
  cbmTeam?: CbmTeam;
  imageUrl: string;
  chatbots: ChatbotItem[];
  lastPing: Date;
  notification: boolean;
}
