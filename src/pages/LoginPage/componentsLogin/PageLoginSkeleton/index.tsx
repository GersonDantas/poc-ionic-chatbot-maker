import { IonCardContent, IonCardHeader, IonCol, IonRow, IonSkeletonText } from '@ionic/react';
import { ReactNode } from 'react';
import { IonCardFormLogin, IonContentLogin, IonGridLogin, IonRowCardLine, IonRowTerms, IonSubTitleLogin, IonTitleLogin, MyIonSigningSigningupButton, MyIonTextTerms, MyIonToggleSigningSigniup } from '..';
import { SkeletonButton, SkeletonInput, SkeletonLogo } from './styles';

function PageLoginSkeleton() {
  return (
    <IonContentLogin fullscreen>

    <IonGridLogin>
      <IonRowCardLine>

        <IonCol sizeMd="4.5" size="12">
          <IonCardFormLogin>
            <IonCardHeader>
              <IonRow style={{ justifyContent: "center" }}>
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

              <IonRow style={{ marginBottom: "10px " }}>
                <IonCol>
                  <IonSkeletonText animated style={{ height: "0.5vh" }} />
                </IonCol>
              </IonRow>

              <IonSkeletonText animated style={{ width: '10%' }} />

              <SkeletonInput animated />

              <IonSkeletonText animated style={{ width: '10%' }} />

              <SkeletonInput animated />

              <IonSkeletonText animated style={{ width: '25%' }} />

              <IonRow style={{ justifyContent: "center" }}>
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
