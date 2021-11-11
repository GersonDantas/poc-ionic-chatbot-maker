import { mediumMenuList } from '../../navigationRoutesObjects';
import * as History from 'history';
import {MenuListItem} from '..';

interface MiddleItemsProps {
  location: History.Location;
}

function MiddleItems({ location }: MiddleItemsProps) {
  return (
    <>
      {mediumMenuList.map((appPage, index) => {
        return (
          <MenuListItem 
            key={index}
            location={location}
            url={appPage.url}
            iconMoon={appPage.iconMoon!}
            title={appPage.title}
          />
        );
      })}
    </>
  );
}

export {MiddleItems};
