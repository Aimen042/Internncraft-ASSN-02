
//Login button
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('redirectButton1').onclick = function () {
        window.location.href = 'login.html';
    };
});
//Sign up button
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('redirectButton2').onclick = function () {
        window.location.href = 'signup.html';
    };
});
document.addEventListener('DOMContentLoaded', function() {
    const testimonials = document.querySelectorAll('.testimonial');

    function checkVisibility() {
        testimonials.forEach(testimonial => {
            const rect = testimonial.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                testimonial.classList.add('in-view');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check in case the testimonial is already in view
});

//ABOUT US TEXT FADING:
//Text 1
document.addEventListener('DOMContentLoaded', function() {
    const contents = document.querySelectorAll('.content');

    function checkVisibility() {
        contents.forEach(content => {
            const rect = content.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                content.classList.add('in-view');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check in case the testimonial is already in view
});
//Text 2
document.addEventListener('DOMContentLoaded', function() {
    const contents = document.querySelectorAll('.content2');

    function checkVisibility() {
        contents.forEach(content2 => {
            const rect = content2.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                content2.classList.add('in-view');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check in case the testimonial is already in view
});
//Text 3
document.addEventListener('DOMContentLoaded', function() {
    const contents = document.querySelectorAll('.content3');

    function checkVisibility() {
        contents.forEach(content3 => {
            const rect = content3.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                content3.classList.add('in-view');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check in case the testimonial is already in view
});
//Latest Projects
//Project 1
document.addEventListener('DOMContentLoaded', function() {
    const contents = document.querySelectorAll('.project1');

    function checkVisibility() {
        contents.forEach(project1 => {
            const rect = project1.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                project1.classList.add('in-view');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check in case the testimonial is already in view
});
//Project 2
document.addEventListener('DOMContentLoaded', function() {
    const contents = document.querySelectorAll('.project2');

    function checkVisibility() {
        contents.forEach(project2 => {
            const rect = project2.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                project2.classList.add('in-view');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check in case the testimonial is already in view
});
//barchart
const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['1990', '2000', '2001', '2002', '2003', '2004'],
    datasets: [{
      label: 'selling increased',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
//Case Studies
document.addEventListener('DOMContentLoaded', function() {
    const cases = document.querySelectorAll('.case1');

    function checkVisibility() {
        cases.forEach(case1 => {
            const rect = case1.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                case1.classList.add('in-view');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check in case the testimonial is already in view
});
//
document.addEventListener('DOMContentLoaded', function() {
    const cases = document.querySelectorAll('.container2');

    function checkVisibility() {
        cases.forEach(container2 => {
            const rect = container2.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                container2.classList.add('in-view');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check in case the testimonial is already in view
});
//Automatic Typing
var typed = new Typed('.typedsections', {
    strings: ["Web Development", "Mobile Development", "UI/UX Design", "Data Analysis", "Graphic Design", "Video Animation"],
    typeSpeed: 50,
    backspeed: 50,
    loop: true,
});
//Application form:
//1
function showAlert() {
    alert("Your application has been submitted.");
    return true;
}
//2
//Application form
function showAlert2() {
    alert("Your request has been submitted.");
    return true; 
}
//3
//Login Form
function showAlert3() {
    alert("You are successfully logged in");
    return true; 
}
//4
//Sign Up Form
function showAlert4() {
    alert("Account created successfully");
    return true; 
}
