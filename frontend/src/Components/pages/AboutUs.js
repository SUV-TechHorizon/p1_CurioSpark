import { Box, Typography, Grid, Divider, Button } from "@mui/material";
import React from "react";

const AboutUs = () => {
    return (
        <Box sx={{ p: 8, bgcolor: "#f9f9f9", fontFamily: "'Poppins', sans-serif" }}>
            {/* About Us Section */}
            <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={6}>
                    <Typography variant="h3" sx={{ fontWeight: "bold", color: "#222" }}>
                        ABOUT <span style={{ color: "#d4a373" }}>US</span>
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2, color: "#555" }}>
                        Curiospark Technologies is a leading IT training and solutions provider, committed to delivering
                        industry-relevant skills through practical, hands-on learning. Beyond traditional courses, we host webinars &
                        seminars led by industry experts, providing professionals with insights into emerging technologies and
                        market trends. Our interactive sessions ensure that learners stay ahead in the ever-evolving digital landscape.
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2, color: "#555" }}>
                        With expertise in Data Science, AI, Web Development, and more, we bridge the gap between theory and real-world
                        application. Our engaging training programs, combined with expert-led discussions and networking opportunities,
                        empower individuals and businesses to excel in today's competitive tech-driven world.
                    </Typography>
                </Grid>
            </Grid>

            {/* Mission Section */}
            <Box sx={{ mt: 10, p: 5, bgcolor: "#222", color: "#fff", borderRadius: "20px" }}>
                <Typography variant="h4" sx={{ fontWeight: "bold", color: "#d4a373" }}>
                    OUR MISSION
                </Typography>
                <Typography variant="body1" sx={{ mt: 2, color: "#ddd" }}>
                    To empower learners with cutting-edge skills for a dynamic future.
                </Typography>

                {/* Divider for better separation */}
                <Divider sx={{ my: 3, borderColor: "#555" }} />

                {/* Mission Details Grid */}
                <Grid container spacing={4} sx={{ mt: 3 }}>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#f4a261" }}>
                            Innovative Learning
                        </Typography>
                        <Typography variant="body2" sx={{ color: "#bbb" }}>
                            We are committed to delivering cutting-edge, hands-on training programs that empower professionals with the latest industry-relevant skills. Our courses are designed to blend theoretical foundations with real-world applications, ensuring learners gain practical expertise.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#f4a261" }}>
                            Skill Bridging
                        </Typography>
                        <Typography variant="body2" sx={{ color: "#bbb" }}>
                            By offering expert-led training, interactive webinars, and hands-on workshops, we bridge the gap between academic knowledge and industry demands. Our goal is to provide learners with the confidence and proficiency needed to excel in their respective fields.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#f4a261" }}>
                            Career Growth
                        </Typography>
                        <Typography variant="body2" sx={{ color: "#bbb" }}>
                            We strive to empower individuals and businesses by fostering continuous learning and skill enhancement. Through our high-quality training solutions, we enable career advancement, digital transformation, and long-term success in the competitive tech landscape.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default AboutUs;
