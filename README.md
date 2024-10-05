## Setup Process

### Clone Project

```
git clone https://github.com/sourav-k7/real-estate-landing.git
```

### Build Project

- Run following commands in the project root directory.

```
npm install
```

- Create a `.env.local` file in root directory and add following keys in it.

```
NEXT_PUBLIC_API_URL=http://localhost:{write port here without curly braces}
```

- To start development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
