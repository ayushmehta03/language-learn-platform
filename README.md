<h1 align="center">🌐 Language Learn Platform</h1>

<p align="center">
  <b>MERN + WebSocket based language learning platform</b>  
</p>

<p align="center">
  🚀 <a href="https://language-learn-platform-am.onrender.com/">Live Demo</a> • 
  <a href="https://github.com/ayushmehta03/language-learn-platform">GitHub Repo</a>
</p>

<hr/>

<h2>🧰 Tech Stack</h2>

<ul>
  <li><b>MongoDB</b> – NoSQL database</li>
  <li><b>Express.js</b> – Backend framework</li>
  <li><b>React</b> – Frontend framework</li>
  <li><b>Node.js</b> – Runtime environment</li>
  <li><b>WebSocket</b> – Real-time communication</li>
</ul>

<hr/>

<h2>📂 Project Structure</h2>

<pre>
language-learn-platform/
├── backend/         # Server-side code (Node.js + Express + WebSocket logic)
├── frontend/        # Client side (React) for UI and front-end features
├── README.md        # This document
├── .gitignore
└── package.json     # Project metadata & dependencies
</pre>

<hr/>

<h2>🔧 Features</h2>

<ul>
  <li>✅ Signup / Login functionality</li>
  <li>✅ Real-time interactions using <b>WebSocket</b> (chat, sessions)</li>
  <li>✅ Language learning tools & content delivery</li>
  <li>✅ Separate <b>frontend</b> and <b>backend</b> for scalability</li>
</ul>

<hr/>

<h2>🛠️ Setup & Installation</h2>

<ol>
  <li><b>Clone the repo</b></li>
  <pre><code>git clone https://github.com/ayushmehta03/language-learn-platform.git
cd language-learn-platform</code></pre>

  <li><b>Backend setup</b></li>
  <pre><code>cd backend
npm install
# set env variables: MONGODB_URI, JWT_SECRET, WEBSOCKET_PORT, PORT
npm start</code></pre>

  <li><b>Frontend setup</b></li>
  <pre><code>cd frontend
npm install
npm start</code></pre>

  <li><b>Run in browser</b></li>
  <p>Frontend runs at <code>http://localhost:3000</code>, backend/WebSocket must also be running.</p>
</ol>

<hr/>

<h2>⚙️ Environment / Configuration</h2>

<table>
  <tr>
    <th>Key</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>MONGODB_URI</code></td>
    <td>Connection string for MongoDB</td>
  </tr>
  <tr>
    <td><code>JWT_SECRET</code></td>
    <td>Secret key for authentication tokens</td>
  </tr>
  <tr>
    <td><code>WEBSOCKET_PORT</code></td>
    <td>WebSocket server port</td>
  </tr>
  <tr>
    <td><code>PORT</code></td>
    <td>Backend server port</td>
  </tr>
</table>

<hr/>



<hr/>

