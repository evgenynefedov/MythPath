import PinkTheme from "./../themes/PinkTheme"
import GreenTheme from "./../themes/GreenTheme"

const themesToSelect = [
    {name: "Little princess", theme: PinkTheme}, 
    {name: "Summer forest", theme: GreenTheme}
]

const SETTINGS_KEY = "mythPathSettings";

export function getThemeNames() {
    return themesToSelect.map(theme => theme.name)
}
export function getSelectedTheme() {
    let settings = JSON.parse(localStorage.getItem(SETTINGS_KEY)) || {}
    let themeName = settings?.themeName
    if (themeName) {
        return getThemebyName(themeName)
    }
    return themesToSelect[0].theme
}
export function getSelectedThemeName() {
    let settings = JSON.parse(localStorage.getItem(SETTINGS_KEY)) || {}
    let themeName = settings?.themeName
    if (themeName) {
        return themeName
    }
    return themesToSelect[0].name
}
export function getThemebyName(name) {
    let themeItem = themesToSelect.find(theme => theme.name === name)
        if (themeItem) {
            return themeItem.theme
        }
        return themesToSelect[0].theme
}
export function saveThemeSelection(name) {
    let settings = JSON.parse(localStorage.getItem(SETTINGS_KEY)) || {} 
    settings.themeName = name
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings))
}
