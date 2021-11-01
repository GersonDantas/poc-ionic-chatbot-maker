import { IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton } from "@ionic/react";
import { MyIonToggleThem } from "../";
import { ReactNode } from 'react';

interface SelectAdaptiveDatePickerProps {
    name: string;
    children?: ReactNode | undefined;
}

function IonHeaderContainer(props: SelectAdaptiveDatePickerProps) {
    return (
        <IonHeader>
            <IonToolbar style={{ display: 'flex' }}>

                {props.children ? props.children :
                    <>
                        <IonTitle color="primary" style={{ textTransform: "capitalize" }}>{props.name}</IonTitle>

                        <IonButtons slot="start">
                            <IonMenuButton />
                        </IonButtons>

                        <MyIonToggleThem />
                    </>
                }
            </IonToolbar>
        </IonHeader>
    )
}

export { IonHeaderContainer };