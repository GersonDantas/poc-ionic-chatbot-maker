import { WidgetType } from "src/types/enums";

export const initialStateUser = {
  name: "",
  email: "",
  password: "",
  whatsApp: "",
};

export const initialStatusError = {
  name: "",
  email: "",
  password: "",
  whatsApp: "",
};

export const initialStatusTouched = {
  name: false,
  email: false,
  password: false,
  whatsApp: false,
};

export const initialPlatformUser = {
  name: "",
  email: "",
  whatsApp: "",
  id: "",
  imageUrl: "",
  chatbots: [],
  notification: false,
  lastPing: new Date(),
};

export const initialWidget = {
  name: "",
  type: WidgetType.label,
  size: 0,
};

export const initialWidgetPanel = {
  widgets: [initialWidget],
};
