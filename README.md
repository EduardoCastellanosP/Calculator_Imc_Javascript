🧮 Calculadora IMC
Este proyecto es una calculadora de IMC (Índice de Masa Corporal) desarrollada con HTML, CSS y JavaScript, que permite al usuario ingresar sus datos personales, obtener su resultado de IMC y visualizar una imagen relacionada con su estado corporal.

✨ Funcionalidades
✅ Cálculo del IMC en base a peso y estatura.

✅ Muestra el resultado del IMC junto con un estado descriptivo (ej. "Peso normal").

✅ Muestra una imagen asociada al resultado.

✅ Botón "Bloquear" para deshabilitar todos los campos del formulario.

✅ Botón "Desbloquear" para volver a habilitarlos.

✅ Botón "Nuevo" para limpiar el formulario y el resultado.

✅ Uso del DOM para manejar eventos y actualizar el contenido de la página.

🧠 Lógica implementada
calculadoraimc(): toma los datos del formulario, calcula el IMC, determina el estado de salud, y actualiza el contenido del DOM con el resultado y la imagen.

bloquear(): desactiva todos los campos del formulario (inputs).

desbloquear(): reactiva todos los campos.

borrar(): limpia el formulario, borra el resultado del IMC y la imagen.

Los botones están conectados a funciones usando addEventListener() para una mejor organización del código.

🛠️ Tecnologías utilizadas
HTML

CSS

JavaScript (DOM, eventos)
