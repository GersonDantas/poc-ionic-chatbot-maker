import { Storage } from "@capacitor/storage";

export const getStorageKey = async (key: string): Promise<any> => {
  try {
    const { value } = await Storage.get({ key });
    return value ? JSON.parse(value) : undefined;
  } catch (error: any) {
    console.log(error.message);
    return error.message;
  }
};

export const setStorageByKey = async <typeValue>(
  key: string,
  value: typeValue
): Promise<void> => {
  const stringValue = JSON.stringify(value);
  try {
    await Storage.set({
      key,
      value: stringValue,
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const removeStorageByKey = async (key: string): Promise<void> => {
  try {
    await Storage.remove({ key });
  } catch (error: any) {
    console.log(error);
  }
};

export const clearStorage = async (): Promise<void> => {
  try {
    await Storage.clear();
  } catch (error: any) {
    console.log(error);
  }
};
