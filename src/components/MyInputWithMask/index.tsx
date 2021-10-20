import { IonInputProps } from "@ionic/react";
import { useCallback, useRef } from "react";
import { IMask } from "react-imask";
import { MyIonInput } from "../MyInputAndLabelComponent/styles";

type MyInputWithMaskProps  = {
  value: string | undefined;
  onChange: any;
} & IonInputProps

const MyInputWithMask = ( props:  MyInputWithMaskProps) => {
  const maskRef = useRef<IMask.InputMask<any> | null>(null);

  const inputCallback = useCallback(async (input) => {
    if (!input) {
      return;
    }
    const nativeInput = await input.getInputElement();
    const mask = IMask(nativeInput, {
      mask: '(00) 00000-0000',
    })
      .on("accept", (e: any) => {
        props.onChange(mask.value);
      })
      .on("complete", (e: any) => {
        props.onChange(mask.value);
      });

    maskRef.current = mask;
  }, []);

  return <MyIonInput {...props} value={props.value} ref={inputCallback} />;
};
export default MyInputWithMask;
