# Generated by Django 4.0.5 on 2023-05-01 11:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0042_merge_20230501_1649'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='has_purchased_pass',
            field=models.BooleanField(blank=True, default=False, null=True),
        ),
    ]
