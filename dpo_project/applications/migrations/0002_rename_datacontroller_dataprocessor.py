# Generated by Django 5.0.6 on 2024-06-02 14:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('applications', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='DataController',
            new_name='DataProcessor',
        ),
    ]
