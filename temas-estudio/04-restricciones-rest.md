Luis Gerardo Morales Toledo. ISC 21100254.
A 3 de septiembre de 2024.
---

# Restricciones REST

REST (Transferencia de Estado Representacional) es un estilo arquitectónico creado por Roy Fielding en su tesis doctoral para delinear un conjunto de restricciones y principios de diseño para crear servicios web escalables, eficientes y flexibles. Las API REST (interfaces de programación de aplicaciones) son servicios web que se adhieren a la arquitectura REST y se comunican principalmente a través del protocolo HTTP. Estas API operan con recursos representados por URL y ofrecen una forma estandarizada de acceder y manipular datos entre clientes y servidores. La popularidad de las API REST se puede atribuir a su simplicidad, interoperabilidad y rendimiento.

## 1. Comunicaciones sin estado.

Una de las reglas más importantes de la arquitectura REST es que la comunicación entre el cliente y el servidor debe ser sin estado. Esto significa que cada solicitud de un cliente a un servidor debe contener toda la información necesaria para que el servidor realice la operación solicitada, sin depender de la información almacenada de interacciones anteriores. Las comunicaciones sin estado tienen varias ventajas que las convierten en un componente esencial del diseño de API RESTful:

- Escalabilidad: debido a que el servidor no necesita mantener el estado del cliente entre solicitudes, puede manejar más usuarios simultáneos y adaptarse rápidamente al aumento de la demanda.
- Robustez: las solicitudes sin estado minimizan el impacto de las fallas del servidor en los clientes, ya que no es necesario recrear o recuperar información contextual perdida. Los clientes pueden simplemente volver a intentar la misma solicitud sin preocuparse por las dependencias de interacciones anteriores.
- Eficiencia: al evitar la administración del estado que consume recursos, las comunicaciones sin estado conducen a un uso más eficiente de los recursos del servidor, lo que mejora la latencia y el rendimiento de la API.

Para garantizar comunicaciones sin estado en sus API REST, siga estas pautas:

- Incluya toda la información necesaria en cada solicitud de API, como tokens de autenticación, identificadores y cargas de datos, para que el servidor pueda procesar la solicitud de forma independiente.
- Evite almacenar el estado específico del cliente en el servidor; utilice el almacenamiento del lado del cliente para cualquier requisito de gestión de sesiones.
- Minimice las dependencias entre solicitudes para mejorar la tolerancia a fallos y simplificar la implementación del cliente.

## 2. Caché y sistema por capas
La capacidad de caché y los sistemas en capas son dos conceptos interrelacionados que contribuyen al diseño de API RESTful eficaz y eficiente.

### Capacidad de caché
Las API REST deben facilitar el almacenamiento en caché de las respuestas para mejorar el rendimiento. Al almacenar en caché los datos de respuesta, los clientes pueden reducir la latencia de solicitudes posteriores, minimizar la carga en los servidores y disminuir el tráfico en la red. Para admitir la capacidad de caché:

- Incluya encabezados HTTP relacionados con la caché, como Cache-Control, Expires y ETag, en las respuestas de la API.
- Asegúrese de que los recursos tengan una URL única y coherente, lo que reduce la probabilidad de entradas duplicadas en la caché del cliente.

### Sistema en capas
La arquitectura del sistema en capas separa las preocupaciones en diferentes capas, como la interfaz de usuario, la lógica empresarial y las capas de acceso a datos en una aplicación web típica de n niveles. En las API REST, la implementación de un sistema en capas puede mejorar la capacidad de almacenamiento en caché, la seguridad y la capacidad de administración:

1. Capacidad de almacenamiento en caché mejorada: al separar la capa de almacenamiento en caché de la lógica de la aplicación, los desarrolladores pueden ajustar el comportamiento del almacenamiento en caché para maximizar sus beneficios.
1. Seguridad mejorada: las capas pueden encapsular mecanismos de seguridad, lo que permite un mejor control del acceso y garantiza una sólida separación de responsabilidades.
1. Mejor capacidad de administración: al organizar y desacoplar componentes, los sistemas en capas simplifican el mantenimiento, la depuración y la evolución de la API. Al diseñar sus API REST, considere incorporar una arquitectura de sistema en capas para desbloquear estos beneficios junto con el soporte de almacenamiento en caché adecuado.

