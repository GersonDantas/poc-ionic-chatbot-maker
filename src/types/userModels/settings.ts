import { EnvironmentType } from "../enums";

export interface Settings {
    environment: EnvironmentType;
    chatAppId: string;
    webChatUrl: string;
    version: string;
    pliqSurveyUrl: string;
}