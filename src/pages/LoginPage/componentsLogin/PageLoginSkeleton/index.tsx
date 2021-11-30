import {
  IonCardContent, IonCardHeader, IonCol, IonRow, IonSkeletonText,
} from '@ionic/react';

import {
  IonCardFormLogin, IonContentLogin, IonGridLogin, IonRowCardLine, IonSubTitleLogin, IonTitleLogin,
} from '..';

import { SkeletonButton, SkeletonInput, SkeletonLogo } from './styles';

const PageLoginSkeleton = function () {
  return (
    <IonContentLogin fullscreen>

      <IonGridLogin>
        <IonRowCardLine>

          <IonCol sizeMd="4.5" size="12">
            <IonCardFormLogin>
              <IonCardHeader>
                <IonRow style={{ justifyContent: 'center' }}>
                  <IonCol size="6">
                    <SkeletonLogo animated />
                  </IonCol>
                </IonRow>
              </IonCardHeader>

              <IonCardContent>

                <IonTitleLogin>
                  <IonSkeletonText animated style={{ width: '10%' }} />
                </IonTitleLogin>

                <IonSubTitleLogin>
                  <IonSkeletonText animated style={{ width: '15%' }} />
                </IonSubTitleLogin>

                <SkeletonButton animated />

                <IonRow style={{ marginBottom: '10px ' }}>
                  <IonCol>
                    <IonSkeletonText animated style={{ height: '0.5vh' }} />
                  </IonCol>
                </IonRow>

                <IonSkeletonText animated style={{ width: '10%' }} />

                <SkeletonInput animated />

                <IonSkeletonText animated style={{ width: '10%' }} />

                <SkeletonInput animated />

                <IonSkeletonText animated style={{ width: '25%' }} />

                <IonRow style={{ justifyContent: 'center' }}>
                  <IonCol size="11">
                    <SkeletonButton animated />
                    <IonSkeletonText animated style={{ width: '60%' }} />
                  </IonCol>
                </IonRow>

              </IonCardContent>
            </IonCardFormLogin>
          </IonCol>
        </IonRowCardLine>
      </IonGridLogin>
    </IonContentLogin>
  );
};

export { PageLoginSkeleton };
