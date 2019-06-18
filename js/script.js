/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   

/******************************************
   GLOBALs
******************************************/

const studentList = document.querySelectorAll(".student-item"); // selects student list as array
const perPage = 10; // this max items per page
const studentDiv = document.querySelector(".student-list");


/*** 
   Create the `showPage function` to select and display max amount of list
   items on page for a page
***/

const showPage = (list, page) => {
  const pageStart = (perPage * page) - perPage; // sets start index
  const pageEnd = (perPage * page); // sets end index
  
// loop thru list
  for (let i = 0; i < list.length; i++){
      if (i >= pageStart && i < pageEnd) {
         list[i].style.display = "block";
      } else {
         list[i].style.display = "none";
      }
   }
}


/*** 
   Create the `appendPageLinks function` to create and 
   add pagination buttons with functionality
***/

// creates div to hold page buttons
const paginationDiv = document.createElement('div'); // create a div element to store page buttons
paginationDiv.className = 'pagination'; // gives new div pagination class
const pageDiv = document.querySelector('.page'); //selects page div
pageDiv.appendChild(paginationDiv); // adds pagination div at end of page div 


const appendPageLinks = (list) => {
  
   const numOfPages = Math.ceil(list.length / perPage);//sets total number of pages

   //creates ul element to hold page list items  and adds it to pagination div

   const pageList = document.createElement('ul'); // create a list element to store pages
   paginationDiv.parentNode.removeChild(paginationDiv);
   pageDiv.appendChild(paginationDiv); 
   paginationDiv.appendChild(pageList); // adds page list to pagination div

  // creates list items with anchor tags for each page

   for (let page = 1; page <= numOfPages; page ++) { // starts pages at 1
      const studentLi = document.createElement('li');
      const pageLink = document.createElement('a');
      pageList.appendChild(studentLi);
      studentLi.appendChild(pageLink); 
      pageLink.href = '#';
      pageLink.textContent = page; // sets page number text to anchor text
      if (page === 1) { // Makes first page have the 'active' class when the DOM is loaded.
         pageLink.className = 'active';
      }

   //sets click listener to each anchor to show page
      pageLink.addEventListener('click', (e) => {
         let links = document.querySelectorAll('a'); // grabs all anchor tags
         let activePage = e.target.textContent;

         for (let i = 0; i < links.length; i++) { //loops thru links
            links[i].className = " "; // clears active class from all page links
         }
         // sets click target to active class
         links[page - 1].className = 'active';
         showPage(studentList, activePage); 
      });
   }
}

// adds search to list 
const headerDiv = document.querySelector('.page-header');// selects header div to place search div
const searchDiv = document.createElement("div");// creates div to hold search
headerDiv.appendChild(searchDiv); // adds search div to page header
const searchInput = document.createElement('input'); // creates input for search
searchInput.type = 'text';// sets input type
searchDiv.append(searchInput); // adds input bar to search div
searchInput.placeholder = "Search students. . .";
const searchButton = document.createElement('button');//adds search button
searchButton.textContent = 'Search';
searchDiv.className = 'student-search';
searchDiv.appendChild(searchButton);

let studentsMatched = [];


// Create a function to perfrom your search and give it two `parameters`
/* not working */
 searchButton.addEventListener('click', () => {
   let filter = searchInput.value.toLowerCase();
   studentsMatched.length = [];
   for (let i = 0; i < studentList.length; i++) {
       if (studentList[i].textContent.indexOf(filter) > -1) {
           studentList[i].style.display = '';
           studentsMatched.push(i);
       } else {
           studentList[i].style.display = 'none';
           
       }   
   }
   // If all students are hidden, a 'no results' message is displayed
   if (studentsMatched.length === studentList.length) {
       studentDiv.innerHTML = '<h1>No Results</h1>';
   } else {
       studentDiv.innerHTML = '';
   }
   console.log(studentsMatched);
});

// searchButton.addEventListener('keyup', (e) => {
//    searching();
//    // function test log
//    console.log('Keyup event on the Search input is functional!');
//  });

showPage(studentList, 1);
appendPageLinks(studentList);



