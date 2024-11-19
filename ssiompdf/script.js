
document.addEventListener('DOMContentLoaded', () => {
  const contentArea = document.getElementById('contentArea');

  document.getElementById('userDataBtn').addEventListener('click', () => {
    contentArea.innerHTML = `
      <h2>Datos del Usuario</h2>
      <form>
        <label for="name">Nombre:</label>
        <input type="text" id="name" name="name" required><br><br>
        <label for="email">Correo Electrónico:</label>
        <input type="email" id="email" name="email" required><br><br>
        <button type="submit">Guardar</button>
      </form>
    `;
  });

  document.getElementById('uploadPdfBtn').addEventListener('click', () => {
    contentArea.innerHTML = `
      <h2>Adjuntar PDF</h2>
      <form id="uploadForm">
        <label for="pdfFile">Seleccione un archivo PDF:</label>
        <input type="file" id="pdfFile" accept="application/pdf" required><br><br>
        <button type="submit">Subir PDF</button>
      </form>
    `;

    const uploadForm = document.getElementById('uploadForm');
    uploadForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const fileInput = document.getElementById('pdfFile');
      if (fileInput.files.length > 0) {
        alert(`Archivo "${fileInput.files[0].name}" subido correctamente.`);
      } else {
        alert('Por favor, seleccione un archivo PDF.');
      }
    });
  });

  document.getElementById('receivedPdfBtn').addEventListener('click', () => {
    contentArea.innerHTML = `
      <h2>PDF Recibidos</h2>
      <ul>
        <li>Documento1.pdf</li>
        <li>Documento2.pdf</li>
      </ul>
    `;
  });
});
