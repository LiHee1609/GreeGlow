
// ============================================================
// CẤU HÌNH SUPABASE
// anon key này AN TOÀN để public ở frontend (đây là thiết kế
// chính thức của Supabase — bảo mật thật sự nằm ở Row Level
// Security policies đã thiết lập trong database)
// ============================================================

const SUPABASE_URL = "https://eblxpagpgiqacdledmkh.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVibHhwYWdwZ2lxYWNkbGVkbWtoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIyMTA2MzUsImV4cCI6MjA5Nzc4NjYzNX0.8I04_eMP-FCWQLhNGcx_2q7kd1vVpb86YLSscjCv5YY";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
