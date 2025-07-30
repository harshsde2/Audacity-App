import AsyncStorage from "@react-native-async-storage/async-storage";

export const STORAGE_KEYS = {
  USER: "user",
};

export const storage = {
  get: async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (e) {
      console.error("Get error:", e);
      return null;
    }
  },

  set: async (key: string, value: any) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error("Set error:", e);
    }
  },

  remove: async (key: string) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      console.error("Remove error:", e);
    }
  },
};
