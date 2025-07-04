
export const mockCases = [
  {
    caseId: "DSP-2024-001",
    customerName: "Sarah Johnson",
    customerEmail: "sarah.johnson@email.com",
    disputeType: "Unauthorized Transaction",
    amount: "1,250.00",
    status: "pending",
    priority: "high",
    submittedDate: "2024-01-15",
    transactionId: "TXN-789456123",
    complaint: "I noticed a charge of $1,250.00 on my account that I did not authorize. This transaction occurred on January 10th, 2024, and I was out of the country at that time. I have my passport stamps as proof of travel. I immediately contacted my bank upon discovering this charge, but they directed me to dispute it directly with your company. I have never made any purchases with your service before, and I do not recognize the merchant name associated with this charge.",
    evidence: [
      "Passport_stamps_Jan2024.pdf",
      "Bank_statement_excerpt.pdf",
      "Travel_itinerary.pdf"
    ],
    currentReply: "Thank you for reporting this unauthorized transaction. We take these matters very seriously and will conduct a thorough investigation. Based on your travel documentation, we can see that you were indeed out of the country during the time of the disputed transaction. We will process a full refund within 3-5 business days and implement additional security measures on your account."
  },
  {
    caseId: "DSP-2024-002",
    customerName: "Michael Chen",
    customerEmail: "m.chen@techcorp.com",
    disputeType: "Product Not Received",
    amount: "350.75",
    status: "in-review",
    priority: "medium",
    submittedDate: "2024-01-18",
    transactionId: "TXN-456789012",
    complaint: "I purchased a premium software license for $350.75 on January 5th, 2024, but I never received the license key or download instructions. I have tried contacting customer support multiple times through different channels but have not received any response. The payment was processed successfully, and I have the confirmation email, but no follow-up communication or product delivery has occurred.",
    evidence: [
      "Purchase_confirmation.pdf",
      "Payment_receipt.pdf",
      "Support_ticket_screenshots.pdf"
    ],
    currentReply: ""
  },
  {
    caseId: "DSP-2024-003",
    customerName: "Emily Rodriguez",
    customerEmail: "emily.r.writer@gmail.com",
    disputeType: "Service Quality Issue",
    amount: "89.99",
    status: "escalated",
    priority: "high",
    submittedDate: "2024-01-20",
    transactionId: "TXN-321654987",
    complaint: "I paid for a premium writing service that promised professional editing and proofreading within 24 hours. The work I received was of extremely poor quality, with numerous grammatical errors still present and formatting issues that weren't addressed. This is completely unacceptable given the premium price point and the promises made in your advertising. I need either a complete redo by a qualified editor or a full refund.",
    evidence: [
      "Original_document.docx",
      "Edited_document_received.docx",
      "Service_advertisement_screenshot.pdf"
    ],
    currentReply: "We sincerely apologize for the poor quality of service you received. This does not meet our standards, and we are taking immediate action to address this issue. We will assign a senior editor to completely redo your document at no additional charge, and we will also process a 50% refund for the inconvenience caused."
  },
  {
    caseId: "DSP-2024-004",
    customerName: "David Thompson",
    customerEmail: "d.thompson@email.com",
    disputeType: "Billing Error",
    amount: "45.00",
    status: "resolved",
    priority: "low",
    submittedDate: "2024-01-12",
    transactionId: "TXN-987123456",
    complaint: "I was charged $45.00 for a monthly subscription that I cancelled before the billing cycle. I have the cancellation confirmation email dated three days before the charge occurred. This appears to be a billing system error, and I would like the charge reversed.",
    evidence: [
      "Cancellation_confirmation.pdf",
      "Billing_statement.pdf"
    ],
    currentReply: "You are absolutely correct, and we apologize for this billing error. Our system shows that your cancellation was processed before the billing cycle, but there was a delay in updating our billing system. We have processed a full refund of $45.00, which should appear in your account within 2-3 business days. We have also updated our systems to prevent similar issues in the future."
  },
  {
    caseId: "DSP-2024-005",
    customerName: "Lisa Wang",
    customerEmail: "lisa.wang.design@email.com",
    disputeType: "Duplicate Charge",
    amount: "299.99",
    status: "pending",
    priority: "medium",
    submittedDate: "2024-01-22",
    transactionId: "TXN-147258369",
    complaint: "I was charged twice for the same design software purchase. The first charge went through successfully, and I received the software and license key. However, a second identical charge of $299.99 appeared on my statement the next day. I only made one purchase and only received one license, so this appears to be a duplicate charge that needs to be reversed.",
    evidence: [
      "First_charge_receipt.pdf",
      "Second_charge_receipt.pdf",
      "Software_license_email.pdf",
      "Bank_statement.pdf"
    ],
    currentReply: ""
  },
  {
    caseId: "DSP-2024-006",
    customerName: "Robert Kim",
    customerEmail: "r.kim@startup.io",
    disputeType: "Refund Request",
    amount: "199.00",
    status: "in-review",
    priority: "low",
    submittedDate: "2024-01-19",
    transactionId: "TXN-852741963",
    complaint: "I purchased a business consultation service for $199.00, but due to unexpected family circumstances, I need to cancel and request a refund. The consultation is scheduled for next week, and I am providing more than the required 48-hour notice as stated in your terms of service. I understand there may be a small processing fee, but I would appreciate a refund of the majority of the payment.",
    evidence: [
      "Consultation_booking_confirmation.pdf",
      "Terms_of_service_screenshot.pdf"
    ],
    currentReply: "We understand that unexpected circumstances can arise, and we appreciate you providing advance notice of your cancellation. According to our terms of service, cancellations made with more than 48 hours notice are eligible for a full refund minus a $25 processing fee. We will process a refund of $174.00 within 5-7 business days."
  }
];
