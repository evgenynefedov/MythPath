import { useState } from "react"
import { Box, Select, MenuItem, InputLabel, FormControl } from "@mui/material"

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
            <FormControl>
                <InputLabel id="simple-select-label">Theme</InputLabel>
                <Select
                    labelId="simple-select-label"
                    id="demo-simple-select"
                    value={themeName}
                    label="Theme"
                    onChange={handleChange}
                    className="theme_select"
                    >
                    {themeNames.map((name) => <MenuItem key={name} value={name}>{name}</MenuItem>)}
                </Select>
            </FormControl>
        </Box>
    )
}