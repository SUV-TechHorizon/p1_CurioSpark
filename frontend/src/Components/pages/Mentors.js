// import React from "react";
// import { Box, Typography, Avatar, IconButton } from "@mui/material";
// import Slider from "react-slick";
// import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

// // Mentors list
// const mentors = [
//     {
//         name: "Mayur Sedani",
//         role: "Data Science Leader",
//         image: "/mayur_sedani.jpg",
//         description:
//             "A seasoned Data Science leader with 20+ years of experience in AI, Machine Learning, and Business Analytics. Proven expertise in leveraging AI-driven insights to drive business growth, customer acquisition, and operational efficiency.",
//         expertise: [
//             "Doctor of Data Science Leadership & AI in ML Applications",
//             "Expertise in Financial Services, Marketing, and Product Optimization",
//             "Extensive experience in Pricing & Revenue Growth Strategies",
//             "Global Experience in Data Science & Business Analytics",
//             "Currently employed at a leading UK-based MNC"
//         ]
//     },
//     {
//         name: "Manoj Chaudhari",
//         role: "HR & Talent Strategy Leader",
//         image: "manoj.jpg",
//         description:
//             "An HR leader with deep knowledge in Talent Acquisition, Workforce Planning, and Employer Branding. Brings a data-driven approach to recruitment and people strategy.",
//         expertise: [
//             "15+ years in Talent Acquisition & HR Strategy",
//             "Expert in Recruitment, Planning, and Branding",
//             "Driven data-based transformations across multiple MNCs"
//         ]
//     },
//     {
//         name: "Dr. Prafull J. Wadhai",
//         role: "Academic Leader & Researcher",
//         image: "praful.jpeg",
//         description:
//             "An academic leader with 34+ years of experience and extensive research background. Controller of Examinations at G. H. Raisoni College of Engineering, Nagpur.",
//         expertise: [
//             "34 years of academic experience",
//             "40+ research publications in reputed journals",
//             "Member of esteemed professional societies: ISTE, ISWE, ISI, IWWA, ACCE, ICE"
//         ]
//     },
//     {
//         name: "Himanshu Jambhulkar",
//         role: "FP&A & Business Intelligence Expert",
//         image: "himanshu.jpg",
//         description:
//             "A seasoned former Microsoft Analyst in FP&A and strategic decision-making. Expert in using analytics to optimize operations and support data-driven decisions.",
//         expertise: [
//             "Led Financial Planning, Reporting, and Business Strategy",
//             "Worked with leading organizations in corporate FP&A",
//             "Specialized in BI & decision-making for financial optimization"
//         ]
//     }
// ];

// // Custom arrow components
// const ArrowLeft = ({ onClick }) => (
//     <IconButton
//         onClick={onClick}
//         sx={{
//             position: "absolute",
//             top: "45%",
//             left: "-40px",
//             zIndex: 1,
//             border: "2px solid #d4a373",
//             color: "#d4a373",
//             bgcolor: "#fff",
//             "&:hover": { bgcolor: "#d4a373", color: "#fff" },
//         }}
//     >
//         <ArrowBackIos fontSize="small" />
//     </IconButton>
// );

// const ArrowRight = ({ onClick }) => (
//     <IconButton
//         onClick={onClick}
//         sx={{
//             position: "absolute",
//             top: "45%",
//             right: "-40px",
//             zIndex: 1,
//             border: "2px solid #d4a373",
//             color: "#d4a373",
//             bgcolor: "#fff",
//             "&:hover": { bgcolor: "#d4a373", color: "#fff" },
//         }}
//     >
//         <ArrowForwardIos fontSize="small" />
//     </IconButton>
// );

// // Slider config
// const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     nextArrow: <ArrowRight />,
//     prevArrow: <ArrowLeft />,
//     responsive: [
//         {
//             breakpoint: 960,
//             settings: {
//                 slidesToShow: 1,
//             },
//         },
//     ],
// };

