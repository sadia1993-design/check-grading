const newForm = document.getElementById('newForm');
const result = document.getElementById('result');
const userList = document.getElementById('users');

newForm.addEventListener('submit', function (event) {
  event.preventDefault();

  let studentName = document.forms['newForm'].name.value;
  let physics = document.forms['newForm'].physics.value;
  let chem = document.forms['newForm'].chemistry.value;
  let math_M = document.forms['newForm'].math.value;

  if (physics == '' || chem == '' || math_M == '' || studentName == '') {
    result.style.opacity = '1';
    result.style.transition = 'all 0.3s ease-in-out';
    result.innerHTML = 'enter all field';
  } else if (physics > 100 || chem > 100 || math_M > 100) {
    result.style.opacity = '1';
    result.style.transition = 'all 0.3s ease-in-out';
    result.innerHTML = 'Please enter marks within range';
  } else {
    let wholeTotal = parseInt(physics) + parseInt(chem) + parseInt(math_M);
    let averageNumber = wholeTotal / 3;

    if (physics < 33 || chem < 33 || math_M < 33) {
      if(physics<33){
      	
      	result.style.opacity = '1';
      	result.style.transition = 'all 0.3s ease-in-out'
        result.innerHTML += `${studentName} failed in physics `;
        setTimeout(function(){ result.remove();}, 3000);
      }
      if(chem<33){
      	
        result.style.opacity = '1';
      	result.style.transition = 'all 0.3s ease-in-out'
        result.innerHTML += `<br>${studentName} failed in chemistry`;
        setTimeout(function(){ result.remove();}, 3000);
      }
      if(math_M<33){
      	
        result.style.opacity = '1';
      	result.style.transition = 'all 0.3s ease-in-out'
        result.innerHTML += `<br>${studentName} failed in mathematics`;
        setTimeout(function(){ result.remove();}, 3000);
      }
      
    }

    //DETERMINE GRADES
    else {
      switch (true) {
        case averageNumber >= 80 && averageNumber <= 100:
          result.style.opacity = '1';
          result.style.transition = 'all 0.3s ease-in-out';
          result.innerHTML = `${studentName} , Your grade is A+`;
          setTimeout(function()
          { 
          	 result.remove();

          }, 3000);
          break;

        case averageNumber >= 70 && averageNumber < 80:
          result.style.opacity = '1';
          result.style.transition = 'all 0.3s ease-in-out';
          result.innerHTML = `${studentName} , Your grade is A`;
          setTimeout(function()
          { 
          	 result.remove();

          }, 3000);
          break;

        case averageNumber >= 60 && averageNumber < 70:
          result.style.opacity = '1';
          result.style.transition = 'all 0.3s ease-in-out';
          result.innerHTML = `${studentName} , Your grade is A-`;
          setTimeout(function()
          { 
          	 result.remove();

          }, 3000);
          break;

        case averageNumber >= 50 && averageNumber < 60:
          result.style.opacity = '1';
          result.style.transition = 'all 0.3s ease-in-out';
          result.innerHTML = `${studentName} , Your grade is B`;
          setTimeout(function()
          { 
          	 result.remove();

          }, 3000);
          break;

        case averageNumber >= 40 && averageNumber < 50:
          result.style.opacity = '1';
          result.style.transition = 'all 0.3s ease-in-out';
          result.innerHTML = `${studentName} , Your grade is C`;
          setTimeout(function()
          { 
          	 result.remove();

          }, 3000);
          break;

        case averageNumber >= 33 && averageNumber < 40:
          result.style.opacity = '1';
          result.style.transition = 'all 0.3s ease-in-out';
          result.innerHTML = `${studentName} , Your grade is D`;
          setTimeout(function()
          { 
          	 result.remove();

          }, 3000);
          break;

        case averageNumber < 33:
          result.style.opacity = '1';
          result.style.transition = 'all 0.3s ease-in-out';
          result.innerHTML = `${studentName} , Your grade is F`;
          setTimeout(function()
          { 
          	 result.remove();

          }, 3000);
          break;
      }

      if (typeof userList === 'object') { 
                studentName = '';
                Physics = '';
                chem = '';
                math_M = ''; 

	     }  
	  userList.innerHTML = `${studentName},<br> Physics= ${physics}<br> chemistry= ${chem}<br> mathematics= ${math_M}<br>  ${result.innerHTML}`;
	  userList.style.display = "block";
	  userList.style.transition = "all .3s ease-in-out";	     
      setTimeout(function() { userList.remove(); }, 3000);


    }
  }


      
          
         
	  
      
      
});
