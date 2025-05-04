// // components/MyModal.js
// import React from "react";
// import { Modal, Box, Typography, Button, Grid, Divider } from "@mui/material";

// const CourseModal = ({ open, onClose, course }) => {

//     const courseData = [
//         {
//             title: "Introduction to MERN Stack",
//             color: "#d32f2f",
//             topics: [
//                 "Overview of Full Stack Development",
//                 "Understanding MERN: MongoDB, Express.js, React, Node.js",
//                 "Setting up a development environment",
//                 "Basic Git and GitHub workflow"
//             ]
//         },
//         {
//             title: "Backend Development with Node.js & Express.js",
//             color: "#d32f2f",
//             topics: [
//                 "Introduction to Node.js and npm",
//                 "Creating a web server with Express.js",
//                 "RESTful API development",
//                 "Middleware and Authentication with JWT",
//                 "Connecting Express with MongoDB using Mongoose"
//             ]
//         },
//         {
//             title: "Database Management with MongoDB",
//             color: "#d32f2f",
//             topics: [
//                 "Understanding NoSQL databases",
//                 "CRUD operations in MongoDB",
//                 "Schema design and data validation",
//                 "Aggregation and indexing"
//             ]
//         },
//         {
//             title: "Frontend Development with React.js",
//             color: "#d32f2f",
//             topics: [
//                 "React fundamentals: Components, Props, State",
//                 "React Hooks and Context API",
//                 "Managing side effects with useEffect",
//                 "React Router for navigation",
//                 "State management with Redux"
//             ]
//         },
//         {
//             title: "Integration & Deployment",
//             color: "#d32f2f",
//             topics: [
//                 "Connecting React frontend with Express backend",
//                 "Handling authentication and authorization",
//                 "Testing with Jest and Postman",
//                 "Deploying applications with Vercel and Heroku"
//             ]
//         }
//     ];

//     return (
//         <Modal open={open} onClose={onClose}>
//             {course === "mern" ?
//                 <Box
//                     sx={{
//                         position: "absolute",
//                         top: "50%",
//                         left: "50%",
//                         transform: "translate(-50%, -50%)",
//                         width: { xs: "90%", md: "80%" },
//                         maxHeight: "90vh",
//                         bgcolor: "background.paper",
//                         boxShadow: 24,
//                         p: 4,
//                         borderRadius: 2,
//                         overflowY: "auto",
//                         fontFamily: "'Poppins', sans-serif",
//                         color: "#333"
//                     }}
//                 >
//                     <Typography variant="h4" component="h2" gutterBottom sx={{ color: "#1976d2", fontWeight: "bold" }}>
//                         MERN Stack Course - Comprehensive Syllabus
//                     </Typography>
//                     <Divider sx={{ mb: 2, bgcolor: "#1976d2" }} />
//                     <Grid container spacing={2}>
//                         <Grid item xs={12} md={4}>
//                             <img
//                                 src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*jyvi6rdhEWdbKbybyuht9w.png"
//                                 alt="MERN Stack"
//                                 style={{ width: "260px", height: "140px", borderRadius: 8, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
//                             />
//                         </Grid>
//                         <Grid item xs={12} md={8}>
//                             <Typography variant="body1" paragraph sx={{ fontSize: "1rem", color: "#555" }}>
//                                 Dive into full-stack web development with our comprehensive MERN Stack Course. Master MongoDB, Express.js, React, and Node.js to build scalable web applications.
//                             </Typography>
//                             <Typography variant="h6" gutterBottom sx={{ color: "#1976d2", fontWeight: "bold" }}>
//                                 Course Syllabus:
//                             </Typography>
//                             {courseData.map((module, index) => (
//                                 <div key={index}>
//                                     <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: "bold", color: module.color }}>
//                                         {module.title}
//                                     </Typography>
//                                     <ul style={{ color: "#555", paddingLeft: "20px" }}>
//                                         {module.topics.map((topic, idx) => (
//                                             <li key={idx}>{topic}</li>
//                                         ))}
//                                     </ul>
//                                 </div>
//                             ))}
//                             <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: "bold", color: "#d32f2f" }}>
//                                 Capstone Project
//                             </Typography>
//                             <Typography variant="body1" paragraph sx={{ color: "#555" }}>
//                                 Build a fully functional MERN Stack application, applying all concepts learned in the course.
//                             </Typography>
//                         </Grid>
//                     </Grid>
//                     <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
//                         <Button variant="contained" color="success" onClick={onClose} sx={{ fontWeight: "bold" }}>
//                             Close
//                         </Button>
//                     </Box>
//                 </Box>

