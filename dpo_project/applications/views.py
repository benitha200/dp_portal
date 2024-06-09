from rest_framework import generics
from .models import DataProcessor,DataController
from .serializers import DataProcessorSerializer, DataCOntrollerSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.utils.html import strip_tags
import os
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.platypus import SimpleDocTemplate, Paragraph
import io
from io import BytesIO
from reportlab.pdfgen import canvas
from django.core.mail import EmailMessage
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Frame, Image
from reportlab.lib.units import inch
from reportlab.lib.colors import darkblue
from reportlab.lib.colors import black



class DataProcessorAPIView(generics.ListCreateAPIView):
    permission_classes = [AllowAny]
    queryset = DataProcessor.objects.all()
    serializer_class = DataProcessorSerializer

# class DataProcessorApprovalAPIView(generics.UpdateAPIView):
#     permission_classes=[AllowAny]
#     queryset = DataProcessor.objects.all()
#     serializer_class = DataProcessorSerializer


#     def update(self, request, *args, **kwargs):
#         instance = self.get_object()
#         instance.is_approved = 1

#         instance.save()
#         serializer = self.get_serializer(instance)
#         return Response(serializer.data, status=status.HTTP_200_OK)
    
class DataProcessorApprovalAPIView(generics.UpdateAPIView):
    permission_classes = [AllowAny]
    queryset = DataProcessor.objects.all()
    serializer_class = DataProcessorSerializer

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.is_approved = 1
        instance.save()

        # Get the required data
        entity_name = instance.entity_name
        email_address = instance.email_address

        # Create PDF certificate content
        pdf_content = BytesIO()
        self.create_pdf(pdf_content, entity_name)
        pdf_content.seek(0)

        # Send the PDF content as an email attachment
        email = EmailMessage(
            'Data Processor Certificate',
            'This is the certificate of Data Approval.',
            'from@example.com',  # Sender's email address
            [email_address],  # Recipient's email address
        )
        email.attach('Certificate.pdf', pdf_content.getvalue(), 'application/pdf')
        email.send()

        serializer = self.get_serializer(instance)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def create_pdf(self, buffer, entity_name):
        doc = SimpleDocTemplate(buffer, pagesize=letter)
        styles = getSampleStyleSheet()

        # Define custom styles
        header_style = ParagraphStyle(
            'HeaderStyle',
            parent=styles['Normal'],
            fontSize=32,
            textColor=darkblue,
            spaceAfter=14,
            alignment=1,  # Centered
            leading=40,
            fontName='Helvetica-Bold'
        )

        content_style = ParagraphStyle(
            'ContentStyle',
            parent=styles['Normal'],
            fontSize=18,
            textColor=black,
            leading=40
        )

        border_frame = Frame(
            doc.leftMargin - inch * 0.5,  # Adjusted for the border
            doc.bottomMargin - inch * 0.5,  # Adjusted for the border
            doc.width + inch,  # Adjusted for the border
            doc.height + inch,  # Adjusted for the border
            leftPadding=inch * 0.5,
            bottomPadding=inch * 0.5,
            rightPadding=inch * 0.5,
            topPadding=inch * 0.5,
            showBoundary=True  # Show border
        )

        story = []
        story.append(Paragraph("Data Processor Certificate", header_style))
        story.append(Spacer(1, 24))
        story.append(Paragraph(f"This is to certify that {entity_name} has been certified for Data Processing.", content_style))

        def draw_borders(canvas, doc):
            # Draw the dark blue border with thickness of 20px
            canvas.setStrokeColor(darkblue)
            canvas.setLineWidth(20)
            canvas.rect(
                doc.leftMargin - inch * 1.5,  # Adjusted for the additional border
                doc.bottomMargin - inch * 1.5,  # Adjusted for the additional border
                doc.width + inch * 3,  # Adjusted for the additional border
                doc.height + inch * 3  # Adjusted for the additional border
            )
            # Draw the inner border frame
            border_frame.drawBoundary(canvas, doc)

        doc.build(story, onFirstPage=draw_borders)


