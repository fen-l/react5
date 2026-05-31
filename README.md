# UI Kit Lab — React + TypeScript

Лабораторная работа №5  
Тема: **Компонентный подход и строгая типизация в React**

Автор: Анастасия Лавриеня

## Описание

Проект представляет собой базовый **UI Kit**, разработанный на React и TypeScript с использованием CSS Modules.  
Компоненты являются переиспользуемыми, типизированными и не содержат бизнес-логики.

---

## Реализованные компоненты

- `Button`
- `Input`
- `Badge`
- `LayoutCard`

---

## Контрольные вопросы и ответы

### 1. Что такое UI Kit?
**UI Kit** это библиотека переиспользуемых компонентов интерфейса.  
Решает проблему дублирования кода и отсутствия единообразия дизайна.

---

### 2. Atomic Design
Методология построения интерфейсов:

- **Атомы** являются базовыми компонентами (Button, Input)
- **Молекулы** являются комбинациями атомов (например, поисковая строка)

---

### 3. Design Tokens
Базовые параметры дизайна:

- цвета
- размеры шрифтов
- отступы
- радиусы
- тени

---

### 4. Stateless-компоненты
Компоненты, которые отвечают только за отображение и не содержат бизнес-логики, API-запросов или работы со стором.

---

### 5. React.ButtonHTMLAttributes
Позволяет наследовать стандартные HTML-атрибуты кнопки (`disabled`, `type`, `onClick` и др.).

---

### 6. Тип children
`React.ReactNode`, так как он поддерживает:

- текст
- JSX
- компоненты
- массивы элементов

---

### 7. CSS Modules
Решают проблему глобальной области видимости CSS.

---

### 8. Уникальность классов
При сборке имена классов преобразуются в уникальные хеши, исключая конфликты.

---

### 9. classnames
Библиотека для удобного условного объединения CSS-классов.

---

### 10. Глобальные стили в CSS Modules
Используется псевдокласс:

```css
:global(.active) {
    color: red;
}
```

### 11. Что означает, что Input должен быть «контролируемым»?

Контролируемый **Input** это компонент, значение которого полностью управляется состоянием React.

- значение передаётся через `value`
- изменения обрабатываются через `onChange`
- источник истины находится в `state` компонента-родителя

Это позволяет валидировать ввод, синхронизировать данные и управлять значением программно.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
