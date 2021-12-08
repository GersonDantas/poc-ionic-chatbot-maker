import {  IonSkeletonText } from '@ionic/react'
import styled from 'styled-components'

import { IonGridPanelStyled } from '../IonGridPanel/styles'
export const IonGridSkeleton = styled(IonGridPanelStyled)`
`
export const SkeletonTitleClients = styled(IonSkeletonText)`
    min-height: 30px;
    max-height: 40px;
    min-width: 80px;
    max-width: 100px;
`
export const SkeletonTitleCard = styled(IonSkeletonText)`
    height: 20px;
    min-width: 80px;
    max-width: 100px;
`
export const SkeletonLabel = styled(IonSkeletonText)`
    height: 20px;
    min-width: 80px;
    max-width: 100px;
`
export const SkeletonTilteService = styled(IonSkeletonText)`
    min-height: 30px;
    max-height: 40px;
    min-width: 80px;
    max-width: 120px;
`

export const SkeletonSelectDatePicker = styled(IonSkeletonText)`
    min-height: 30px;
    max-height: 40px;
    min-width: 85%;
    max-width: 90%;
`