// // Main component
// const OurMentors = () => {
//     return (
//         <Box sx={{ p: 16, bgcolor: "#f5f5f5", fontFamily: "'Poppins', sans-serif" }}>
//             <Typography
//                 variant="h3"
//                 align="center"
//                 sx={{
//                     fontWeight: "bold",
//                     color: "#222",
//                     mb: 6,
//                 }}
//             >
//                 MEET <span style={{ color: "#d4a373" }}>OUR MENTORS</span>
//             </Typography>

//             <Slider {...settings}>
//                 {mentors.map((mentor, index) => (
//                     <Box
//                         key={index}
//                         sx={{
//                             bgcolor: "#e9e2da",
//                             color: "#333",
//                             borderRadius: 4,
//                             boxShadow: "0 6px 18px rgba(68, 64, 64, 0.1)",
//                             p: 4,
//                             m: 2,
//                             minHeight: 520,
//                             maxWidth: 500,
//                             mx: "auto",
//                         }}
//                     >
//                         <Avatar
//                             src={mentor.image}
//                             alt={mentor.name}
//                             sx={{ width: 150, height: 150, mb: 2, mx: "auto" }}

//                         />
//                         <Typography variant="h6" sx={{ fontWeight: 600, color: "#222" }}>
//                             {mentor.name}
//                         </Typography>
//                         <Typography
//                             variant="subtitle1"
//                             sx={{
//                                 color: "#bf7832",
//                                 fontWeight: 500,
//                                 fontStyle: "italic",
//                                 mb: 2,
//                                 fontSize: "0.95rem",
//                             }}
//                         >
//                             {mentor.role}
//                         </Typography>
//                         <Typography
//                             variant="body2"
//                             sx={{ color: "#352f2f", mb: 2, lineHeight: 1.6, fontSize: "0.9rem" }}
//                         >
//                             {mentor.description}
//                         </Typography>
//                         <Typography
//                             variant="subtitle2"
//                             sx={{ fontWeight: 600, color: "#bf7832", mb: 1 }}
//                         >
//                             EXPERIENCE & EXPERTISE:
//                         </Typography>
//                         <ul style={{ paddingLeft: "1rem", color: "#352f2f", textAlign: "left" }}>
//                             {mentor.expertise.map((item, i) => (
//                                 <li key={i} style={{ fontSize: "0.9rem", marginBottom: 4 }}>
//                                     {item}
//                                 </li>
//                             ))}
//                         </ul>
//                     </Box>
//                 ))}
//             </Slider>
//         </Box>
//     );
// };

// export default OurMentors;


import React from "react";
import { Box, Typography, Avatar, IconButton, Grid } from "@mui/material";
import Slider from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

// Mentors list
const mentors = [
    {
        name: "Mayur Sedani",
        role: "Data Science Leader",
        image: "/mayur_sedani.jpg",
        description:
            "A seasoned Data Science leader with 20+ years of experience in AI, Machine Learning, and Business Analytics. Proven expertise in leveraging AI-driven insights to drive business growth, customer acquisition, and operational efficiency.",
        expertise: [
            "Doctor of Data Science Leadership & AI in ML Applications",
            "Expertise in Financial Services, Marketing, and Product Optimization",
            "Extensive experience in Pricing & Revenue Growth Strategies",
            "Global Experience in Data Science & Business Analytics",
            "Currently employed at a leading UK-based MNC"
        ]
    },
    {
        name: "Manoj Chaudhari",
        role: "HR & Talent Strategy Leader",
        image: "manoj.jpg",
        description:
            "An HR leader with deep knowledge in Talent Acquisition, Workforce Planning, and Employer Branding. Brings a data-driven approach to recruitment and people strategy.",
        expertise: [
            "15+ years in Talent Acquisition & HR Strategy",
            "Expert in Recruitment, Planning, and Branding",
            "Driven data-based transformations across multiple MNCs"
        ]
    },
    {
        name: "Dr. Prafull J. Wadhai",
        role: "Academic Leader & Researcher",
        image: "praful.jpeg",
        description:
            "An academic leader with 34+ years of experience and extensive research background. Controller of Examinations at G. H. Raisoni College of Engineering, Nagpur.",
        expertise: [
            "34 years of academic experience",
            "40+ research publications in reputed journals",
            "Member of esteemed professional societies: ISTE, ISWE, ISI, IWWA, ACCE, ICE"
        ]
    },
    {
        name: "Himanshu Jambhulkar",
        role: "FP&A & Business Intelligence Expert",
        image: "himanshu.jpg",
        description:
            "A seasoned former Microsoft Analyst in FP&A and strategic decision-making. Expert in using analytics to optimize operations and support data-driven decisions.",
        expertise: [
            "Led Financial Planning, Reporting, and Business Strategy",
            "Worked with leading organizations in corporate FP&A",
            "Specialized in BI & decision-making for financial optimization"
        ]
    }
];

