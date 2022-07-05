const http = require('http');

// Creates server instance
const server = http.createServer((req, res) => {
  // Write server code here  
  const { method } = req;
 
  switch(method) {
    case 'GET':
      const handleGetRequest = (req, res) => {
        const { pathname } = new URL(req.url);
        if (pathname === '/users'){
        }
      };
      handleGetRequest(req, res);
  }  
});