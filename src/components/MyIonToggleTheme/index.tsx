/* eslint-disable no-undef */
import { useIonViewWillEnter } from '@ionic/react';
import React, { useMemo, useRef, useState } from 'react';
import { getStorageKey, setStorageByKey } from 'src/hooks';
import { useGlobalContextData } from 'src/store';

import { IonToggleStyled } from './styles';

const MyIonToggleTheme: React.FC = function () {
  const setToggleRef = useRef<HTMLIonToggleElement>(null);

  const { isDark, setIsDark } = useGlobalContextData();
  const [storageInitTheme] = useState<Promise<string | null>>(
    getStorageKey('isDarkTheme'),
  );

  useMemo(async () => {
    const t = await storageInitTheme;
    if (t) setIsDark(t === 'dark');
  }, []);

  useIonViewWillEnter(() => {
    const check = setToggleRef.current?.checked;
    if (check !== undefined && isDark) {
      setToggleRef.current!.checked = true;
    }
  }, [isDark]);

  const toggleDarkTheme = async (): Promise<void> => {
    setStorageByKey<string>('isDarkTheme', toggle());
  };

  const toggle = (): string => {
    if (containsAndSetDark()) {
      setIsDark(true);
      return 'dark';
    }
    setIsDark(false);
    return 'light';
  };

  const containsAndSetDark = (): boolean => document.body.classList.toggle('dark');

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
