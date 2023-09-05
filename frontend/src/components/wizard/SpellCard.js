import { CONSTANTS } from "./../../constants";

import { Box } from "@mui/material";
import BeenhereSharp from "@mui/icons-material/BeenhereSharp"

export default function SpellItem({spell, select, selected}) {
    function selectHandler() {
        select(spell)
    }
    return(
        <>
            <div style={{position: "relative"}} onClick={selectHandler}>
                {selected &&
                    <Box
                        style={{
                            height: "300px",
                            top: 0,
                            position: "absolute",
                            background: "rgba(225, 225, 225, 0.5)",
                            heihgt: "100%",
                            width: "100%", 
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontSize: "100px",
                            fontColor: "greens"
                        }}>
                        <BeenhereSharp />
                    </Box>
                }
                <p>
                    {spell.name}
                </p>
                <img height="250px" alt={spell.id} src={CONSTANTS.cloudinaryBaseLink + spell.img}/>
                <p>
                    {spell.description}
                </p>
            </div>
        </>
    )
}