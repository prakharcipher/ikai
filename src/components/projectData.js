import p11 from "./project1/p11.jpeg";
import p12 from "./project1/p12.JPG";
import p13 from "./project1/p13.jpeg";
import p14 from "./project1/p14.jpeg";

import p21 from "./project2/p21.png";

import p31 from "./project3/p31.jpg";
import p32 from "./project3/p32.jpg";
import p33 from "./project3/p33.jpg";

import p41 from "./project4/p41.png";
import p42 from "./project4/p42.JPG";

import p51 from "./project5/p51.jpg";
import p52 from "./project5/p52.jpg";
import p53 from "./project5/p53.jpg";
import p54 from "./project5/p54.jpg";
import p55 from "./project5/p55.jpg";
import p56 from "./project5/p56.jpg";
import p57 from "./project5/p57.jpg";
import p58 from "./project5/p58.jpg";
import p59 from "./project5/p59.jpg";


const projects = {
    "1": {
        name: 'Serenity Haven',
        location: "Bangalore",
        year: "2023",
        type: "Residential",
        size: "600 sq.ft.",
        desc: ["A Serene Blend of Modern Elegance and Nature-Inspired Design.", "This one-room villa showcases a perfect harmony between modern luxury and nature-inspired aesthetics. The interior is designed to exude calmness and sophistication, with an emphasis on natural light, organic elements, and refined textures.", "The living space is characterized by its inviting layout, featuring curved, bespoke sofas in neutral tones that add softness and elegance to the room. A mix of wood-paneled walls and subtle vertical textures creates a warm, grounding atmosphere. The choice of lush indoor plants not only enhances the aesthetics but also reinforces the connection to nature.", "The center of the room is marked by a round, textured area rug complemented by a sleek marble coffee table, adding a touch of opulence. Accent tables in muted red tones introduce a subtle pop of color, maintaining balance in the monochromatic palette.", "One of the villa’s striking features is its mural-like wall accent, adorned with delicate botanical patterns. Soft lighting highlights the curves and textures, creating a focal point that feels both artistic and serene. The open glass walls provide an uninterrupted view of the lush surroundings, seamlessly merging indoor and outdoor living.", "Every detail has been thoughtfully curated to create a tranquil retreat — a space that invites relaxation while celebrating the beauty of natural and modern design."],
        images: [p11, p12, p13, p14]
    },
    "2": {
        name: 'The Grid House',
        location: "New Delhi",
        year: "2023",
        type: "Residential",
        size: "2,600 sq.ft.",
        desc: ["The design of this four-storey residence features an impressive building elevation that masterfully balances contemporary architecture with a touch of timeless craftsmanship. The façade is defined by an outer skin of exposed brickwork, which uniquely curves outward, creating a bold and dynamic appearance that draws the eye.", "This curvature is not just an aesthetic choice but also serves to enhance the interplay of light and shadow, lending the building an ever-changing character as the day progresses. Where the brickwork breaks above the ground floor’s lintel, a horizontal band of the inner skin is revealed, painted in a contrasting hue that acts as a visual highlight, emphasizing the building’s layered structure. This band adds depth and a sense of continuity between the strong, textured brick skin and the smoother painted surface. The outer brickwork then resumes its journey upward, enclosing the upper three storeys and maintaining the cohesive rhythm of the design."],
        images: [p21]
    },
    "3": {
        name: 'The Nukkad Tapri',
        location: "Dehradhun",
        year: "2024",
        type: "Commercial",
        size: "100 sq.ft.",
        desc: ["This food kiosk is an efficient, cost-conscious design, blending functionality with vibrant visual appeal. The compact structure maximizes its small footprint, integrating all necessary functions seamlessly within its space constraints. The focal point of the design is an eye-catching, wave-like pattern in bold, striking yellow that wraps around the corner elevation, creating a sense of motion and drawing attention from afar. This dynamic form serves as both an aesthetic statement and an effective way to attract crowds, standing out in any setting.", "Accentuating the wave are playful, detailed graphics depicting the food items offered, adding a touch of whimsy and inviting curiosity. At night, the kiosk transforms into a glowing beacon, the backlit wave element that imbues the structure with an inviting warmth and illuminates its playful design. The thoughtful integration of graphics, color, and illumination ensures that the kiosk remains engaging both day and night, proving that even the most modest spaces can host innovative, high-impact design."],
        images: [p32,p33,p31]
    },
    "4": {
        name: 'The Urban Sanctuary',
        location: "Jaipur",
        year: "2024",
        type: "Commercial",
        size: "1,000 sq.ft.",        
        desc: ["Nature-Infused Work Environment.", "The design philosophy revolves around simplicity, yet it speaks volumes through its sophisticated execution. Darkcolor palettes dominate the interiors.", "The interior is a masterclass in sleek, minimalist design, marked by clean lines and a harmonious interplay of diverse materials. One of the standout features of the office is its seamless integration with nature. Large floor-to-ceiling windows flood the space with natural light, reducing reliance on artificial lighting and creating a bright, uplifting ambiance."],
        images: [p42,p41]
    },
    "5": {
        name: 'Ananta',
        location: "Kurukshetra",
        year: "2022",
        type: "Residential",
        size: "2,000 sq.ft.",
        desc: ["A Harmonious Blend of Classic and Contemporary in a 2BHK Home.", "This exquisite residence exudes elegance with its seamless fusion of traditional charm and modern functionality. The living spaces are thoughtfully curated to reflect sophistication and comfort. This home reflects a nuanced approach to interior design, combining traditional aesthetics with modern sensibilities to create a space that is as inviting as it is inspiring.", "The home is marked by its clean lines and well-balanced layout. The integration of modern lighting solutions, like recessed ceiling fixtures, enhances functionality while contributing to the aesthetic appeal. The open design ensures a seamless flow between the living, dining, and personal spaces, making the residence ideal for a contemporary lifestyle."],
        images: [p51,p52,p53,p54,p55,p56,p57,p58,p59]
    }
}

export default projects;