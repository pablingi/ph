# NAVOPS — Command Routing

Single-page demo for Navy-style commanding officer form tracking and digital routing.

## Views

- **Commanding Officer Dashboard** — pending forms table (type, originator, date, priority, days aging)
- **Routing Chain** — horizontal stepper (OBO → Chief → DEVO → Department Head → XO → CO → COB) with digital certificate checkboxes

Sample data only. Not for operational use.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```
