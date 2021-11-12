import { Storage } from "@capacitor/storage";


export const getStorageKey = async (key: string): Promise<any> => {
    try {
        const { value } = await Storage.get({ key });
        return JSON.parse(value ?? "");
    } catch (error: any) {
        console.log(error.message)
        return error.message;
    }
};

export const setStorageByKey = async (key: string, value: any) => {
    const stringValue = JSON.stringify(value)
    try {
        await Storage.set({
            key,
            value: stringValue,
        });        
    } catch (error: any) {
        console.log(error);
    }
}