import { mediumMenuList } from '../../navigationRoutesObjects';
import {v4 as uuidv4} from 'uuid'
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
            key={`${index}${uuidv4()}`}
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