//                 : course === "ds" ?
//                     <Box
//                         sx={{
//                             position: "absolute",
//                             top: "50%",
//                             left: "50%",
//                             transform: "translate(-50%, -50%)",
//                             width: { xs: "90%", md: "80%" },
//                             maxHeight: "90vh",
//                             bgcolor: "background.paper",
//                             boxShadow: 24,
//                             p: 4,
//                             borderRadius: 2,
//                             overflowY: "auto",
//                             fontFamily: "'Poppins', sans-serif",
//                             color: "#333"
//                         }}
//                     >
//                         <Typography variant="h4" component="h2" gutterBottom sx={{ color: "#1976d2", fontWeight: "bold" }}>
//                             Data Science Course - Comprehensive Syllabus
//                         </Typography>
//                         <Divider sx={{ mb: 2, bgcolor: "#1976d2" }} />
//                         <Grid container spacing={2}>
//                             <Grid item xs={12} md={4}>
//                                 <img
//                                     src="/DATA SCIENCE MODAL.png"
//                                     alt="Data Science"
//                                     style={{ width: "260px", height: "140px", borderRadius: 8, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
//                                 />
//                             </Grid>
//                             <Grid item xs={12} md={8}>
//                                 <Typography variant="body1" paragraph sx={{ fontSize: "1rem", color: "#555" }}>
//                                     Learn to extract insights from data with our complete Data Science course. Master tools and techniques including Python, SQL, ML, Deep Learning, and NLP — perfect for aspiring analysts and scientists.
//                                 </Typography>

//                                 <Typography variant="h6" gutterBottom sx={{ color: "#1976d2", fontWeight: "bold" }}>
//                                     Course Syllabus:
//                                 </Typography>

//                                 <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: "bold", color: "#d32f2f" }}>
//                                     Python Programming
//                                 </Typography>
//                                 <ul style={{ color: "#555", paddingLeft: "20px" }}>
//                                     <li>Basics of Python</li>
//                                     <li>Control Statements</li>
//                                     <li>Functions, Loops</li>
//                                     <li>OOPs, Modules, Exception Handling</li>
//                                     <li>NumPy, Pandas</li>
//                                     <li>Visualization with Matplotlib & Seaborn</li>
//                                 </ul>

//                                 <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: "bold", color: "#d32f2f" }}>
//                                     Statistics
//                                 </Typography>
//                                 <ul style={{ color: "#555", paddingLeft: "20px" }}>
//                                     <li>Descriptive & Inferential Statistics</li>
//                                     <li>Hypothesis Testing</li>
//                                 </ul>

//                                 <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: "bold", color: "#d32f2f" }}>
//                                     SQL
//                                 </Typography>
//                                 <ul style={{ color: "#555", paddingLeft: "20px" }}>
//                                     <li>DDL, DML, DCL Commands</li>
//                                     <li>Functions, Operators, Joins, Sub Queries</li>
//                                     <li>Group By, Having, Order By Clauses</li>
//                                     <li>Views, Indexing, Window Functions</li>
//                                     <li>SQL Case Study</li>
//                                 </ul>

//                                 <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: "bold", color: "#d32f2f" }}>
//                                     Excel
//                                 </Typography>
//                                 <ul style={{ color: "#555", paddingLeft: "20px" }}>
//                                     <li>Functions, Charts, Filters</li>
//                                     <li>Pivot Tables, Dashboard</li>
//                                     <li>Macros & VBA</li>
//                                 </ul>

//                                 <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: "bold", color: "#d32f2f" }}>
//                                     Power BI
//                                 </Typography>
//                                 <ul style={{ color: "#555", paddingLeft: "20px" }}>
//                                     <li>Data Modeling and Loading</li>
//                                     <li>DAX Formulas</li>
//                                     <li>Interactive Visuals</li>
//                                     <li>Dashboard Building</li>
//                                 </ul>

//                                 <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: "bold", color: "#d32f2f" }}>
//                                     Machine Learning
//                                 </Typography>
//                                 <ul style={{ color: "#555", paddingLeft: "20px" }}>
//                                     <li>Supervised Learning: Linear & Logistic Regression</li>
//                                     <li>Unsupervised Learning: KMeans, Hierarchical</li>
//                                     <li>Model Evaluation Techniques</li>
//                                 </ul>

