# Encriptador de Texto

Este proyecto es una aplicación web simple que permite encriptar y desencriptar texto utilizando un cifrado de desplazamiento.

## Descripción

La aplicación toma un texto de entrada y lo encripta desplazando cada letra un número fijo de posiciones en el alfabeto. De manera similar, puede desencriptar el texto previamente encriptado devolviendo las letras a sus posiciones originales. La aplicación está diseñada para aceptar solo letras minúsculas sin acentos.

## Características

- Encriptar texto utilizando un cifrado de desplazamiento (shift).
- Desencriptar texto previamente encriptado.
- Validación para asegurarse de que el texto solo contiene letras minúsculas y sin acentos.
- Copiar el resultado al portapapeles con un solo clic.

## Estructura del Proyecto

- `index.html`: El archivo HTML principal que contiene la estructura de la aplicación.
- `css/styles.css`: El archivo CSS que contiene los estilos de la aplicación.
- `js/script.js`: El archivo JavaScript que contiene la lógica para encriptar, desencriptar y copiar el texto al portapapeles.
- `img/Logo@2x.png`: Imagen del logo utilizado en la aplicación.
- `img/Muñeco.png`: Imagen descriptiva mostrada en la sección derecha.

## Cómo Usar

1. Clona el repositorio en tu máquina local.
2. Abre el archivo `index.html` en tu navegador web.
3. Ingresa el texto que deseas encriptar en el área de texto proporcionada.
4. Haz clic en el botón "Encriptar" para encriptar el texto.
5. Haz clic en el botón "Desencriptar" para desencriptar el texto.
6. Para copiar el resultado al portapapeles, haz clic en el botón "Copiar al portapapeles" que aparece debajo del texto resultante.

## Código CSS

```css

body,
html {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-color: #e5e7eb;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.container {
  display: flex;
  flex-direction: column;
  background-color: #e5e7eb;
  padding: 1rem;
  width: 100%;
  max-width: 1280px;
  box-sizing: border-box;
}

/* Media Queries */
@media (min-width: 768px) {
  .container {
    flex-direction: row;
    width: 100%;
    height: 100%;
    padding: 2rem;
  }

  .left-section {
    width: 75%;
    padding-right: 1rem;
  }

  .right-section {
    width: 25%;
  }

  .input-textarea {
    height: 24rem;
  }

  .descriptive-img {
    margin-bottom: 1rem;
    max-width: 100%;
    height: auto;
    display: block;
  }
}

/* Left Section */
.left-section {
  width: 100%;
  margin-bottom: 1.5rem;
}

.logo {
  margin-bottom: 1.5rem;
}

.logo-img {
  height: 2.5rem;
}

.input-area {
  margin-bottom: 1rem;
}

.input-textarea {
  width: 100%;
  height: 10rem;
  background-color: #e5e7eb;
  border: none;
  outline: none;
  padding: 1rem;
  font-size: 1.25rem;
  color: #1e3a8a;
  box-sizing: border-box;
}

.info {
  display: flex;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
}

.info-icon {
  margin-right: 0.5rem;
}

.info-text {
  font-size: 0.875rem;
  color: #4b5563;
}

.buttons {
  display: flex;
  gap: 1rem;
}

.encrypt-btn,
.decrypt-btn {
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
}

.encrypt-btn {
  background-color: #1e3a8a;
  color: white;
  border: none;
}

.decrypt-btn {
  border: 2px solid #1e3a8a;
  color: #1e3a8a;
  background-color: transparent;
}

/* Right Section */
.right-section {
  width: 100%;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}


.descriptive-img {
  display: none;
}


@media screen and (min-width: 1024px) {
  .descriptive-img {
    display: inline; 
    margin-bottom: 1rem;
    max-width: 100%;
    height: auto;
  }
}

.message-title {
  font-size: 1.25rem;
  font-weight: bold;
  color: #374151;
  margin-bottom: 0.5rem;
  text-align: center;
}

.message-text {
  font-size: 1rem;
  color: #6b7280;
  text-align: center;
}

.copy-success {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #4caf50;
  color: white;
  padding: 12px 24px;
  border-radius: 5px;
  font-size: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  display: none;
}

.copy-success:not(.hidden) {
  display: block;
}

.result {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center; 
    width: 100%;
}

.result-text {
    font-size: 1.25rem;
    color: #1e3a8a;
    margin-bottom: 1rem;
}


@media (min-width: 768px) {
    .result {
        width: 75%; 
    }
}
