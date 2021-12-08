import { IonCol, IonRow } from '@ionic/react';
import React from 'react';
import { CardWithHeader } from 'src/components';
import { v4 as uuidV4 } from "uuid";

import { IonCardLabel, IonTitleDepartment } from '../../styles';
import { IonCardDateButtons } from '../DatePickersWithButtons/styles';
import { IonGridSkeleton, SkeletonLabel, SkeletonSelectDatePicker, SkeletonTilteService, SkeletonTitleCard, SkeletonTitleClients } from './styles';

function SkeletonWidgetsPanel() {
  return (
    <IonGridSkeleton>
      <IonRow style={{ marginBottom: '20px' }}>
        <IonCol size="12">
          <IonTitleDepartment >
            <SkeletonTitleClients animated />
          </IonTitleDepartment>
        </IonCol>

        {
          ["", "",].map((_) => {
            return (
              <IonCol key={uuidV4()} sizeSm="6" size="12">
                <CardWithHeader cardTitle={<SkeletonTitleCard color="" animated />}>
                  <IonCardLabel>
                    <SkeletonLabel animated />
                  </IonCardLabel>
                </CardWithHeader>
              </IonCol>
            )
          })
        }

      </IonRow>

      <IonRow>
        <IonCol size="12">
          <IonTitleDepartment >
            <SkeletonTilteService animated />
          </IonTitleDepartment>
        </IonCol>

        <IonCol size="12">
          <IonCardDateButtons style={{ padding: "20px 5px" }}>
            <IonRow>
              {
                ["", "", "", "",].map((_) => {
                  return (
                    <IonCol 
                      key={uuidV4()} sizeSm="6" sizeMd="3" sizeXl="3" size="12"
                    >
                      <SkeletonSelectDatePicker />
                    </IonCol>
                  )
                })
              }
            </IonRow>
          </IonCardDateButtons>
        </IonCol>
      </IonRow>

      <IonRow style={{ alignItems: 'center' }}>
        {
          ["", "", "", "",].map((_) => {
            return (
              <IonCol key={uuidV4()} sizeXl="3" sizeLg="6" sizeMd="6" sizeSm="12" size="12">
                <CardWithHeader cardTitle={<SkeletonTitleCard color="" animated />}>
                  <IonCardLabel>
                    <SkeletonLabel animated />
                  </IonCardLabel>
                </CardWithHeader>
              </IonCol>
            )
          })
        }
      </IonRow>

      {
        ["", ""].map(_ => {
          return (
            <IonRow key={uuidV4()}>
              <IonCol>
                <CardWithHeader cardTitle={<SkeletonTitleCard animated />} minHeight>
                </CardWithHeader>
              </IonCol>
            </IonRow>
          )
        })
      }
    </IonGridSkeleton>
  );
}

export { SkeletonWidgetsPanel };
