-- Insert additional mock dispute cases for better testing
INSERT INTO public.disputes (case_id, customer_name, customer_email, dispute_type, amount, status, priority, submitted_date, transaction_id, complaint, current_reply) VALUES
('DSP-2024-007', 'Ahmed Al-Rashid', 'ahmed.rashid@company.ae', 'Flight Delay (> 3 hours)', 899.50, 'pending', 'high', '2024-01-25', 'TXN-112233445', 'Flight from Dubai to London was delayed by 5 hours due to technical issues. Missed connecting flight to Manchester and had to stay overnight at hotel. Requesting compensation for delay plus hotel expenses as per EU regulations.', ''),
('DSP-2024-008', 'Maria Santos', 'maria.santos@gmail.com', 'Cancellation without 14 days notice', 1150.75, 'escalated', 'high', '2024-01-23', 'TXN-556677889', 'Family vacation flight cancelled only 3 days before departure. Had to book alternative flights at much higher cost. Travel insurance does not cover airline cancellations. Need full refund plus compensation for price difference.', 'We apologize for the short notice cancellation. Your case has been escalated to our senior team. We are reviewing your additional costs and will provide compensation within 3-5 business days.'),
('DSP-2024-009', 'James Wilson', 'j.wilson@techstartup.com', 'Lost/damaged baggage', 245.00, 'pending', 'medium', '2024-01-26', 'TXN-334455667', 'Checked baggage containing laptop, business documents, and personal items was lost on flight from Cairo to Paris. Filed report at airport but no updates received. Need immediate compensation and help locating bag.', ''),
('DSP-2024-010', 'Fatima Al-Zahra', 'fatima.zahra@university.edu', 'Denied boarding/reaccommodation', 567.25, 'in-review', 'medium', '2024-01-24', 'TXN-778899001', 'Despite having confirmed ticket and arriving on time, was denied boarding due to overbooking. Alternative flight offered was 12 hours later. Missed important academic conference presentation. Seeking maximum compensation.', ''),
('DSP-2024-011', 'Carlos Rodriguez', 'carlos.r.business@email.com', 'Refund Request', 1890.00, 'resolved', 'low', '2024-01-21', 'TXN-445566778', 'Business trip cancelled due to client emergency. Requesting refund under flexible booking policy. All documentation provided including client cancellation letter and meeting cancellation proof.', 'Your refund request has been approved under our flexible business policy. Full refund of $1,890.00 has been processed and will appear in your account within 5-7 business days. Thank you for choosing us for your business travel.'),
('DSP-2024-012', 'Sophie Lambert', 'sophie.lambert@design.fr', 'Flight Delay (> 3 hours)', 425.80, 'in-review', 'medium', '2024-01-27', 'TXN-667788990', 'Flight from Paris to Casablanca delayed 4 hours due to weather. Missed important client meeting that resulted in lost business opportunity. Have all receipts for additional expenses and proof of lost business meeting.', ''),
('DSP-2024-013', 'Omar Hassan', 'omar.hassan@consultancy.qa', 'Other', 789.00, 'escalated', 'high', '2024-01-22', 'TXN-889900112', 'Experienced discrimination from cabin crew during flight. Multiple witnesses can confirm inappropriate treatment based on appearance and background. This is unacceptable and requires immediate investigation and compensation.', 'We take discrimination allegations extremely seriously. Your case has been immediately escalated to our ethics committee and senior management. A full investigation is underway and you will be contacted within 24 hours by our customer relations director.'),
('DSP-2024-014', 'Anna Kowalski', 'anna.k.travel@email.pl', 'Cancellation without 14 days notice', 299.99, 'pending', 'low', '2024-01-28', 'TXN-223344556', 'Weekend trip flight cancelled with only 5 days notice. Unable to get refund from hotel bookings. Small amount but principle matters - airline should follow their own 14-day policy. Requesting compensation as per regulations.', '');

-- Insert evidence for the new disputes
INSERT INTO public.evidence (dispute_id, file_name) VALUES
((SELECT id FROM public.disputes WHERE case_id = 'DSP-2024-007'), 'Dubai_London_boarding_pass.pdf'),
((SELECT id FROM public.disputes WHERE case_id = 'DSP-2024-007'), 'Hotel_receipt_London.pdf'),
((SELECT id FROM public.disputes WHERE case_id = 'DSP-2024-007'), 'Delay_notification_email.pdf'),
((SELECT id FROM public.disputes WHERE case_id = 'DSP-2024-007'), 'EU_compensation_claim_form.pdf'),

((SELECT id FROM public.disputes WHERE case_id = 'DSP-2024-008'), 'Original_booking_confirmation.pdf'),
((SELECT id FROM public.disputes WHERE case_id = 'DSP-2024-008'), 'Cancellation_notice_email.pdf'),
((SELECT id FROM public.disputes WHERE case_id = 'DSP-2024-008'), 'Alternative_flight_costs.pdf'),
((SELECT id FROM public.disputes WHERE case_id = 'DSP-2024-008'), 'Travel_insurance_policy.pdf'),

((SELECT id FROM public.disputes WHERE case_id = 'DSP-2024-009'), 'Cairo_Paris_baggage_claim.pdf'),
((SELECT id FROM public.disputes WHERE case_id = 'DSP-2024-009'), 'Lost_baggage_report_PIR.pdf'),
((SELECT id FROM public.disputes WHERE case_id = 'DSP-2024-009'), 'Laptop_purchase_receipt.pdf'),

((SELECT id FROM public.disputes WHERE case_id = 'DSP-2024-010'), 'Conference_registration.pdf'),
((SELECT id FROM public.disputes WHERE case_id = 'DSP-2024-010'), 'Denied_boarding_certificate.pdf'),
((SELECT id FROM public.disputes WHERE case_id = 'DSP-2024-010'), 'Academic_presentation_schedule.pdf'),

((SELECT id FROM public.disputes WHERE case_id = 'DSP-2024-011'), 'Client_cancellation_letter.pdf'),
((SELECT id FROM public.disputes WHERE case_id = 'DSP-2024-011'), 'Meeting_cancellation_proof.pdf'),
((SELECT id FROM public.disputes WHERE case_id = 'DSP-2024-011'), 'Flexible_booking_policy.pdf'),

((SELECT id FROM public.disputes WHERE case_id = 'DSP-2024-012'), 'Paris_Casablanca_ticket.pdf'),
((SELECT id FROM public.disputes WHERE case_id = 'DSP-2024-012'), 'Weather_delay_notification.pdf'),
((SELECT id FROM public.disputes WHERE case_id = 'DSP-2024-012'), 'Client_meeting_proof.pdf'),
((SELECT id FROM public.disputes WHERE case_id = 'DSP-2024-012'), 'Business_loss_documentation.pdf'),

((SELECT id FROM public.disputes WHERE case_id = 'DSP-2024-013'), 'Witness_statements.pdf'),
((SELECT id FROM public.disputes WHERE case_id = 'DSP-2024-013'), 'Flight_manifest.pdf'),
((SELECT id FROM public.disputes WHERE case_id = 'DSP-2024-013'), 'Incident_report_form.pdf'),

((SELECT id FROM public.disputes WHERE case_id = 'DSP-2024-014'), 'Weekend_trip_itinerary.pdf'),
((SELECT id FROM public.disputes WHERE case_id = 'DSP-2024-014'), 'Hotel_booking_confirmation.pdf'),
((SELECT id FROM public.disputes WHERE case_id = 'DSP-2024-014'), 'Airline_policy_screenshot.pdf');