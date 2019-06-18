// Search function finds both name and/or email.
// If no results are found, change the H2 to display ‘No Results’, otherwise display default ‘Students’ title.
// On firing of the searchList, check input value to see if matches, 
//if there are matches, generate the new student array & display appropriate list of buttons.

var studentSearch ='<div class="student-search"><input id="search" placeholder="Search for students..."><button>Search</button></div>';

function onlyTen(list) {
    let fullList = list.slice();
    let matched = [];
    while (fullList.length) {
        pagesArray.push(fullList.splice(0,10));
    }
    return pagesArray;
}

function searchList(searchInput, studentList) {	
//     var searchTerm = $('#search').val().toLowerCase().trim();
//     // my searchTerm
//    const searchInput = document.querySelector('#search').val(); 

    let studentsMatched= studentList.filter(
        function isListed(i) {={
            var studentNames = i.textcontent.value;
            if (studentNames.indexOf(searchInput) > -1 ) {
                return true;
            }
            return false;}
        // var studentEmail = e.target.value.find('.email').text();
        var studentNames = i.textcontent('h3');

        if (studentNames.indexOf(input) > -1) 
        {
            return true;
        } else {
            return false;
        }
    });
    
    // displays 'No Results' if none
    if (studentsMatched.length === 0 ) {
        studentDiv.innerHTML = "No Results Found";
    } else {
       // var activeStudents = onlyTen(studentsMatched); //SHOW PAGES
        paginationDiv.parentNode.removeChild(paginationDiv); // clears div

        if (studentsMatched.length >= 10)
        {
            appendButtons(activeStudents);
        }
        showPages(0, activeStudents);
    }
}
/***********************************
 *@nd 2
 *************************/

const studentsMatched = [];
searchButton.addEventListener('click', () => {
    let filter = searchInput.value.toLowerCase();
    studentsMatched.length = 0;
    for (let i = 0; i < studentList.length; i++) {
        if (studentList[i].innerHTML.indexOf(filter) > -1) {
            studentList[i].style.display = '';
            
        } else {
            studentList[i].style.display = 'none';
            studentsMatched.push(i);
        }   
    }
    // If all students are hidden, a 'no results' message is displayed
    if (studentsMatched.length === studentList.length) {
        studentDiv.innerHTML = '<h1>No Results</h1>';
    } else {
        studentDiv.innerHTML = ''; 
    }
});