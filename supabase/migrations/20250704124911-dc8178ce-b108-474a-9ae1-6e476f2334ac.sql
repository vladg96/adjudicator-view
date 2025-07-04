
-- Create disputes table to store case information
CREATE TABLE public.disputes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  case_id TEXT NOT NULL UNIQUE,
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  dispute_type TEXT NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  priority TEXT NOT NULL DEFAULT 'medium',
  submitted_date DATE NOT NULL,
  transaction_id TEXT NOT NULL,
  complaint TEXT NOT NULL,
  current_reply TEXT DEFAULT '',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create evidence table to store supporting documents
CREATE TABLE public.evidence (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  dispute_id UUID NOT NULL REFERENCES public.disputes(id) ON DELETE CASCADE,
  file_name TEXT NOT NULL,
  file_path TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create indexes for better performance
CREATE INDEX idx_disputes_case_id ON public.disputes(case_id);
CREATE INDEX idx_disputes_status ON public.disputes(status);
CREATE INDEX idx_disputes_priority ON public.disputes(priority);
CREATE INDEX idx_disputes_submitted_date ON public.disputes(submitted_date);
CREATE INDEX idx_evidence_dispute_id ON public.evidence(dispute_id);

-- Insert sample data from mock data
INSERT INTO public.disputes (case_id, customer_name, customer_email, dispute_type, amount, status, priority, submitted_date, transaction_id, complaint, current_reply) VALUES
('DSP-2024-001', 'Sarah Johnson', 'sarah.johnson@email.com', 'Flight Delay (> 3 hours)', 1250.00, 'pending', 'high', '2024-01-15', 'TXN-789456123', 'My flight was delayed by over 4 hours without proper notification or compensation. I was traveling for an important business meeting and this delay caused significant inconvenience and financial loss. According to aviation regulations, I am entitled to compensation for delays exceeding 3 hours.', 'Thank you for reporting this flight delay. We take these matters very seriously and will conduct a thorough investigation. Based on your documentation, we can confirm the delay exceeded 3 hours. We will process compensation according to aviation regulations within 5-7 business days.'),
('DSP-2024-002', 'Michael Chen', 'm.chen@techcorp.com', 'Cancellation without 14 days notice', 350.75, 'in-review', 'medium', '2024-01-18', 'TXN-456789012', 'My flight was cancelled with only 5 days notice, which is well below the required 14-day advance notice period. This caused me to incur additional accommodation and rebooking costs. I request full compensation for the cancelled flight plus reimbursement for additional expenses incurred.', ''),
('DSP-2024-003', 'Emily Rodriguez', 'emily.r.writer@gmail.com', 'Lost/damaged baggage', 89.99, 'escalated', 'high', '2024-01-20', 'TXN-321654987', 'My checked baggage was lost during my recent flight. The bag contained important personal items and work documents. Despite filing a report immediately upon arrival, I have not received any updates or compensation. The bag has still not been located after 10 days.', 'We sincerely apologize for the loss of your baggage. This is unacceptable and we are escalating your case to our specialized baggage recovery team. We will provide interim compensation within 48 hours and continue searching for your baggage with daily updates.'),
('DSP-2024-004', 'David Thompson', 'd.thompson@email.com', 'Denied boarding/reaccommodation', 45.00, 'resolved', 'low', '2024-01-12', 'TXN-987123456', 'I was denied boarding on my confirmed flight due to overbooking, despite arriving at the gate on time with a valid ticket. The airline staff offered inadequate compensation and the alternative flight was 8 hours later, causing me to miss important commitments.', 'You are absolutely correct, and we apologize for this denied boarding situation. Our overbooking policy was not properly followed in your case. We have processed full compensation according to regulations, which should appear in your account within 2-3 business days, plus additional vouchers for future travel.'),
('DSP-2024-005', 'Lisa Wang', 'lisa.wang.design@email.com', 'Refund Request', 299.99, 'pending', 'medium', '2024-01-22', 'TXN-147258369', 'I need to request a full refund for my flight ticket due to a medical emergency that prevents me from traveling. I have provided all necessary medical documentation and am requesting a refund as per your compassionate circumstances policy.', ''),
('DSP-2024-006', 'Robert Kim', 'r.kim@startup.io', 'Other', 199.00, 'in-review', 'low', '2024-01-19', 'TXN-852741963', 'I experienced poor customer service during my flight, including rude staff behavior and failure to accommodate reasonable requests. The in-flight service was significantly below the standards advertised, and I believe compensation is warranted for the poor experience.', 'We understand that exceptional customer service is crucial to the travel experience, and we sincerely apologize that we fell short of your expectations. We are reviewing your case with our cabin crew management team and will provide appropriate compensation for the service failures experienced.');

-- Insert evidence data
INSERT INTO public.evidence (dispute_id, file_name) VALUES
((SELECT id FROM public.disputes WHERE case_id = 'DSP-2024-001'), 'Flight_boarding_pass.pdf'),
((SELECT id FROM public.disputes WHERE case_id = 'DSP-2024-001'), 'Delay_notification_screenshot.pdf'),
((SELECT id FROM public.disputes WHERE case_id = 'DSP-2024-001'), 'Business_meeting_confirmation.pdf'),
((SELECT id FROM public.disputes WHERE case_id = 'DSP-2024-002'), 'Cancellation_notice.pdf'),
((SELECT id FROM public.disputes WHERE case_id = 'DSP-2024-002'), 'Hotel_receipts.pdf'),
((SELECT id FROM public.disputes WHERE case_id = 'DSP-2024-002'), 'Rebooking_confirmation.pdf'),
((SELECT id FROM public.disputes WHERE case_id = 'DSP-2024-003'), 'Baggage_claim_ticket.pdf'),
((SELECT id FROM public.disputes WHERE case_id = 'DSP-2024-003'), 'Lost_baggage_report.pdf'),
((SELECT id FROM public.disputes WHERE case_id = 'DSP-2024-003'), 'Contents_inventory.pdf'),
((SELECT id FROM public.disputes WHERE case_id = 'DSP-2024-004'), 'Boarding_pass_original.pdf'),
((SELECT id FROM public.disputes WHERE case_id = 'DSP-2024-004'), 'Denied_boarding_certificate.pdf'),
((SELECT id FROM public.disputes WHERE case_id = 'DSP-2024-004'), 'Alternative_flight_details.pdf'),
((SELECT id FROM public.disputes WHERE case_id = 'DSP-2024-005'), 'Medical_certificate.pdf'),
((SELECT id FROM public.disputes WHERE case_id = 'DSP-2024-005'), 'Doctor_letter.pdf'),
((SELECT id FROM public.disputes WHERE case_id = 'DSP-2024-005'), 'Original_booking_confirmation.pdf'),
((SELECT id FROM public.disputes WHERE case_id = 'DSP-2024-006'), 'Flight_details.pdf'),
((SELECT id FROM public.disputes WHERE case_id = 'DSP-2024-006'), 'Service_complaint_form.pdf'),
((SELECT id FROM public.disputes WHERE case_id = 'DSP-2024-006'), 'Witness_contact_information.pdf');
