document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("starfield");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const context = canvas.getContext("2d");
    const stars = 500;
    const colorrange = [0, 60, 240];
    const starArray = [];

    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    for (let i = 0; i < stars; i++) {
        const x = Math.random() * canvas.offsetWidth;
        const y = Math.random() * canvas.offsetHeight;
        const radius = Math.random() * 1.2;
        const hue = colorrange[getRandom(0, colorrange.length - 1)];
        const sat = getRandom(50, 100);
        const opacity = Math.random(); // Initialize with random opacity
        starArray.push({ x, y, radius, hue, sat, opacity });
    }

    let frameNumber = 0;
    let opacity = 0;
    let secondOpacity = 0;
    let thirdOpacity = 0;

    let baseFrame = context.getImageData(
        0,
        0,
        window.innerWidth,
        window.innerHeight
    );

    function drawStars() {
        for (let i = 0; i < stars; i++) {
            const star = starArray[i];

            context.beginPath();
            context.arc(star.x, star.y, star.radius, 0, 360);
            context.fillStyle =
                "hsla(" + star.hue + ", " + star.sat + "%, 88%, " + star.opacity + ")";
            context.fill();
        }
    }

    function updateStars() {
        for (let i = 0; i < stars; i++) {
            if (Math.random() > 0.99) {
                starArray[i].opacity = Math.random();
            }
        }
    }

    const button = document.getElementById("valentinesButton");

    button.addEventListener("click", () => {
        const messageInput = document.getElementById("messageInput");
        const message = messageInput.value.trim();
        const recipientNumber = "9971150913"; // Change this to the recipient's phone number

        if (message !== "") {
            const encodedMessage = encodeURIComponent(message);
            const smsHref = `sms:${recipientNumber}?body=${encodedMessage}`;
            window.location.href = smsHref;

            // Redirect to proposeday.html after sending SMS
            setTimeout(() => {
                window.location.href = "propose.html";
            }, 3000); // Redirect after 3 seconds (adjust as needed)
        } else {
            alert("Please enter a message before sending.");
        }
    });

function drawTextWithLineBreaks(lines, x, y, fontSize, lineHeight) {
  lines.forEach((line, index) => {
    context.fillText(line, x, y + index * (fontSize + lineHeight));
  });
}

