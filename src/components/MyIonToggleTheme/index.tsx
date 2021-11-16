/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo, useRef, useState } from "react";
import { useIonViewWillEnter } from "@ionic/react";

import { IonToggleStyled } from "./styles";
import { useGlobalContextData } from "src/store";
import { getStorageKey, setStorageByKey } from "src/hooks"
import "./styles.ts";

const MyIonToggleTheme: React.FC = () => {
  const setToggleRef = useRef<HTMLIonToggleElement>(null);

  const { isDark, setIsDark } = useGlobalContextData()
  const [storageInitTheme] = useState<Promise<string | null>>(
    getStorageKey("isDarkTheme")
  );

  useMemo(async () => {
    let t = await storageInitTheme;
    if (t) setIsDark(t === "dark");
  }, []);

  useIonViewWillEnter(() => {
    let check = setToggleRef.current?.checked;
    if (check !== undefined && isDark) {
      setToggleRef.current!.checked = true;
    }
  }, [isDark]);

  const toggleDarkTheme = async (): Promise<void> => {
    setStorageByKey("isDarkTheme", toggle())
  };

  const toggle = (): string => {
    if (containsAndSetDark()) {
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

export { MyIonToggleTheme };