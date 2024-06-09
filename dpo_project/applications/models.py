from django.db import models


class DataProcessor(models.Model):
    # SECTION 1 – APPLICANT DETAILS
    entity_name = models.CharField(max_length=255)
    registration_number = models.CharField(max_length=255, blank=True, null=True)
    license_number = models.CharField(max_length=255, blank=True, null=True)
    law_number = models.CharField(max_length=255, blank=True, null=True)
    presidential_order_number = models.CharField(max_length=255, blank=True, null=True)
    NATURE_CHOICES = [
        ('Public', 'Public'),
        ('Private', 'Private'),
        ('NGO', 'NGO'),
        ('Faith Based Organization', 'Faith Based Organization'),
        ('Political Organization', 'Political Organization'),
        ('Development Partner', 'Development Partner'),
        ('Other', 'Other'),
    ]
    nature_of_entity = models.CharField(max_length=50, choices=NATURE_CHOICES)
    entity_sector = models.CharField(max_length=255)
    entity_address = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=50)
    email_address = models.EmailField()
    website = models.URLField(blank=True, null=True)

    # Data Protection Officer
    dpo_name = models.CharField(max_length=255)
    dpo_phone_number = models.CharField(max_length=50)
    dpo_email_address = models.EmailField()

    # Representative In Rwanda (if applicant is established outside of Rwanda)
    representative_name = models.CharField(max_length=255, blank=True, null=True)
    representative_phone_number = models.CharField(max_length=50, blank=True, null=True)
    representative_address = models.CharField(max_length=255, blank=True, null=True)
    representative_email = models.EmailField(blank=True, null=True)
    representative_website = models.URLField(blank=True, null=True)

    # SECTION 2 – PERSONAL DATA
    category_of_data_subjects = models.CharField(max_length=255)
    purpose_of_data_processing = models.CharField(max_length=255)

    # SECTION 3 – TRANSFER OF PERSONAL DATA
    transfer_of_personal_data_outside_rwanda = models.BooleanField()
    transfer_country = models.CharField(max_length=255, blank=True, null=True)

    # SECTION 4 – CATEGORIES OF PERSONAL DATA BEING PROCESSED
    categories_of_personal_data = models.CharField(max_length=255)
    sensitive_personal_data = models.BooleanField()

    # SECTION 5 – ADDITIONAL INFORMATION
    additional_information = models.TextField(blank=True, null=True)

    # Declaration
    declaration_name = models.CharField(max_length=255)
    declaration_designation = models.CharField(max_length=255)
    declaration_date = models.DateField()

    is_approved=models.IntegerField(default=0)

    def __str__(self):
        return self.entity_name


class DataController(models.Model):
    # SECTION 1 – APPLICANT DETAILS
    entity_name = models.CharField(max_length=255)
    registration_number = models.CharField(max_length=255, blank=True, null=True)
    license_number = models.CharField(max_length=255, blank=True, null=True)
    law_number = models.CharField(max_length=255, blank=True, null=True)
    presidential_order_number = models.CharField(max_length=255, blank=True, null=True)
    NATURE_CHOICES = [
        ('Public', 'Public'),
        ('Private', 'Private'),
        ('NGO', 'NGO'),
        ('Faith Based Organization', 'Faith Based Organization'),
        ('Political Organization', 'Political Organization'),
        ('Development Partner', 'Development Partner'),
        ('Other', 'Other'),
    ]
    nature_of_entity = models.CharField(max_length=50, choices=NATURE_CHOICES)
    entity_sector = models.CharField(max_length=255)
    entity_address = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=50)
    email_address = models.EmailField()
    website = models.URLField(blank=True, null=True)

    # Data Protection Officer
    dpo_name = models.CharField(max_length=255)
    dpo_phone_number = models.CharField(max_length=50)
    dpo_email_address = models.EmailField()

    # Representative In Rwanda (if applicant is established outside of Rwanda)
    representative_name = models.CharField(max_length=255, blank=True, null=True)
    representative_phone_number = models.CharField(max_length=50, blank=True, null=True)
    representative_address = models.CharField(max_length=255, blank=True, null=True)
    representative_email = models.EmailField(blank=True, null=True)
    representative_website = models.URLField(blank=True, null=True)

    # SECTION 2 – PERSONAL DATA
    category_of_data_subjects = models.CharField(max_length=255)
    purpose_of_data_processing = models.CharField(max_length=255)

    # SECTION 3 – TRANSFER OF PERSONAL DATA
    transfer_of_personal_data_outside_rwanda = models.BooleanField()
    transfer_country = models.CharField(max_length=255, blank=True, null=True)

    # SECTION 4 – CATEGORIES OF PERSONAL DATA BEING PROCESSED
    categories_of_personal_data = models.CharField(max_length=255)
    sensitive_personal_data = models.BooleanField()

    # SECTION 5 – ADDITIONAL INFORMATION
    additional_information = models.TextField(blank=True, null=True)

    # Declaration
    declaration_name = models.CharField(max_length=255)
    declaration_designation = models.CharField(max_length=255)
    declaration_date = models.DateField()

    is_approved=models.IntegerField(default=0)

    def __str__(self):
        return self.entity_name

