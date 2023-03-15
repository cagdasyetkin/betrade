1. django-admin startproject backend
2. django-admin startapp base
3. settings.py:

```python
import os
INSTALLED_APPS = ['base.apps.BaseConfig']
STATIC_URL = '/static/'
STATICFILES_DIRS = [os.path.join(BASE_DIR, 'static')]
MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
```

4. python manage.py runserver
5. python manage.py makemigrations
6. python manage.py migrate
7. python manage.py createsuperuser
8. backend/urls.py:

```python
from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('base.urls')),
    path('', TemplateView.as_view(template_name='index.html')),
]
```

9. pip install djangorestframework
10. settings.py:

```python
INSTALLED_APPS = [
    'rest_framework',
]
```

11. base/urls.py:

```python
from django.urls import path
from . import views

urlpatterns = [
    path('', views.hello, name='hello'),
    path('dashboard/', views.dashboard, name='dashboard'),

]
```

12. base/views.py:

```python
from django.shortcuts import render
from rest_framework.decorators import api_view
from django.http import HttpResponse

# my first demo view
@api_view(['GET'])
def hello(request):
    # return hello world
    return HttpResponse("Hello World")

# create dashboard view
@api_view(['GET'])
def dashboard(request):
    # return dashboard
    return HttpResponse("Dashboard")
```

13. base/admin.py:

```python
from django.contrib import admin
from .models import *

# Register your models here.
```

14. base/models.py:

```python

```

15. base/serializers.py:

```python

```

16. hello world home page index.html:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Home</title>
  </head>
  <body>
    <h1>Hello My User</h1>
  </body>
</html>
```

17. update base/views.py:

```python
# create an index view to render index.html
def index(request):
    # render index.html
    return render(request, 'base/index.html')
```

18. update base/views.py:

```python
from rest_framework.response import Response
import json
# create dashboard view
@api_view(['GET'])
def dashboard(request):
    # return dashboard data from "base/datafactory/data/output/extracted.json"
    # read the json file
    with open('base/datafactory/data/output/extracted.json', 'r') as f:
        data = json.load(f)
    return Response(data)
```

19. pip install django-cors-headers
20. settings.py:

```python
INSTALLED_APPS = [
    'corsheaders',
]
MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
]
CORS_ORIGIN_ALLOW_ALL = True
```

21.
