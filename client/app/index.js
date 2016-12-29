import { Widget, startAppLoop, Url, History } from 'cx/ui';
import { Timing, Debug } from 'cx/util';
import { Store } from 'cx/data';
import Routes from './routes';

import 'whatwg-fetch';

import "./index.scss";

let stop;

const store = new Store();

if(module.hot) {
  // accept itself
  module.hot.accept();

  // remember data on dispose
  module.hot.dispose(function (data) {
    data.state = store.getData();
    if (stop)
      stop();
  });

  //apply data on hot replace
  if (module.hot.data)
    store.load(module.hot.data.state);
}

Url.setBaseFromScript('app.js');
History.connect(store, 'url');
Widget.resetCounter();
Timing.enable('app-loop');
Debug.enable('app-data');

stop = startAppLoop(document.getElementById('app'), store, Routes);
