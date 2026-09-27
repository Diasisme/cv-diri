// ===================================================================
// 1. DARK / LIGHT MODE TOGGLE (localStorage)
// ===================================================================
const themeToggle = document.querySelector("#theme-toggle");

// Baca preferensi tema yang tersimpan dari kunjungan sebelumnya
const temaTersimpan = localStorage.getItem("tema");
if (temaTersimpan === "dark") {
    document.body.classList.add("dark-mode");
    if (themeToggle) themeToggle.textContent = "☀️";
}

if (themeToggle) {
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        const sedangGelap = document.body.classList.contains("dark-mode");
        themeToggle.textContent = sedangGelap ? "☀️" : "🌙";

        // simpan pilihan supaya "diingat" walau halaman di-reload/pindah
        localStorage.setItem("tema", sedangGelap ? "dark" : "light");
    });
}

// ===================================================================
// 2. HAMBURGER MENU (mobile)
// ===================================================================
const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");

if (hamburger && menu) {
    hamburger.addEventListener("click", function () {
        menu.classList.toggle("is-open");

        const sedangTerbuka = menu.classList.contains("is-open");
        hamburger.setAttribute("aria-expanded", sedangTerbuka);
    });
}

// ===================================================================
// 3. HIGHLIGHT MENU SESUAI HALAMAN YANG SEDANG DIBUKA
// ===================================================================
// location.pathname isinya path halaman sekarang, misalnya "/skill.html".
// Kita bandingkan dengan href tiap link menu buat cari yang cocok.
const halamanSekarang = location.pathname.split("/").pop() || "index.html";
const linkMenu = document.querySelectorAll(".menu a");

linkMenu.forEach(function (link) {
    const hrefLink = link.getAttribute("href");
    if (hrefLink === halamanSekarang) {
        link.classList.add("active");
    }
});

// ===================================================================
// 4. TOMBOL BACK TO TOP
// ===================================================================
const tombolAtas = document.querySelector("#back-to-top");

if (tombolAtas) {
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            tombolAtas.classList.add("is-visible");
        } else {
            tombolAtas.classList.remove("is-visible");
        }
    });

    tombolAtas.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// ===================================================================
// 5. (dari pertemuan 10) Pencarian skill -- hanya jalan di skill.html
// ===================================================================
const skillListEl = document.querySelector("#skill-list");
const inputCari = document.querySelector("#cari-skill");

if (skillListEl && inputCari) {
    const skills = [
        { nama: "HTML & CSS" },
        { nama: "PHP & CodeIgniter" },
        { nama: "JavaScript & Vue.js" },
        { nama: "PostgreSQL" },
        { nama: "Git" },
        { nama: "Go" },
        { nama: "AWS" },
        { nama: "GraphQL" },
        { nama: "Docker" },
        { nama: "Linux" },
        { nama: "Python" },
        { nama: "Machine Learning" },
        { nama: "Data Science" },
        { nama: "Redis" },
        { nama: "MongoDB" },
        { nama: "Kubernetes" },
        { nama: "CI/CD" },
        { nama: "REST API" },
        { nama: "Agile & Scrum" },
        { nama: "Unit Testing" },
        { nama: "API Design" },
        { nama: "Web Security" },
        { nama: "Figma" },
        { nama: "UI/UX Design" },
        { nama: "Data Science" },

    ];

    function render() {
        const kataKunci = inputCari.value.toLowerCase();

        const hasilFilter = skills.filter(function (skill) {
            return skill.nama.toLowerCase().includes(kataKunci);
        });

        skillListEl.innerHTML = hasilFilter
            .map(function (skill) {
                return `<article class="skill-card">${skill.nama}</article>`;
            })
            .join("");
    }

    inputCari.addEventListener("input", render);
    render();
}