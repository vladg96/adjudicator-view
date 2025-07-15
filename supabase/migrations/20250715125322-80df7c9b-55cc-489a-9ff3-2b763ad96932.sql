-- Enable RLS and create policies to allow public read access for disputes and evidence tables
-- Since this is an admin interface, we'll allow public read access for now

-- Enable RLS on disputes table
ALTER TABLE public.disputes ENABLE ROW LEVEL SECURITY;

-- Create policy to allow read access to disputes
CREATE POLICY "Allow public read access to disputes" 
ON public.disputes 
FOR SELECT 
USING (true);

-- Enable RLS on evidence table  
ALTER TABLE public.evidence ENABLE ROW LEVEL SECURITY;

-- Create policy to allow read access to evidence
CREATE POLICY "Allow public read access to evidence" 
ON public.evidence 
FOR SELECT 
USING (true);

-- Create policy to allow updates to dispute replies
CREATE POLICY "Allow public update to dispute replies" 
ON public.disputes 
FOR UPDATE 
USING (true);