//                                 <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: "bold", color: "#d32f2f" }}>
//                                     Deep Learning
//                                 </Typography>
//                                 <ul style={{ color: "#555", paddingLeft: "20px" }}>
//                                     <li>Artificial Neural Networks</li>
//                                     <li>Convolutional Neural Networks (CNN)</li>
//                                     <li>Transfer Learning</li>
//                                 </ul>

//                                 <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: "bold", color: "#d32f2f" }}>
//                                     Natural Language Processing (NLP)
//                                 </Typography>
//                                 <ul style={{ color: "#555", paddingLeft: "20px" }}>
//                                     <li>NLP Pipeline</li>
//                                     <li>TF-IDF, Word Embeddings</li>
//                                     <li>Sentiment Analysis</li>
//                                 </ul>

//                                 <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: "bold", color: "#d32f2f" }}>
//                                     Capstone Projects
//                                 </Typography>
//                                 <Typography variant="body1" paragraph sx={{ color: "#555" }}>
//                                     Apply skills in real-world data sets through projects integrating Python, ML, Deep Learning & Visualization.
//                                 </Typography>
//                             </Grid>
//                         </Grid>

//                         <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
//                             <Button variant="contained" color="success" onClick={onClose} sx={{ fontWeight: "bold" }}>
//                                 Close
//                             </Button>
//                         </Box>
//                     </Box>
//                     :
//                     <Box
//                         sx={{
//                             position: "absolute",
//                             top: "50%",
//                             left: "50%",
//                             transform: "translate(-50%, -50%)",
//                             width: { xs: "90%", md: "80%" },
//                             maxHeight: "90vh",
//                             bgcolor: "background.paper",
//                             boxShadow: 24,
//                             p: 4,
//                             borderRadius: 2,
//                             overflowY: "auto",
//                             fontFamily: "'Poppins', sans-serif",
//                             color: "#333"
//                         }}
//                     >
//                         <Typography variant="h4" component="h2" gutterBottom sx={{ color: "#1976d2", fontWeight: "bold" }}>
//                             Japanese Language Course - Syllabus Overview
//                         </Typography>
//                         <Divider sx={{ mb: 2, bgcolor: "#1976d2" }} />
//                         <Grid container spacing={2}>
//                             <Grid item xs={12} md={4}>
//                                 <img
//                                     src="https://www.languagetrainers.com/blog/wp-content/uploads/2019/08/shutterstock_1014649991.jpg"
//                                     alt="Japanese Language"
//                                     style={{
//                                         width: "260px",
//                                         height: "140px",
//                                         borderRadius: 8,
//                                         boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
//                                     }}
//                                 />
//                             </Grid>
//                             <Grid item xs={12} md={8}>
//                                 <Typography variant="body1" paragraph sx={{ fontSize: "1rem", color: "#555" }}>
//                                     Learn to speak, read, and write Japanese with this comprehensive course designed for beginners to intermediate learners. Includes cultural insights, grammar, and practical conversation skills.
//                                 </Typography>

//                                 <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: "bold", color: "#d32f2f" }}>
//                                     Introduction to Japanese Language
//                                 </Typography>
//                                 <ul style={{ color: "#555", paddingLeft: "20px" }}>
//                                     <li>Understanding Hiragana and Katakana</li>
//                                     <li>Basic Greetings and Expressions</li>
//                                     <li>Introduction to Japanese Culture and Etiquette</li>
//                                 </ul>

//                                 <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: "bold", color: "#d32f2f" }}>
//                                     Basic Grammar and Vocabulary
//                                 </Typography>
//                                 <ul style={{ color: "#555", paddingLeft: "20px" }}>
//                                     <li>Particles (は, が, を, に)</li>
//                                     <li>Descriptive Sentences (です/ます form)</li>
//                                     <li>Common Nouns, Verbs, and Adjectives</li>
//                                 </ul>

//                                 <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: "bold", color: "#d32f2f" }}>
//                                     Conversational Japanese
//                                 </Typography>
//                                 <ul style={{ color: "#555", paddingLeft: "20px" }}>
//                                     <li>Daily Conversations</li>
//                                     <li>Shopping, Travel, and Eating Out Phrases</li>
//                                     <li>Role-plays and Listening Practice</li>
//                                 </ul>

//                                 <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: "bold", color: "#d32f2f" }}>
//                                     Reading & Writing Practice
//                                 </Typography>
//                                 <ul style={{ color: "#555", paddingLeft: "20px" }}>
//                                     <li>Reading Simple Texts and Dialogues</li>
//                                     <li>Writing Practice in Hiragana, Katakana & Basic Kanji</li>
//                                     <li>Using Japanese Apps and Tools</li>
//                                 </ul>

