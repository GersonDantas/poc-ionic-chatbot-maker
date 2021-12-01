import { Storage } from '@capacitor/storage';

export const getStorageKey = async (key: string): Promise<any> => {
  try {
    const { value } = await Storage.get({ key });
    return value ? JSON.parse(value) : undefined;
  } catch (error: any) {
    console.log(error.message);
    return error.message;
  }
};

export const setStorageByKey = async <typeValue>(key: string, value: typeValue) => {
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

export const removeStorageByKey = async (key: string) => {
  try {
    await Storage.remove({ key });
  } catch (error: any) {
    console.log(error);
  }
};
