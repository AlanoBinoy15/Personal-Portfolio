The system architecture 
/dist
/node_modules
/src
README.md
index.html
package-lock.json
package.json
vercel.json
vite.config.js



---

### Why This Architecture Was Used

This portfolio was built using a **React + Vite component-based architecture** to ensure the project is fast, modular, and easy to maintain. React allows the interface to be split into reusable components such as the Navbar, Hero, and Projects sections, making the code more organized and scalable. Vite was chosen as the build tool because it provides extremely fast development startup times and optimized production builds. This architecture also makes future updates simple, as new sections or features can be added without affecting the existing structure.


---

### AI Assistance and Prompts Used

During the development of this portfolio, I used multiple AI agents, including **ChatGPT, Gemini AI, Claude, and Loveable**, to accelerate the development process, resolve issues, and improve performance.

Some of the key prompts used were:

* “Create a modern React portfolio structure with multiple sections.”
* “Implement a responsive navigation bar with smooth scrolling.”
* “Optimize this component to improve Lighthouse performance.”
* “Fix deployment issues in a Vite React project.”
* “Guide me through deploying the project using GitHub and Vercel.”

These tools were used as development assistants to speed up implementation, debug errors, and refine the overall design and performance of the project.



---

### Bug Faced During Development

One of the major issues encountered during development was a **white screen after deployment** when hosting the portfolio using GitHub Pages. Although the project worked perfectly in the local development environment, the deployed version displayed a blank page with no content.

After investigation, the issue was traced to an **incorrect base path configuration in the Vite build setup**. Since GitHub Pages serves projects from a repository subdirectory, the asset paths generated during the build were pointing to the root instead of the correct project path. As a result, the browser failed to load the JavaScript and CSS files.

This was resolved by updating the **`base` property in `vite.config.js`** to match the repository name. After rebuilding and redeploying the project, all assets loaded correctly and the portfolio displayed as expected.

This issue helped me better understand how build tools handle asset paths and how deployment environments differ from local development.

