(function() {
  var i = 0;
  var txt =
    "A group of students focused on deriving student engagement towards learning and competing, and practicing real life software development through various projects."; /* The text */
  var speed = 60; /* The speed/duration of the effect in milliseconds */

  function toggleBlink() {
    document.getElementById("coursor").classList.add("animate");
  }

  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("desc").innerHTML =
        txt.slice(0, i + 1) +
        '<span id="coursor" class="coursor" style="border-right: .15em solid orange"></span>';
      i++;
      setTimeout(typeWriter, speed);
    }
    if (document.getElementById("desc").innerText.length >= txt.length) {
      toggleBlink();
    }
  }
  typeWriter();
})();

particlesJS(
  "particles-js",

  {
    particles: {
      number: {
        value: 90,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#ffffff"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 4,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 8,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false,
          mode: "repulse"
        },
        onclick: {
          enable: false,
          mode: "push"
        },
        resize: true
      }
    },
    retina_detect: true
  }
);
