# Generated by Django 5.0.6 on 2024-06-02 14:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='role',
            field=models.CharField(blank=True, max_length=255),
        ),
    ]