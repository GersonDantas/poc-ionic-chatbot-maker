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
            title={appPage.title}
          >
            <i className={`cb-${appPage.iconMoon}`} />
          </MenuListItem>
        );
      })}
    </>
  );
}

export {MiddleItems};
