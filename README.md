# 🧠 Pokémon Finder / Comparador VS

## 📌 Integrantes

- **Abdías Ruedas**  
- **Miguel Martínez**  
- **José Sánchez**

---

## 📖 Descripción del Proyecto

**Pokémon Finder** es una aplicación web interactiva que permite:

✔ Buscar Pokémon por nombre o ID usando la *PokéAPI*  
✔ Visualizar tarjetas de Pokémon con imagen, tipos y más  
✔ Guardar búsquedas en un histórico local con cache  
✔ Guardar Pokémon favoritos  
✔ Comparar dos Pokémon en un modo **VS** con cálculo de puntajes  
✔ Analizar ventajas de tipos y estadísticas en la batalla

Esta app está implementada utilizando **HTML, CSS y JavaScript puro**, sin frameworks, y consume datos directamente desde la [PokéAPI]

---

## 🚀 Instrucciones de Uso

📘 INSTRUCCIONES DE USO

1. Requisitos del sistema   
Navegador web moderno (Google Chrome, Edge o Firefox)
Conexión a Internet (para consultar la PokeAPI)
JavaScript habilitado
No requiere instalación adicional

2. Inicio del programa
Abrir el archivo index.html en el navegador.
Al cargarse la página, el sistema inicializa automáticamente:
La caché local
El sistema de histórico
El diseño visual y navegación

3. Navegación principal
En la parte superior se encuentran los botones principales:
🔍 Buscar: búsqueda individual de Pokémon o habilidades
📜 Histórico: muestra búsquedas recientes guardadas
⚔️ VS: comparación entre dos Pokémon
❤️ Favoritos: Pokémon guardados por el usuario
Los botones permiten cambiar de sección sin perder información almacenada.

4. Uso del Buscador
Seleccionar el tipo de búsqueda:
Pokémon
Habilidad
Escribir el nombre del Pokémon o habilidad.
Presionar el botón Buscar.
Resultados mostrados:
Imagen del Pokémon
Tipo(s)
Estadísticas base
Habilidades
Cadena evolutiva
Origen de los datos (API o Caché)
📌 Los datos se guardan automáticamente en caché por 24 horas.

5. Histórico de búsquedas
En la sección Histórico se muestran:
Pokémon buscados recientemente
Fecha y hora de consulta
Indicador de origen (API / Caché)
Acciones disponibles:
❤️ Agregar o quitar de favoritos
🔄 Volver a buscar un Pokémon
🗑️ Eliminar una búsqueda específica
🧹 Limpiar todo el histórico

6. Favoritos
En la sección Favoritos:
Se muestran todos los Pokémon marcados como favoritos
Los datos se conservan aunque se cierre el navegador
Acciones disponibles:
❌ Eliminar un favorito
🗑️ Eliminar todos los favoritos (con confirmación)

7. Modo Pokémon VS
Ingresar el nombre de dos Pokémon distintos.
Presionar el botón de comparación.
El sistema realiza automáticamente:
Comparación de estadísticas base
Evaluación de ventajas y desventajas de tipo
Cálculo de puntaje total
Determinación del ganador
Resultados mostrados:
Pokémon ganador
Desglose de estadísticas
Ventajas de tipo
Explicación del resultado
❤️ Ambos Pokémon pueden guardarse como favoritos.

8. Sistema de caché
Los datos consultados se almacenan en localStorage
Duración de la caché: 24 horas
Datos expirados se eliminan automáticamente
Mejora el rendimiento y reduce consultas a la API

9. Mensajes y alertas
La aplicación utiliza SweetAlert para:
Confirmaciones de eliminación
Mensajes de error
Advertencias
Acciones exitosas
Esto garantiza una experiencia clara e intuitiva.

10. Consideraciones importantes
Los nombres de Pokémon deben ingresarse correctamente.
Sin conexión a Internet no se podrán realizar nuevas búsquedas.
El almacenamiento local depende del navegador.

11. Cierre  
Pokémon Finder es una aplicación intuitiva y funcional que combina consumo de APIs, almacenamiento local y una interfaz amigable para explorar información Pokémon de manera eficiente.

##  Capturas de pantalla

<img width="959" height="435" alt="image" src="https://github.com/user-attachments/assets/106589a5-9769-493e-ba4a-6e2056ea6d86" />

<img width="251" height="298" alt="image" src="https://github.com/user-attachments/assets/f90e6259-1def-4b92-826f-4daf448eb210" />

<img width="959" height="436" alt="image" src="https://github.com/user-attachments/assets/23d8a2bd-72a6-41c0-898f-6dc07918e3d5" />

<img width="959" height="436" alt="image" src="https://github.com/user-attachments/assets/81b829f0-a0e2-45fa-8232-158e5ff78690" />

<img width="685" height="436" alt="image" src="https://github.com/user-attachments/assets/642b3405-9f93-4f73-b656-105e262b1dad" />

<img width="530" height="386" alt="image" src="https://github.com/user-attachments/assets/62c421ac-80d5-4bf2-96bd-a6dbd5260184" />


**LINK DE GITHUB PAGES:** https://joalesf.github.io/Api-Pokemon/

### 📥 Clonar el repositorio
```bash
git clone https://github.com/Joalesf/Api-Pokemon
