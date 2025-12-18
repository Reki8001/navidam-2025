# 🎶 NaviDAM SDK – Registro de melodías y plantillas

## **📁 Estructura real del proyecto**

La SDK tiene esta estructura (ya creada):

```
com.navidam.sdk
├── api                      ✅ TU ZONA DE TRABAJO
│   ├── melodia
│   │   └── LaVacaLola.java
│   ├── plantilla
│   │   ├── ModeloPlantillaPrueba.java
│   │   └── PlantillaPrueba.java
│   └── NaviDAMAPI.java
│
└── internal                  ❌ NO TOCAR
├── mail
│   └── Mailer.java
├── melodia
├── meme
└── ...
```

### 🚫 Normas IMPORTANTES
#### **❌ NO tocar nunca**

Está **terminantemente prohibido**:

- Modificar cualquier clase dentro de:
```
com.navidam.sdk.internal
```
- Crear nuevas clases dentro de internal
- Cambiar enums, utilidades o helpers internos

⚠️ **Modificar internal invalida la entrega.**

#### **✅ Dónde SÍ debes trabajar**

Todo el código que desarrolles debe estar **exclusivamente** dentro de:
```
com.navidam.sdk.api
```
Y concretamente en:
- com.navidam.sdk.api.melodia
- com.navidam.sdk.api.plantilla

## **🎵 Creación de melodías**

Las melodías se crean usando la clase Melodia proporcionada por la SDK interna.

Ejemplo de estilo correcto:

```java
new Melodia("Ejemplo")
    .instrumento(Instrumento.FLAUTA_DULCE)
    .tempo(120)
    .nota(Nota.DO, Figura.NEGRA)
    .nota(Nota.RE, Figura.NEGRA)
    .nota(Nota.MI, Figura.BLANCA);
```

📌 Reglas:
- Las notas se añaden **en orden**
- Se pueden usar silencios (.silencio(Figura.X))
- El nombre de la melodía debe ser claro y reconocible

### **🧩 Organización de las melodías**

#### **Cada canción → una clase**

Cada melodía debe estar en su **propia clase**, dentro del paquete:

```java
com.navidam.sdk.api.melodia
```

Ejemplo real (correcto):

```java
package com.navidam.sdk.api.melodia;

public class LaVacaLola {

    public static Melodia crear() {
        return new Melodia("La vaca Lola")
            .instrumento(Instrumento.FLAUTA_DULCE)
            .tempo(120)
            .nota(Nota.SOL, Figura.NEGRA)
            .nota(Nota.SOL, Figura.NEGRA)
            .nota(Nota.LA, Figura.NEGRA)
            .nota(Nota.SOL, Figura.BLANCA);
    }
}
```

✔️ Esto facilita:
- Reutilización
- Limpieza del código
- Trabajo en equipo
- Uso posterior por otros módulos

### 📜 Registro de melodías y plantillas (NaviDAMAPI)

La clase central de la API es: `com.navidam.sdk.api.NaviDAMAPI`

Esta clase es la que expone al exterior qué melodías y plantillas existen.

Ejemplo de implementación correcta:

```java
public class NaviDAMAPI {

    public List<Melodia> listadoMelodias() {
        return List.of(
            LaVacaLola.crear()
        );
    }

    public List<Plantilla> listadoPlantillas() {
        return List.of(
            PlantillaPrueba.crear()
        );
    }
}
```

📌 Importante:
•	Las melodías no se crean directamente aquí
•	Aquí solo se registran llamando a las clases del paquete melodia


### 🧪 Pruebas locales (opcional)

Puedes probar una melodía localmente:

```java
public static void main(String[] args) throws Exception {
    Melodia m = LaVacaLola.crear();
    m.escuchar();
}
```

## **🖼️ Generación de memes con la API**

### **Memegen**

La SDK incluye una utilidad para **generar memes automáticamente** usando el servicio público **memegen.link**.

⚠️ **No se generan imágenes localmente**: se genera una **URL** que apunta a la imagen del meme.

### **🧠 Idea básica**

El flujo es siempre el mismo:

1. Eliges una **plantilla**
2. Escribes las **líneas de texto**
3. (Opcional) ajustas tamaño u opciones
4. Llamas a .url() para obtener la URL final


### **🧪 Ejemplo básico (meme navideño)**

```
String url = Memegen.of(
        MemeTemplate.GRU.id(),
        "Feliz navidad",
        "y que apruebes todas",
        "o si no...",
        "nos vemos el curso que viene"
).width(800).url();
```

