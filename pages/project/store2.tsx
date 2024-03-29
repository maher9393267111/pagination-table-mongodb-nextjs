
// @ts-nocheck   

import { makeAutoObservable, configure } from "mobx";
import { create, persist } from "mobx-persist";


configure({ enforceActions: "never" });

class MainStoreC {
  @persist token: string | null = null;
 
  @persist("object") settings: {
    bell: string;
    bellVolume: number;
    bellAgain: number;
    orderStatusSelection: string;
  } = {
    bell: "temple_bell",
    bellVolume: 0.25,
    bellAgain: 2,
    orderStatusSelection: "multiple",
  };
  @persist("object") remember: {
    email: string;
    password: string;
    rememberme: boolean;
  } | null = null;

  constructor() {
    makeAutoObservable(this);
  }
  // Token
  setToken = (token: string) => {
    this.token = token;
  };
  clearToken = () => (this.token = null);
  // i18n
  setLocale = (locale: string) => {
    this.locale = locale;
    window.location.reload();
  };
  // Remember
  setRemember = (remember: { email: string; password: string; rememberme: boolean } | null) =>
    (this.remember = remember);
  // Settings
  setSettings = (settings: {
    bell: string;
    bellVolume: number;
    bellAgain: number;
    orderStatusSelection: string;
  }) => (this.settings = settings);
}

const hydrate = create({});

const MStore = new MainStoreC();

hydrate("MainStore", MStore).then(() => {
  console.log("MainStore hydrated");
});

export default MStore;
