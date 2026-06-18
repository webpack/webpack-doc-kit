---
authors: EugeneHlushko,probablyup,wizardofhogwarts,koto,avivkeller
---

# Content Security Policies

webpack can add a `nonce` to every script it loads. To enable this, assign a value to the `__webpack_nonce__` variable inside your entry script. webpack then generates and applies a unique hash-based `nonce` for each page view. This is why `__webpack_nonce__` belongs in the entry file rather than in your configuration. Note that `__webpack_nonce__` must always be a base64-encoded string.

## Examples

In the entry file:

```js
// ...
__webpack_nonce__ = 'c29tZSBjb29sIHN0cmluZyB3aWxsIHBvcCB1cCAxMjM=';
// ...
```

## Enabling CSP

Content Security Policies are not enabled by default. To turn one on, the document must be served with a `Content-Security-Policy` header or a `<meta http-equiv="Content-Security-Policy" ...>` tag that instructs the browser to enforce the policy. Here is an example of a CSP header that also allow-lists a CDN URL:

```html
Content-Security-Policy: default-src 'self'; script-src 'self'
https://trusted.cdn.com;
```

For more details on CSP and the `nonce` attribute, see the Further reading section at the bottom of this page.

## Trusted Types

webpack can also use Trusted Types to load dynamically constructed scripts, allowing it to comply with the [`require-trusted-types-for`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/require-trusted-types-for) CSP directive. See the [`output.trustedTypes`](#TODO[/configuration/output/#outputtrustedtypes]) configuration option.

## Further reading

- [Nonce purpose explained](https://stackoverflow.com/questions/42922784/what-s-the-purpose-of-the-html-nonce-attribute-for-script-and-style-elements)
- [On the Insecurity of Whitelists and the Future of Content Security Policy](https://ai.google/research/pubs/pub45542)
- [Locking Down Your Website Scripts with CSP, Hashes, Nonces and Report URI](https://www.troyhunt.com/locking-down-your-website-scripts-with-csp-hashes-nonces-and-report-uri/)
- [CSP on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [Trusted Types](https://web.dev/trusted-types)