//                                 <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: "bold", color: "#d32f2f" }}>
//                                     Cultural Elements
//                                 </Typography>
//                                 <ul style={{ color: "#555", paddingLeft: "20px" }}>
//                                     <li>Traditional Festivals and Customs</li>
//                                     <li>Understanding Honorifics and Formal Speech</li>
//                                     <li>Popular Culture: Anime, Manga, and J-pop</li>
//                                 </ul>

//                                 <Typography variant="body1" paragraph sx={{ color: "#555" }}>
//                                     Complete this course and gain the confidence to hold real conversations and navigate life in Japan as a tourist, student, or professional.
//                                 </Typography>
//                             </Grid>
//                         </Grid>
//                         <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
//                             <Button variant="contained" color="success" onClick={onClose}>
//                                 Close
//                             </Button>
//                         </Box>

//                     </Box>
//             }

//         </Modal>
//     );
// };

// export default CourseModal;


import React from "react";
import { Modal, Box, Typography, Button, Grid, Divider, useTheme } from "@mui/material";

const CourseModal = ({ open, onClose, course }) => {
    const theme = useTheme();

    const modalStyle = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: { xs: "90%", md: "80%" },
        maxHeight: "90vh",
        bgcolor: "background.paper",
        boxShadow: 24,
        p: 4,
        borderRadius: 3,
        overflowY: "auto",
        fontFamily: "'Poppins', sans-serif",
        color: "#333"
    };

    const renderModule = (title, topics, color = "#d32f2f") => (
        <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", color }}>
                {title}
            </Typography>
            <ul style={{ color: "#555", paddingLeft: "20px", marginTop: 4 }}>
                {topics.map((topic, idx) => (
                    <li key={idx}>{topic}</li>
                ))}
            </ul>
        </Box>
    );

    const mernData = [
        {
            title: "Introduction to MERN Stack",
            topics: [
                "Overview of Full Stack Development",
                "Understanding MERN: MongoDB, Express.js, React, Node.js",
                "Setting up a development environment",
                "Basic Git and GitHub workflow"
            ]
        },
        {
            title: "Backend Development with Node.js & Express.js",
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
            topics: [
                "Understanding NoSQL databases",
                "CRUD operations in MongoDB",
                "Schema design and data validation",
                "Aggregation and indexing"
            ]
        },
        {
            title: "Frontend Development with React.js",
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
            topics: [
                "Connecting React frontend with Express backend",
                "Handling authentication and authorization",
                "Testing with Jest and Postman",
                "Deploying applications with Vercel and Heroku"
            ]
        }
    ];

    const renderCourseContent = () => {
        if (course === "mern") {
            return (
                <>
                    <Typography variant="h4" gutterBottom sx={{ color: "#1976d2", fontWeight: "bold" }}>
                        MERN Stack Course - Comprehensive Syllabus
                    </Typography>
                    <Divider sx={{ mb: 2, bgcolor: "#1976d2" }} />
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <img
                                src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*jyvi6rdhEWdbKbybyuht9w.png"
                                alt="MERN Stack"
                                style={{
                                    width: "200px",
                                    height: "auto",
                                    borderRadius: 8,
                                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Typography variant="body1" paragraph sx={{ color: "#555" }}>
                                Dive into full-stack web development with our comprehensive MERN Stack Course. Master MongoDB, Express.js, React, and Node.js to build scalable web applications.
                            </Typography>
                            <Typography variant="h6" gutterBottom sx={{ color: "#1976d2", fontWeight: "bold" }}>
                                Course Syllabus:
                            </Typography>
                            {mernData.map((module, index) =>
                                renderModule(module.title, module.topics)
                            )}
                            {renderModule("Capstone Project", [
                                "Build a fully functional MERN Stack application, applying all concepts learned in the course."
                            ])}
                        </Grid>
                    </Grid>
                </>
            );
        }

        if (course === "ds") {
            return (
                <>
                    <Typography variant="h4" gutterBottom sx={{ color: "#1976d2", fontWeight: "bold" }}>
                        Data Science Course - Comprehensive Syllabus
                    </Typography>
                    <Divider sx={{ mb: 2, bgcolor: "#1976d2" }} />
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <img
                                src="/DATA SCIENCE MODAL.png"
                                alt="Data Science"
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    borderRadius: 8,
                                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Typography variant="body1" paragraph sx={{ color: "#555" }}>
                                Learn to extract insights from data with our complete Data Science course. Master tools and techniques including Python, SQL, ML, Deep Learning, and NLP — perfect for aspiring analysts and scientists.
                            </Typography>
                            <Typography variant="h6" gutterBottom sx={{ color: "#1976d2", fontWeight: "bold" }}>
                                Course Syllabus:
                            </Typography>

                            {renderModule("Python Programming", [
                                "Basics of Python", "Control Statements", "Functions, Loops", "OOPs, Modules, Exception Handling",
                                "NumPy, Pandas", "Visualization with Matplotlib & Seaborn"
                            ])}
                            {renderModule("Statistics", [
                                "Descriptive & Inferential Statistics", "Hypothesis Testing"
                            ])}
                            {renderModule("SQL", [
                                "DDL, DML, DCL Commands", "Functions, Operators, Joins, Sub Queries",
                                "Group By, Having, Order By Clauses", "Views, Indexing, Window Functions", "SQL Case Study"
                            ])}
                            {renderModule("Excel", ["Functions, Charts, Filters", "Pivot Tables, Dashboard", "Macros & VBA"])}
                            {renderModule("Power BI", ["Data Modeling and Loading", "DAX Formulas", "Interactive Visuals", "Dashboard Building"])}
                            {renderModule("Machine Learning", [
                                "Supervised Learning: Linear & Logistic Regression",
                                "Unsupervised Learning: KMeans, Hierarchical",
                                "Model Evaluation Techniques"
                            ])}
                            {renderModule("Deep Learning", ["Artificial Neural Networks", "Convolutional Neural Networks (CNN)", "Transfer Learning"])}
                            {renderModule("Natural Language Processing (NLP)", ["NLP Pipeline", "TF-IDF, Word Embeddings", "Sentiment Analysis"])}
                            {renderModule("Capstone Projects", [
                                "Apply skills in real-world data sets through projects integrating Python, ML, Deep Learning & Visualization."
                            ])}
                        </Grid>
                    </Grid>
                </>
            );
        }

        // Japanese Language
        return (
            <>
                <Typography variant="h4" gutterBottom sx={{ color: "#1976d2", fontWeight: "bold" }}>
                    Japanese Language Course - Syllabus Overview
                </Typography>
                <Divider sx={{ mb: 2, bgcolor: "#1976d2" }} />
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <img
                            src="https://www.languagetrainers.com/blog/wp-content/uploads/2019/08/shutterstock_1014649991.jpg"
                            alt="Japanese Language"
                            style={{
                                width: "100%",
                                height: "auto",
                                borderRadius: 8,
                                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Typography variant="body1" paragraph sx={{ color: "#555" }}>
                            Learn to speak, read, and write Japanese with this comprehensive course designed for beginners to intermediate learners. Includes cultural insights, grammar, and practical conversation skills.
                        </Typography>
                        {renderModule("Introduction to Japanese Language", [
                            "Understanding Hiragana and Katakana",
                            "Basic Greetings and Expressions",
                            "Introduction to Japanese Culture and Etiquette"
                        ])}
                        {renderModule("Basic Grammar and Vocabulary", [
                            "Particles (は, が, を, に)", "Descriptive Sentences (です/ます form)", "Common Nouns, Verbs, and Adjectives"
                        ])}
                        {renderModule("Conversational Japanese", [
                            "Daily Conversations", "Shopping, Travel, and Eating Out Phrases", "Role-plays and Listening Practice"
                        ])}
                        {renderModule("Reading & Writing Practice", [
                            "Reading Simple Texts and Dialogues", "Writing Practice in Hiragana, Katakana & Basic Kanji", "Using Japanese Apps and Tools"
                        ])}
                        {renderModule("Cultural Elements", [
                            "Traditional Festivals and Customs", "Understanding Honorifics and Formal Speech", "Popular Culture: Anime, Manga, and J-pop"
                        ])}
                        <Typography variant="body1" sx={{ mt: 2, color: "#555" }}>
                            Complete this course and gain the confidence to hold real conversations and navigate life in Japan as a tourist, student, or professional.
                        </Typography>
                    </Grid>
                </Grid>
            </>
        );
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={modalStyle}>
                {renderCourseContent()}
                <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 4 }}>
                    <Button variant="contained" color="success" onClick={onClose} sx={{ fontWeight: "bold" }}>
                        Close
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default CourseModal;
