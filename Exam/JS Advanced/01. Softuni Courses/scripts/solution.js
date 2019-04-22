function solve() {
   let courses = {
       "js-fundamentals" : 170,
       "js-advanced" : 180,
       "js-applications" : 190,
       "js-web" : 490,
   };

   let coursesNames = {
       "js-fundamentals" : 'JS-Fundamentals',
       "js-advanced" : 'JS-Advanced',
       "js-applications" : 'JS-Applications',
       "js-web" : 'JS-Web',
       "HTML and CSS" : 'HTML and CSS'
   };

   document.getElementsByTagName('button')[0].addEventListener('click', () => {
       let form = $("input[name=educationForm]:checked").val();
       const moduleTotalPrice = 170 + 180 + 190;
       let cost = 0;
       let checkedCourses = [];
       let checkedValue = $('.courseBody input:checkbox:checked');
       checkedValue.each((x,a) => {checkedCourses.push(a.value)});

       checkedCourses.forEach(x => {
           cost += courses[x];
       });
       if (checkedValue.length === 4){
           checkedCourses.push('HTML and CSS');
       }
       if (checkedCourses.includes('js-advanced') && checkedCourses.includes('js-fundamentals')){
           cost -= (180 * 0.10);
       }

       if (checkedCourses.includes('js-advanced') && checkedCourses.includes('js-fundamentals') && checkedCourses.includes('js-applications')){
           cost -= (moduleTotalPrice * 0.06);
       }

       if (form === 'online'){
           cost -= (cost * 0.06);
       }

       let myCoursesUl = $('#myCourses .courseBody ul');
       console.log(myCoursesUl);
       checkedCourses.forEach(x => {
           let currentCourseName = coursesNames[x];
           let newCourse = $('<li></li>').text(currentCourseName);
           myCoursesUl.append(newCourse);
       });
       cost = Math.round(cost);
       $('#myCourses .courseFoot p').text(`Cost: ${cost.toFixed(2)} BGN`)
   })
}

solve();
