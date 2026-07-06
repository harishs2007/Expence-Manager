My Expense Tracker
a simple web app to track daily income and expenses, built using plain HTML, CSS and javaScript-- no frameworks, no backend.
Feartures
* add transactions with title, amount, type(income/expense), category, and date 
* auto-calculated Total income, total expense and balance
* category-wise pie chart of expense (drawn with Canvas API)
* search transactions by title
* Delete individual transactions
* Clear all data with one click
* Data saved in localStorage--persists even after refreshing the browser

TEACH STACK
TEACH                           PURPOSE
HTML5                           Page structure
CSS3                            Styling & layout (Flexbox)
JavaScript                      App logic & interactivity
LocalStorage API                Saving data in the browser
Canvas API                      Drawing the pie chart

How to Run
1. Download/co=lone this folder, keeping the file structure above inact.
2. Open index.html in any browser--double-click works,no server needed.
3. (Optional) Use the Live Server extension in VS Code for auto-reload while editing.

How It Works
1. Fill the form and click Add Transaction -> saved to localStorage via storage.js
2. script.js re-render the table,totals,and chart every time data chamges.
3. chart.js calculates the expense split by category and draws it on a <canvas>
4. Use the search box to filter transactions by title.
5. Click Dlete on any row to remove that transaction, or Clear All Data to wipe everything.

Future Improvements
* Filter transactions by month/year
* Export data to Excel/PDF
* Multiple user accounts with login
* Backend + real database instead f localStorage
