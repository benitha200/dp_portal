from django.apps import AppConfig

class MyappConfig(AppConfig):
    name = 'main'

    def ready(self):
        import main.signals
