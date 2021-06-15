# Sean Monaghan Portfolio (React)

[Description](#description) 

[Installation Instructions](#installation-instructions) 

[Site Overview](#site-overview) 
  
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

[Contribution Guidelines](#contribution-guidelines) 

[Tests](#tests) 
 
[Questions](#questions)

# Description

This is the CV for Sean Monaghan, thanks for checking it out! This CV was made using the React framework and styled using Tailwinds CSS.  On here you can find some recent projects that I've worked on and find some ways to contact me! 

The portfolio itself is a representation of my front-end skills, as the styling is sleek and thematically consistent using and made using good coding practices and accessibility.  The site is fully responsive for all possible device sizes using size breaks through tailwinds CSS.  

## Installation Instructions

https://seanmonaghan.github.io/React_Employee_Directory/

No need to install this application, it is live via github pages and the link posted above.  

## Site Overview

![screenshot of home page](./src/images/home)

This site functions as a fairly simple employee directory so that a company can better track their employees.  The application allows the user to search for an employee by their first name, last name, date of birth, email or phone number.  They can also organize the table by clicking on one of the headers to sort by ascending or descending order.  

![pagination](public/images/pagination.png)

![pagination code](public/images/paginationcode.png)

The pagination functionality is created using a table and React-Table to filter the data presented based on the users preferences.  The user can either choose to display 10,25 or 50 individuals on the table using the setPageSize() functionality from React-Table.  They can navigate through these pages using the nextPage(), previousPage(), or gotoPage() functions from React-Table.

![columns](public/images/columns.png)

The columns are established prior to the construction of the table and must be speciied to our table component along with the data.  When creating the columns, it is important to add a Header and an accessor so that the table can determine what the header of the table should read as, and what data it is referencing from either your database or api call.  I added footer in this example to show that there are other options you could pass into the columns in case you or your client would like it styled differently.  You also only need to make a column for the data pertinent to your particular table.  

![global filter](public/images/globalfilter.png)

Another important note about the project is creating the global filter component.  In essence it's just a search input that calls the setFilter function on change so that as you input characters into the search bar it will filter the results for you.  Just be sure to export the global filter and import it on your table.js file so that you can include it in the creation of your table component.  

![overalltable](public/images/table.png)

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

This application uses the MIT license.

## Contribution Guidelines

If you would like to contribute to this project feel free to send requests.  I only wish that you be respectful to other contributes and to the code itself and maintain good clean coding practices. 

### Questions

If you have any questions about the application, be sure to contact me at my [e-mail](mailto:smonagha@conncoll.edu).

Alternatively you can find me and my other works at my [Github account](https://github.com/seanmonaghan).

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
