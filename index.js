let element = document.getElementById('resume').cloneNode(true);
let button = element.querySelector('.download-btn');
if (button) {
    button.remove();
}
function downloadPDF() {
  let element = document.getElementById('resume');
  let opt = {
    margin:       0.5,
    filename:     'Karimov_Azamat_Resume.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
  };
  html2pdf().from(element).set(opt).save();
}