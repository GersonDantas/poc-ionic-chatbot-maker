import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const updateLocation = () => {
  let pathUrl = window.location.href;
  window.location.href = pathUrl;
};

function pushHistory(path: string) {
  history.push(path);
  updateLocation();
}

function replaceHistory(path: string) {
  history.replace(path);
  updateLocation();
}

function gobackHistory(path: string) {
  history.goBack();
  updateLocation();
}

export { pushHistory, replaceHistory, gobackHistory };
