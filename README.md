# Connect4

https://docs.google.com/document/d/1iLQIkEYqwgC60K-vnLzXhjbHRzfQ2b_iokXgygbrm9M/edit#heading=h.2w8hfyibz1ar

## Demo

A live demo can be found at this link: [dip392-cd655.web.app](https://dip392-cd655.web.app/)

## Implementation Details

This document provides detailed instructions on how users will interact with the system, which is implemented using object-oriented programming (OOP) principles and ReactJS.

### Implementation Approach

#### Frontend Only (Client-Side)
- **Local Storage**: Instead of using a backend database, the system will use the browser's local storage to persist data. This approach simplifies the prototype and allows for quick testing and iteration.
  
#### Version Control
- **Git**: Git will be used for version control to manage changes in the codebase. This allows team members to collaborate effectively, track changes, and revert to previous versions if necessary.

### User Interaction

1. **Setting Up the Project**
   - **Clone the Repository**: Use Git to clone the repository to your local machine.
     ```sh
     git clone git@github.com:mertgulmus/DIP392-1-99.git dip392
     cd dip392
     ```
   - **Install Dependencies**: Use npm or yarn to install the required dependencies.
     ```sh
     npm install
     ```
   - **Start the Development Server**: Start the React development server.
     ```sh
     npm start
     ```
   - **Access the Application**: Open your browser and navigate to `http://localhost:3000` to access the application.

2. **Using the Application**
   - **User Interface**: The user interface is built with React components. Interact with different parts of the application by navigating through the available routes and components.
   - **Data Management**: All user data and application state are managed using React state and stored in the browser's local storage.



### Additional Notes

- **Prototype Limitations**: Note that this prototype uses local storage for data persistence and does not include a backend server. For production, consider implementing a backend with a database for data management.
- **React Dev Tools**: Use React Developer Tools for debugging and inspecting React components and their state.
