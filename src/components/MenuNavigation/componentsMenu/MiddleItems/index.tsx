import { v4 as uuidv4 } from 'uuid';
import * as History from 'history';

import { mediumMenuList } from '../../navigationRoutesObjects';

import { MenuListItem } from '..';

interface MiddleItemsProps {
  location: History.Location;
}

const MiddleItems = function ({ location }: MiddleItemsProps) {
  return (
    <>
      {mediumMenuList.map((appPage) => (
        <MenuListItem
          key={`${uuidv4()}`}
          location={location}
          url={appPage.url}
          title={appPage.title}
        >
          <i className={`cb-${appPage.iconMoon}`} />
        </MenuListItem>
      ))}
    </>
  );
};

export { MiddleItems };
