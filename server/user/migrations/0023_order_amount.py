# Generated by Django 4.0.5 on 2023-03-21 03:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0022_alter_order_event_remove_team_event_team_event'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='amount',
            field=models.IntegerField(default=0, null=True),
        ),
    ]
