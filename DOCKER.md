# Maypet Docker Desktop activity

## Separate Node.js demo

The `nodejs` service serves its own demonstration page at http://localhost:3001/ and health JSON at http://localhost:3001/api/health. It uses Node's built-in HTTP module and needs no npm dependencies. Laravel remains the application's backend.

From the project root, run `docker compose up --build -d nodejs` to start only this service, or `docker compose up --build -d` for all three services. Check it with `curl.exe http://localhost:3001/api/health`.

Without Docker, run `cd petmanagementNode` then `npm start`. Keep that terminal open. Stop the Docker nodejs service first if it already uses port 3001.

This project uses React/Vite and Laravel 12 (PHP), with SQLite. The Express examples in the activity guide have been adapted to Laravel. This is a local classroom setup using Laravel's development server.

1. Install and open Docker Desktop. Use Linux containers and its WSL 2 backend. Wait until the engine is running, then reopen your VS Code terminal if Docker was just installed.
2. From this project root, run in PowerShell:

```powershell
docker --version
docker compose version
docker info
docker run --rm hello-world
docker compose config --quiet
docker compose up --build -d
docker compose ps
docker compose logs --tail=50 backend frontend
```

The existing petmanagementBack/.env supplies APP_KEY and runtime configuration; it is excluded from images. If APP_KEY is empty, run `php artisan key:generate` inside petmanagementBack before starting. Never share the .env file or its secrets.

Open http://localhost:5173 for React. Check http://localhost:5000/api/health directly and http://localhost:5173/api/health through Nginx. Both health URLs should return {"status":"ok","service":"laravel-api"}. The backend /up route supplies the Compose readiness check.

In Docker Desktop, open Containers and expand the maypet group to view frontend and backend, logs, and start/stop controls. No separate MySQL container is needed for this SQLite project.

SQLite is created and migrated automatically in a new named backend-storage volume. Your existing local database is not imported or modified. The volume also preserves Laravel storage across container recreation. Do not use `docker compose down -v` unless you intend to delete that container data.

Verify the database schema and Nginx configuration:

```powershell
docker compose exec backend php artisan migrate:status
docker compose exec frontend nginx -t
```

Current React content is a landing page and has no database-backed pet features or API calls yet. The health endpoint verifies routing, and migrate:status verifies the container database schema; neither demonstrates a completed pet management feature. For future API calls use relative /api/... URLs, which Nginx forwards to Laravel.

After code edits: `docker compose up --build -d`. Stop containers with `docker compose down`; the named volume persists. View errors with `docker compose logs -f backend`. Change the host port in compose.yaml if 5173 or 5000 is occupied.

For class evidence, capture Docker Desktop with both services running, docker compose ps, the React page, the proxied health JSON, and migration status. Follow the instructor's rubric for any additional working feature evidence.