👉 El resultado es una URL que puedes:

- Mostrar en una web
- Incluir en un HTML
- Enviar por email

---

### **🎭 Plantillas recomendadas**

#### **1️⃣ GRU (4 líneas – ideal para mensajes largos)**

```
String url = Memegen.ofLines(
    MemeTemplate.GRU.id(),
    "Cuando crees",
    "que ya has terminado",
    "pero el profesor dice",
    "entrega por Git"
).width(800).url();
```

---

#### **2️⃣ DRAKE (2 líneas – comparación)**

```
String url = Memegen.of(
    MemeTemplate.DRAKE.id(),
    "Estudiar teoría",
    "Hacer la hackathon NaviDAM"
).width(700).url();
```

---

#### **3️⃣ CAPTAIN AMERICA (3 líneas)**

```
String url = Memegen.of(
    MemeTemplate.CAPTAIN_AMERICA.id(),
    "Yo",
    "Vacaciones de Navidad",
    "Exámenes en enero"
).width(800).url();
```

### **⚙️ Opciones más usadas**

Puedes encadenar opciones para personalizar el meme:

```
String url = Memegen.of(MemeTemplate.GRU.id(), "L1", "L2", "L3", "L4")
    .width(800)
    .height(800)
    .format(MemeFormat.WEBP)
    .url();
```

Opciones disponibles:

- .width(int)
- .height(int)
- .format(MemeFormat)
- .font(String)
- .style(String)
- .layout(String)
- .background(String)


### **🖥️ Cómo usar la URL generada**

#### **En una web (React / HTML)**

```
<img src="URL_DEL_MEME" alt="Meme generado"/>
```

#### **En Thymeleaf**

```
<img th:src="${memeUrl}" alt="Meme"/>
```

#### **En un email**

Incluye la URL dentro del HTML del mensaje.

## **🧩 Renderizado de plantillas HTML**

En **NaviDAM** las postales se generan a partir de **plantillas HTML** renderizadas con **Thymeleaf**.

La SDK permite trabajar con plantillas de **dos formas**:

1. Plantillas **desde archivo** (.html en resources)
2. Plantillas **definidas como texto** (String)

⚠️ **El código interno que hace el renderizado NO debe modificarse.**

### **📦 Clases implicadas**

#### **❌ Código interno (NO TOCAR)**

```
com.navidam.sdk.internal.html
├── Plantilla
└── HtmlRenderer
```

Estas clases:

- Gestionan la plantilla
- Ejecutan Thymeleaf
- Renderizan el HTML final

👉 **No deben modificarse bajo ningún concepto.**


### **✅ Tu zona de trabajo**

Los alumnos deben trabajar **únicamente** en:

```java
com.navidam.sdk.api.plantilla
```

Aquí es donde:

- Se crean nuevas plantillas
- Se registran en la API pública

### 🧠 Concepto clave: ¿qué es una **Plantilla**?

La clase Plantilla representa **una plantilla HTML reutilizable** y puede definirse de **dos maneras excluyentes**:

#### **Opción A — Plantilla desde archivo (RECOMENDADA)**

```
new Plantilla("Demo navidad").path("demo.html")
```

- El HTML se carga desde:

```
src/main/resources/templates/demo.html
```

- Es la opción **más limpia y profesional**
- Ideal para HTML largo y bien estructurado

#### **Opción B — Plantilla desde texto (String)**

```
new Plantilla("Plantilla simple")
    .content("<h1 th:text=\"${m.nombre}\"></h1>");
```

- El HTML se define directamente en Java
- Útil solo para pruebas o plantillas muy simples

⚠️ No recomendable para HTML complejo.


### **📂 Ubicación de las plantillas HTML**

Todas las plantillas **por archivo** deben ir en:

```
src/main/resources/templates/
```

Ejemplo real:

```
templates/
└── demo.html
```

Y se referencian **sin extensión** desde Java:

```
.path("demo")
```

> ❌ NO poner .html en el path si usas Thymeleaf estándar
>

> (si decides permitir .html, mantenlo coherente en todo el proyecto)
>

### 🧪 Ejemplo de plantilla Thymeleaf (**demo.html**)

```
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Postal de Navidad</title>
</head>
<body>
    <h1>🎄 Feliz Navidad</h1>

    <p th:text="'Para: ' + ${m.nombre}"></p>
    <p th:text="${m.mensaje}"></p>

    <footer>
        <small>Generado con NaviDAM</small>
    </footer>
</body>
</html>
```

