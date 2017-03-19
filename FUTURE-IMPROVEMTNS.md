## DevServer changes
- _devServer.contentBase_ - Assuming you don't generate index.html dynamically like in this setup and rather prefer to maintain it yourself in a specific directory, you need to point WDS to it. contentBase accepts either a path (e.g., 'build') or an array of paths (e.g., ['build', 'images']). The default for this value is the project root.
- _devServer.proxy_ - If you are using multiple servers, you have to proxy WDS to them. The proxy setting accepts an object of proxy mappings (e.g., { '/api': 'http://localhost:3000/api' }) that allow WDS to resolve matching queries to another server. Proxy settings are disabled by default.
- _devServer.headers_ - If you want to attach custom headers to your requests, this is the place to do it.

## browserlist
- research it
