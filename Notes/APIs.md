***Application Programming Interface**, is a set of rules and protocols that allows different software applications to communicate and interact with each other.
Application refers to any software with a distinct function. Interface can be thought of as a contract of service between two applications.*

### four different ways that APIs can work:
1. SOAP APIs: *Simple Object Access Protocol. Client and server exchange messages using XML.*
2. RPC APIs: *Remote Procedure Calls. The client completes a function (or procedure) on the server, and the server sends the output back to the client.*
3. Websocket APIs: Modern web API development that uses JSON objects to pass data. Supports two-way communication between client apps and the server. The server can send callback messages to connected clients, making it more efficient than REST API.
4. REST APIs: Most popular and flexible APIs found on the web today. The client sends requests to the server as data. The server uses this client input to start internal functions and returns output data back to the client.

### Rest APIs
- Representational State Transfer.
- REST defines a set of functions like GET, PUT, DELETE, etc. that clients can use to access server data. Clients and servers exchange data using HTTP.
- statelessness.
- Client requests to the server are similar to URLs you type in your browser to visit a website. Response from the server is plain data.

	#### ==Web APIs: ==
	- API between a web server and web browser.
	- All web services are APIs but not all APIs are web services.
	- REST API is a special type of Web API
	#### ==API Integration:==
	- **API integrations** are tools that enable automatic data updates between clients and servers.
	#### ==different types of APIs (scope of use):==
	- Private APIs: internal to an enterprise.
	- Public APIs: open to the public and may be used by anyone.
	- Partner APIs: only accessible by authorized external developers.
	- Composite APIs: combine two or more different APIs.
	#### ==API endpoints:==
	- **API endpoint** is a specific URL where an API interacts with other software systems to access or exchange data.

### API Request and Response:
*A request is a message sent by a client to an API endpoint, and a response is the reply sent back by the API endpoint.*
1. Request:
	- A request tells the API what the client wants to do
	- Requests are made using URLs
	- Requests can be used to query for data or initiate an action
	- A request header contains metadata about the request and the client
2. Response:
    - A response lets the client know if the request was successful 
	- A response may include data requested by the client 
	- A response header contains information about the content and the server that sent it 
	- A response body contains data returned by the server
	- The outcome of the operation is specified as an HTTP status code
![[Pasted image 20250228150221.png]]

### HTTP headers:
```
<HTTP_METHOD> <API_ENDPOINT> HTTP/<VERSION>
Host: <HOST_ADDRESS>
Authorization: <AUTHENTICATION_TOKEN>
Content-Type: <CONTENT_TYPE>
Accept: <RESPONSE_FORMAT>
User-Agent: <APPLICATION_NAME/VERSION>
Cache-Control: <CACHE_DIRECTIVE>
Custom-Header: <CUSTOM_VALUE>  # Optional for custom requirements
```

### HTTP Response:
```
HTTP/1.1 [status_code] [status_text]
Date: [current_date]
Server: [server_name/version]
Content-Type: [content_type]
Content-Length: [content_length]
Connection: [connection_status]
```

### Naming Conventions: 
In order to provide consistent developer experience across many APIs and over a long period of time, all names used by an API **should** be:
- simple
- intuitive
- consistent

*Names used in APIs **should** be in correct American English*

