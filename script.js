 // Función para resaltar la tarjeta visualmente al activar el evento
    const highlight = (el) => {
        el.classList.add('active');
        setTimeout(() => el.classList.remove('active'), 500);
    };

    // 1. Click
    document.getElementById('cardClick').addEventListener('click', function() {
        alert('¡Evento Click detectado!');
        highlight(this);
    });

    // 2. Mouseenter (Hover)
    document.getElementById('cardHover').addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#fceabb';
        highlight(this);
    });

    // 3. Double Click
    document.getElementById('cardDblClick').addEventListener('dblclick', function() {
        this.querySelector('h2').innerText = "¡DOBLE CLIC!";
        highlight(this);
    });

    // 4. Keydown
    document.getElementById('inputKey').addEventListener('keydown', function() {
        console.log('Tecla presionada');
        highlight(this.parentElement);
    });

    // 5. Focus
    document.getElementById('inputFocus').addEventListener('focus', function() {
        this.style.borderColor = 'blue';
        highlight(this.parentElement);
    });

    // 6. Blur
    document.getElementById('inputBlur').addEventListener('blur', function() {
        alert('Saliste del input (Blur)');
        highlight(this.parentElement);
    });

    // 7. Submit
    document.getElementById('miForm').addEventListener('submit', function(e) {
        e.preventDefault(); // Evita que la página se recargue
        alert('Formulario enviado');
        highlight(this.parentElement);
    });

    // 8. Change
    document.getElementById('selectChange').addEventListener('change', function() {
        alert('Cambiaste el valor a: ' + this.value);
        highlight(this.parentElement);
    });