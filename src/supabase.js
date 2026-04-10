import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  "https://ninvrdpjiyimyupjduyq.supabase.co",
  "sb_publishable_tCKv5pN3Aw6BJut2tbxGDw_0bwL4x4D"
)

export default supabase