
---

# OneLiner

OneLiner is a sophisticated web application designed to streamline the process of solving problems by providing smart hints and solutions. With an integrated on-screen calculator, users can easily input mathematical problems and receive tailored hints based on the problem type—coding or math. This application offers a responsive design, interactive features, and customizable options to enhance user experience.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Advanced Features](#advanced-features)
- [Customization](#customization)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Features

- **Smart Hints**: Dynamic hint generation based on the problem type (Coding or Math).
- **Interactive Calculator**: Integrated on-screen calculator for mathematical inputs.
- **Creative Problem Solving**: Provides hints instead of direct solutions, fostering creativity and deeper understanding.
- **Responsive Design**: Optimized for both desktop and mobile devices, ensuring usability across different screen sizes.
- **User Feedback**: Visual feedback through loader animations while fetching hints or solutions.
- **Problem Submission**: Seamless problem input and hint retrieval with an intuitive user interface.

## UserFlow

![ezgif-7-a3adad193f](https://github.com/user-attachments/assets/e757cd6a-dae6-45cb-9fde-00461533a352)


## Installation

To set up the project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/OneLiner.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd OneLiner
   ```

3. **Install Dependencies** (if applicable):
   - For backend dependencies, ensure Node.js is installed and run:
     ```bash
     npm install
     ```

4. **Start the Development Server**:
   - For a Node.js server, start it using:
     ```bash
     npm start
     ```
   - For static files, you can use a local server or simply open `index.html` in a browser.

## Usage

1. **Open the Application**:
   - Launch the application by opening `index.html` in a web browser.

2. **Interact with the Calculator**:
   - Click the calculator icon (`<i class="fas fa-calculator" id="calculatorIcon"></i>`) to reveal the on-screen calculator.
   - Use the calculator buttons to input mathematical expressions. The result will be appended to the problem input field.

3. **Submit a Problem**:
   - Enter a problem into the input field.
   - Select the problem type (Coding or Math) from the dropdown menu.
   - Click the Submit button to retrieve hints or solutions.

4. **View Hints**:
   - After submitting a problem, hints will be displayed below the input section.
   - Each hint can be unlocked by clicking the "Unlock" button.

5. **Reset**:
   - Click the Reset button to clear the current problem and reset the application state.

## Advanced Features

### On-Screen Calculator

- **Functionality**: The calculator supports a range of mathematical functions and operators, including basic arithmetic, trigonometric functions, logarithms, and constants like π.
- **Integration**: The calculator appends input values directly to the problem input field, allowing users to build complex expressions seamlessly.
- **Close Button**: Users can close the calculator by clicking the cross symbol, which hides the calculator and resets its state.

### Dynamic Hint System

- **Hint Levels**: The system provides hints at multiple levels, from basic to advanced, including full solutions and recommended topics for improvement.
- **Error Handling**: Robust error handling ensures that users receive appropriate messages if hint retrieval fails.

### Creative Problem Solving

- **Hint-Based Approach**: Unlike traditional educational tools that provide direct solutions, OneLiner focuses on offering hints rather than exact answers. This approach encourages users to engage in critical thinking, explore different problem-solving strategies, and develop their problem-solving skills more effectively.
- **Fostering Creativity**: By presenting hints and guidance, users are motivated to think creatively and independently. This method enhances learning outcomes and promotes a deeper understanding of the problem at hand.

### Customizable UI

- **CSS Styles**: Modify the `output.css` file to adjust the visual appearance of the application, including the calculator and hint sections.
- **JavaScript Interactions**: Customize the `output.js` file to enhance or modify the functionality of the calculator, hint system, and user interactions.

### Advanced Error Handling

- **Network Issues**: The application includes error handling for network issues when fetching hints. User-friendly messages are displayed if there are connectivity problems or server errors.
- **Input Validation**: The input fields and calculator are designed to handle invalid inputs gracefully, ensuring that users receive feedback and guidance for correction.

## Contributing

1. **Fork the Repository**: Create a personal fork of the repository on GitHub to make your changes.
2. **Create a Branch**: Develop your changes in a separate branch from `main`:
   ```bash
   git checkout -b feature-branch
   ```
3. **Commit Changes**: Commit your changes with meaningful commit messages:
   ```bash
   git commit -m "Add new feature or fix bug"
   ```
4. **Push and Create a Pull Request**: Push your branch to GitHub and open a pull request for review:
   ```bash
   git push origin feature-branch
   ```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements

- **Libraries**: Uses Font Awesome for iconography and modern web technologies for responsive design.
- **Inspiration**: Inspired by contemporary web applications focused on problem-solving and interactive learning.

---
