# Lab8 E-commerce Full-Stack App

This lab includes:
- `shop-back` (Django REST API)
- `online-shop` (Angular standalone frontend)

## Backend (shop-back)

### Setup
```bash
cd shop-back
source ../.venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py loaddata api/fixtures/sample_data.json
python manage.py createsuperuser
python manage.py runserver
```

### API Docs
- Swagger UI: http://127.0.0.1:8000/api/docs/
- Schema: http://127.0.0.1:8000/api/schema/

### Main Endpoints
- `GET /api/products/?category=<slug>&search=<term>&sort=price_asc|price_desc|newest&page=1`
- `GET /api/products/<id>/`
- `GET /api/categories/`
- `GET /api/categories/<id>/`
- `GET /api/categories/<id>/products/`
- `POST /api/orders/`

## Frontend (online-shop)

### Setup
```bash
cd online-shop
npm install
npm start
```

Default frontend API URL is configured in:
- `src/environments/environment.ts`

## Production Notes
- Replace `environment.prod.ts` API URL with your deployed backend URL.
- Set `DEBUG=False`, secure `ALLOWED_HOSTS`, and stricter CORS policy for production.
