import type { SaveListSettings, SaveListSyncedSettings } from "../../types/Save"

export const defaultConfig: any = { loaded: false, maximized: true, bounds: { width: 800, height: 600, x: 0, y: 0 } }

export const defaultGroups: any = {
    break: { name: "break", default: true, color: "#f5255e" },
    bridge: { name: "bridge", default: true, color: "#f52598" },
    chorus: { name: "chorus", default: true, color: "#f525d2" },
    intro: { name: "intro", default: true, color: "#d525f5" },
    outro: { name: "outro", default: true, color: "#a525f5" },
    pre_chorus: { name: "pre_chorus", default: true, color: "#8825f5" },
    tag: { name: "tag", default: true, color: "#7525f5" },
    verse: { name: "verse", default: true, color: "#5825f5" },
}

export const defaultSettings: { [key in SaveListSettings]: any } = {
    initialized: false,
    outLocked: false,
    outputs: {
        default: {
            enabled: true,
            active: true,
            name: "Primary",
            color: "#F0008C",
            bounds: { x: 0, y: 0, width: 1920, height: 1080 },
            screen: null,
            kiosk: true,
            style: "default",
            show: {},
        },
    },
    sorted: {},
    styles: {},
    openedFolders: [],
    activeProject: null,
    alertUpdates: true,
    autoOutput: false,
    autosave: "never",
    timeFormat: "24",
    remotePassword: "",
    ports: { remote: 5510, stage: 5511 },
    disabledServers: {},
    serverData: {},
    maxConnections: 10,
    mediaFolders: {},
    audioFolders: {},
    playerVideos: {
        chosen: { name: "The Chosen Trailer", type: "youtube", id: "X-AJdKty74M" },
        jesus: { name: "Jesus, Only Jesus", type: "vimeo", id: "426363743" },
    },
    resized: {
        leftPanel: 300,
        rightPanel: 300,
        leftPanelDrawer: 300,
        rightPanelDrawer: 300,
    },
    slidesOptions: { columns: 4, mode: "grid" },
    mediaOptions: { columns: 5, mode: "grid" },
    drawerTabsData: {},
    drawer: { height: 300, stored: null },
    language: null,
    labelsDisabled: false,
    groupNumbers: true,
    fullColors: false,
    formatNewShow: true,
    showsPath: null,
    dataPath: "",
    lockedOverlays: [],
    splitLines: 0,
    videoExtensions: ["mp4", "mov", "wmv", "avi", "avchd", "flv", "mkv", "webm", "mpeg", "m4v"],
    imageExtensions: ["tif", "tiff", "bmp", "jpg", "jpeg", "gif", "png", "eps", "jfif", "webp", "avif"],
    theme: "default",
    transitionData: {
        text: { type: "fade", duration: 500, easing: "sine" },
        media: { type: "fade", duration: 800, easing: "sine" },
    },
    os: { platform: "", name: "Computer" },
    volume: 1,
    gain: 1,
    driveData: { mainFolderId: null, disabled: false, initializeMethod: null, disableUpload: false },
    calendarAddShow: "",
    special: {},
}

export const defaultSyncedSettings: { [key in SaveListSyncedSettings]: any } = {
    categories: {
        song: { name: "category.song", icon: "song", default: true },
        presentation: { name: "category.presentation", icon: "presentation", default: true },
    },
    drawSettings: {},
    overlayCategories: {
        offers: { name: "category.offers", icon: "cash", default: true },
        notice: { name: "category.notice", icon: "info", default: true },
        visuals: { name: "category.visuals", icon: "star", default: true },
    },
    templateCategories: {
        song: { name: "category.song", icon: "song", default: true },
        presentation: { name: "category.presentation", icon: "presentation", default: true },
        scripture: { name: "category.scripture", icon: "scripture", default: true },
    },
    timers: {},
    variables: {},
    triggers: {},
    audioStreams: {},
    audioPlaylists: {},
    scriptures: {
        kjv: { name: "King James (Authorised) Version", api: true, id: "de4e12af7f28f599-02" },
        asv: { name: "The Holy Bible, American Standard Version", api: true, id: "06125adad2d5898a-01" },
        web: { name: "World English Bible", api: true, id: "9879dbb7cfe39e4d-04" },
        wmb: { name: "World Messianic Bible", api: true, id: "f72b840c855f362c-04" },
        bsb: { name: "Berean Study Bible", api: true, id: "bba9f40183526463-01" },
    },
    scriptureSettings: {
        template: "scripture",
        versesPerSlide: 3,
        verseNumbers: false,
        showVersion: false,
        showVerse: true,
    },
    groups: defaultGroups,
    midiIn: {},
    videoMarkers: {},
    customizedIcons: { disabled: [], svg: [] },
    companion: {},
}
