import React from 'react';
import { Box, Typography, Avatar } from "@mui/material";
import { Button } from "@mui/material";
import testimonials from '../JSON/Testimonial.json';
import { Link } from "react-router-dom";

function Testimonials() {
    return (
        <Box
            sx={{
                py: 10,
                px: 4,
                mt: 8,
                backgroundColor: "#f5f5f5",
                fontFamily: "'Poppins', sans-serif",
            }}
        >
            <Typography
                variant="h4"
                align="center"
                sx={{ fontWeight: "bold", mb: 6, color: "#222" }}
            >
                What Our <span style={{ color: "#d4a373" }}>Students Say</span>
            </Typography>

            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        sm: "1fr 1fr",
                        md: "1fr 1fr 1fr",
                    },
                    gap: 4,
                }}
            >
                {testimonials.map((testimonial, index) => (
                    <Box
                        key={index}
                        sx={{
                            bgcolor: "#e9e2da",
                            borderRadius: 4,
                            boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                            p: 3,
                            transition: "transform 0.3s, box-shadow 0.3s",
                            "&:hover": {
                                transform: "translateY(-6px)",
                                boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
                            },
                            textAlign: "center",
                        }}
                    >
                        {/* Circular Avatar */}
                        <Avatar
                            src={testimonial.imageUrl}
                            alt={testimonial.name}
                            sx={{
                                width: 100,
                                height: 100,
                                mb: 2,
                                mx: "auto",
                            }}
                        />

                        <Typography
                            variant="body2"
                            sx={{ color: "#444", mb: 2, fontSize: "0.95rem", lineHeight: 1.6 }}
                        >
                            "{testimonial.testimonial}"
                        </Typography>

                        <Typography variant="h6" sx={{ fontWeight: 600, color: "#bf7832" }}>
                            {testimonial.name}
                        </Typography>

                        <Link to={testimonial.video_url} target="_blank" rel="noopener noreferrer">
                            <Button
                                variant="contained"
                                sx={{
                                    mt: 2,
                                    backgroundColor: "#d4a373",
                                    color: "#fff",
                                    textTransform: "none",
                                    fontWeight: 500,
                                    "&:hover": {
                                        backgroundColor: "#bf7832",
                                    },
                                }}
                                startIcon={
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 48 48"
                                        width="20"
                                        height="20"
                                        fill="#fff"
                                    >
                                        <path d="M12 39c-.549 0-1.095-.15-1.578-.447A3.008 3.008 0 0 1 9 36V12c0-1.041.54-2.007 1.422-2.553a3.014 3.014 0 0 1 2.919-.132l24 12a3.003 3.003 0 0 1 0 5.37l-24 12c-.42.21-.885.315-1.341.315z" />
                                    </svg>
                                }
                            >
                                Watch Video
                            </Button>
                        </Link>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default Testimonials
