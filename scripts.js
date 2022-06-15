document.getElementById('convert').onclick = tempConvert;
document.getElementById('clear').onclick = clearForm;

function tempConvert() {
    
    var fahrenheit = document.getElementById("fahrenheit").value;
    var celsius = document.getElementById("celsius").value;
  
  if (fahrenheit != '') {
        celsius = (parseInt(fahrenheit) - 32) / 1.8;
    } else {
        fahrenheit = (parseInt(celsius) * 1.8) + 32;
    }
    document.getElementById('fahrenheit').value = parseInt(fahrenheit).toFixed(1);
    document.getElementById('celsius').value = parseInt(celsius).toFixed(1);
}


function clearForm() {
    document.getElementById('fahrenheit').value = '';
    document.getElementById('celsius').value = '';
} 
