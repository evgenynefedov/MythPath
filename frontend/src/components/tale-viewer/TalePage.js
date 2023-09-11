import React from "react";
import { Typography, Box, CardMedia } from "@mui/material";

import { CONSTANTS } from "../../constants";

export default function TalePage({ page, tittle }) {
    return (
        <Box elevation={3} className="tale_page">
        <>
            <CardMedia image={CONSTANTS.cloudinaryBaseLink + page.img} className="tale_page__img">
                <Typography variant="h2" className="tale__tittle">
                    {tittle}
                </Typography>
            </CardMedia>
            <Typography variant="body2" className="tale_page__text">
                {page.text}
            </Typography>
        </>
    </Box>
    )
};
