/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo, useRef, useState } from "react";
import { IonToggle, useIonViewDidEnter } from "@ionic/react";
import { Storage } from "@capacitor/storage";
import { moon, sunny } from "ionicons/icons";

import "./styles.ts";
import { /* IonIconToggleTheme, */ IonToggleStyled } from "./styles";
import { useGlobalContextData } from "src/store";

const MyIonToggleTheme: React.FC = () => {
  const setToggleRef = useRef<HTMLIonToggleElement>(null);

  const {isDark, setIsDark} = useGlobalContextData()
  const [storageInitTheme] = useState<Promise<string | null>>(
    getStorageInitTheme()
  );

  useMemo(async () => {
    let t = await storageInitTheme;
    if (t) setIsDark(t === "dark");
  }, []);

  useIonViewDidEnter(() => {
    let check = setToggleRef.current?.checked;
    if (check !== undefined && isDark) {
      setToggleRef.current!.checked = true;
    }
  }, [isDark]);
  
  const toggleDarkTheme = async (): Promise<void> => {
    await Storage.set({ key: "isDarkTheme", value: toggle() });
  };
  
  const toggle = (): string => {
    if(containsAndSetDark()) {
      setIsDark(true)
      return "dark"
    } else {
      setIsDark(false)
      return "light"
    }
  };
  
  const containsAndSetDark = (): boolean => document.body.classList.toggle("dark");
  
  return (
      <IonToggleStyled
        ref={setToggleRef}
        slot="end"
        name="darkMode"
        onIonChange={toggleDarkTheme}
        mode="ios"
      />
  );
};

const getStorageInitTheme = async (): Promise<string | null> => {
  const { value } = await Storage.get({ key: "isDarkTheme" });
  return value;
};

export { MyIonToggleTheme };