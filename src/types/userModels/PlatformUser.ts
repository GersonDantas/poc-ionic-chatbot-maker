 import { CbmTeam } from "../enums";
 import { ChatbotItem } from "../chatbotModels";
 
 export interface PlatformUser  {
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