📌 Importante:

- El modelo siempre está disponible como **m**
- Accede a los datos con: ${m.campo}

### **🧩 Cómo funciona el renderizado internamente**

El renderizado lo hace la clase interna HtmlRenderer.

#### **Flujo interno (simplificado):**

1. Se selecciona una Plantilla
2. Se crea un modelo (objeto Java)
3. Se llama a:
    - render(path, model) → si la plantilla es por archivo
    - renderText(content, model) → si es por texto
4. Thymeleaf genera el HTML final

### **📝 Creación de una nueva plantilla (paso a paso)**

#### **1️⃣ Crear el archivo HTML**

```
src/main/resources/templates/navidad_clasica.html
```

```
<h1 th:text="'🎅 Feliz Navidad, ' + ${m.nombre}"></h1>
<p th:text="${m.mensaje}"></p>
```

#### **2️⃣ Crear una clase de referencia (opcional pero recomendado)**

```
package com.navidam.sdk.api.plantilla;

public class PlantillaNavidadClasica {

    public static Plantilla crear() {
        return new Plantilla("Navidad clásica")
            .path("navidad_clasica");
    }
}
```

#### **3️⃣ Registrar la plantilla en la API**

En la clase **NaviDAMAPI**:

```
public List<Plantilla> listadoPlantillas() {
    return List.of(
        PlantillaNavidadClasica.crear(),
        new Plantilla("Demo navidad").path("demo")
    );
}
```

📌 Si una plantilla **no está registrada aquí**, **no existe** para el sistema.

### 🧪 Probar el renderizado de plantillas en local (con main)

Antes de integrar una plantilla en el backend o en el frontend, es **muy recomendable probarla en local** usando un main.

La clase interna HtmlRenderer permite:

- Obtener el HTML como String
- O **generar directamente un fichero .html** para abrirlo en el navegador


#### **📌 Requisitos previos**

- La plantilla debe estar en:

```
src/main/resources/templates/
```

- El nombre que se pasa a .render(...) o .renderToFile(...) es **sin .html**
- El modelo siempre se expone en Thymeleaf como la variable **m**

---

### **🧱 Ejemplo de main de prueba**

Crea una clase de prueba, por ejemplo:

```java
package com.navidam.sdk.api;

import com.navidam.sdk.internal.html.HtmlRenderer;

import java.nio.file.Path;

public class DemoRenderMain {

    // Modelo simple para la plantilla
    public static class ModeloPostal {
        private final String nombre;
        private final String mensaje;
        private final String firma;

        public ModeloPostal(String nombre, String mensaje, String firma) {
            this.nombre = nombre;
            this.mensaje = mensaje;
            this.firma = firma;
        }

        public String getNombre() { return nombre; }
        public String getMensaje() { return mensaje; }
        public String getFirma() { return firma; }
    }

    public static void main(String[] args) throws Exception {

        HtmlRenderer renderer = new HtmlRenderer();

        // 1️⃣ Crear modelo de prueba
        ModeloPostal modelo = new ModeloPostal(
            "Ana",
            "¡Feliz Navidad y mucho ánimo con los exámenes! 🎄",
            "— Equipo NaviDAM"
        );

        // 2️⃣ Renderizar como String (solo consola)
        String html = renderer.render("demo", modelo);
        System.out.println("===== HTML RENDERIZADO =====");
        System.out.println(html);

        // 3️⃣ Renderizar y guardar en fichero
        Path salida = renderer.renderToFile(
            "demo",
            modelo,
            Path.of("out/demo.html")
        );

        System.out.println("Archivo generado en: " + salida.toAbsolutePath());
    }
}
```

### 🌐 Ver el resultado en el navegador

1. Ejecuta el main
2. Se generará el fichero:

```
out/demo.html
```

1.Ábrelo directamente en tu navegador (doble clic o arrastrar)

👉 Es la forma **más rápida y fiable** de comprobar:

- Que la plantilla está bien escrita
- Que los campos del modelo coinciden
- Que el HTML final es correcto


### **🧪 Probar plantillas definidas como texto**

También puedes probar plantillas definidas como String:

```
renderer.renderTextToFile(
    "<h1 th:text=\"'Hola ' + ${m.nombre}\"></h1>" +
    "<p th:text=\"${m.mensaje}\"></p>",
    modelo,
    Path.of("out/texto.html")
);
```