# Generated by Django 4.0.5 on 2023-03-14 17:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0011_remove_user_country_code_remove_user_ieee_member_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='order',
            old_name='player_id',
            new_name='user',
        ),
    ]
