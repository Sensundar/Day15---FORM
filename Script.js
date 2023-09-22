document.getElementById("title").innerHTML =

"FORMS in DOM Manipulation";

document.getElementById("description").textContent =

"Created Form and Table and populated the table with Form data and on after submit cleared the form value.";

const submitButton = document.getElementById("submitButton");


document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
    const table = document.getElementById("dataTable");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById("name").value;
        const lastname = document.getElementById("lname").value;
        const address = document.getElementById("address").value;
        const pincode = document.getElementById("pincode").value;      
        
        const state = document.getElementById("state").value;
        const country = document.getElementById("country").value; 
        // Get form values
        const genderRadioButtons = document.getElementsByName("gender");
                let selectedGender = "";
                // Find the selected gender
                for (const radioButton of genderRadioButtons) {
                    if (radioButton.checked) {
                        selectedGender = radioButton.value;
                        break;
                    }
                }       
                //For food selection
        const foodCheckboxes = document.getElementsByName("food");
        const selectedFood = [];
        // Loop through checkboxes to find selected ones
        for (const checkbox of foodCheckboxes) {
            if (checkbox.checked) {
                selectedFood.push(checkbox.value);
            }
        }
   // Check if at least 2 food options are selected
   if (selectedFood.length < 2) {
    alert("Please select at least 2 food options.");
    return;
}

// Create a comma-separated string of selected food options
const foodChoices = selectedFood.join(", ");



        // Create a new row in the table
        const row = table.insertRow(-1);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        const cell5 = row.insertCell(4);
        const cell6 = row.insertCell(5);
        const cell7 = row.insertCell(6);
        const cell8 = row.insertCell(7);
        

        // Populate the new row with form values
        cell1.innerHTML = name;
        cell2.innerHTML = lastname;
        cell3.innerHTML = address;
        cell4.innerHTML=pincode;
        cell5.innerHTML =selectedGender
        cell6.innerHTML=foodChoices;
        cell7.innerHTML=state;
        cell8.innerHTML=country;
        // Clear the form inputs
        form.reset();
    });
});