import { PlatformUser, Settings } from ".";

export interface Session {
    platformUser: PlatformUser;
    name: string;
    authenticationType: string;
    isAuthenticated: boolean;
    settings: Settings;
    tokenSession: string;
}