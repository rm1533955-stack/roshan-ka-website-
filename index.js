
 document.addEventListener("DOMContentLoaded", () => {
    
    const squadForm = document.querySelector("#join form");

    if (squadForm) {
        squadForm.addEventListener("submit", (e) => {
            e.preventDefault();

            // Inputs read karna
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const platform = document.getElementById("platform").value;
            const roleInput = document.querySelector('input[name="role"]:checked');
            const rulesChecked = document.getElementById("rules").checked;

            // 1. Validation: Email/Name Blank
            if (!name || !email) {
                showToast("⚠️ Please enter both Name & Email!", "#ef4444");
                return;
            }

            // 2. Validation: Checkbox Unchecked
            if (!rulesChecked) {
                showToast("⚠️ Please agree to the squad rules!", "#f59e0b");
                return;
            }

            const selectedRole = roleInput ? roleInput.value : "General Player";

            // 3. Clear Success Notification
            showToast(`✅ Form Submitted Successfully! Welcome ${name} (${selectedRole.toUpperCase()})`, "#22c55e");

            squadForm.reset();
        });
    }

    // Smooth Navigation
    document.querySelectorAll("nav a").forEach((link) => {
        link.addEventListener("click", (e) => {
            const href = link.getAttribute("href");
            if (href.startsWith("#")) {
                e.preventDefault();
                document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});

// Custom Dynamic Toast Notification Function
function showToast(message, bgColor) {
    const existingToast = document.querySelector(".custom-toast");
    if (existingToast) existingToast.remove();

    const toast = document.createElement("div");
    toast.className = "custom-toast";
    toast.innerText = message;
    toast.style.backgroundColor = bgColor;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(-20px)";
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}
