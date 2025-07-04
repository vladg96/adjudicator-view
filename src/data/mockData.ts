
export const mockCases = [
  {
    caseId: "DSP-2024-001",
    customerName: "Sarah Johnson",
    customerEmail: "sarah.johnson@email.com",
    disputeType: "Flight Delay (> 3 hours)",
    amount: "1,250.00",
    status: "pending",
    priority: "high",
    submittedDate: "2024-01-15",
    transactionId: "TXN-789456123",
    complaint: "My flight was delayed by over 4 hours without proper notification or compensation. I was traveling for an important business meeting and this delay caused significant inconvenience and financial loss. According to aviation regulations, I am entitled to compensation for delays exceeding 3 hours.",
    evidence: [
      "Flight_boarding_pass.pdf",
      "Delay_notification_screenshot.pdf",
      "Business_meeting_confirmation.pdf"
    ],
    currentReply: "Thank you for reporting this flight delay. We take these matters very seriously and will conduct a thorough investigation. Based on your documentation, we can confirm the delay exceeded 3 hours. We will process compensation according to aviation regulations within 5-7 business days."
  },
  {
    caseId: "DSP-2024-002",
    customerName: "Michael Chen",
    customerEmail: "m.chen@techcorp.com",
    disputeType: "Cancellation without 14 days notice",
    amount: "350.75",
    status: "in-review",
    priority: "medium",
    submittedDate: "2024-01-18",
    transactionId: "TXN-456789012",
    complaint: "My flight was cancelled with only 5 days notice, which is well below the required 14-day advance notice period. This caused me to incur additional accommodation and rebooking costs. I request full compensation for the cancelled flight plus reimbursement for additional expenses incurred.",
    evidence: [
      "Cancellation_notice.pdf",
      "Hotel_receipts.pdf",
      "Rebooking_confirmation.pdf"
    ],
    currentReply: ""
  },
  {
    caseId: "DSP-2024-003",
    customerName: "Emily Rodriguez",
    customerEmail: "emily.r.writer@gmail.com",
    disputeType: "Lost/damaged baggage",
    amount: "89.99",
    status: "escalated",
    priority: "high",
    submittedDate: "2024-01-20",
    transactionId: "TXN-321654987",
    complaint: "My checked baggage was lost during my recent flight. The bag contained important personal items and work documents. Despite filing a report immediately upon arrival, I have not received any updates or compensation. The bag has still not been located after 10 days.",
    evidence: [
      "Baggage_claim_ticket.pdf",
      "Lost_baggage_report.pdf",
      "Contents_inventory.pdf"
    ],
    currentReply: "We sincerely apologize for the loss of your baggage. This is unacceptable and we are escalating your case to our specialized baggage recovery team. We will provide interim compensation within 48 hours and continue searching for your baggage with daily updates."
  },
  {
    caseId: "DSP-2024-004",
    customerName: "David Thompson",
    customerEmail: "d.thompson@email.com",
    disputeType: "Denied boarding/reaccommodation",
    amount: "45.00",
    status: "resolved",
    priority: "low",
    submittedDate: "2024-01-12",
    transactionId: "TXN-987123456",
    complaint: "I was denied boarding on my confirmed flight due to overbooking, despite arriving at the gate on time with a valid ticket. The airline staff offered inadequate compensation and the alternative flight was 8 hours later, causing me to miss important commitments.",
    evidence: [
      "Boarding_pass_original.pdf",
      "Denied_boarding_certificate.pdf",
      "Alternative_flight_details.pdf"
    ],
    currentReply: "You are absolutely correct, and we apologize for this denied boarding situation. Our overbooking policy was not properly followed in your case. We have processed full compensation according to regulations, which should appear in your account within 2-3 business days, plus additional vouchers for future travel."
  },
  {
    caseId: "DSP-2024-005",
    customerName: "Lisa Wang",
    customerEmail: "lisa.wang.design@email.com",
    disputeType: "Refund Request",
    amount: "299.99",
    status: "pending",
    priority: "medium",
    submittedDate: "2024-01-22",
    transactionId: "TXN-147258369",
    complaint: "I need to request a full refund for my flight ticket due to a medical emergency that prevents me from traveling. I have provided all necessary medical documentation and am requesting a refund as per your compassionate circumstances policy.",
    evidence: [
      "Medical_certificate.pdf",
      "Doctor_letter.pdf",
      "Original_booking_confirmation.pdf"
    ],
    currentReply: ""
  },
  {
    caseId: "DSP-2024-006",
    customerName: "Robert Kim",
    customerEmail: "r.kim@startup.io",
    disputeType: "Other",
    amount: "199.00",
    status: "in-review",
    priority: "low",
    submittedDate: "2024-01-19",
    transactionId: "TXN-852741963",
    complaint: "I experienced poor customer service during my flight, including rude staff behavior and failure to accommodate reasonable requests. The in-flight service was significantly below the standards advertised, and I believe compensation is warranted for the poor experience.",
    evidence: [
      "Flight_details.pdf",
      "Service_complaint_form.pdf",
      "Witness_contact_information.pdf"
    ],
    currentReply: "We understand that exceptional customer service is crucial to the travel experience, and we sincerely apologize that we fell short of your expectations. We are reviewing your case with our cabin crew management team and will provide appropriate compensation for the service failures experienced."
  }
];
