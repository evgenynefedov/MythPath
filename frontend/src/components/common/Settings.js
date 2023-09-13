import ThemeSelector from "./ThemeSelector"
export default function Settings({selectedThemeName, changeTheme}) {
    return (
        <>
            <ThemeSelector changeTheme={changeTheme} selectedThemeName={selectedThemeName} />
        </>
    )
}