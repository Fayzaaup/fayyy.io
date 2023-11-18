function redirectToEmail(subject, body) {
  const emailLink = `mailto:support@support.whatsapp.com?subject=${subject}&body=${body}`;
  window.location.href = emailLink;
}

document.getElementById("emailButton1").addEventListener("click", function() {
  redirectToEmail("Bantuan WhatsApp Messenger", "Halo Tim WhatsApp, Saya ingin mengajukan keluhan terkait dengan akun WhatsApp saya yang telah diblokir. Saya mengalami kesulitan karena tidak ada alasan yang jelas mengapa akun saya diblokir. Saya menggunakan akun WhatsApp saya dengan cara yang benar dan tidak pernah melanggar layanan ketentuan WhatsApp. Saya terus menggunakan layanan WhatsApp sebagai alat komunikasi dengan keluarga, teman, dan rekan kerja yang tersebar di Indonesia dan seluruh dunia. Saya sangat bergantung pada aplikasi WhatsApp untuk berkomunikasi sehari-hari dan saya tidak pernah menemukan masalah yang signifikan dengan penggunaannya. Namun, pada satu hari saya merasa bahwa akun WhatsApp saya telah diblokir atau Akun ini tidak diizinkan menggunakan WhatsApp. Saya mulai merasa cemas ketika saya mencoba membuka akun WhatsApp saya dan menemukan bahwa akun saya tidak dapat diakses. Saya mencoba memulihkan akun saya dengan menggunakan nomor ponsel saya, tetapi tetap saja menerima pesan bahwa akun saya telah diblokir. [+62xxx]");
});

document.getElementById("emailButton2").addEventListener("click", function() {
  redirectToEmail("Bantuan WhatsApp Messenger", "Hallo selamat pagi developer WhatsApp, kenapa nomor WhatsApp saya tiba-tiba terbanned padahal aktivitas WhatsApp messenger saya normal normal saja, mohon unbanned nomor saya [+62xxx] Karna di situ banyak pesan penting dan dokumen penting saya mohon untuk segera di bukakan kembali akun saya, terima kasih.");
});

document.getElementById("emailButton3").addEventListener("click", function() {
  redirectToEmail("Bantuan WhatsApp Messenger", "Halo admin WhatsApp, saya mohon buka kembali akun WhatsApp saya karena saya tidak melakukan spam, saat ini kemungkinan akun WhatsApp saya di retas oleh orang yang tidak bertanggung jawab dan melakukan pelanggaran saya mohon untuk membuka kembali akun WhatsApp saya agar bisa digunakan karena sangat penting, terimakasih. [+62xx]");
});

document.getElementById("emailButton4").addEventListener("click", function() {
  redirectToEmail("Bantuan WhatsApp Messenger","Hallo Admin whatsapp yang saya hormati, akun whatsapp saya tiba-tiba terblokir tanpa alasan, saya dari kemarin belum pernah membuka whatsapp karena saya mengajar anak-anak di sekolah karena mereka ingin melaksanakan ulangan setiap tahunnya dan waktu saya membuka whatsapp saya kembali nomer saya terblokir secara tiba-tiba dan tidak ada alasan yang jelas, saya sangat memohon kepada admin whatsapp untuk menghapus pemblokiran pada akun whatsapp saya karena saya ingin menyampaikan tugas ke murid saya , nomer saya :[+62xx], terimakasih");
});