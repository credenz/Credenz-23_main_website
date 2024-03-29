# Generated by Django 4.0.5 on 2023-02-28 04:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0006_remove_referral_android_id_remove_referral_code_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='payment_verified',
            new_name='ieee_member',
        ),
        migrations.RemoveField(
            model_name='user',
            name='student_id',
        ),
        migrations.AddField(
            model_name='order',
            name='payment_verified',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='user',
            name='coins',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='user',
            name='country_code',
            field=models.CharField(default='+91', max_length=5),
        ),
        migrations.AddField(
            model_name='user',
            name='ieee_member_id',
            field=models.IntegerField(blank=True, default=0),
        ),
        migrations.AddField(
            model_name='user',
            name='institute',
            field=models.TextField(default='', max_length=512),
        ),
        migrations.AddField(
            model_name='user',
            name='senior',
            field=models.BooleanField(default=False),
        ),
    ]
