// If Else Program
function calculateBMI() {
  const weight = prompt('Masukkan berat badan(Kilogram): ');
  const height = prompt('Masukkan tinggi badan(Meter): ');
  const bmi = weight / (height * height);

  if (!isNaN(bmi)) {
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
    outputElement.innerHTML = `<p>BMI Anda sebesar ${bmi.toFixed(2)}. ${result}</p>`;
  } else {
    alert('Masukkan input dengan benar!');
  }
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
  return [language, greeting];
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

// While Do While Program
function pascalTriangle() {
  const row_num = prompt('Masukkan jumlah baris segitiga pascal');
  let baris = '';

  let n = 0;
  do {
    let val = 1;

    let r = 1;
    while (r <= n) {
      baris = baris.concat('    ', val, '    ');

      val = (val * (n - r)) / r;
      r = r + 1;
    }

    baris = baris.concat('\n');

    n = n + 1;
  } while (n <= row_num);

  document.getElementById('pascalTriangle').innerHTML = `Menampilkan segitiga pascal sebanyak ${row_num} baris! \n${baris}`;
}

// Function Statement Program
function introductions() {
  let [language, greeting] = greetings();
  let introduction = null;

  const nama_depan = prompt('Masukkan nama depan Anda');
  const nama_belakang = prompt('Masukkan nama belakang Anda');

  let nama_lengkap = nama_depan + ' ' + nama_belakang;
  console.log(language);

  switch (language) {
    case '1':
    case 'english':
      introduction = greeting + ` My name is ${nama_lengkap}. Nice to meet you!`;
      break;

    case '2':
    case 'french':
      introduction = greeting + ` Je m'appelle ${nama_lengkap}. Enchante de faire votre connaissance.`;
      break;

    case '3':
    case 'japanese':
      introduction = greeting + ` Watashi no namae wa ${nama_lengkap} desu. Douzo yoroshiku!`;
      break;

    default:
      introduction = greeting + ` Nama saya ${nama_lengkap}. Salam kenal!`;
      break;
  }

  document.getElementById('introductions').innerHTML = introduction;
}
