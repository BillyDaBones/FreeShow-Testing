import { MAIN } from "../../types/Channels"
import {
  activePopup,
  activeProject,
  audioFolders,
  categories,
  defaultProjectName,
  displayMetadata,
  drawer,
  drawerTabsData,
  drawSettings,
  events,
  fullColors,
  groupCount,
  groupNumbers,
  groups,
  imageExtensions,
  labelsDisabled,
  language,
  mediaFolders,
  mediaOptions,
  openedFolders,
  os,
  outLocked,
  outputScreen,
  overlayCategories,
  playerVideos,
  presenterControllerKeys,
  projectView,
  remotePassword,
  resized,
  saved,
  screen,
  showsPath,
  slidesOptions,
  templateCategories,
  templates,
  theme,
  themes,
  videoExtensions,
  webFavorites,
} from "../stores"
import type { SaveList } from "./../../types/Save"

export function updateSettings(data: any[]) {
  Object.entries(data).forEach(([key, value]: any) => {
    if (updateList[key as SaveList]) updateList[key as SaveList](value)
    else console.log("MISSING: ", key)
  })

  saved.set(true)
}

const updateList: { [key in SaveList]: any } = {
  // FIRST TIME USER
  initialized: (v: any) => {
    if (!v) {
      activePopup.set("initialize")
    }
  },
  activeProject: (v: any) => {
    activeProject.set(v)
    if (v) projectView.set(false)
  },
  showsPath: (v: any) => {
    if (!v) window.api.send(MAIN, { channel: "SHOWS_PATH" })
    else showsPath.set(v)
  },
  os: (v: any) => {
    if (!v.platform) window.api.send(MAIN, { channel: "GET_OS" })
    os.set(v)
  },
  // TODO: get device lang
  language: (v: any) => language.set(v),
  events: (v: any) => events.set(v),
  remotePassword: (v: any) => remotePassword.set(v),
  audioFolders: (v: any) => audioFolders.set(v),
  defaultProjectName: (v: any) => defaultProjectName.set(v),
  displayMetadata: (v: any) => displayMetadata.set(v),
  categories: (v: any) => categories.set(v),
  drawer: (v: any) => drawer.set(v),
  drawerTabsData: (v: any) => drawerTabsData.set(v),
  drawSettings: (v: any) => drawSettings.set(v),
  groupNumbers: (v: any) => groupNumbers.set(v),
  fullColors: (v: any) => fullColors.set(v),
  groupCount: (v: any) => groupCount.set(v),
  groups: (v: any) => groups.set(v),
  imageExtensions: (v: any) => imageExtensions.set(v),
  labelsDisabled: (v: any) => labelsDisabled.set(v),
  mediaFolders: (v: any) => mediaFolders.set(v),
  mediaOptions: (v: any) => mediaOptions.set(v),
  openedFolders: (v: any) => openedFolders.set(v),
  outLocked: (v: any) => outLocked.set(v),
  outputScreen: (v: any) => outputScreen.set(v),
  overlayCategories: (v: any) => overlayCategories.set(v),
  presenterControllerKeys: (v: any) => presenterControllerKeys.set(v),
  playerVideos: (v: any) => playerVideos.set(v),
  resized: (v: any) => resized.set(v),
  screen: (v: any) => screen.set(v),
  slidesOptions: (v: any) => slidesOptions.set(v),
  templateCategories: (v: any) => templateCategories.set(v),
  templates: (v: any) => templates.set(v),
  theme: (v: any) => theme.set(v),
  themes: (v: any) => themes.set(v),
  videoExtensions: (v: any) => videoExtensions.set(v),
  webFavorites: (v: any) => webFavorites.set(v),
}