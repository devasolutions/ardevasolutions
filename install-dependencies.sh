#Estas son las dependencias que se tienen que instalar para que puedas correr el servidor en tus computadora
#DISCLAIMER: Se utiliza un .sh ya que la maquina en donde se va a instalar la aplicación web corre en Ubuntu
#Si tienes Windows, solamente copia estos comandos a tu CMD para instalar las dependencias
#Si tienes Linux/MacOS prueba en correr el .sh si se necesita haz un 'chmod u+x install-dependencies.sh' para que lo puedas correr './install-dependencies.sh'

python -m pip install Django #Se instala Django para correr el servidor
pip install mongoengine #Se instala MongoEngine para jalar datos de la BD utilizando un Modelo de Objeto Relacional (similar a Mongoose JS para Node)pyt