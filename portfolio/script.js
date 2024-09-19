// Function to convert text to binary
function convertTextToBinary() {
    const text = document.getElementById('inputText').value;
    let binary = '';
    for (let i = 0; i < text.length; i++) {
        binary += text[i].charCodeAt(0).toString(2).padStart(8, '0') + ' ';
    }
    document.getElementById('outputText').textContent = binary.trim();
}

// Function to convert binary to text
function convertBinaryToText() {
    const binary = document.getElementById('inputText').value;
    const binaryArray = binary.split(' ');
    let text = '';
    binaryArray.forEach(bin => {
        text += String.fromCharCode(parseInt(bin, 2));
    });
    document.getElementById('outputText').textContent = text;
}

// Handling project form input
document.getElementById('projectForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting
    const func = document.getElementById('functionInput').value.toLowerCase();
    
    let project = '';
    if (func === 'print') {
        project = 'Project 1: Python Console Application';
    } else if (func === 'type') {
        project = 'Project 2: TypeScript Web App';
    } else if (func === 'string') {
        project = 'Project 3: String Manipulation Library';
    } else {
        project = 'No related project found for this function.';
    }

    document.getElementById('projectOutput').textContent = project;
});
