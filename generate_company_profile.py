from reportlab.lib.pagesizes import A4
from reportlab.lib.units import inch, cm
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Image, PageBreak, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY
from reportlab.pdfgen import canvas
import os

# PDF file path
PDF_FILE = "Kataria_Enterprise_Company_Profile.pdf"
LOGO_PATH = r"d:\Kataria Enterprise Website\katariaenterprise\public\assets\logo.png"

class NumberedCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        canvas.Canvas.__init__(self, *args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_page_number(num_pages)
            canvas.Canvas.showPage(self)
        canvas.Canvas.save(self)

    def draw_page_number(self, page_count):
        self.setFont("Helvetica", 9)
        self.setFillColor(colors.grey)
        self.drawRightString(A4[0] - 1*cm, 1*cm, f"Page {self._pageNumber} of {page_count}")

def create_company_profile():
    doc = SimpleDocTemplate(PDF_FILE, pagesize=A4, topMargin=1.5*cm, bottomMargin=2*cm, leftMargin=2*cm, rightMargin=2*cm)
    
    story = []
    styles = getSampleStyleSheet()
    
    # Custom styles
    title_style = ParagraphStyle(
        'CustomTitle',
        parent=styles['Heading1'],
        fontSize=28,
        textColor=colors.HexColor('#DC2626'),
        spaceAfter=6,
        alignment=TA_CENTER,
        fontName='Helvetica-Bold'
    )
    
    heading1_style = ParagraphStyle(
        'CustomHeading1',
        parent=styles['Heading1'],
        fontSize=18,
        textColor=colors.HexColor('#DC2626'),
        spaceAfter=12,
        spaceBefore=20,
        fontName='Helvetica-Bold'
    )
    
    heading2_style = ParagraphStyle(
        'CustomHeading2',
        parent=styles['Heading2'],
        fontSize=14,
        textColor=colors.HexColor('#DC2626'),
        spaceAfter=10,
        spaceBefore=15,
        fontName='Helvetica-Bold'
    )
    
    body_style = ParagraphStyle(
        'CustomBody',
        parent=styles['Normal'],
        fontSize=10,
        alignment=TA_JUSTIFY,
        spaceAfter=8,
        leading=14
    )
    
    subtitle_style = ParagraphStyle(
        'Subtitle',
        parent=styles['Normal'],
        fontSize=12,
        textColor=colors.grey,
        alignment=TA_CENTER,
        spaceAfter=20
    )
    
    # Logo and Title Page
    if os.path.exists(LOGO_PATH):
        logo = Image(LOGO_PATH, width=3*inch, height=3*inch)
        logo.hAlign = 'CENTER'
        story.append(logo)
        story.append(Spacer(1, 0.3*inch))
    
    story.append(Paragraph("KATARIA ENTERPRISE", title_style))
    story.append(Paragraph("Company Profile", subtitle_style))
    story.append(Spacer(1, 0.2*inch))
    
    # Tagline
    story.append(Paragraph("<i>Delivering Value Through Smart Logistics Innovation</i>", ParagraphStyle('Italic', parent=body_style, alignment=TA_CENTER, textColor=colors.grey)))
    story.append(Spacer(1, 0.3*inch))
    
    # Company Info Box
    company_info = [
        ['<b>Established:</b>', '1989'],
        ['<b>Headquarters:</b>', 'Rajkot, Gujarat, India'],
        ['<b>Industry:</b>', 'FMCG Logistics, Supply Chain & Warehouse Management'],
        ['<b>Website:</b>', 'www.katariaenterprise.com'],
    ]
    
    info_table = Table(company_info, colWidths=[3*cm, 10*cm])
    info_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), colors.HexColor('#F5F5F5')),
        ('TEXTCOLOR', (0, 0), (-1, -1), colors.black),
        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
        ('FONTNAME', (0, 0), (-1, -1), 'Helvetica'),
        ('FONTSIZE', (0, 0), (-1, -1), 10),
        ('TOPPADDING', (0, 0), (-1, -1), 10),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 10),
        ('LEFTPADDING', (0, 0), (-1, -1), 15),
        ('BOX', (0, 0), (-1, -1), 1, colors.HexColor('#DC2626')),
    ]))
    story.append(info_table)
    story.append(PageBreak())
    
    # ABOUT US
    story.append(Paragraph("ABOUT US", heading1_style))
    story.append(Paragraph("Founded in 1989 and headquartered in Rajkot, Gujarat, Kataria Enterprise has grown into one of India's leading marketing, supply chain and warehouse management companies. We serve the FMCG sector with an unmatched distribution network spanning 7 states and 280+ districts.", body_style))
    story.append(Paragraph("With 330+ closed-body containerised trucks, 250+ dedicated professionals and partnerships with brands like Balaji Wafers, Coca-Cola and Vadilal, we ensure your products reach every retailer — on time, every time.", body_style))
    story.append(Spacer(1, 0.3*inch))
    
    # KEY STATISTICS
    story.append(Paragraph("KEY STATISTICS", heading1_style))
    
    stats_data = [
        ['<b>7+ States</b>', '<b>280+ Districts</b>', '<b>2500+ Towns</b>'],
        ['Coverage across India', 'Serviced nationwide', 'Reached daily'],
        ['', '', ''],
        ['<b>8600+ Pincodes</b>', '<b>1100+ Dealers</b>', '<b>10 Lakh+ Retailers</b>'],
        ['Covered', 'In network', 'Served'],
        ['', '', ''],
        ['<b>54 Cr+ Population</b>', '<b>330+ Trucks</b>', '<b>250+ Professionals</b>'],
        ['Reached', 'Containerised fleet', 'In team'],
        ['', '', ''],
        ['<b>300+ Dealers/Day</b>', '<b>36+ Years</b>', '<b>15+ Awards</b>'],
        ['Serviced daily', 'Excellence', 'Won'],
    ]
    
    stats_table = Table(stats_data, colWidths=[6*cm, 6*cm, 6*cm])
    stats_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), colors.HexColor('#FEE2E2')),
        ('TEXTCOLOR', (0, 0), (-1, -1), colors.black),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('FONTNAME', (0, 0), (-1, -1), 'Helvetica'),
        ('FONTSIZE', (0, 0), (-1, -1), 10),
        ('TOPPADDING', (0, 0), (-1, -1), 8),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 8),
        ('GRID', (0, 0), (-1, -1), 0.5, colors.white),
    ]))
    story.append(stats_table)
    story.append(Spacer(1, 0.3*inch))
    
    # VISION, MISSION & VALUES
    story.append(Paragraph("VISION, MISSION & VALUES", heading1_style))
    
    story.append(Paragraph("<b>Our Vision:</b>", heading2_style))
    story.append(Paragraph("To be India's most trusted and innovative logistics partner — connecting manufacturers to markets with speed, precision and care.", body_style))
    
    story.append(Paragraph("<b>Our Mission:</b>", heading2_style))
    story.append(Paragraph("To deliver end-to-end supply chain solutions that empower brands to scale confidently across every corner of India.", body_style))
    
    story.append(Paragraph("<b>Our Values:</b>", heading2_style))
    story.append(Paragraph("Reliability, transparency and excellence drive every decision we make — from the warehouse floor to the last-mile delivery.", body_style))
    story.append(PageBreak())
    
    # CORE SERVICES
    story.append(Paragraph("CORE SERVICES", heading1_style))
    
    story.append(Paragraph("1. Supply Chain Management", heading2_style))
    story.append(Paragraph("End-to-end supply chain solutions tailored to FMCG sector with advanced planning systems ensuring zero stockouts and minimal transit time across all operational states.", body_style))
    story.append(Paragraph("• Demand forecasting & planning<br/>• Vendor coordination<br/>• Real-time tracking capabilities<br/>• Zero-stockout guarantee", body_style))
    story.append(Spacer(1, 0.15*inch))
    
    story.append(Paragraph("2. Warehouse Management", heading2_style))
    story.append(Paragraph("State-of-the-art facilities with modern WMS technology for high-volume FMCG inventory management with complete traceability from inbound to outbound.", body_style))
    story.append(Paragraph("• WMS-powered inventory control<br/>• Temperature-sensitive storage facilities<br/>• FIFO & FEFO compliance<br/>• 24/7 security & surveillance", body_style))
    story.append(Spacer(1, 0.15*inch))
    
    story.append(Paragraph("3. Distribution Network", heading2_style))
    story.append(Paragraph("330+ closed-body containerised trucks with coverage across 280+ districts reaching 2500+ towns with 99%+ on-time delivery rate.", body_style))
    story.append(Paragraph("• Route optimisation engine<br/>• Pan-India reach across 7 states<br/>• Efficient delivery paths reducing costs", body_style))
    story.append(Spacer(1, 0.3*inch))
    
    # GEOGRAPHICAL PRESENCE
    story.append(Paragraph("GEOGRAPHICAL PRESENCE", heading1_style))
    
    geo_data = [
        ['<b>State</b>', '<b>Districts</b>', '<b>Towns</b>', '<b>Highlights</b>'],
        ['Gujarat', '33', '500+', 'Headquarters & strongest network'],
        ['Rajasthan', '50+', '400+', 'Extensive coverage across vast geography'],
        ['Madhya Pradesh', '52+', '350+', 'Deep penetration in central India'],
        ['Uttar Pradesh', '75+', '600+', "India's most populous state"],
        ['Haryana', '22+', '200+', 'Strategic northern corridor coverage'],
        ['Delhi', '11+', '150+', 'Full NCR coverage'],
        ['Bihar', '38+', '300+', 'Growing presence in eastern India'],
    ]
    
    geo_table = Table(geo_data, colWidths=[3.5*cm, 2.5*cm, 2.5*cm, 9*cm])
    geo_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#DC2626')),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 9),
        ('TOPPADDING', (0, 0), (-1, -1), 8),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 8),
        ('BACKGROUND', (0, 1), (-1, -1), colors.HexColor('#FEE2E2')),
        ('GRID', (0, 0), (-1, -1), 0.5, colors.white),
    ]))
    story.append(geo_table)
    story.append(PageBreak())
    
    # COMPANY MILESTONES
    story.append(Paragraph("COMPANY MILESTONES", heading1_style))
    
    milestones = [
        ('<b>1989</b>', 'Founded in Rajkot, Gujarat with focus on FMCG distribution'),
        ('<b>1994</b>', 'Expanded into full-scale distribution company across Gujarat'),
        ('<b>2000</b>', 'Entered multi-state operations beyond Gujarat'),
        ('<b>2010</b>', 'Invested in 330+ container trucks and modern WMS technology'),
        ('<b>2018</b>', 'Reached 10 lakh+ retailers across 280+ districts'),
        ('<b>Today</b>', 'Operating across 7 states, serving 67 crore+ people'),
    ]
    
    for year, event in milestones:
        story.append(Paragraph(f"{year}: {event}", body_style))
    
    story.append(Spacer(1, 0.3*inch))
    
    # LEADERSHIP TEAM
    story.append(Paragraph("LEADERSHIP TEAM", heading1_style))
    
    story.append(Paragraph("Mr. Vallabhbhai Kataria", heading2_style))
    story.append(Paragraph("<i>Founder & Managing Director | 36+ Years Experience</i>", ParagraphStyle('Italic', parent=body_style, textColor=colors.grey)))
    story.append(Paragraph("Born into a farming family near Junagadh, Mr. Vallabhbhai Kataria earned a degree in electrical engineering and began his entrepreneurial journey in 1972. In 1994, he founded Kataria Enterprise, starting with a single vehicle and building it into a powerful network of 330+ closed-body containers, distributing products across 90% of India. Today, the company ranks 5th nationally in single-product distribution networks.", body_style))
    story.append(Spacer(1, 0.15*inch))
    
    story.append(Paragraph("Late Mr. Paras V. Kataria", heading2_style))
    story.append(Paragraph("<i>Director – National Distribution & Operations | 20+ Years Experience</i>", ParagraphStyle('Italic', parent=body_style, textColor=colors.grey)))
    story.append(Paragraph("Instrumental in building and expanding the vast distribution network. Under his leadership, products reached every corner—from small villages to leading retail stores in major metro cities.", body_style))
    story.append(Spacer(1, 0.15*inch))
    
    story.append(Paragraph("Mr. Rimal V. Kataria", heading2_style))
    story.append(Paragraph("<i>Director – Supply Chain & Logistics | 20+ Years Experience</i>", ParagraphStyle('Italic', parent=body_style, textColor=colors.grey)))
    story.append(Paragraph("A qualified chemical engineer who serves as the driving force behind management and operations, efficiently overseeing the supply chain and nationwide logistics network.", body_style))
    story.append(Spacer(1, 0.15*inch))
    
    story.append(Paragraph("Mr. Rupesh Vadariya", heading2_style))
    story.append(Paragraph("<i>General Manager – Operations & Human Resources | 20+ Years Experience</i>", ParagraphStyle('Italic', parent=body_style, textColor=colors.grey)))
    story.append(Paragraph("Oversees both operations and human resource management, managing core logistics operations while addressing dealer challenges to strengthen the distribution network.", body_style))
    story.append(PageBreak())
    
    # ORGANIZATIONAL STRUCTURE
    story.append(Paragraph("ORGANIZATIONAL STRUCTURE", heading1_style))
    
    dept_data = [
        ['<b>Department</b>', '<b>Team Size</b>', '<b>Key Responsibilities</b>'],
        ['Supply Chain', '60+', 'End-to-end planning, procurement coordination, vendor management'],
        ['Sales & Distribution', '100+', 'Field force covering 2500+ towns, retailer relationships'],
        ['Warehouse & Logistics', '70+', 'Inventory accuracy, loading operations, route optimization'],
        ['Quality & Compliance', '20+', 'Safety standards, regulatory compliance, quality benchmarks'],
    ]
    
    dept_table = Table(dept_data, colWidths=[4*cm, 2.5*cm, 11*cm])
    dept_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#DC2626')),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 9),
        ('TOPPADDING', (0, 0), (-1, -1), 8),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 8),
        ('BACKGROUND', (0, 1), (-1, -1), colors.HexColor('#FEE2E2')),
        ('GRID', (0, 0), (-1, -1), 0.5, colors.white),
    ]))
    story.append(dept_table)
    story.append(Spacer(1, 0.3*inch))
    
    # AWARDS & RECOGNITIONS
    story.append(Paragraph("AWARDS & RECOGNITIONS", heading1_style))
    story.append(Paragraph("15+ Industry Awards | 3 National Recognitions | 10+ Industry Bodies", ParagraphStyle('Bold', parent=body_style, textColor=colors.HexColor('#DC2626'), fontName='Helvetica-Bold')))
    story.append(Spacer(1, 0.15*inch))
    
    awards = [
        "2025: Telematics Technology – Best Practice Adopter (First Runner Up) - Apollo CV Awards",
        "2024: Large Truck Fleet Operator of the Year (First Runner Up) - Apollo CV Awards",
        "2023: ELITE – Master Recognition - Ashok Leyland (Hinduja Group)",
        "2018: Large Truck Fleet Operator of the Year - Apollo CV Awards",
        "2013: Operational Excellence – National Rank 2 - CEAT India Awards",
        "2011: Operational Excellence – West Zone - CEAT India Awards",
    ]
    
    for award in awards:
        story.append(Paragraph(f"• {award}", body_style))
    
    story.append(Spacer(1, 0.15*inch))
    story.append(Paragraph("<i>...and 9+ more prestigious recognitions from leading industry bodies</i>", ParagraphStyle('Italic', parent=body_style, alignment=TA_CENTER, textColor=colors.grey)))
    story.append(Spacer(1, 0.3*inch))
    
    # WHY CHOOSE US
    story.append(Paragraph("WHY CHOOSE KATARIA ENTERPRISE", heading1_style))
    
    why_us = [
        "✓ <b>On-Time Delivery:</b> 99%+ on-time delivery rate across all routes and districts",
        "✓ <b>Safe & Secure:</b> Closed-body containerised trucks ensuring product safety",
        "✓ <b>Pan-India Reach:</b> 7 states, 280+ districts, 2500+ towns coverage",
        "✓ <b>Dedicated Support:</b> Round-the-clock account team for every brand partner",
        "✓ <b>Advanced Technology:</b> WMS-powered operations and telematics systems",
        "✓ <b>Proven Track Record:</b> 36+ years of excellence and 15+ industry awards",
    ]
    
    for point in why_us:
        story.append(Paragraph(point, body_style))
    
    story.append(PageBreak())
    
    # CONTACT INFORMATION
    story.append(Paragraph("CONTACT INFORMATION", heading1_style))
    
    contact_info = [
        ['<b>Registered Office:</b>', 'Kataria Enterprise<br/>Rajkot, Gujarat, India'],
        ['<b>Website:</b>', 'www.katariaenterprise.com'],
        ['<b>Email:</b>', 'info@katariaenterprise.com'],
    ]
    
    contact_table = Table(contact_info, colWidths=[4*cm, 13*cm])
    contact_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), colors.HexColor('#F5F5F5')),
        ('TEXTCOLOR', (0, 0), (-1, -1), colors.black),
        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
        ('FONTNAME', (0, 0), (-1, -1), 'Helvetica'),
        ('FONTSIZE', (0, 0), (-1, -1), 10),
        ('TOPPADDING', (0, 0), (-1, -1), 12),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 12),
        ('LEFTPADDING', (0, 0), (-1, -1), 15),
        ('BOX', (0, 0), (-1, -1), 1, colors.HexColor('#DC2626')),
    ]))
    story.append(contact_table)
    story.append(Spacer(1, 0.5*inch))
    
    # Footer note
    story.append(Paragraph("<i>All statistics and information are current as of 2025. Kataria Enterprise continues to expand its operations and services across India.</i>", ParagraphStyle('Footer', parent=body_style, alignment=TA_CENTER, textColor=colors.grey, fontSize=8)))
    
    # Build PDF
    doc.build(story, canvasmaker=NumberedCanvas)
    print(f"PDF generated successfully: {PDF_FILE}")

if __name__ == "__main__":
    create_company_profile()
