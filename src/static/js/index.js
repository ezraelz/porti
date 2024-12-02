$(function(){

    $('.option').hover(
        function(){
            $('.option').removeClass('highlighted');
            $(this).addClass('highlighted')
        },
        function () {
            $(this).removeClass('highlighted');
            setTimeout(function(){
                if (!$('.option.highlighted').length){
                    $('.option.featured').addClass('highlighted');
                }
            },500);
          }
    )
})

$(function(){

    $('.fal').hover(
        function () { 
            $('.fal').removeClass('breed');
            $(this).addClass('breed')
         },
        function () { 
            $(this).removeClass('breed');
            setTimeout(function(){
                if(!$('.fal.breed').length){
                    $('.fal.featured').addClass('breed')
                }
            },500);
         }
    )
})

$(function(){

    $('.front').hover(
        function(){
            $('.front').removeClass('show');
            $(this).addClass('show')
        },
        function(){
            $(this).removeClass('show');
            setTimeout(function(){
                if(!$('.front.show').length){
                    $('.front.featured').addClass('show')
                }
            },500);
        }
    )
})
const accordion = document.getElementsByClassName('container');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  });
  
}

$(document).ready(function() {
    $('.circle').each(function() {
        let $circle = $(this);  // Use jQuery to get the current circle
        let degree = 0;
        let targetDegree = parseInt($circle.attr('data-degree'));  // Correctly access the data-degree attribute
        let color = $circle.attr('data-color');  // Correctly access the data-color attribute
        let $numberElement = $circle.find('.number');  // Find the number element inside the circle

        // Animate the progress incrementally
        let interval = setInterval(function() {
            degree += 1;  // Increment degree

            // Stop the animation once it reaches the target degree
            if (degree > targetDegree) {
                clearInterval(interval);
                return;
            }

            // Update the conic-gradient background for circular progress
            $circle.css('background', `conic-gradient(${color} ${degree}%, #fff ${degree}%)`);

            // Update the percentage number displayed
            $numberElement.html(`${degree}<span>%</span>`);

        }, 10);  // Adjust the interval time for smooth animation
    });
});

$(document).ready(function(){
    $('.card').each(function(){
        let $card = $(this); // current main class
        let data = 0;
        let targetData = parseInt($card.attr('data'));
        let $numberElements = $card.find('.enrollment-number'); // find the number inside the card class

        // Lets animate the progress incremantally
        let intervals = setInterval(function() {
            data  += 1; // increment data

            // stoping the animation when it reach the target data number
            if (data > targetData) {
                clearInterval(intervals);
                return;
            }

            // update the number to be displayed
            $numberElements.html(`${data}`);
        }, 500)
    })
});

$(document).ready(function() {
    $('.card').each(function() {
        let $card = $(this); // current main class
        let assesmentData = 0
        let assesmentTarget = parseInt($card.attr('assesment-data'));
        let targetAssesment = parseInt($card.attr('assesment-target'));
        let $projectNumber = $card.find('.project-number');

        // lets animate the progress
        let assesmentInterval = setInterval(function(){
            assesmentData += 1;
            
            if (assesmentData > assesmentTarget){
                clearInterval(assesmentInterval);
                return;
            }

            // update the project number
            $projectNumber.html(`${assesmentData} <span>/ ${targetAssesment}</span>`)
        }, 200)
    })
})

$(document).ready(function() {
    $('.progress').each(function() {
        let $progress = $(this);
        let progressData = 0;
        let targetProgress = parseInt($progress.data('progress'));  // Access the data-progress attribute
        let color = $progress.data('color');  // Access the data-color attribute

        // Animate the progress incrementally
        let progressInterval = setInterval(function() {
            progressData += 1;  // Increment progress

            // Stop the animation once it reaches the target progress
            if (progressData > targetProgress) {
                clearInterval(progressInterval);
                return;
            }

            // Update the conic-gradient background to show progress
            $progress.css('background', `linear-gradient(to right ,${color} ${progressData}%, #ddd ${progressData}%)`);

        }, 30);  // Adjust the interval time for smooth animation
    });
});


$(document).ready(function() {
    // Toggle the sidebar visibility
    $('#expand').click(function() {
        $('.hidden-sidebar').toggleClass('show'); // Toggle 'show' class for the sidebar
        
        // If the sidebar is visible, hide the expand icon, otherwise show it
        if ($('.hidden-sidebar').hasClass('show')) {
            $('.fas.fa-chevron-right').addClass('hidden'); // Hide expand icon when sidebar is shown
        } else {
            $('.fas.fa-chevron-right').removeClass('hidden'); // Show expand icon when sidebar is hidden
        }
    });

    // Minimize button functionality
    $('#minimize').click(function() {
        $('.hidden-sidebar').removeClass('show'); // Hide the sidebar
        $('.fas.fa-chevron-right').removeClass('hidden'); // Show the expand icon when sidebar is minimized
        $('.changing-mode').toggleClass('visible'); // Toggle 'show' class for the sidebar
    });
});

$(document).ready(function() {
    // Toggle the sidebar visibility
    $('#theme').click(function() {
        $('.changing-mode').toggleClass('visible'); // Toggle 'show' class for the sidebar
    });

});

$(document).ready(function() {
    // Toggle the sidebar visibility
    $('#light').click(function() {
        $('body').toggleClass('darkmode'); // Toggle 'show' class for the sidebar
        
        // If the sidebar is visible, hide the expand icon, otherwise show it
        if ($('body').hasClass('darkmode')) {
            $('#light').addClass('hidden'); // Hide expand icon when sidebar is shown
        }
    });

    // Minimize button functionality
    $('#dark').click(function() {
        $('body').removeClass('darkmode'); // Hide the sidebar
        $('#dark').removeClass('hidden'); // Show the expand icon when sidebar is minimized
    });
});

$(document).ready(function(){
    // toggle navbar visibility
    $('.nav-toggle').click(function(){
        $('navbar').toggleClass('show'); //toggle show class
    });
});