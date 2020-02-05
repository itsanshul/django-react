from django.db import models

class Instructor(models.Model):

    def __str__(self):
        return self.fname + ' ' +self.lname + ' - '+self.email

    fname = models.CharField(max_length=50)
    lname = models.CharField(max_length=50)
    email = models.CharField(max_length=200, unique=True)
    password = models.CharField(max_length=150)
    headline = models.CharField(max_length=150, blank=True)
    biography = models.CharField(max_length=500, blank=True)
    lg = models.CharField(max_length=20)
    image = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

class Course(models.Model):
    def __str__(self):
        return self.title + ' - By: ' + self.instructor.fname 

    title = models.CharField(max_length=300)
    sub_title = models.CharField(max_length=200)
    category = models.CharField(max_length=100)
    instructor = models.ForeignKey(Instructor, on_delete=models.CASCADE, related_name='ins')
    lg = models.CharField(max_length=20)
    what_learn = models.TextField()
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)
    image = models.CharField(max_length=100)
    promo_video = models.CharField(max_length=100)
    pricing = models.IntegerField(max_length=30)
    

    

