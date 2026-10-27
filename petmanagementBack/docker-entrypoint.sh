#!/bin/sh
set -eu
if [ -z "${APP_KEY:-}" ]; then
    echo "APP_KEY is missing. Run php artisan key:generate in petmanagementBack first." >&2
    exit 1
fi
mkdir -p storage/database storage/framework/cache/data storage/framework/sessions storage/framework/views storage/logs
if [ "${DB_CONNECTION:-sqlite}" = "sqlite" ]; then
    touch "$DB_DATABASE"
fi
php artisan config:clear
php artisan migrate --force --no-interaction
exec php artisan serve --host=0.0.0.0 --port=5000
