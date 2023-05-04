# Generated by Django 4.0.5 on 2023-05-04 12:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0050_alter_transaction_transaction_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='transaction',
            name='payment',
            field=models.CharField(choices=[('PO', 'Pending'), ('CO', 'Completed'), ('IO', 'Invalid')], default='PO', max_length=20, null=True),
        ),
    ]
