import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const updateLocation = () => {
  const pathUrl = window.location.href;
  window.location.href = pathUrl;
};

function pushHistory(path: string): void {
  history.push(path);
  updateLocation();
}

function replaceHistory(path: string): void {
  history.replace(path);
  updateLocation();
}

function goBackHistory(): void {
  history.goBack();
  updateLocation();
}

export { pushHistory, replaceHistory, goBackHistory, updateLocation };
