import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const svgPath = path.join(__dirname, 'public', 'india 1.svg');
const componentPath = path.join(__dirname, 'src', 'component', 'IndiaMapSvg.jsx');

try {
    let svgContent = fs.readFileSync(svgPath, 'utf8');

    // 1. Sanitize: Remove XML declaration if present
    svgContent = svgContent.replace(/<\?xml.*?\?>/, '');

    // 2. Inject props into SVG tag
    svgContent = svgContent.replace('<svg', '<svg className={className} style={style} ');

    // 3. Inject hover classes into all Path tags
    // We explicitly preserve 'd' and 'fill' but append our class
    // Adding 'hover:fill-[#f7931a]' to override the pattern on hover
    // Adding 'stroke-black/10' for better definition if needed, or just relying on fill.
    const hoverClass = 'transition-all duration-300 hover:fill-[#FFD700] hover:opacity-100 hover:drop-shadow-[0_0_15px_rgba(255,215,0,0.6)] cursor-pointer';

    // Regex to add className to path. We use a simple replace because the SVG structure is known and simple.
    svgContent = svgContent.replace(/<path/g, `<path className="${hoverClass}" `);

    // 4. Wrap in React Component
    const componentContent = `import React from 'react';

const IndiaMapSvg = ({ className, style }) => {
  return (
    ${svgContent}
  );
};

export default IndiaMapSvg;
`;

    fs.writeFileSync(componentPath, componentContent);
    console.log('Successfully created IndiaMapSvg.jsx');

} catch (error) {
    console.error('Error transforming map:', error);
    process.exit(1);
}
