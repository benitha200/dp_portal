# assessments/models.py
from django.db import models
from courses.models import Course

class Assessment(models.Model):
    course = models.ForeignKey(Course, related_name='assessments', on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    pass_score = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.course.title} - {self.title}"

class Question(models.Model):
    assessment = models.ForeignKey(Assessment, related_name='questions', on_delete=models.CASCADE)
    text = models.TextField()
    order = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.assessment.title} - Question {self.order}"

class Answer(models.Model):
    question = models.ForeignKey(Question, related_name='answers', on_delete=models.CASCADE)
    text = models.TextField()
    is_correct = models.BooleanField()
    order = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.question.text} - {self.text}"