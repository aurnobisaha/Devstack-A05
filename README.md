Project Name:Dev Stack Builder
<br>
Description:Dev Stack Builder is a web application where users can choose multiple techonology card to their stack, they can also remove all cards or single card and manage their selected cards easily
<br>
Technologies Used:
<br>
React
<br>
TypeScript
<br>
Vite
<br>
Tailwind CSS
<br>
React Toastify
<br>
JSON
<br>

Features:
<br>
Browse development technologies
<br>
Build a personalized technology stack
<br>
Add and remove technologies dynamically
<br>


1. What is JSX, and why is it used in React?
JSX is written like HTML inside JavaScript. It is used to create UI in React
2. What is the difference between props and state?
Props used to pass data from parent component to child commponent. State used to store data that can change inside a component
3.What does the useState hook do, and where did you use it in this project?
The useState hook used to store and manage data in react. In this project, i used useState in App.tsx component to manage the selected technology cards. selectedCards stores the selected cards, and setSelectedCards updates the cards when i add or remove a technology.
4. What does the useEffect hook do, and why did you need it to load the JSON data?
   The useEffect hook used to perform tasks after a component renders, such as loading data. But i did not use useEffect in my project. I used fetch() and  use() hook to load the json data.
5. Why does every item in a .map() list need a unique key prop?
   A unique key helps react identifu each item in a list.
6. What is conditional rendering?
 Conditional rendering means showing something on the screen based on a condition. I used it to  show "No technologies yet" when  no card is selected, and to show  the selected cards when cards are selected.
7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
A parent component pass data to a child component using props. A child send something back to the parents by using a function passed through props.
