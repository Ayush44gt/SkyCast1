# SkyCast

> A real-time weather app — current conditions and forecasts for any city, in one glance.

SkyCast queries the **OpenWeatherMap API** and renders temperature, humidity,
wind speed and the forecast for whichever city you search. Built with plain
HTML, CSS and JavaScript — no framework, no build step, no dependencies.

```
Vanilla JavaScript · HTML5 · CSS3 · OpenWeatherMap API
```

---

## Features

- **Search any city** and get its live conditions
- **Temperature**, **humidity** and **wind speed** at a glance
- **Forecast** beyond the current hour
- **Condition-aware visuals** — the display reflects clear, cloud, rain and snow states
- **Zero dependencies** — open `index.html` and it runs

---

## Why vanilla

The whole app is a handful of `fetch` calls and DOM updates. Reaching for a
framework here would add a build step, a dependency tree and a bundle to ship,
in exchange for nothing the platform doesn't already do. It's a deliberate
exercise in the `fetch` API, async/await, DOM manipulation and handling the
failure cases an external API hands you — bad city names, rate limits, network
errors.

---

## Running it locally

```bash
git clone https://github.com/Ayush44gt/SkyCast1.git
cd SkyCast1
```

**Get an API key** — sign up free at [OpenWeatherMap](https://openweathermap.org/api)
and copy your key.

Then create your local config from the template:

```bash
cp config.example.js config.js
```

and put your key in `config.js`:

```js
const API_KEY = "your_openweathermap_api_key";
```

`config.js` is gitignored, so your key stays out of version control.

Then open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

> **Note:** this is a static app with no backend, so whatever key you use is
> visible to anyone who opens devtools — that's inherent to the architecture,
> not something `config.js` fixes. Keeping it out of git just stops the key
> leaking to everyone who reads the repo. Use a free-tier key you're happy to
> rotate, and restrict it in the OpenWeatherMap dashboard. For anything
> production-facing, proxy the request through a small backend so the key never
> reaches the browser at all.

---

## Files

| File | Role |
|---|---|
| `index.html` | Page structure |
| `styles.css` | Layout and theming |
| `config.js` | Your API key (gitignored — copy from `config.example.js`) |
| `api.js` | OpenWeatherMap request layer |
| `script.js` | Search handling and DOM rendering |
| `index.js` | Forecast rendering |

---

## Author

**Ayush Garg** — [GitHub](https://github.com/Ayush44gt) · [LinkedIn](https://www.linkedin.com/in/ayush44/)
