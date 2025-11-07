### Real-Time Collaborative Editor (Google Docs Clone)
A full-stack, real-time collaborative document editing app that simulates core functionality of Google Docs. Multiple users can edit the same document simultaneously with live updates and version persistence across server connections.

# Features
Real-Time Multi-User Editing

All changes sync live across all connected clients.

Built-in conflict resolution ensures smooth concurrent edits.

## Persistent Document State

Documents are autosaved and persist across user sessions and server restarts.

## Multi-Server Support

Scalable architecture handles multiple users across distributed server instances.

## Live Cursor & Text Indicators (optional enhancement)

See who is typing and where.

## Document Management

Create, open, and edit documents with unique shareable URLs.

## Tech Stack
Frontend
React (with hooks and context)

Socket.IO Client

Quill.js for rich text editing

Backend
Node.js + Express

Socket.IO Server for WebSocket communication

MongoDB / Redis for document storage and pub-sub coordination (optional: PostgreSQL, Firestore, etc.)

⚙️ Setup Instructions
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/PMA92/editor.git
cd editor
2. Install Dependencies
bash
Copy
Edit
# For backend
cd server
npm install

# For frontend
cd ../client
npm install
3. Run Development Servers
bash
Copy
Edit
# Start backend
cd server
npm run dev

# Start frontend
cd ../client
npm start
The app will be available at: http://localhost:3000

