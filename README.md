# SocketIO_python_client
A demo about SocketIO_python_client.

There are many libraries for python-socketio server but few are about client. This is a simple demo.

node version 10.0.0

Usage:

$pip3 install socketIO-client-nexus  
$npm install  
$npm start  
$python3 python-sio.py  

Expected output:  
in Server:  
Server is running  
 1 sockets is connected  
FuncB : I got a event_B from Client.    
FuncB : I got a event_B from Client.  
FuncB : I got a event_B from Client.  
FuncC : I got a event_C from Client.  
FuncC : I got a event_C from Client.  

in Client:  
wxy@wxy-mipro:~/SocketioChat$ python3 python_sio.py   
FuncA: Now I got a message from server.  
I got a reponse from server for event_B ()  
I got a reponse from server for event_B ()  
I got a reponse from server for event_C ()  
disconnect  
