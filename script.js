let output = document.getElementById('output');
let commandInput = document.getElementById('command');
let commandHistory = [];
let historyIndex = 0;

commandInput.addEventListener('keydown', function(event) {
	if (event.keyCode === 13) { // Enter key
		let command = commandInput.value.trim();
		if (command !== '') {
			commandHistory.push(command);
			historyIndex = commandHistory.length;
			handleCommand(command);
		}
		commandInput.value = '';
	} else if (event.keyCode === 38) { // Up arrow key
		if (historyIndex > 0) {
			historyIndex--;
			commandInput.value = commandHistory[historyIndex];
		}
	} else if (event.keyCode === 40) { // Down arrow key
		if (historyIndex < commandHistory.length - 1) {
			historyIndex++;
			commandInput.value = commandHistory[historyIndex];
		} else {
			historyIndex = commandHistory.length;
			commandInput.value = '';
		}
	}
});

function handleCommand(command) {
	if (command === 'clear') {
		output.innerHTML = '';
	} else if (command === 'help') {
		output.innerHTML += '<p>Available commands:</p>';
		output.innerHTML += '<ul>';
		output.innerHTML += '<li>about >> [Who.Am.I]</li>';
    output.innerHTML += '<ul>\n';
		output.innerHTML += '<li>Contact >> [Keep.In.Touch]</li>';
    output.innerHTML += '<ul>\n';
		output.innerHTML += '<li>work >> [Repos]</li>';
    output.innerHTML += '<ul>\n';
		// output.innerHTML += '<li>blog</li>';
    output.innerHTML += '<ul>\n';
    output.innerHTML += '<li>quote >> [Random.thoughts]</li>';
    output.innerHTML += '<ul>\n';
    output.innerHTML += '<li>echo >> [Prints Text]</li>';
    output.innerHTML += '<ul>\n';
    output.innerHTML += '<li>search >> [Google It!]</li>';
    output.innerHTML += '<ul>\n';
		output.innerHTML += '<li>clear >> [Clear.Screen]</li>';
		output.innerHTML += '</ul>';
	} 
// about part
  else if (command === 'about') {
    const profileIcon = document.createElement('div');
    profileIcon.classList.add('profile-icon');
  
    const profileImg = document.createElement('img');
    profileImg.src = 'img/fb.jpg';
    profileImg.alt = 'Profile Image';
  
    profileIcon.appendChild(profileImg);
  
    output.innerHTML = '';
    output.appendChild(profileIcon);
    output.innerHTML += '<p class= "about-me"><span style="color: #F2A65A;">About me:</span></p>';
    output.innerHTML += '<p class="about-me-text">I am a Software QA Engineer and Design Enthusiastic. Loves to customize and manupulate code. I love spending my free time coding and experimenting with new technologies. Also a great learner and self taught programmer.I am an introvert by nature and prefer to spend most of my time research and working on my personal projects. Thanks for taking the time to learn a little more about me!! </p>';
    output.innerHTML += '<button id="about-btn">Learn more</button>';
  
    let aboutBtn = document.getElementById('about-btn');
    aboutBtn.addEventListener('click', function() {
      // window.location.href = 'about.html';
      window.open('about.html', '_blank');

    });
  }
  // echo part
  else if (command === 'echo') {
    // Create the HTML elements for the input form
    const form = document.createElement('form');
    const input = document.createElement('input');
    const button = document.createElement('button');
    input.type = 'text';
    input.placeholder = 'Type something...';
    button.textContent = 'Echo';

    // Apply custom styles to the input box
    input.style.width = '100%';
    input.style.padding = '10px';
    input.style.border = '2px solid #ccc';
    input.style.borderRadius = '4px';
    input.style.boxSizing = 'border-box';

    // Apply custom styles to the modal dialog
    const modalStyles = {
      background: '#DDFCAD',
      padding: '100px',
      border: 'none',
      borderRadius: '4px',
      boxShadow: '0 0 20px rgba(0,0,0,3)'
    };

    // Define the function to execute when the form is submitted
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      // Display the typed message on the terminal
      output.innerHTML += '<p>' + input.value + '</p>';
      // Clear the input field
      input.value = '';
      // Close the modal dialog
      swal.close();
    });

    // Add the form elements to the modal dialog
    form.appendChild(input);
    form.appendChild(button);

    // Display the modal dialog with the input form
    swal({
      content: form,
      button: false,
      closeOnClickOutside: false,
      closeOnEsc: false,
      style: modalStyles
    });
}

  // search part
