# Generated by Django 5.0.6 on 2024-06-02 20:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('applications', '0002_rename_datacontroller_dataprocessor'),
    ]

    operations = [
        migrations.AddField(
            model_name='dataprocessor',
            name='is_approved',
            field=models.IntegerField(default=0),
        ),
    ]