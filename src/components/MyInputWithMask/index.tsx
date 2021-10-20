import { IonInputProps } from "@ionic/react";
import { useCallback, useRef } from "react";
import { IMask } from "react-imask";
import {MyIonInputStyled, MyIonLabel} from '../MyIonComponentsStyled';

type MyInputWithMaskProps = {
  value: string | undefined;
  onChange: any;
  label?: string;
  maskProps: string;
} & IonInputProps;


const MyInputWithMask = (props: MyInputWithMaskProps) => {
  const maskRef = useRef<IMask.InputMask<any> | null>(null);

  const inputCallback = useCallback(async (input) => {
    if (!input) {
      return;
    }
    const nativeInput = await input.getInputElement();
    const mask = IMask(nativeInput, {
      mask: props.maskProps,
      lazy: false,
      placeholderChar: '_'
    })
      .on("accept", (e: any) => {
        props.onChange(mask.value);
      })
      .on("complete", (e: any) => {
        props.onChange(mask.value);
      })

    maskRef.current = mask;
  }, []);

  return (
    <>
      {props.label && <MyIonLabel position="stacked">{props.label}</MyIonLabel>}
      <MyIonInputStyled {...props} value={props.value} ref={inputCallback} />
    </>
  );
};
export default MyInputWithMask;