// Custom arrow components
const ArrowLeft = ({ onClick }) => (
    <IconButton
        onClick={onClick}
        sx={{
            position: "absolute",
            top: "45%",
            left: "-40px",
            zIndex: 1,
            border: "2px solid #d4a373",
            color: "#d4a373",
            bgcolor: "#fff",
            "&:hover": { bgcolor: "#d4a373", color: "#fff" },
        }}
    >
        <ArrowBackIos fontSize="small" />
    </IconButton>
);

const ArrowRight = ({ onClick }) => (
    <IconButton
        onClick={onClick}
        sx={{
            position: "absolute",
            top: "45%",
            right: "-40px",
            zIndex: 1,
            border: "2px solid #d4a373",
            color: "#d4a373",
            bgcolor: "#fff",
            "&:hover": { bgcolor: "#d4a373", color: "#fff" },
        }}
    >
        <ArrowForwardIos fontSize="small" />
    </IconButton>
);

// Slider config
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
    responsive: [
        {
            breakpoint: 960,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};

// Main component
const OurMentors = () => {
    return (
        <Box sx={{ p: 16, bgcolor: "#f5f5f5", fontFamily: "'Poppins', sans-serif" }}>
            <Typography
                variant="h3"
                align="center"
                sx={{
                    fontWeight: "bold",
                    color: "#222",
                    mb: 6,
                }}
            >
                MEET <span style={{ color: "#d4a373" }}>OUR MENTORS</span>
            </Typography>

            <Slider {...settings}>
                {mentors.map((mentor, index) => (
                    <Box
                        key={index}
                        sx={{
                            bgcolor: "#e9e2da",
                            color: "#333",
                            borderRadius: 20,
                            boxShadow: "0 6px 18px rgba(68, 64, 64, 0.1)",
                            p: 4,
                            m: 2,
                            minHeight: 520,
                            maxWidth: 500,
                            mx: "auto",
                            "&:hover": {
                                boxShadow: "0 12px 24px rgba(68, 64, 64, 0.2)",
                            },
                        }}
                    >
                        <Box
                            sx={{
                                position: "relative",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                overflow: "hidden",
                                borderRadius: "50%",
                                width: "150px",
                                height: "150px",
                                marginBottom: 2,
                                mx: "auto",
                                transition: "all 0.3s ease-in-out",
                                "&:hover": {
                                    transform: "scale(1.1)",
                                    boxShadow: "0 6px 18px rgba(68, 64, 64, 0.2)",
                                },
                            }}
                        >
                            <Avatar
                                src={mentor.image}
                                alt={mentor.name}
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    border: "4px solid #d4a373",
                                    transition: "transform 0.3s ease",
                                }}
                            />
                        </Box>

                        <Typography variant="h6" sx={{ fontWeight: 600, color: "#222" }}>
                            {mentor.name}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                color: "#bf7832",
                                fontWeight: 500,
                                fontStyle: "italic",
                                mb: 2,
                                fontSize: "0.95rem",
                            }}
                        >
                            {mentor.role}
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: "#352f2f", mb: 2, lineHeight: 1.6, fontSize: "0.9rem" }}
                        >
                            {mentor.description}
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            sx={{ fontWeight: 600, color: "#bf7832", mb: 1 }}
                        >
                            EXPERIENCE & EXPERTISE:
                        </Typography>
                        <ul style={{ paddingLeft: "1rem", color: "#352f2f", textAlign: "left" }}>
                            {mentor.expertise.map((item, i) => (
                                <li key={i} style={{ fontSize: "0.9rem", marginBottom: 4 }}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};

export default OurMentors;




