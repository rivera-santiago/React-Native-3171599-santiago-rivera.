# 🚍 Transporte Escolar App

Aplicación móvil desarrollada con React Native y Expo para gestionar y visualizar rutas de transporte escolar.

---

# 📌 Descripción

Esta aplicación permite visualizar diferentes rutas de transporte escolar mediante una interfaz sencilla y organizada.

El usuario puede:

* Ver rutas disponibles.
* Buscar rutas por nombre.
* Buscar conductores.
* Visualizar estado de las rutas.
* Ver cantidad de estudiantes asignados.

---

# 🛠️ Tecnologías utilizadas

* React Native
* Expo
* TypeScript
* JavaScript
* FlatList
* Hooks de React

---

# 📂 Estructura del proyecto

```bash
src/
 ├── components/
 │    └── ItemCard.tsx
 │
 ├── data/
 │    └── mockData.ts
 │
 ├── screens/
 │    └── HomeScreen.tsx
 │
 ├── theme/
 │    └── index.js
 │
 └── types/
      └── idex.ts
```

---

# ⚙️ Instalación

## 1. Clonar el repositorio

```bash
git clone URL_DEL_REPOSITORIO
```

## 2. Entrar a la carpeta

```bash
cd starter
```

## 3. Instalar dependencias

```bash
npm install
```

## 4. Ejecutar el proyecto

```bash
npx expo start
```

---

# ▶️ Funcionalidades

## 🔍 Búsqueda dinámica

La aplicación permite buscar:

* Nombre de ruta
* Nombre del conductor

---

## 📋 Visualización de rutas

Cada tarjeta muestra:

* Nombre de la ruta
* Conductor
* Placa del vehículo
* Estudiantes asignados
* Estado de la ruta

---

## 🎨 Diseño personalizado

El proyecto utiliza:

* Colores personalizados
* Espaciados reutilizables
* Tipografías organizadas

Todo centralizado en:

```bash
src/theme/index.js
```

---

# 🧠 Conceptos aplicados

* Componentes reutilizables
* Props
* useState
* useMemo
* useCallback
* FlatList
* Organización modular
* TypeScript interfaces
* Estilos con StyleSheet

---

# 📱 Pantalla principal

La pantalla principal contiene:

* Título de la aplicación
* Input de búsqueda
* Lista de rutas
* Mensaje cuando no hay resultados

---

# 📄 Datos simulados

Los datos utilizados actualmente son mock data almacenados en:

```bash
src/data/mockData.ts
```

---

# 🚀 Mejoras futuras

* Conexión con API
* Base de datos
* Login de usuarios
* Geolocalización
* Mapa en tiempo real
* Notificaciones
* Gestión de conductores

---

# 👨‍💻 Autor

Proyecto desarrollado por Santiago Rivera.


