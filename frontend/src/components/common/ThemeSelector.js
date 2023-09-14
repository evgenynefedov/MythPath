import { useState } from "react"
import { Box, Select, MenuItem } from "@mui/material"

import { getSelectedThemeName, getThemeNames, saveThemeSelection } from "./../../services/settingsStorage"

export default function ThemeSelector({changeTheme}) {
    const themeNames = getThemeNames()
    let [themeName, setThemeName] = useState(getSelectedThemeName())
    function handleChange(event) {
        setThemeName(event.target.value)
        saveThemeSelection(event.target.value)
        changeTheme(event.target.value)
    }
    return(
        <Box className="settings_control">
            <span>Choose your theme</span>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={themeName}
                label="Age"
                onChange={handleChange}
                className="theme_select"
                >
                {themeNames.map((name) => <MenuItem key={name} value={name}>{name}</MenuItem>)}
            </Select>
        </Box>
    )
}