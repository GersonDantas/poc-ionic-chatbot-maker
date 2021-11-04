/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo, useRef, useState } from "react";
import { IonToggle, useIonViewDidEnter } from "@ionic/react";
import { Storage } from "@capacitor/storage";
import { moon } from "ionicons/icons";

import "./styles.ts";
import { IonIconToggleTheme } from "./styles";
import { useGlobalContextData } from "src/store";

const MyIonToggleThem: React.FC = () => {
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
      // setIsDark(false);
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
    <>
      <IonIconToggleTheme
        className="component-icon  component-icon-dark"
        slot="end"
        icon={moon}
      />
      <IonToggle
        ref={setToggleRef}
        slot="end"
        name="darkMode"
        onIonChange={toggleDarkTheme}
      />
    </>
  );
};

const getStorageInitTheme = async (): Promise<string | null> => {
  const { value } = await Storage.get({ key: "isDarkTheme" });
  return value;
};

export { MyIonToggleThem };