function drawText() {
  var fontSize = Math.min(30, window.innerWidth / 25); // Adjust font size based on screen width
  var lineHeight = 8;

  context.font = fontSize + "px Comic Sans MS";
  context.textAlign = "center";

  if (frameNumber < 300) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "Everyday day I cannot believe how lucky I am to have you in my life",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity = opacity + 0.01;
  }
  //fades out the text by decreasing the opacity
  if (frameNumber >= 300 && frameNumber < 600) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "Everyday day I cannot believe how lucky I am to have you in my life",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity = opacity - 0.01;
  }

  //needs this if statement to reset the opacity before next statement on canvas
  if (frameNumber == 600) {
    opacity = 0;
  }
  if (frameNumber > 600 && frameNumber < 900) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;

    if (window.innerWidth < 600) {
      drawTextWithLineBreaks(
        ["amongst trillions and trillions of stars,", "over billions of years"],
        canvas.width / 2,
        canvas.height / 2,
        fontSize,
        lineHeight
      );
    } else {
      context.fillText(
        "amongst trillions and trillions of stars, over billions of years",
        canvas.width / 2,
        canvas.height / 2
      );
    }

    opacity = opacity + 0.01;
  }
  if (frameNumber >= 900 && frameNumber < 1200) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;

    if (window.innerWidth < 600) {
      drawTextWithLineBreaks(
        ["amongst trillions and trillions of stars,", "over billions of years"],
        canvas.width / 2,
        canvas.height / 2,
        fontSize,
        lineHeight
      );
    } else {
      context.fillText(
        "amongst trillions and trillions of stars, over billions of years",
        canvas.width / 2,
        canvas.height / 2
      );
    }

    opacity = opacity - 0.01;
  }

  if (frameNumber == 1200) {
    opacity = 0;
  }
  if (frameNumber > 1200 && frameNumber < 1500) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "to be alive, and to get to spend this life with you, this lifetime and many more to come",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity = opacity + 0.01;
  }
  if (frameNumber >= 1500 && frameNumber < 1800) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "to be alive, and to get to spend this life with  you, this lifetime and many more to come",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity = opacity - 0.01;
  }

  if (frameNumber == 1800) {
    opacity = 0;
  }
  if (frameNumber > 1800 && frameNumber < 2100) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "is so incredibly, unfathomably unlikely",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity = opacity + 0.01;
  }
  if (frameNumber >= 2100 && frameNumber < 2400) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "is so incredibly, unfathomably unlikely",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity = opacity - 0.01;
  }

  if (frameNumber == 2400) {
    opacity = 0;
  }
  if (frameNumber > 2400 && frameNumber < 2700) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;

    if (window.innerWidth < 600) {
      drawTextWithLineBreaks(
        [
          "and yet here I am to get the impossible",
          "chance to get to know you",
        ],
        canvas.width / 2,
        canvas.height / 2,
        fontSize,
        lineHeight
      );
    } else {
      context.fillText(
        "and yet here I am to get the impossible chance to get to know you",
        canvas.width / 2,
        canvas.height / 2
      );
    }

    opacity = opacity + 0.01;
  }
  if (frameNumber >= 2700 && frameNumber < 3000) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;

    if (window.innerWidth < 600) {
      drawTextWithLineBreaks(
        [
          "and yet here I am to get the impossible",
          "chance to get to know you",
        ],
        canvas.width / 2,
        canvas.height / 2,
        fontSize,
        lineHeight
      );
    } else {
      context.fillText(
        "and yet here I am to get the impossible chance to get to know you",
        canvas.width / 2,
        canvas.height / 2
      );
    }

    opacity = opacity - 0.01;
  }

  if (frameNumber == 3000) {
    opacity = 0;
  }
  if (frameNumber > 3000 && frameNumber < 99999) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;

    if (window.innerWidth < 600) {
      drawTextWithLineBreaks(
        [
          "I love you so much , more than",
          "all the time and space in the universe can contain",
        ],
        canvas.width / 2,
        canvas.height / 2,
        fontSize,
        lineHeight
      );
    } else {
      context.fillText(
        "I love you so much , more than all the time and space in the universe can contain",
        canvas.width / 2,
        canvas.height / 2
      );
    }

    opacity = opacity + 0.01;
  }

  if (frameNumber >= 3300 && frameNumber < 99999) {
    context.fillStyle = `rgba(255, 255, 255, ${secondOpacity})`;

    if (window.innerWidth < 600) {
      drawTextWithLineBreaks(
        [
          "and I can't wait to spend all the time in",
          "the world to share that love with you!",
        ],
        canvas.width / 2,
        canvas.height / 2 + 70,
        fontSize,
        lineHeight
      );
    } else {
      context.fillText(
        "and I can't wait to spend all the time in the world to share that love with you!",
        canvas.width / 2,
        canvas.height / 2 + 50
      );
    }

    secondOpacity = secondOpacity + 0.01;
  }

  if (frameNumber >= 3600 && frameNumber < 99999) {
    context.fillStyle = `rgba(255, 255, 255, ${thirdOpacity})`;
    context.fillText(
      "Will You Be Mine?",
      "Will You Marry Me and be my valentine?"
      canvas.width / 2,
      canvas.height / 2 + 120
    );
    thirdOpacity = thirdOpacity + 0.01;

    button.style.display = "block";
  }
}

    function draw() {
        context.putImageData(baseFrame, 0, 0);

        drawStars();
        updateStars();
        drawText();

        if (frameNumber < 99999) {
            frameNumber++;
        }
        window.requestAnimationFrame(draw);
    }

    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);
    });

    draw();
});

