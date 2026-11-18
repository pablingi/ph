# NAVOPS — Command Routing

Single-page demo for Navy-style form tracking, selectable chain-of-command routing, digital certificate signatures, and return-to-submitter workflow.

## Tabs

- **CO Dashboard** — pending forms with priority, aging, status, and Open
- **Submit Form** — originator chooses form details and the chain of command
- **Open Form** — document workspace with review checklists, certificate select + PIN signature, and return-with-comment
- **My Returns** — submitter inbox with unread badge and reviewer comments

## Demo notes

- Use **Acting as** to switch between submitter and reviewer stages.
- Certificate demo PINs are shown in the certificate select list.
- Sample data only. Not for operational use.

## Run locally

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```
