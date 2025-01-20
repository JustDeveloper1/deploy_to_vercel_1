Under the MIT License - <a href="https://github.com/JustStudio7/CodeShare/blob/main/LICENSE">© 2025 JustStudio.</a><br/>
> [!NOTE]
> CodeShare `(only this repository, not API)` is made based on "Pastebon" by [Hexaa](https://github.com/hexaaagon) - https://pastebon.hexaa.lol/ | [GitHub repository](https://github.com/hexaaagon/pastebon).<br/>

-------------

<a href="https://codeshare.js.org/">
        <div align="center">
                <picture>
                        <source media="(prefers-color-scheme: dark)" srcset="https://socialify.git.ci/JustStudio7/CodeShare/image?custom_description=https%3A%2F%2Fcodeshare.js.org%2F&description=1&font=Jost&forks=1&issues=1&language=1&logo=https%3A%2F%2Fimg.juststudio.is-a.dev%2Fcs%2Flogo.png&name=1&pattern=Transparent&stargazers=1&theme=Auto">
                        <img src="https://socialify.git.ci/JustStudio7/CodeShare/image?custom_description=https%3A%2F%2Fcodeshare.js.org%2F&description=1&font=Jost&forks=1&issues=1&language=1&logo=https%3A%2F%2Fimg.juststudio.is-a.dev%2Fcs%2Flogo.png&name=1&pattern=Transparent&stargazers=1&theme=Auto">
                </picture>
                <br/>
                <br/>
        </div>
</a>

-------------
## Using:
[Next.js](https://nextjs.org/); [Vercel](https://vercel.com/);<br/>
`404.html` by <a href="https://justdeveloper.is-a.dev/">JustDeveloper</a>;<br/>
`api.juststudio.is-a.dev` by <a href="https://juststudio.is-a.dev/" title="JustStudio. - a System Development Studio">JustStudio.</a>.

-------------
## Special thanks to:
<a href="https://js.org/" title="JS.ORG - the JavaScript organization">JS.ORG</a> for "codeshare.js.org" subdomain.

-------------
# API docs:
Full version <a href="https://codeshare.js.org/docs/api-route" title="Docs - API Routes | CodeShare">**here**</a>.

> [!WARNING]
> Please do not use this API outside CodeShare, thank you.

### View code:
> **`GET`** `https://api.juststudio.is-a.dev/cs/{Id}`<br/>
> Required: Code ID (`{Id}`), in path.<br/>

**Example response, code `200`:**
```json
{
    "id": 1,
    "authorId": "621950083759508500903931783035125166471302414334602580",
    "code": "console&#46;log&#40;&#39;Hello&#44;&#32;World&#33;&#39;&#41;",
    "langDone": "js",
    "name": "The&#32;First&#32;Code",
    "created": 1735553192776,
    "updated": 0,
    "status": 0
}
```
**Example response, code `404`:**
```
Not Found
```
> [!NOTE]
> `"code"` in responce is not a raw file, it is encoded string for HTML.

> [!NOTE]
> `"status": 0` = `OK`<br/>
> `"status": 1` = `DELETED`<br/>
> `"status": 2` = `BANNED`

### Get user:
> **`GET`** `https://api.juststudio.is-a.dev/user/{Id}`<br/>
> Required: User ID (`{Id}`) (the "`authorId`" from "View code" responce), in path.<br/>

**Example response, code `200`:**
```json
{
    "id": "621950083759508500903931783035125166471302414334602580",
    "username": "justdeveloper",
    "avatar": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZGlzY29yZC9pbWdfMm50amxFZXZ3clhIdXAwUUVPeFlpU3QwWTdwIn0",
    "banned": false,
    "joined": 1729799414699,
    "data": {
        "badges": 0
    }
}
```
**Example response, code `404`:**
```
Not Found
```
