// Switch Case Program
function greetings() {
  const language = prompt('Masukkan bahasa yang ingin dipilih(English, French, Japanese, Default): ');
  let greeting = null;

  switch (language) {
    case 'English':
      greeting = 'Good Morning!';
      break;
    case 'French':
      greeting = 'Bonjour!';
      break;
    case 'Japanese':
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