![Capas](https://appmaster.io/cdn-cgi/image/width=1024,quality=83,format=auto/api/_files/bf4KRdsmno2NpCm3LApizS/download/)

## 3. Uso de métodos estándar e interfaz uniforme
Uno de los aspectos cruciales del diseño de API RESTful es la adherencia a una interfaz uniforme. Esto implica el uso de convenciones coherentes y métodos HTTP estándar para procesar solicitudes de API. Al alinearse con estos estándares, los desarrolladores pueden reducir significativamente la complejidad de implementar y mantener las API. Las API REST deben aprovechar los siguientes métodos HTTP estándar para diferentes acciones:

- GET : recupera un recurso o una colección de recursos.
- POST : Crea un nuevo recurso o envía datos para su procesamiento.
- PUT : actualiza completamente un recurso existente reemplazándolo con datos nuevos.
- PATCH : Actualiza parcialmente un recurso con cambios específicos.
- DELETE : Elimina un recurso.

Estos métodos estándar comprenden claramente cada operación y promueven la interoperabilidad entre clientes y servidores. Es esencial garantizar el método correcto para cada acción para un funcionamiento confiable y consistente. Además, una interfaz uniforme agiliza el manejo de códigos de estado y errores, lo que garantiza que los clientes obtengan comentarios claros y consistentes. Al crear API RESTful, es fundamental devolver códigos de estado HTTP precisos e informativos, como:

- 2xx – Éxito: La solicitud fue recibida, comprendida y aceptada exitosamente.
- 3xx – Redirección: La solicitud debe realizar acciones adicionales para completar la solicitud.
- 4xx – Error del cliente: la solicitud tiene una sintaxis incorrecta o no se puede cumplir.
- 5xx – Error del servidor: el servidor no pudo cumplir con una solicitud aparentemente válida.

## 4. HATEOAS: hipermedia como motor del estado de la aplicación
HATEOAS (Hypermedia como motor del estado de la aplicación) es una restricción clave en el diseño de API RESTful y garantiza que los recursos estén interconectados a través de enlaces de hipermedia. Al permitir a los clientes navegar por la API siguiendo estos enlaces, resulta más fácil comprender y descubrir los recursos y acciones disponibles. Implementar HATEOAS en su API REST tiene varios beneficios:

- Autodescriptivo: los enlaces hipermedia dentro de los recursos brindan un contexto significativo y guían a los clientes sobre cómo interactuar con los recursos y qué acciones son posibles.
- Mejor capacidad de descubrimiento: incluir enlaces dentro de las respuestas de API permite a los clientes descubrir recursos y acciones relacionados sin la necesidad de URL codificadas, lo que reduce el acoplamiento entre clientes y API.
- Extensibilidad mejorada: las API impulsadas por hipermedia son más flexibles ya que se pueden agregar nuevos recursos y acciones sin interrumpir a los clientes existentes, lo que facilita la evolución de la API con el tiempo.

Para incorporar HATEOAS en su API REST, incluya enlaces de hipermedia relevantes en las representaciones de recursos y utilice tipos de medios estandarizados para transmitir relaciones de enlaces. Por ejemplo, los enlaces se pueden incrustar en cargas JSON usando la propiedad `_links` , así:

```json
 {
  "ID de pedido": 12345,
  "montototal": 99,99,
  "_Enlaces": {
    "ser": {
      "href": "https://api.example.com/orders/12345"
    },
    "cliente": {
      "href": "https://api.example.com/customers/54321"
    }
  }
}
```

Al implementar correctamente HATEOAS, su API REST se vuelve más dinámica, lo que permite a los clientes explorar e interactuar con los recursos y acciones disponibles sin necesidad de conocimientos previos extensos.

## 5. Soporte para código bajo demanda
Code-on-Demand es una restricción opcional de las API REST, que permite a los servidores proporcionar lógica de aplicación para realizar acciones específicas en recursos. Si bien no siempre es aplicable, permite una mayor flexibilidad y extensibilidad en ciertos escenarios. El principal beneficio del código bajo demanda es la capacidad de transferir código ejecutable desde el servidor al cliente, lo que permite a los clientes ejecutar ese código y realizar las acciones solicitadas. Esto puede reducir la cantidad de codificación necesaria en el lado del cliente, así como ayudar a ampliar la funcionalidad de una API sin requerir actualizaciones sustanciales para los clientes. Algunos casos de uso comunes de Code-on-Demand incluyen:

- Proporcionar lógica de validación del lado del cliente para los campos de entrada de un formulario.
- Carga de lógica personalizada para transformar o procesar datos recuperados del servidor.
- Actualización dinámica de interfaces de usuario basadas en lógica impulsada por el servidor.

Para implementar Code-on-Demand, considere utilizar un lenguaje de secuencias de comandos del lado del cliente popular como JavaScript o TypeScript. El código puede entregarse como parte de una respuesta API, incrustarse en una página web o cargarse como un script externo. Si bien el código bajo demanda puede proporcionar flexibilidad adicional, también introduce riesgos potenciales de seguridad y aumenta la complejidad de las implementaciones de los clientes. Como resultado, debe utilizarse con prudencia y en situaciones en las que sus beneficios superen los posibles inconvenientes.

Comprender y aplicar las seis reglas fundamentales de las API REST es esencial para desarrollar arquitecturas de aplicaciones web eficientes, escalables y potentes. Cumplir con estas mejores prácticas garantiza que sus API sean fáciles de usar, mantener y ampliar.

## 6. Convenciones de nomenclatura claras y coherentes
Aplicar convenciones de nomenclatura claras y coherentes es crucial para que las API REST sean fácilmente comprensibles y navegables para los desarrolladores. Las convenciones de nomenclatura incoherentes pueden confundir a los clientes y aumentar la curva de aprendizaje para utilizar una API. Cumplir con las reglas y patrones establecidos hace que las API RESTful sean predecibles, lo que resulta en un desarrollo más rápido y una adopción generalizada.

A continuación se presentan algunas pautas importantes a seguir al diseñar las convenciones de nomenclatura de su API REST:

- Utilice sustantivos de recursos: céntrese en los recursos que expone y sus relaciones en lugar de acciones específicas. Utilice sustantivos en plural (p. ej., /productos, /usuarios) para representar colecciones de recursos y evite el uso de verbos (p. ej., /getProducts, /createUser).
- Mantenga las URL simples y predecibles: diseñe URL intuitivas y fácilmente comprensibles para los clientes, utilizando una jerarquía de recursos para expresar relaciones (por ejemplo, /usuarios/{id}/pedidos).

Además de estos conceptos básicos, existen varias prácticas recomendadas para garantizar convenciones de nomenclatura coherentes:

- Utilice letras minúsculas: haga que su API no distinga entre mayúsculas y minúsculas utilizando letras minúsculas en los nombres y atributos de los recursos. Esto reduce la posibilidad de errores y hace que las URL sean más fáciles de leer y escribir.
- Anide recursos cuando sea apropiado: cuando los recursos tengan una relación padre-hijo, refleje este anidamiento en la estructura de la URL con barras (por ejemplo, /usuarios/{id}/orders).
- Utilice guiones para separar palabras: en nombres y atributos de recursos, utilice guiones (-) para mejorar la legibilidad al separar palabras (por ejemplo, /categorías de productos).
- Evite abreviaturas innecesarias: utilice nombres claros y descriptivos para los recursos y sus atributos. Los nombres cortos y ambiguos pueden confundir y aumentar la curva de aprendizaje para los desarrolladores que utilizan su API.

