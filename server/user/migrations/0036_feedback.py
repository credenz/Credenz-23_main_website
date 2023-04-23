# Generated by Django 4.0.5 on 2023-04-21 14:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0035_order_transaction_id'),
    ]

    operations = [
        migrations.CreateModel(
            name='Feedback',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, null=True)),
                ('email', models.EmailField(max_length=254, null=True)),
                ('context', models.TextField()),
            ],
        ),
    ]