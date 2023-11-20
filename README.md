# Project Architecture Documentation

## Overview

This documentation provides an overview of the chosen architecture for the React project. The chosen architecture follows the Onion architecture pattern due to its simplicity in scaling applications and flexibility for incorporating various libraries. The extensive use of TypeScript helps define the core components of the application and their interactions.

## Onion Architecture

The Onion architecture is selected for its scalability and modifiability. It organizes the application into layers, with the innermost layer representing the core domain logic and the outer layers representing application-specific details. This separation allows for easy scalability and adaptability to changes in libraries, ensuring a more maintainable codebase.

## Project Structure

The project structure is organized into four main folders within the `src` directory:

### 1. Components

This folder contains all the components of the application. Each component has its own folder consisting of a `.tsx` file, a `.scss` file for styling, and associated tests. In case a component utilizes a custom hook, it is placed within this folder.

### 2. Services

The services folder includes any external services or utilities used by the application. This separation ensures a clear distinction between components and services, promoting a modular and maintainable codebase.

### 3. Pages

All the pages of the application are placed in this folder. Each page has its own folder with a `.tsx`, a `.scss` and a `spec.tsx` file facilitating easy navigation and management of page-specific components and logic.

### 4. Hooks

The hooks folder is reserved for custom hooks that are used at a higher level than the page. If a component requires a complex custom hook, it is placed in the components folder. However, more generalized hooks that are shared across multiple components can be found here.

# Technical Decisions

# Implementation Overview

## Reusable Components

The aim was to create reusable components given the nature of the test and the time constraints. This approach ensures that if we need to include a table displaying different information or a gallery showcasing favorite planets, we can easily do so. While considering whether to implement a context to have all information available in one place, I opted for a single state and utilized callbacks for manipulation. In hindsight, a context might have been a better choice, but given the current depth levels, the code remains uncomplicated. Future decisions will depend on the application's evolving needs.

## State Management and Design Choices

I have implemented a single state and used callbacks for manipulation. Although a context might have been a better choice, the current code complexity remains manageable, considering the application's current depth. Design-wise, I chose to use a grid for both tables and the gallery, as they involve working in two dimensions. The same applies to the main layout. For elements with a single dimension, such as others, I opted for flex.

## Core Functionality in usePlanets Custom Hook

The most crucial part of the application, housing functionalities that contribute the most value, is found in the `usePlanets` custom hook. This file should have the highest number of tests to ensure proper sorting of planets and correct addition and removal from favorites.

## Routing Choice

For handling routing in this project, the decision has been made to utilize react-router. This choice is based on its intuitiveness, robustness, and widespread adoption within the developer community. react-router provides a comprehensive solution for managing navigation in React applications and has proven to be a reliable and well-maintained library. Many developers in the community are familiar with its usage, making it a solid choice for seamless navigation within the project.

## Icon Selection

In the context of this project, the decision has been made to utilize Font Awesome icons for iconography. Font Awesome is a library known for its vast variety of icons that are not only extensive but also incredibly easy to customize. This choice is motivated by the need for a diverse set of icons that can be seamlessly integrated and modified to suit the project's design requirements. The popularity and flexibility of Font Awesome make it a practical and widely adopted solution for incorporating icons into the user interface.

## Project Workflow

Follow these steps to develop the project:

- **Build the Main Layout:**

  - Create the main layout structure for the web application.

- **Build the Menu:**

  - Implement a navigation menu to enhance user interaction and accessibility.

- **Fetch Data from the API:**

  - Use asynchronous calls to fetch data from the designated API.

- **Store Data in State Variable:**

  - Manage and store the retrieved information in a state variable for efficient data handling.

- **Construct the Table and Gallery:**

  - Design and implement components to display data in both table and gallery formats.

- **Add Actions:**

  - Implement essential actions such as `handleFavorite` to manage user preferences and `sortTable` for sorting data.

- **Write Tests:**

  - Develop comprehensive tests to ensure the reliability and functionality of the implemented features.

- **Enhance Page Appearance:**
  - Focus on improving the overall visual appeal of the web page, considering aspects such as styling, layout, and user experience.

# Test Strategy Overview

As a Senior Developer, I propose a comprehensive test strategy to ensure the reliability and security of the project. Considering the project's size and complexity, the strategy encompasses various testing levels and scenarios to cover different aspects of the application.

## Core Test Levels:

### 1. Unit Testing:

- **Objective:** Verify individual units of code in isolation.
- **Tools:** Utilize Jest and React Testing Library for unit testing.
- **Scenarios:**
  - Test utility functions.
  - Verify the functionality of individual components.

### 2. Integration Testing:

- **Objective:** Confirm the interaction between different parts of the system.
- **Tools:** Leverage Jest for extensive integration testing and Cypress for end-to-end testing.
- **Scenarios:**
  - Integration of components.
  - Interaction between global state and components.

### 3. Component Testing (React Components):

- **Objective:** Ensure proper rendering and responsiveness of React components.
- **Tools:** Use React Testing Library for simulating user interactions and asserting DOM elements.
- **Scenarios:**
  - Correct rendering of components.
  - Expected behavior when interacting with users.

## Additional Test Levels:

### 4. Async Function Testing:

- **Objective:** Validate the correct behavior of asynchronous functions, such as API calls.
- **Tools:** Utilize Jest, employing `async/await` and mocks for asynchronous call simulations.
- **Scenarios:**
  - Proper handling of API responses.
  - Error cases in asynchronous calls.

### 5. Navigation Testing:

- **Objective:** Verify that navigation between views functions as expected.
- **Tools:** Utilize Jest and React Testing Library for testing navigation components.
- **Scenarios:**
  - Correct navigation between routes.
  - Proper handling of route parameters.

### 6. Accessibility Testing:

- **Objective:** Ensure that the application is accessible to all users.
- **Tools:** Employ Lighthouse and dedicated accessibility testing tools.
- **Scenarios:**
  - Compliance with accessibility standards (WCAG).
  - Proper usage of ARIA attributes.

# Possible improvements

## Exploring Zustand for State Management

I would like to take the time to explore how everything would work with a context or Zustand. I am not a proponent of using global states, but I believe it could be a good scenario given the number of operations performed on multiple pages using the same information.

I would have dedicated more time to defining props, types, and the selection of components to create. Although I have tried to make it clear, there is room for improvement in terms of clarity.

## Components

In the future, there may be a need to remove some dependencies I created in certain components that were initially intended to be generic, such as Table.tsx or Gallery.tsx, but eventually became too focused on planets. Additionally, the favorites button could likely be a more generic button, as we might have IconButton components in other places in the future.

## Test Evaluation

The test is quite comprehensive and assesses many fundamental aspects that should be well-managed by senior developers. However, depending on the project's goals, the part related to the grid with favorite planets may be considered a bit excessive, especially the interactive part. This could potentially take away time from writing tests or planning the architecture more thoroughly, resulting in a project with a lot of code, fewer tests, less robust architectures, and concise documentation.
