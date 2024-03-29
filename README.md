# ELUI

![logo](https://github.com/Naboska/Elui/blob/main/public/images/github.svg)

**[Storybook demo http://elui.p5.su](http://elui.p5.su)**

### coming soon...

---

## Menu

- [Usage](#Usage)
- [Contributors](#Contributors)

### Usage

Inside your project directory, run in terminal:

```
yarn add elui-react
```

Or with npm:

```
npm install elui-react
```

If you use typescript, you will need to register the types for the theme:

```
yarn add -D @types/styled-components
```

Or with npm:

```
npm install --save-dev @types/styled-components
```

Create a folder `@types` in the root of the project and create a file `styles.d.ts` in it.

Inside:

```ts
import 'styled-components';
import { TTheme } from "elui-react";

declare module 'styled-components' {
  export interface DefaultTheme extends TTheme {}
}
```

### Contributors

#### Design

<a href="https://www.behance.net/JOHNIKER">
  <img src="https://mir-s3-cdn-cf.behance.net/user/115/376b9e42075593.5b927332e9896.png" width="25" />
</a>

#### Code

<a href="https://github.com/arzamax">
  <img src="https://avatars.githubusercontent.com/u/27233636?v=4" width="25" />
</a>
<a href="https://github.com/Naboska">
  <img src="https://avatars.githubusercontent.com/u/55681945?v=4" width="25" />
</a>
