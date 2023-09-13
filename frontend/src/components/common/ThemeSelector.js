import { useState } from "react"
import { Box, Select, MenuItem } from "@mui/material"

import PinkTheme from "./../../themes/PinkTheme"
import GreenTheme from "./../../themes/GreenTheme"

export default function ThemeSelector({selectedThemeName, changeTheme}) {
    const themesToSelect = {"Little princess": PinkTheme, "Summer forest": GreenTheme}
	const themeNames = Object.keys(themesToSelect)
	let [themeName, setThemeName] = useState(selectedThemeName)
    function handleChange(event) {
        setThemeName(event.target.value)
        changeTheme(themesToSelect[event.target.value], event.target.value)
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
                {themeNames.map((theme) => <MenuItem key={theme} value={theme}>{theme}</MenuItem>)}
            </Select>
        </Box>
    )
}