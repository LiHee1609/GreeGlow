// ============================================================
// AUTH - đăng ký / đăng nhập / đăng xuất qua Supabase Auth
// ============================================================

const Auth = {
  async getCurrentUser() {
    const { data } = await supabaseClient.auth.getUser();
    return data?.user || null;
  },

  async signUp(email, password, fullName) {
    const { data, error } = await supabaseClient.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName },
      },
    });
    return { data, error };
  },

  async signIn(email, password) {
    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email,
      password,
    });
    return { data, error };
  },

  async signOut() {
    await supabaseClient.auth.signOut();
    window.location.href = "index.html";
  },

  async getProfile(userId) {
    const { data, error } = await supabaseClient
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .single();
    return { data, error };
  },

  async updateProfile(userId, fields) {
    const { data, error } = await supabaseClient
      .from("profiles")
      .update(fields)
      .eq("id", userId);
    return { data, error };
  },
};

// ============================================================
// CẬP NHẬT HEADER theo trạng thái đăng nhập (mọi trang)
// ============================================================
async function refreshAuthHeader() {
  const user = await Auth.getCurrentUser();
  const loggedOutEls = document.querySelectorAll("[data-auth='logged-out']");
  const loggedInEls = document.querySelectorAll("[data-auth='logged-in']");
  const userNameEls = document.querySelectorAll("[data-user-name]");

  if (user) {
    loggedOutEls.forEach((el) => (el.style.display = "none"));
    loggedInEls.forEach((el) => (el.style.display = ""));
    const { data: profile } = await Auth.getProfile(user.id);
    const displayName = profile?.full_name || user.email.split("@")[0];
    userNameEls.forEach((el) => (el.textContent = displayName));
  } else {
    loggedOutEls.forEach((el) => (el.style.display = ""));
    loggedInEls.forEach((el) => (el.style.display = "none"));
  }
}

document.addEventListener("DOMContentLoaded", refreshAuthHeader);
