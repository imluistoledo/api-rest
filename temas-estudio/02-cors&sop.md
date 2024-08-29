Luis Gerardo Morales Toledo. ISC 21100254.
A 29 de agosto de 2024.
---

# Cross Origin Resource Sharing (CORS)

Cross-Origin Resource Sharing (CORS) es un mecanismo basado en encabezado HTTP que permite a un servidor indicar cualquier origen (dominio, esquema o puerto) que no sea el suyo propio desde el cual un navegador debería permitir la carga de recursos. CORS también se basa en un mecanismo por el cual los navegadores realizan una solicitud de "verificación previa" al servidor que aloja el recurso de origen cruzado, con el fin de verificar que el servidor permitirá la solicitud real. En esa verificación previa, el explorador envía encabezados que indican el método HTTP y los encabezados que se usarán en la solicitud real.

Un ejemplo de una solicitud de origen cruzado: el código JavaScript front-end servido desde `use fetch()` para hacer una solicitud a [Ejemplo](https://domain-a.comhttps://domain-b.com/data.json)

Por razones de seguridad, los navegadores restringen las solicitudes HTTP de origen cruzado iniciadas desde scripts. Por ejemplo, `fetch()` *XMLHttpRequest* sigue la **política del mismo origen**. Esto significa que una aplicación web que usa esas API solo puede solicitar recursos del mismo origen desde el que se cargó la aplicación, a menos que la respuesta de otros orígenes incluya los encabezados CORS correctos.

![Imagen explicativa de CORS](https://mdn.github.io/shared-assets/images/diagrams/http/cors/fetching-page-cors.svg)

# ¿Qué solicitudes utilizan CORS?

Este estándar de uso compartido de origen cruzado puede habilitar solicitudes HTTP de origen cruzado para:

- Invocaciones de `fetch()` o `XMLHttpRequest`, como se ha comentado anteriormente.
- Fuentes web (para el uso de fuentes entre dominios dentro de CSS), de modo que los servidores puedan implementar fuentes TrueType que solo se pueden cargar de origen cruzado y utilizar por sitios web que tienen permiso para hacerlo.
- Texturas WebGL.
- Fotogramas de imagen/vídeo dibujados en un lienzo con `drawImage()`.
- Formas CSS a partir de imágenes.

# Same Origin Policy
[](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy)