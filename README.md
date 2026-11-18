# NAVOPS — Command Routing

Single-page demo for Navy-style form tracking, selectable chain-of-command routing, digital certificate signatures, and return-to-submitter workflow.

## Tabs

- **CO Dashboard** — pending forms with priority, aging, status, and Open
- **Submit Form** — originator chooses form details and the chain of command
- **Open Form** — document workspace with review checklists, certificate select + PIN signature, and return-with-comment
- **My Inbox** — submitter notifications for return comments and completed signed PDFs

## Signing flow

1. Reviewer opens the form and clicks **Sign with certificate**
2. PDF opens; drag a box where the signature should appear
3. Enter certificate PIN
4. When the last stage signs, the fully endorsed PDF is delivered to the submitter inbox for download

## Demo notes

- Use **Acting as** to switch between submitter and reviewer stages.
- Certificate demo PINs are shown in the certificate select list.
- Sample data only. Not for operational use.

## Run locally

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```
