import { Storage } from "@capacitor/storage";


export const getStorageKey = async (key: string): Promise<string | null> => {
    const { value } = await Storage.get({ key });
    return value;
};

export const setStorageByKey = async (key: string, value: string) => {
    await Storage.set({
        key,
        value,
    });
}