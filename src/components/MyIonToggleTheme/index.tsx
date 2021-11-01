/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo, useRef, useState } from "react";
import { IonIcon, IonToggle, useIonViewDidEnter } from "@ionic/react";
import { Storage } from "@capacitor/storage";
import { moon } from "ionicons/icons";

import "./styles.ts";
import { IonIconToggleTheme } from "./styles";

const MyIonToggleThem: React.FC = () => {
  const setToggleRef = useRef<HTMLIonToggleElement>(null);

  const [isDark, setIsDark] = useState<boolean>();
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
      setIsDark(false);
    }
  }, [isDark]);

  return (
    <div style={{width: "100%", display: 'flex', justifyContent: 'space-between' }}>
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
    </div>
  );
};

const getStorageInitTheme = async (): Promise<string | null> => {
  const { value } = await Storage.get({ key: "isDarkTheme" });
  return value;
};

const toggleDarkTheme = async (): Promise<void> => {
  await Storage.set({ key: "isDarkTheme", value: toggle() });
};

const toggle = (): string => containsDark() ? "dark" : "light";

const containsDark = (): boolean => document.body.classList.toggle("dark");

export { MyIonToggleThem };
