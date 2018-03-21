const rootPatterns = [{
    regex: /^YourLibraryName\/([A-Z].*)/,
    root: ['YourLibraryName', '']
  }];
  
  function rootForRequest(path) {
    const match = rootPatterns.find((pattern, index, obj) => !!path.match(pattern.regex));
  
    if (match) {
      let m = path.match(match.regex);
      if (m.length > 1) {
        match.root[match.root.length - 1] = m[m.length - 1];
      }
      return [...match.root];
    }
  
    return 'YourLibraryName';
  }
  
  function libraryExternalsFactory() {
  
    return function libraryExternals(context, request, callback) {
  
      if (request.startsWith('YourLibraryName')) {
        return callback(null, {
          root: rootForRequest(request),
          commonjs: request,
          commonjs2: request,
          amd: request
        });
      }
  
      callback();
  
    };
  
  }
  module.exports = libraryExternalsFactory;