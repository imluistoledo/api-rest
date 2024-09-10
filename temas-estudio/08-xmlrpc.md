# XML-RPC
Acceder por acceso remoto a ciertas funciones en ordenadores que se encuentran en otras redes o sistemas distribuidos es una práctica común desde hace décadas. La idea básica de la tecnología subyacente RPC (Remote Procedure Calls) fue formulada ya en 1976 por James E. White en RFC 707, lo que lo convierte en un principio más antiguo que, por ejemplo, la World Wide Web.

Una de las soluciones más populares para aprovechar las ventajas de las peticiones RPC es XML-RPC, que permite realizar llamadas utilizando el protocolo HTTP(S) y el lenguaje de marcas extensible o Extensible Markup Language (XML). Pero, ¿en qué consiste esta especificación, para qué se utiliza y cómo funciona exactamente?

## ¿Qué es XML-RPC?
XML-RPC (abreviatura de Extensible Markup Language Remote Procedure Call) es una especificación de protocolo para realizar llamadas RPC (llamadas remotas en redes informáticas) con la ayuda del protocolo de red sin estado HTTP y el lenguaje de marcado XML que, en este caso, le otorga su nombre. Mientras que HTTP regula el transporte de datos, XML se utiliza para la presentación de dichos datos. En la determinación del estándar XML-RPC se valoró, sobre todo, el hecho de que se pudiera implementar sin gran esfuerzo en diferentes lenguajes de programación y plataformas de sistemas.

## Orígenes de XML-RPC
El desarrollador de software Dave Winer y su empresa UserLand Software, en estrecha colaboración con Microsoft, fueron los principales responsables de desarrollar XML-RPC en 1998. Esta gran corporación no tardó en detectar el enorme potencial que tenía este nuevo estándar para promover sus propias relaciones empresariales B2B. XML-RPC ha ido incorporando diferentes y novedosas funciones a su gama de características, derivando en el estándar conocido como SOAP

## ¿Cómo funciona XML-RPC?
Los clientes que quieren acceder a XML-RPC utilizan el protocolo de transferencia HTTP o, más concretamente, el método POST de petición HTTP. Después de recibir la petición HTTP, el servidor evalúa el documento XML que se encuentra en el cuerpo de la solicitud. A partir de su contenido, genera, por ejemplo, los parámetros para la función deseada y la ejecuta. Como resultado, el servidor lo vuelve a empaquetar en un documento XML que se devolverá al cliente en forma de respuesta HTTP. XML-RPC soporta, por tanto, los siguientes tipos de datos cuando entrega parámetros o recibe respuesta de un cliente:

## Tipos de datos

| Tipo de datos            | Descripción                                          | Ejemplo de etiqueta                                                                                               |
|--------------------------|------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------|
| array                    | Lista que puede contener varios valores o tipos de datos    | `<array><data>…</data></array>`                                                                            |
| base64                   | Datos binarios codificados de acuerdo con el sistema Base64 | `<base64>SGFsbG8gV2VsdA==</base64>`                                                                        |
| boolean                  | Variable booleana (true = 1 vs. false = 0)           | `<boolean>1</boolean>`                                                                                            |
| dateTime.iso8601         | Fecha y hora en formato ISO 8601                     | `<dateTime.iso8601>20200414T16:23:55</dateTime.iso8601>`                                                          |
| double                   | Coma flotante de doble precisión (64 bits)           | `<double>-0.32653</double>`                                                                                       |
| integer                  | Tipo de dato entero                                  | `<int>32</int>` o `<i4>32</i4>`                                                                                   |
| string                   | Cadena de caracteres; puede contener bytes nulos     | `<string>¡Hola a todos!</string>`                                                                                 |
| struct                   | Se compone de pares de valores clave (en este caso, las claves son cadenas de caracteres y los valores pueden ser de cualquier tipo) | `<struct><data>…</data></struct>` |

Si han de unirse varios valores o tipos de datos, la notación XML-RPC provee dos opciones: “array” y “struct”. Con la primera opción, los datos se ordenan en un listado, y, mediante “struct”, se presentan al servidor pares de valores clave previamente estructurados, tal como ilustramos en el ejemplo siguiente:

```xml
<struct>
    <member>
        <name>Entrada 1</name>
        <value><int>1</int></value>
    </member>
    <member>
        <name>Entrada 2</name>
        <value><int>2</int></value>
    </member>
</struct>
```

## Aplicaciones de XML-RPC
XML-RPC no tiene un papel demasiado importante en las redes de comunicación actuales. Desde su lanzamiento en 1998, este formato de intercambio ha demostrado ser demasiado rígido, entre otras cosas, debido a su limitada escalabilidad y al hecho de que no puede transferir sus propias estructuras XML. Como resultado del excesivo tiempo necesario para la conversión se hizo necesaria la búsqueda de una solución nueva y rápida que funcionara conjuntamente con el ya mencionado SOAP (también desarrollado por el equipo de Winer en colaboración con Microsoft).

Sin embargo, hoy en día todavía hay aplicaciones web que tienen una interfaz XML-RPC, entre otras cosas, para facilitar el intercambio de datos con proveedores de servicios externos. Incluso los sistemas de gestión de contenidos, como WordPress, a menudo incorporan una interfaz XML-RPC para el intercambio con otros servicios web. Además, el formato de intercambio es la base de la llamada tecnología pingback, que lleva años al servicio de los escritores de blogs como herramienta importante para configurar enlaces.

## Ejemplo de una solicitud simple al servidor con XML-RPC.
Para terminar, nada mejor que un ejemplo para ilustrar la comunicación cliente-servidor a través de una interfaz XML-RPC. La solicitud HTTP del cliente sería como sigue:

```xml
<?xml version="1.0"?>
    <methodCall>
        <methodName>statustest</methodName>
        <params>
        <param>
            <value><i4>10</i4></value>
        </param>
        </params>
    </methodCall>
```

En el contenedor methodCall, en este caso, se activa la función statustest que, por su parte, está definida en el contenedor methodName. Como parámetro, la función devuelve como valor el número entero 10.

Una posible respuesta del servidor a este statustest podría ser esta:
```xml
<?xml version="1.0"?>
    <methodResponse>
        <params>
        <param>
            <value><string>Status: OK</string></value>
        </param>
        </params>
    </methodResponse>
```

En este ejemplo, la respuesta simple del servidor es Status: OK.