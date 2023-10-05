//ketika tombol submit di Klik, maka akan dijalankan fungsi tampilNiali
document.getElementById("submit-btn").addEventListener("click", bmiCalculate);

//mencegah laman HTML untuk refresh/reload secara otomatis ketika selesai klik tombol
document
  .getElementById("submit-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
  });

//function untuk mengambil nilai dari input data kemudia menghitung BMI berdasarkan hasil imputan tersebut
function bmiCalculate() {
  //mengambil nilai berat dari input number dan dirubah ke tipe data float
  const weight = parseFloat(document.getElementById("weight").value);
  //mengambil nilai tinggi dari input number dan dirubah ke tipe data float
  const height = parseFloat(document.getElementById("height").value);

  //melakukan pengecekan untuk berat dan tinggi badan agar nilai yang dimasukkan valid
  weightCheck(weight);
  heightCheck(height);

  //rumus perhitungan BMI calculator
  const BMICalculator = weight / ((height / 100) * (height / 100));
  //membuat hasil perhitungan BMI calculator dibulatkan 1 angka dibelakang desimal.
  //toFixed membuat tipe data berubah menjadi string,oleh karenanya perlu diparse lagi.
  let BMIResult = parseFloat(BMICalculator.toFixed(1));

  //hasil perhitungan dimasukkan ke variabel "hasil" yang mengambil elemen H1 di HTML
  document.getElementById("bmiValue").innerHTML =
    "Nilai BMI kamu : " + "<b>" + BMIResult + "</b>";

  //logika dari BMI Categories
  bmiCategories(BMIResult);
}

//function untuk kategori BMI berdasarkan hasil perhitungan BMI
function bmiCategories(hasil) {
  if (hasil < 18.5) {
    document.getElementById("bmiCondition").innerHTML =
      "Kondisi badan kamu : <b>Underweight</b>";
    document.body.style.backgroundColor = "rgb(246, 79, 79)";
  } else if (hasil >= 18.5 && hasil < 25) {
    document.getElementById("bmiCondition").innerHTML =
      "Kondisi badan kamu : <b>Normal</b>";
    document.body.style.backgroundColor = "rgb(142,189,87)";
  } else if (hasil >= 25 && hasil < 30) {
    document.getElementById("bmiCondition").innerHTML =
      "Kondisi badan kamu : <b>Overweight</b>";
    document.body.style.backgroundColor = "rgb(255,212,104)";
  } else if (hasil >= 30) {
    document.getElementById("bmiCondition").innerHTML =
      "Kondisi badan kamu : <b>Obesity</b>";
    document.body.style.backgroundColor = "rgb(246, 79, 79)";
  }
}

//function untuk cek tinggi badan
function heightCheck(nilai) {
  if (nilai < 100) {
    alert("Masukkan nilai tinggi dalam satuan cm, minimal tinggi badan 100cm");
    location.reload();
  } else {
    return;
  }
}

//function untuk cek berat badan
function weightCheck(nilai) {
  if (nilai < 10) {
    alert("Masukkan nilai berat dalam satuan kg, minimal berat badan 10kg");
    location.reload();
  } else {
    return;
  }
}
