Ontwerp en maak een data driven online concept voor een opdrachtgever

De instructies voor deze opdracht staan in: [docs/INSTRUCTIONS.md](https://github.com/fdnd-task/proof-of-concept/blob/main/docs/INSTRUCTIONS.md)

De README staat in het Engels aangezien de opdrachtgever Engelstalig is. 

# Proof‑of‑Concept - INFO - Jan Ingenhousz Institute

## Table of Contents

- [Project Description](#project-description)  
- [Usage](#usage)  
- [Features and Tech Stack](#features-and-tech-stack)  
- [Design Choices](#design-choices)  
- [Code Conventions](#code-conventions)  
- [Installation & Setup](#installation--setup)  
- [Sources](#sources)  
- [License](#license)

## Project Description
This project was created for the Jan Ingenhousz Institute in collaboration with a digital agency. The goal was to build a dashboard where users (mainly researchers and biologists) can post and view scientific experiments that analyze plant responses, such as sensitivity to sunlight. These experiments contribute to research on optimizing plant growth and tackling challenges like food scarcity.

The platform connects to open APIs hosted on GitHub, allowing users to create and retrieve experiment data. Each experiment is stored permanently and visualized through a clean, responsive interface. While a brandbook was provided, we had full creative freedom to design the layout and interactions.

<img width="1431" alt="Screenshot of landing page showing experiment cards" src="https://github.com/user-attachments/assets/20c892a2-270b-4ccf-af9b-662cf39264c9" />

*Landing page displaying a grid of experiment cards.*

<img width="375" alt="Screenshot of mobile view with experiment cards" src="https://github.com/user-attachments/assets/6b841038-d466-41e7-afd7-9c5d9b1bb323" />

*Responsive mobile view of the experiment cards.*

## Usage
When visiting the dashboard, users are greeted with a landing page that displays all experiments in a visual card layout. Each card includes key information such as the experiment's title, date, and a short description, allowing users to easily browse and compare different entries.

Users can add their own experiment by using the “New Experiment” form. In this form, they can enter metadata like the title and description, along with their own HTML, CSS, and JavaScript code. Once submitted, the experiment is saved and automatically appears in the gallery.

The detail page is currently under development and will soon allow users to see the full output of their experiment on a dedicated page, including a live rendering of their code and additional metadata.

https://github.com/user-attachments/assets/6a42fe76-633d-4572-b07e-f4c75830c3f9

## Features and Tech Stack
This project features a responsive and user-friendly interface designed according to a provided style guide, ensuring a consistent and pleasurable user experience. The platform supports smooth client-side routing and dynamic UI states, providing clear feedback during loading and submission actions. 

The key technologies and techniques used in this project include:

- **Client-side routing** and **UI states** for smooth navigation and user feedback  
- Templating with **Liquid HTML** for dynamic page rendering  
- Frontend built with **HTML**, **CSS**, and **JavaScript**  
- **Custom CSS styling** for a **responsive** card-based layout  
- Backend implemented with **Node.js** and **Express**, serving **REST endpoints** for **GET** and **POST** requests  
- **Server-side logic** managed in **server.js**, handling routing and static file serving  

## Design Choices
This project follows visual and functional guidelines provided in the client’s brandbook. The design aims to display clarity, consistency, and simplicity to create a professional but approachable interface for showcasing experiments.

The typography uses a modern sans-serif font that reflects the brand’s clean and minimal look. Font sizes and weights establish a clear visual hierarchy. The color palette follows the brand’s primary and accent colors, with neutral tones in the background to allow the experiment content to stand out. Interactive elements such as buttons feature soft hover effects and rounded corners, adding a friendly and contemporary feel.

The layout is based on a responsive grid system to ensure the platform remains usable across devices. Attention has also been paid to accessibility, using proper contrast, focus states, and semantic HTML throughout the UI.

Most of the designs are displayed in this Figma file, which includes style guidelines and UI components: https://www.figma.com/design/g3BPSY77jzOcJDcJ00keHx/Jan-Ingenhousz-Institute?node-id=0-1&t=qfHNsPM7vSw5bKb1-1

![Figma design preview](https://github.com/user-attachments/assets/20c1d3d8-1da9-4e73-b0e5-c8d235d9f90d)

## Code Conventions
To ensure clarity, consistency, and maintainability across the files, a set of coding conventions was followed during development.

- Semantic HTML elements such as `<main>`, `<article>`, and `<section>` improve accessibility and structure.  
- CSS elements are nested wherever possible to improve clarity and maintainability.  
- The HTML and Liquid templates follow a clear hierarchy with layouts, views, and partials.  
- Class names are written in a consistent, descriptive style.  
- Styling is done using plain CSS located in the `/public/styles.css` directory.  
- CSS files are organized with clear sections for layout, components, and utilities.  
- Class names are lowercase and descriptive (e.g., `.experiment-card`, `.form-section`), and the design is responsive using media queries (`@media (min-width: 720px)`) to adapt to different screen sizes.  
- The code contains descriptive comments to clarify intent.  
- Where possible, function and variable names are chosen to be self-explanatory, reducing the need for excessive inline documentation.  

## Installation & Setup
1. Download and install Node.js.  
2. Fork this repository to your own GitHub account.  
3. Clone the repository to your local machine.  
4. Open the repository folder in VS Code.  
5. Open the terminal within the project folder in VS Code.  
6. Install the required packages by running the following command in the terminal: `npm install`  
7. Start the server with the command: `npm start`  
8. View your project by opening the localhost link that appears in the terminal in your browser.  

## Sources
- https://www.jan-ingenhousz-institute.org/  
- https://www.info.nl/  

## License
This project is licensed under the terms of the [MIT license](./LICENSE).  