else if (command === 'search') {
  window.location.href = 'https://www.google.com';
}
// quote part
else if (command === 'quote') {
  const quote = [
    '<span style="color: #F2545B;">Programs must be written for people to read, and only incidentally for machines to execute. - Harold Abelson</span>',
    '<span style="color: #A1C181;">The most disastrous thing that you can ever learn is your first programming language. - Alan Kay</span>',
    '<span style="color: #FFF7AE;">Java is to JavaScript as ham is to hamster. - Jeremy Keith</span>',
    '<span style="color: #FE7F2D;">Code is like humor. When you have to explain it, it’s bad. - Cory House</span>',
    '<span style="color: #C6D8AF;">Any fool can write code that a computer can understand. Good programmers write code that humans can understand. - Martin Fowler</span>',
    '<span style="color: #E4C1F9;">The best way to predict the future is to invent it. - Alan Kay</span>',
    '<span style="color: #56CBF9;">Software is a great combination of artistry and engineering. - Bill Gates</span>',
    '<span style="color: #F45866;">I have always wished for my computer to be as easy to use as my telephone; my wish has come true because I can no longer figure out how to use my telephone." - Bjarne Stroustrup</span>',
    '<span style="color: #779CAB;">"Debugging is like being a detective in a mystery movie where you are also the murderer." - Filipe Fortes</span>',
    '<span style="color: #DAB6C4;">"If you think math is hard, try programming." - Trish Parr</span>',
    '<span style="color: #9DB4AB;">"Every great developer you know got there by solving problems they were unqualified to solve until they actually did it." - Patrick McKenzie</span>',
    '<span style="color: #4C9F70;">"The most important property of a program is whether it accomplishes the intention of its user." - C.A.R. Hoare</span>',
    '<span style="color: #C7CCDB;">"I am not a great programmer; I am just a good programmer with great habits." - Kent Beck</span>',
    '<span style="color: #C45AB3;">If you can not use chatGPT properly, then you are not smart enough</span>',
    '<span style="color: #F6F740;">The function of good software is to make the complex appear to be simple. - Grady Booch</span>',
    '<span style="color: #DBF9F0;">And is &&, Or is ||, and Not is !, Except in Python.</span>'
    
  ];

  const randomQuote = quote[Math.floor(Math.random() * quote.length)];
  output.innerHTML += `<p>${randomQuote}</p>`;
}

