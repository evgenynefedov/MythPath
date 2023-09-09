import React from "react";
import { Typography, Box } from "@mui/material";

import { CONSTANTS } from "../../constants";

export default function TalePage({ page, tittle }) {
    return (
        <Box elevation={3} className="tale_page">
        <>
            <Box className="tale_page__img" style={{backgroundImage: `url("${CONSTANTS.cloudinaryBaseLink}${page.img}")`}}>
            <Typography variant="h2" className="tale__tittle">
                {tittle}
            </Typography>
            </Box>
            <Typography variant="body2" className="tale_page__text">
                {page.text}
            </Typography>
        </>
    </Box>
    )
};
