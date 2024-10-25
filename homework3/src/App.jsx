

// დავალება პირველი

// import React, { useState } from 'react';

// const TodoApp = () => {
//     const [inputText, setInputText] = useState('');
//     const [todos, setTodos] = useState([]);

//     const handleInputChange = (e) => {
//         setInputText(e.target.value);
//     };

//     const handleAddTodo = () => {
//         if (inputText.trim()) {
//             setTodos([...todos, inputText]);
//             setInputText('');
//         }
//     };

//     const handleKeyPress = (e) => {
//         if (e.key === 'Enter') {
//             handleAddTodo();
//         }
//     };

//     return (
//         <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
//             <input
//                 type="text"
//                 value={inputText}
//                 onChange={handleInputChange}
//                 onKeyPress={handleKeyPress}
//                 placeholder="Enter a todo"
//                 style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
//             />
//             <button onClick={handleAddTodo} style={{ width: '100%', padding: '10px' }}>
//                 Add Todo
//             </button>
//             <ul style={{ listStyle: 'none', padding: 0 }}>
//                 {todos.map((todo, index) => (
//                     <li key={index} style={{ margin: '5px 0' }}>
//                         {todo}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default TodoApp;



// დავალება მეორე



// import React, { useState } from 'react';

// const ThemeToggle = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   return (
//     <div style={{
//       backgroundColor: isDarkMode ? '#333' : '#fff',
//       color: isDarkMode ? '#fff' : '#000',
//       minHeight: '100vh',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center'
//     }}>
//       <button onClick={toggleTheme}>
//         Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
//       </button>
//     </div>
//   );
// };

// export default ThemeToggle;



// დავალება მესამე



// import React, { useState } from 'react';

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   const decrement = () => {
//     setCount(count - 1);
//   };

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h1>Count: {count}</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </div>
//   );
// };

// export default Counter;







// დავალება მეოთხე



// import React, { useState } from 'react';

// const Card = ({ title, imageUrl, description }) => {
//   const [isVisible, setIsVisible] = useState(true);

//   const handleClick = () => {
//     setIsVisible(false);
//     alert(`Card title: ${title}`);
//   };

//   if (!isVisible) return null;

//   return (
//     <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px', margin: '20px', textAlign: 'center' }}>
//       <h2>{title}</h2>
//       <img src={imageUrl} alt={title} style={{ width: '100%', height: 'auto' }} />
//       <p>{description}</p>
//       <button onClick={handleClick}>Delete</button>
//     </div>
//   );
// };

// export default Card;
