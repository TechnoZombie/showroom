import React from 'react';
import ImageGallery from './ImageGallery.jsx';

const PixelPainterEnhanced = () => {

    return (
        <div className="readme-container">
            <ImageGallery
                images={[
                    {src: "public/ppe/ppe01.png", alt: "Main Screen"},
                    {src: "public/ppe/ppe02.png", alt: "Edit Menu"},
                    {src: "public/ppe/ppe03.png", alt: "Manager Menu"},
                    {src: "public/ppe/ppe04.png", alt: "Help Menu"},
                    {src: "public/ppe/ppe05.png", alt: "Custom Color input"},
                    {src: "public/ppe/ppe06.png", alt: "Color Select Menu"},
                ]}
            />

            <h1>PixelPainter: Enhanced!</h1>

            <p>A Java-based pixel art creation tool that combines simplicity with powerful features. PixelPainter: Enhanced!
                provides an intuitive grid-based canvas where users can create pixel art through a combination of
                keyboard controls and mouse interactions (work in progress).</p>

            <p>This project is a continuation of the original PixelPainter project, with additional features and
                improvements. The main goal was to implement a GUI for the application, making it more user-friendly and
                accessible. It then grew large enough to be its own project and repository. The original can be found
                here: <a
                    href="https://github.com/TechnoZombie/PixelPainter">GitHub: PixelPainter</a>.
            </p>

            <p>It also makes use of a <a href="Simplegraphz">custom graphics library</a>,
                based on <a href="https://github.com/academia-de-codigo/simple-graphics">simple-graphics</a> where
                custom methods to allow for JFrame manipulation were added, as well as Lombok and Slf4j.</p>

            <h2>Project Overview</h2>

            <p>PixelPainter: Enhanced! is built with a focus on clean architecture and modular design. The application utilizes the
                <a href="Simplegraphz"> Simplegraphz</a> library for graphics rendering and implements a robust event-handling system for user
                interactions.</p>

            <h3>Core Components</h3>

            <h4>Canvas System</h4>
            <ul>
                <li><strong>Grid-based drawing surface</strong> with customizable dimensions</li>
                <li><strong>Dynamic cursor highlighting</strong> for precise pixel placement</li>
                <li><strong>Efficient rectangle-based rendering</strong> system</li>
                <li>Supports multiple canvas sizes and pixel densities</li>
            </ul>

            <h4>Color Management</h4>
            <ul>
                <li><strong>Advanced color processing</strong> system with RGB support</li>
                <li><strong>Custom color creation</strong> and management</li>
                <li><strong>Color validation and conversion</strong> utilities</li>
                <li>Preset color palette with 10 standard options</li>
            </ul>

            <h4>File Operations</h4>
            <ul>
                <li><strong>Sophisticated file management</strong> system</li>
                <li>Custom file format for saving pixel art (<code>.txt</code>)</li>
                <li><strong>PNG export capability</strong> with intelligent bounds detection</li>
                <li><strong>Screenshot functionality</strong> with automatic file naming</li>
            </ul>

            <h4>User Interface</h4>
            <ul>
                <li><strong>Menu-driven interface</strong> with keyboard shortcuts</li>
                <li><strong>Confirmation dialogs</strong> for destructive operations</li>
                <li><strong>Color selector dialog</strong> with RGB input</li>
                <li><strong>Status messages</strong> and user feedback system</li>
            </ul>

            <h3>Key Features</h3>
            <ul>
                <li><strong>Event Handling:</strong> Implements the Observer pattern for keyboard and mouse events</li>
                <li><strong>Color Processing:</strong> Custom color handling system with RGB conversion capabilities
                </li>
                <li><strong>File Management:</strong> Robust save/load system with error handling and validation</li>
                <li><strong>User Interface:</strong> Clean, minimal interface focused on functionality</li>
            </ul>

            <h3>Dependencies</h3>
            <ul>
                <li><strong>Custom Simplegraphz Graphics Library</strong></li>
                <li><strong>Lombok</strong> for reduced boilerplate</li>
                <li><strong>Java AWT</strong> for advanced graphics operations</li>
                <li><strong>SLF4J</strong> for logging</li>
            </ul>

            <h3>Design Philosophy</h3>
            <p>PixelPainter was built with these principles in mind:</p>
            <ul>
                <li><strong>Modularity</strong> and clean separation of concerns</li>
                <li><strong>Efficient graphics rendering</strong></li>
                <li><strong>Intuitive user interaction</strong></li>
                <li><strong>Robust error handling</strong></li>
                <li><strong>Extensible architecture</strong></li>
            </ul>

            <p>The project demonstrates proper use of:</p>
            <ul>
                <li>Object-oriented design principles</li>
                <li>Event-driven programming</li>
                <li>File I/O operations</li>
                <li>Graphics programming concepts</li>
                <li>User interface design patterns</li>
            </ul>

            <h3>Future Development</h3>
            <p>Planned enhancements include:</p>
            <ul>
                <li><strong>Layer system</strong> for complex artwork</li>
                <li><strong>Undo/redo functionality</strong></li>
                <li><strong>Enhanced color palette management</strong></li>
                <li><strong>Brush size options</strong></li>
                <li><strong>Additional export formats</strong></li>
            </ul>

            <h3>Project Status</h3>
            <p>Currently in active development with regular updates and improvements. The core functionality is stable
                and fully operational.</p>

            <p>PixelPainter is a demonstration of modern Java application design, combining practical functionality with
                clean architecture and efficient implementation.</p>

        </div>

    );
};

export default PixelPainterEnhanced;

