I want to refactor my portfolio website's projects component to use a JSON-based data structure. Please help me:

1. Create a `projects.json` file that stores all project data including:
  - Project title
  - Description
  - Technologies/tech stack used
  - Project image/screenshot URL
  - Links (live demo, GitHub repo, etc.)
  - Any other relevant metadata (date, category, featured status, etc.)

2. Update my projects component to:
  - Import and read from the JSON file
  - Map over the data to dynamically render project cards
  - Handle the data structure cleanly

3. Make sure the structure is:
  - Easy to add new projects (just add a new object to the JSON)
  - Scalable and maintainable
  - Well-organized with clear property names