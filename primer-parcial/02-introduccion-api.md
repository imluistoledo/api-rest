Luis Gerardo Morales Toledo. ISC 21100254.
A 26 de agosto de 2024.
---

# Introducción a API - REST.

### Qué es una API.
Una *API* (Interfaz de Programación de Aplicaciones) es un conjunto de reglas y protocolos que permite que diferentes programas de software se comuniquen entre sí. Las API son como puentes que permiten que aplicaciones o servicios compartan datos y funcionalidades sin necesidad de saber cómo está implementado el otro sistema.

### Qué es REST.
*REST* (*Representational State Transfer*) es un estilo de arquitectura que se utiliza para diseñar servicios web. REST se basa en un **conjunto de principios que permiten que los sistemas se comuniquen utilizando HTTP**, el protocolo que utiliza la web. La idea principal de REST es que las operaciones en los recursos (datos o servicios) se realizan utilizando métodos estándar de HTTP, como *GET*, *POST*, *PUT* y *DELETE*.

### Qué es una API - REST.
Una API REST (o **REST**ful **API**) es una API que sigue los principios de REST. Esto significa que la API está diseñada para interactuar con recursos usando HTTP de manera estándar y predecible. Por ejemplo, para obtener información de un recurso, se usaría el método *GET*; para crear un nuevo recurso, se usaría *POST*, etc.

### Qué otras arquitecturas API existen.
Además de REST, existen otras arquitecturas para APIs, como:

- **SOAP** (*Simple Object Access Protocol*): Un protocolo más antiguo que utiliza XML para la comunicación entre sistemas.
- **GraphQL**: Un lenguaje de consulta para APIs desarrollado por Facebook que permite a los clientes solicitar solo los datos que necesitan.
- **gRPC**: Un marco de trabajo de Google que permite la comunicación eficiente entre microservicios, utilizando un protocolo binario en lugar de texto.

### Qué restricciones hacen a una API ser Restful
Para que una API sea considerada Restful, debe cumplir con ciertas restricciones:

- **Interfaz uniforme**: Uso de una interfaz estándar y consistente en todos los recursos.
- ***Stateless***: Cada solicitud del cliente al servidor debe contener toda la información necesaria para entender y procesar la solicitud, sin depender del estado almacenado en el servidor.
- **Caché**: Las respuestas deben ser etiquetadas como cacheables o no, para mejorar el rendimiento.
- **Cliente-servidor**: Separación clara entre cliente y servidor, permitiendo que ambos evolucionen de manera independiente.
- **Capas**: El sistema puede estar compuesto de capas, donde cada capa tiene un rol específico.


### Ventajas y desventajas de Rest.
------------------------------------------------
| Ventajas           | Desventajas             |
------------------------------------------------
| - Sencillez y facilidad de uso. - Compatibilidad con HTTP, lo que permite usar infraestructura existente. - Flexibilidad en el manejo de diferentes formatos de datos (JSON, XML, etc.). | - Puede ser ineficiente para operaciones complejas, ya que cada solicitud se maneja de manera independiente. - No es adecuado para aplicaciones que requieren una comunicación en tiempo real bidireccional. |
------------------------------------------------

### Alternativas o mejoras a Rest.
- **GraphQL**: Permite a los clientes solicitar solo los datos específicos que necesitan, evitando la sobrecarga de datos.
- **gRPC**: Optimiza la comunicación en entornos de microservicios con mejor rendimiento y eficiencia.
- **WebSockets**: Proporciona comunicación bidireccional en tiempo real, lo cual es útil para aplicaciones como chat o videojuegos.

### Qué datos se manejan en una API – REST.
Las API REST pueden manejar todo tipo de datos, dependiendo del tipo de aplicación. Por lo general, los datos se transfieren en formato JSON o XML. Estos datos pueden incluir información de usuarios, productos, pedidos, etc.

### Dónde es común encontrarlas.
Las API REST son extremadamente comunes y se encuentran en muchas aplicaciones modernas, especialmente en servicios web y aplicaciones móviles. Son utilizadas por empresas como Google, Twitter, Facebook, Amazon, etc., para permitir que otras aplicaciones se integren con sus servicios.