# Generated by Django 4.0.5 on 2023-04-22 11:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0036_feedback'),
    ]

    operations = [
        migrations.AddField(
            model_name='team',
            name='team_name',
            field=models.CharField(default='team', max_length=20),
        ),
    ]