class DataProcessorRejectAPIView(generics.UpdateAPIView):
    permission_classes=[AllowAny]
    queryset = DataProcessor.objects.all()
    serializer_class = DataProcessorSerializer

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.is_approved = 2
        instance.save()
        serializer = self.get_serializer(instance)
        return Response(serializer.data, status=status.HTTP_200_OK)

class DataProcesssorDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = DataProcessor.objects.all()
    serializer_class = DataProcessorAPIView


class DataControllerAPIView(generics.ListCreateAPIView):
    permission_classes = [AllowAny]
    queryset = DataController.objects.all()
    serializer_class = DataProcessorSerializer

# class DataProcessorApprovalAPIView(generics.UpdateAPIView):
#     permission_classes=[AllowAny]
#     queryset = DataProcessor.objects.all()
#     serializer_class = DataProcessorSerializer


#     def update(self, request, *args, **kwargs):
#         instance = self.get_object()
#         instance.is_approved = 1

#         instance.save()
#         serializer = self.get_serializer(instance)
#         return Response(serializer.data, status=status.HTTP_200_OK)
    
class DataControllerApprovalAPIView(generics.UpdateAPIView):
    permission_classes = [AllowAny]
    queryset = DataController.objects.all()
    serializer_class = DataControllerAPIView

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.is_approved = 1
        instance.save()

        # Get the required data
        entity_name = instance.entity_name
        email_address = instance.email_address

        # Create PDF certificate content
        pdf_content = BytesIO()
        self.create_pdf(pdf_content, entity_name)
        pdf_content.seek(0)

        # Send the PDF content as an email attachment
        email = EmailMessage(
            'Data Controller Certificate',
            'This is the certificate of Data Approval.',
            'benithaiyuyisenga2002@gmail.com',  # Sender's email address
            [email_address],  # Recipient's email address
        )
        email.attach('Certificate.pdf', pdf_content.getvalue(), 'application/pdf')
        email.send()

        serializer = self.get_serializer(instance)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def create_pdf(self, buffer, entity_name):
        doc = SimpleDocTemplate(buffer, pagesize=letter)
        styles = getSampleStyleSheet()

        # Define custom styles
        header_style = ParagraphStyle(
            'HeaderStyle',
            parent=styles['Normal'],
            fontSize=32,
            textColor=darkblue,
            spaceAfter=14,
            alignment=1,  # Centered
            leading=40,
            fontName='Helvetica-Bold'
        )

        content_style = ParagraphStyle(
            'ContentStyle',
            parent=styles['Normal'],
            fontSize=18,
            textColor=black,
            leading=40
        )

        border_frame = Frame(
            doc.leftMargin - inch * 0.5,  # Adjusted for the border
            doc.bottomMargin - inch * 0.5,  # Adjusted for the border
            doc.width + inch,  # Adjusted for the border
            doc.height + inch,  # Adjusted for the border
            leftPadding=inch * 0.5,
            bottomPadding=inch * 0.5,
            rightPadding=inch * 0.5,
            topPadding=inch * 0.5,
            showBoundary=True  # Show border
        )

        story = []
        story.append(Paragraph("Data Processor Certificate", header_style))
        story.append(Spacer(1, 24))
        story.append(Paragraph(f"This is to certify that {entity_name} has been certified for Data Processing.", content_style))

        def draw_borders(canvas, doc):
            # Draw the dark blue border with thickness of 20px
            canvas.setStrokeColor(darkblue)
            canvas.setLineWidth(20)
            canvas.rect(
                doc.leftMargin - inch * 1.5,  # Adjusted for the additional border
                doc.bottomMargin - inch * 1.5,  # Adjusted for the additional border
                doc.width + inch * 3,  # Adjusted for the additional border
                doc.height + inch * 3  # Adjusted for the additional border
            )
            # Draw the inner border frame
            border_frame.drawBoundary(canvas, doc)

        doc.build(story, onFirstPage=draw_borders)

class DataControllerRejectAPIView(generics.UpdateAPIView):
    permission_classes=[AllowAny]
    queryset = DataProcessor.objects.all()
    serializer_class = DataProcessorSerializer

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.is_approved = 2
        instance.save()
        serializer = self.get_serializer(instance)
        return Response(serializer.data, status=status.HTTP_200_OK)

class DataControllerDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = DataController.objects.all()
    serializer_class = DataControllerAPIView

