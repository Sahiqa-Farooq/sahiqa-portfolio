import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Sanitize URL by trimming whitespace and removing trailing /rest/v1 or trailing slashes
const cleanSupabaseUrl = (url: string): string => {
  if (!url) return '';
  let cleaned = url.trim();
  // Strip trailing slashes
  cleaned = cleaned.replace(/\/+$/, '');
  // Strip /rest/v1 or /rest/v1/ if user accidentally copied the REST endpoint instead of Project URL
  cleaned = cleaned.replace(/\/rest\/v1\/?$/i, '');
  // Strip any trailing slashes again
  cleaned = cleaned.replace(/\/+$/, '');
  return cleaned;
};

const rawUrl = (import.meta.env.VITE_SUPABASE_URL || '').trim();
const supabaseUrl = cleanSupabaseUrl(rawUrl);
const supabaseAnonKey = (import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || '').trim();

// Verify if valid credentials are provided
export const isSupabaseConfigured = (): boolean => {
  return Boolean(
    supabaseUrl &&
    supabaseAnonKey &&
    supabaseUrl.startsWith('https://') &&
    !supabaseUrl.includes('your-project-id') &&
    !supabaseAnonKey.includes('your-anon-publishable-key')
  );
};

// Initialize Supabase client
export const supabase: SupabaseClient | null = isSupabaseConfigured()
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export interface ContactMessagePayload {
  name: string;
  email: string;
  message: string;
}

export interface SubmitMessageResult {
  success: boolean;
  error?: string;
}

/**
 * Saves a contact form submission into the Supabase 'contact_messages' table.
 */
export async function saveContactMessage(payload: ContactMessagePayload): Promise<SubmitMessageResult> {
  if (!isSupabaseConfigured() || !supabase) {
    return {
      success: false,
      error: 'Supabase credentials are not configured yet. Please check VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file.',
    };
  }

  try {
    const { error } = await supabase
      .from('contact_messages')
      .insert([
        {
          name: payload.name.trim(),
          email: payload.email.trim(),
          message: payload.message.trim(),
        },
      ]);

    if (error) {
      console.error('Supabase insert error details:', error);
      let friendlyError = error.message;

      // Provide beginner-friendly guidance for common Supabase errors
      if (error.code === '42501' || error.message?.toLowerCase().includes('row-level security') || error.message?.toLowerCase().includes('policy')) {
        friendlyError = 'Permission denied by Supabase (Row Level Security). Please add an INSERT policy on the "contact_messages" table in your Supabase Table Editor so public visitors can submit messages.';
      } else if (error.code === '42P01' || error.message?.toLowerCase().includes('does not exist')) {
        friendlyError = 'Table "contact_messages" was not found in your Supabase database. Please check the table name spelling.';
      }

      return {
        success: false,
        error: friendlyError,
      };
    }

    return { success: true };
  } catch (err: unknown) {
    console.error('Unexpected error while sending to Supabase:', err);
    const errorMessage = err instanceof Error ? err.message : 'A network error occurred. Please try again.';
    return {
      success: false,
      error: errorMessage,
    };
  }
}
