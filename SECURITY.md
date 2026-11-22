# Security notes

## Implemented in this static portfolio

- Content Security Policy meta policy: scripts are restricted to the same origin; styles and fonts are restricted to the project and Google Fonts; images are restricted to the project and Wikimedia Commons; objects are disabled; base URLs are restricted; HTTPS upgrades are requested.
- External links opened in a new tab use `rel="noopener noreferrer"`.
- GitHub, LinkedIn, Telegram, and Instagram profile URLs are shown only when they use HTTPS, an allow-listed service hostname, and a non-root profile path.
- Email is shown only when it passes basic address-format and length checks. It opens the visitor’s email client with a `mailto:` link; the site does not collect or transmit form submissions.
- No contact form, form endpoint, or server-side message storage is present.
- Terminal input is length-limited and accepts only a simple command token from a fixed allow-list. It never invokes a shell, `eval`, `Function`, or network requests.
- Dynamic terminal output uses DOM text nodes / `textContent`, not HTML parsing.
- No passwords, authentication, cookies, payment data, or server-side secrets are collected.

## GitHub Pages limitations

GitHub Pages serves static files and does not provide a repository-level configuration for arbitrary HTTP response headers. The CSP in `index.html` is delivered as a meta policy. Some CSP directives, notably `frame-ancestors` and reporting directives, are ignored or unavailable in meta-delivered policies. Headers such as `Strict-Transport-Security`, `X-Frame-Options`, `X-Content-Type-Options`, and `Permissions-Policy` cannot be reliably configured from this static repository alone. If these headers are required, put a CDN / reverse proxy in front of the site that supports response-header rules, or use a hosting platform that supports them.

## Operational guidance

- Enforce HTTPS in GitHub Pages settings.
- Keep the repository free of secrets and private data; all published site files are public.
- Do not put third-party API keys in client-side JavaScript.
- Review external dependencies and allowed CSP origins when adding new fonts, images, scripts, analytics, or form services.
- If a contact form is added in the future, use a reputable form provider or a backend with server-side validation, rate limiting, spam protection, and safe secret storage. Do not place provider API keys in public JavaScript.
- Review PDF metadata and contents before publication.

## Scope

These measures reduce common risks for this static portfolio; they do not constitute a penetration test, a security audit, or a guarantee that the hosted site is vulnerability-free.


## Cyber Range isolation

- The topology is illustrative and uses documentation-only IP address ranges.
- The route trace is a DOM/CSS animation; it is not `traceroute`, `ping`, port scanning, or any other network utility.
- Incident-response records are fictional sample events. No live logs are loaded.
- Mission answers and achievements exist only in the current page session and are not sent to a server.
- The terminal shortcuts `map`, `trace`, and `mission` only scroll to local page components or start the local animation.
- No shell, browser network API, remote code, or third-party JavaScript library is invoked by these interactions.
