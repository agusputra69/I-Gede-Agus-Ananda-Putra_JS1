// If Else Program
// BMI Calculator
function calculateBMI() {
  const weight = prompt('Masukkan berat badan(kg): ');
  const height = prompt('Masukkan tinggi badan(m): ');
  const bmi = weight / (height * height);

  if (bmi < 18.5) {
    result = 'Berat badan anda kurang';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    result = 'Berat badan anda ideal';
  } else if (bmi >= 25.0 && bmi < 29.9) {
    result = 'Berat badan anda berlebih';
  } else {
    result = 'Anda Obesitas';
  }
  const outputElement = document.getElementById('result');
  outputElement.innerHTML = `<p>Hasilnya: ${result}</p>`;
}

// Switch Case Program
function greetings() {
  const language = prompt('Masukkan bahasa yang ingin dipilih(English, French, Japanese, Default): ').toLowerCase();
  let greeting = null;

  switch (language) {
    case 'english':
      greeting = 'Good Morning!';
      break;
    case 'french':
      greeting = 'Bonjour!';
      break;
    case 'japanese':
      greeting = 'Ohayou Gozaimasu!';
      break;
    default:
      greeting = 'Selamat Pagi!';
  }
  document.getElementById('greeting').innerHTML = greeting;
}

// For Statement Program
function reverseText() {
  const text = prompt('Masukkan teks yang ingin dibalik: ');
  let reversedText = '';

  for (let i = text.length - 1; i >= 0; i--) {
    reversedText += text[i];
  }

  console.log('Teks Terbalik:', reversedText);
  document.getElementById('reversedText').innerHTML = reversedText;
}
