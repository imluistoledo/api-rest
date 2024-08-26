# Comandos basicos de Git
`git add .` - Para agregar los **cambios** del directorio de trabajo al area de preparacion (*staging area*).

`git commit -m "mensaje"` - Para agregar un **mensaje** *en el commit*.

`git push origin main` - Para hacer un ***push*** desde la terminal.

`git pull origin main` - Para hacer un ***pull*** desde la terminal.

> *Origin* se refiere al nombre del repositorio remoto por defecto. Mientras que *main* es la rama en la que se esta trabajando. Por otro lado, *push* y *pull* enviaran los cambios al repositorio GitHub o actualizaran el repositorio local, respectivamente.

`git config --global user.name "username"` - Para configurar el nombre de usuario.

`git config --global user.email "username@email.com"` - Para configurar el correo del usuario.

`git add archivo.ext` - Para agregar archivos individuales al area de preparacion y asi tengan diferentes mensajes en el commit.

`git reset archivo.ext` - Para eliminar archivos individuales del area de preparacion.

`git diff` - Muestra los cambios realizados pero que aun no se encuentran en el area de preparacion.

`git diff --staged` - Muestra los cambios en el area de preparacion que aun no tienen un commit.