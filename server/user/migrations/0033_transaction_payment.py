# Generated by Django 4.0.5 on 2023-04-20 10:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0032_transaction_order_taker'),
    ]

    operations = [
        migrations.AddField(
            model_name='transaction',
            name='payment',
            field=models.CharField(choices=[('PO', 'Pending'), ('CO', 'Completed')], default='PO', max_length=20, null=True),
        ),
    ]
