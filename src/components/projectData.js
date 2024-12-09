import p11 from "./project1/p11.jpeg";
import p12 from "./project1/p12.JPG";
import p13 from "./project1/p13.jpeg";
import p14 from "./project1/p14.jpeg";


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
        desc: "description 1",
        images: []
    },
    "3": {
        name: 'The Nukkad Tapri',
        location: "Dehradhun",
        year: "2024",
        type: "QSR (Quick Service Restaurant)",
        size: "100 sq.ft.",
        desc: "description 1",
        images: []
    },
    "4": {
        name: 'The Urban Sanctuary',
        location: "Jaipur",
        year: "2024",
        type: "Commercial",
        size: "1,000 sq.ft.",
        desc: "description 1",
        images: []
    },
    "5": {
        name: 'Ananta',
        location: "Kurukshetra",
        year: "2022",
        type: "Residential",
        size: "2,000 sq.ft.",
        desc: "description 1",
        images: []
    }
}

export default projects;