else if (command === 'contact') {
  const output = document.getElementById('output');
  output.innerHTML = '<p class="about-me"><span style="color: #F2A65A;">Keep in Touch</span></p>';
  output.innerHTML += '<ul class="contact-list">';
  output.innerHTML += '<li class="contact-item"><a href="mailto:jubairrahman64@gmail.com" target="_blank"><img src="img/email.png" alt="Email" class="fa-icon"></a></li>';
  output.innerHTML += '<li class="contact-item"><a href="tel:+8801645763353" target="_blank"><img src="img/phone.png" alt="Phone icon" class="fa-icon"></a></li>';
  output.innerHTML += '<li class="contact-item"><a href="https://discordapp.com/users/9183" target="_blank"><img src="img/discord.png" alt="Discord icon"></a></li>';
  output.innerHTML += '<li class="contact-item"><a href="https://github.com/JubairRahman" target="_blank"><img src="img/githubpng.png" alt="GitHub icon"></a></li>';
  output.innerHTML += '<li class="contact-item"><a href="https://www.instagram.com/thejubairjubu/" target="_blank"><img src="img/instagram.png" alt="Instagram icon"></a></li>';
  output.innerHTML += '<li class="contact-item"><a href="https://wa.me/+8801645763353" target="_blank"><img src="img/wapppng.png" alt="WhatsApp icon"></a></li>';
  output.innerHTML += '<li class="contact-item"><a href="https://www.linkedin.com/in/jubair-rahman0/" target="_blank"><img src="img/linkedin.png" alt="LinkedIn icon"></a></li>';
  output.innerHTML += '</ul>';

// add event listener for phone number
const phoneIcon = document.querySelector('a[href^="tel"]');
phoneIcon.addEventListener('click', function(event) {
  event.preventDefault();
  swal({
    title: "Phone",
    text: "+8801645763353",
     icon: "info",
    button: "Close",
    closeOnClickOutside: false,
    closeOnEsc: false,
    dangerMode: false,
    timer: null,
    timerProgressBar: false,
    background: '#F2A65A',
  });
});

// add event listener for email
const emailIcon = document.querySelector('a[href^="mailto"]');
emailIcon.addEventListener('click', function(event) {
  event.preventDefault();
  swal({
    title: "Email",
    text: "jubairrahman64@gmail.com",
    icon: "info",
    button: "Close",
    closeOnClickOutside: false,
    closeOnEsc: false,
    dangerMode: false,
    timer: null,
    timerProgressBar: false,
    background: '#F2A65A',
  });
});

}

      // work part
      else if (command === 'work') {
    output.innerHTML += '<p>My work:</p>';
    output.innerHTML += '<button class="btn-work" onclick="location.href=\'work.html\'">Check it</button>';
    output.innerHTML += '<ul>';
    output.innerHTML += '<li>Project 1: <a href="#">Link</a></li>';
    output.innerHTML += '<li>Project 2: <a href="#">Link</a></li>';
    output.innerHTML += '<li>Project 3: <a href="#">Link</a></li>';
    output.innerHTML += '</ul>';
}
// blog part
else if (command === 'blog') {
    output.innerHTML += '<p>Blog:</p>';
    output.innerHTML += '<button class="btn-blog" onclick="location.href=\'work.html\'">Check it</button>';
    output.innerHTML += '<ul>';
    output.innerHTML += '<li>Blog 1: <a href="#">Link</a></li>';
    output.innerHTML += '<li>Blog 2: <a href="#">Link</a></li>';
    output.innerHTML += '<li>Blog 3: <a href="#">Link</a></li>';
    output.innerHTML += '</ul>';
}
// clear part
else if (command === 'clear') {
  output.innerHTML += '<p> Type "help" to know this person </p>';
}  
 else {
		output.innerHTML += '<p>Command not found: ' + command + '</p>';
	}
	output.scrollTop = output.scrollHeight;
}

// Define available themes
/*
const themes = {
    dark: {
      backgroundColor: '#292D3E',
      textColor: '#FFFFFF',
      buttonColor: '#FFFFFF',
      buttonTextColor: '#292D3E'
    },
    light: {
      backgroundColor: '#FFFFFF',
      textColor: '#292D3E',
      buttonColor: '#292D3E',
      buttonTextColor: '#FFFFFF'
    },
    retro: {
      backgroundColor: '#FFCC00',
      textColor: '#000000',
      buttonColor: '#000000',
      buttonTextColor: '#FFCC00'
    }
  };
  
  // Set the default theme to dark
  let currentTheme = themes.dark;
  
  // Function to change the theme
  function changeTheme(themeName) {
    // Check if the theme exists
    if (themes.hasOwnProperty(themeName)) {
      // Set the new theme
      currentTheme = themes[themeName];
      // Apply the new theme to the page
      document.body.style.backgroundColor = currentTheme.backgroundColor;
      document.body.style.color = currentTheme.textColor;
      const buttons = document.getElementsByTagName('button');
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = currentTheme.buttonColor;
        buttons[i].style.color = currentTheme.buttonTextColor;
      }
    } else {
      console.log(`Theme '${themeName}' not found.`);
    }
  }
  */
  // Example usage: 
  // Change to light theme
  changeTheme('light');
  // Change to retro theme
  changeTheme('retro');
  // Change back to dark theme
  changeTheme('dark');
  
  function showAlert() {
    swal({
      title: "Custom Alert Box",
      text: "This is a custom alert box!",
      icon: "success",
      button: "OK",
      closeOnClickOutside: false,
      className: "custom-alert-box",
    });
  }


