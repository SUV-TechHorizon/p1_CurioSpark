// components/MyModal.js
import React from "react";
import { Modal, Box, Typography, Button, Grid, Divider } from "@mui/material";

const CourseModal = ({ open, onClose, course }) => {

    const courseData = [
        {
            title: "Introduction to MERN Stack",
            color: "#d32f2f",
            topics: [
                "Overview of Full Stack Development",
                "Understanding MERN: MongoDB, Express.js, React, Node.js",
                "Setting up a development environment",
                "Basic Git and GitHub workflow"
            ]
        },
        {
            title: "Backend Development with Node.js & Express.js",
            color: "#d32f2f",
            topics: [
                "Introduction to Node.js and npm",
                "Creating a web server with Express.js",
                "RESTful API development",
                "Middleware and Authentication with JWT",
                "Connecting Express with MongoDB using Mongoose"
            ]
        },
        {
            title: "Database Management with MongoDB",
            color: "#d32f2f",
            topics: [
                "Understanding NoSQL databases",
                "CRUD operations in MongoDB",
                "Schema design and data validation",
                "Aggregation and indexing"
            ]
        },
        {
            title: "Frontend Development with React.js",
            color: "#d32f2f",
            topics: [
                "React fundamentals: Components, Props, State",
                "React Hooks and Context API",
                "Managing side effects with useEffect",
                "React Router for navigation",
                "State management with Redux"
            ]
        },
        {
            title: "Integration & Deployment",
            color: "#d32f2f",
            topics: [
                "Connecting React frontend with Express backend",
                "Handling authentication and authorization",
                "Testing with Jest and Postman",
                "Deploying applications with Vercel and Heroku"
            ]
        }
    ];

    return (
        <Modal open={open} onClose={onClose}>
            {course === "mern" ?
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: { xs: "90%", md: "80%" },
                        maxHeight: "90vh",
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 2,
                        overflowY: "auto",
                        fontFamily: "'Poppins', sans-serif",
                        color: "#333"
                    }}
                >
                    <Typography variant="h4" component="h2" gutterBottom sx={{ color: "#1976d2", fontWeight: "bold" }}>
                        MERN Stack Course - Comprehensive Syllabus
                    </Typography>
                    <Divider sx={{ mb: 2, bgcolor: "#1976d2" }} />
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <img
                                src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*jyvi6rdhEWdbKbybyuht9w.png"
                                alt="MERN Stack"
                                style={{ width: "260px", height: "140px", borderRadius: 8, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
                            />
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Typography variant="body1" paragraph sx={{ fontSize: "1rem", color: "#555" }}>
                                Dive into full-stack web development with our comprehensive MERN Stack Course. Master MongoDB, Express.js, React, and Node.js to build scalable web applications.
                            </Typography>
                            <Typography variant="h6" gutterBottom sx={{ color: "#1976d2", fontWeight: "bold" }}>
                                Course Syllabus:
                            </Typography>
                            {courseData.map((module, index) => (
                                <div key={index}>
                                    <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: "bold", color: module.color }}>
                                        {module.title}
                                    </Typography>
                                    <ul style={{ color: "#555", paddingLeft: "20px" }}>
                                        {module.topics.map((topic, idx) => (
                                            <li key={idx}>{topic}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: "bold", color: "#d32f2f" }}>
                                Capstone Project
                            </Typography>
                            <Typography variant="body1" paragraph sx={{ color: "#555" }}>
                                Build a fully functional MERN Stack application, applying all concepts learned in the course.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
                        <Button variant="contained" color="success" onClick={onClose} sx={{ fontWeight: "bold" }}>
                            Close
                        </Button>
                    </Box>
                </Box>

                : course === "ds" ?
                    <Box
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: { xs: "90%", md: "80%" },
                            maxHeight: "90vh", // Maximum height set to 90% of the viewport
                            bgcolor: "background.paper",
                            boxShadow: 24,
                            p: 4,
                            borderRadius: 2,
                            overflowY: "auto" // Enables vertical scrolling if content overflows
                        }}
                    >
                        <Typography variant="h4" component="h2" gutterBottom>
                            Data Science
                        </Typography>
                        <Divider sx={{ mb: 2 }} />
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                                <img
                                    src="https://via.placeholder.com/300"
                                    alt="MERN Stack"
                                    style={{ width: "100%", borderRadius: 8 }}
                                />
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <Typography variant="body1" paragraph>
                                    Dive into the world of full-stack web development with our comprehensive MERN Stack Course. Learn how to create dynamic, responsive web applications using MongoDB, Express, React, and Node.js.
                                </Typography>
                                <Typography variant="h6" gutterBottom>
                                    What You'll Learn:
                                </Typography>
                                <ul>
                                    <li>Building robust RESTful APIs with Node.js and Express</li>
                                    <li>Designing interactive user interfaces with React</li>
                                    <li>Working with MongoDB for scalable data storage</li>
                                    <li>Deploying and managing applications in production environments</li>
                                </ul>
                                <Typography variant="body1" paragraph>
                                    Whether you're a beginner or an experienced developer, this course is designed to help you master the MERN stack and build real-world applications.
                                </Typography>
                                {/* For demonstration: repeat content to show scrolling */}
                                <Typography variant="body1" paragraph>
                                    Additional Course Details... (repeat as necessary to test scrolling)
                                </Typography>

                            </Grid>
                        </Grid>
                        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
                            <Button variant="contained" color="secondary" onClick={onClose}>
                                Close
                            </Button>
                        </Box>
                    </Box>
                    :
                    <Box
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: { xs: "90%", md: "80%" },
                            maxHeight: "90vh", // Maximum height set to 90% of the viewport
                            bgcolor: "background.paper",
                            boxShadow: 24,
                            p: 4,
                            borderRadius: 2,
                            overflowY: "auto" // Enables vertical scrolling if content overflows
                        }}
                    >
                        <Typography variant="h4" component="h2" gutterBottom>
                            Artificial Intellegence
                        </Typography>
                        <Divider sx={{ mb: 2 }} />
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                                <img
                                    src="https://via.placeholder.com/300"
                                    alt="MERN Stack"
                                    style={{ width: "100%", borderRadius: 8 }}
                                />
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <Typography variant="body1" paragraph>
                                    Dive into the world of full-stack web development with our comprehensive MERN Stack Course. Learn how to create dynamic, responsive web applications using MongoDB, Express, React, and Node.js.
                                </Typography>
                                <Typography variant="h6" gutterBottom>
                                    What You'll Learn:
                                </Typography>
                                <ul>
                                    <li>Building robust RESTful APIs with Node.js and Express</li>
                                    <li>Designing interactive user interfaces with React</li>
                                    <li>Working with MongoDB for scalable data storage</li>
                                    <li>Deploying and managing applications in production environments</li>
                                </ul>
                                <Typography variant="body1" paragraph>
                                    Whether you're a beginner or an experienced developer, this course is designed to help you master the MERN stack and build real-world applications.
                                </Typography>
                                {/* For demonstration: repeat content to show scrolling */}
                                <Typography variant="body1" paragraph>
                                    Additional Course Details... (repeat as necessary to test scrolling)
                                </Typography>

                            </Grid>
                        </Grid>
                        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
                            <Button variant="contained" color="secondary" onClick={onClose}>
                                Close
                            </Button>
                        </Box>
                    </Box>
            }

        </Modal>
    );
};

export default CourseModal;
