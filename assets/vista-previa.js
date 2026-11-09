// Vista previa only: GitHub Pages can't run enviando_info.php, so the contact
// form shows a note instead of sending. On www.llarasa.com it works as usual.
(function () {
  document.addEventListener('submit', function (e) {
    var form = e.target;
    var action = (form && form.getAttribute && form.getAttribute('action')) || '';
    if (!/\.php($|\?)/i.test(action)) return;
    e.preventDefault();
    var note = form.querySelector('.vp-note');
    if (!note) {
      note = document.createElement('p');
      note.className = 'vp-note';
      note.setAttribute('role', 'status');
      form.appendChild(note);
    }
    note.textContent = 'Vista previa: el formulario todavía no envía mensajes desde aquí. ' +
      'Funcionará cuando el sitio se publique en www.llarasa.com.';
  }, true);
})();
