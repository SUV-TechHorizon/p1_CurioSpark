// import React, { useState } from 'react';
// import CourseModal from '../Modal/CourseModal';
// import { Button } from "@mui/material";


// function Courses() {

//     const [open, setOpen] = useState(false);
//     const [course, setCourse] = useState("");

//     const handleOpen = (course) => {
//         setCourse(course); // Store which course was clicked
//         setOpen(true); // Open modal
//     };

//     return (
//         <div className="section-wrapper">
//             <section className="courses-section single-section">
//                 <h2>Our Courses</h2>
//                 <div className="courses-grid">
//                     <div className="course-card">
//                         <img
//                             src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
//                             alt="Web Development"
//                         />
//                         <div className="course-content">
//                             <h3>Web Development</h3>
//                             <p>
//                                 Learn modern web development with React, Node.js, and
//                                 more.
//                             </p>
//                             {/* <button className="btn">Learn More</button> */}
//                             <Button variant="contained" color="primary" onClick={() => handleOpen("mern")}>
//                                 Learn More
//                             </Button>

//                         </div>
//                     </div>
//                     <div className="course-card">
//                         <img
//                             src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
//                             alt="Data Science"
//                         />
//                         <div className="course-content">
//                             <h3>Data Science</h3>
//                             <p>
//                                 Master data analysis, machine learning, and statistics.
//                             </p>
//                             <Button variant="contained" color="primary" onClick={() => handleOpen("ds")}>
//                                 Learn More
//                             </Button>
//                         </div>
//                     </div>
//                     <div className="course-card">
//                         <img
//                             src="https://images.unsplash.com/photo-1551434678-e076c223a692"
//                             alt="AI"
//                         />
//                         <div className="course-content">
//                             <h3>Artificial Intelligence</h3>
//                             <p>Explore AI, deep learning, and neural networks.</p>
//                             <Button variant="contained" color="primary" onClick={() => handleOpen("AI")}>
//                                 Learn More
//                             </Button>
//                         </div>
//                     </div>
//                 </div>
//                 {/* Render Modal and Pass Props */}
//                 <CourseModal open={open} onClose={() => setOpen(false)} course={course} />
//             </section>
//         </div>
//     );

// }

// export default Courses;


import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import CourseModal from '../Modal/CourseModal';

function Courses() {
    const [open, setOpen] = useState(false);
    const [course, setCourse] = useState("");

    const handleOpen = (course) => {
        setCourse(course);
        setOpen(true);
    };

    const courseList = [
        {
            title: "MERN Stack Development",
            description: "Become a full-stack developer with expertise in MongoDB, Express.js, React.js and Node.js. Ideal for aspiring web developers and software engineers.",
            imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
            value: "mern"
        },
        {
            title: "Data Science",
            description: "Master data analysis, machine learning, and visvalistion with industry-leading tools. Ideal for those looking to enter the data-driven world.",
            imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
            value: "ds"
        },
        {
            title: "Japanese Language",
            description: "Master Japanese with a structured syllabus covering speaking, reading, writing and listening skill, Ideal for students, professionals and JLPT aspirants.",
            imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692",
            value: "AI"
        }
    ];

    return (
        <Box
            sx={{
                py: 10,
                px: 4,
                mt: 8,
                backgroundColor: "#f5f5f5",
                fontFamily: "'Poppins', sans-serif"
            }}
        >
            <Typography
                variant="h4"
                align="center"
                sx={{ fontWeight: "bold", mb: 6, color: "#222" }}
            >
                Our <span style={{ color: "#d4a373" }}>Courses</span>
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
                {courseList.map((courseItem, index) => (
                    <Card
                        key={index}
                        sx={{
                            bgcolor: "#fff",
                            borderRadius: 4,
                            boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                            transition: "transform 0.3s, box-shadow 0.3s",
                            "&:hover": {
                                transform: "translateY(-6px)",
                                boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
                            },
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="180"
                            image={courseItem.imageUrl}
                            alt={courseItem.title}
                        />
                        <CardContent sx={{ textAlign: "center" }}>
                            <Typography variant="h6" sx={{ fontWeight: 600, color: "#bf7832", mb: 1 }}>
                                {courseItem.title}
                            </Typography>
                            <Typography variant="body2" sx={{ color: "#444", mb: 2 }}>
                                {courseItem.description}
                            </Typography>
                            <Button
                                variant="contained"
                                onClick={() => handleOpen(courseItem.value)}
                                sx={{
                                    backgroundColor: "#d4a373",
                                    color: "#fff",
                                    textTransform: "none",
                                    fontWeight: 500,
                                    "&:hover": {
                                        backgroundColor: "#bf7832",
                                    },
                                }}
                            >
                                Learn More
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </Box>

            {/* Modal */}
            <CourseModal open={open} onClose={() => setOpen(false)} course={course} />
        </Box>
    );
}

export default Courses;
