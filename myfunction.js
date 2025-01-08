document.addEventListener("DOMContentLoaded", function() {
            var buttons = document.querySelectorAll('.show-details-btn');
            buttons.forEach(function(button) {
                button.addEventListener('click', function() {
                    var dataIdx = this.getAttribute('data-index');
                    var detailsDiv = document.querySelector('#details-content-' + dataIdx);
                    detailsDiv.style.display = detailsDiv.style.display === 'block' ? 'none' : 'block';
                });
            });
        });
    
        
            function showForm() {
          var formContainer = document.getElementById("formContainer");
                formContainer.style.display = "block";
            }
         
            function cancelForm() {
            document.getElementById("userDataForm").reset(); 
             }
  
    
