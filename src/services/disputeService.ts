
import { supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/types";

export type Dispute = Database['public']['Tables']['disputes']['Row'] & {
  evidence?: Evidence[];
};

export type Evidence = Database['public']['Tables']['evidence']['Row'];

export async function fetchDisputes() {
  const { data, error } = await supabase
    .from('disputes')
    .select(`
      *,
      evidence (*)
    `)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching disputes:', error);
    throw error;
  }

  return data as Dispute[];
}

export async function fetchDisputeById(id: string) {
  const { data, error } = await supabase
    .from('disputes')
    .select(`
      *,
      evidence (*)
    `)
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching dispute:', error);
    throw error;
  }

  return data as Dispute;
}

export async function updateDisputeReply(id: string, reply: string) {
  const { data, error } = await supabase
    .from('disputes')
    .update({ 
      current_reply: reply,
      updated_at: new Date().toISOString()
    })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating dispute reply:', error);
    throw error;
  }

  return data;
}
