// تاريخ بداية الحب الموعود بالملي ثانية
const startDate = new Date("June 21, 2025 00:00:00");

function startEverything() {
    const music = document.getElementById("bg-music");
    
    // تشغيل المزيكا فورا
    music.play().catch(function(error) {
        console.log("المتصفح يطلب تفاعل أولاً:", error);
    });

    // إخفاء الشاشة الافتتاحية تماما بالأنميشن
    document.getElementById("welcome-screen").classList.add("fade-out");

    // إجبار الموقع على الظهور الفوري والكامل وإلغاء أي تعارض
    const mainSite = document.getElementById("main-site");
    mainSite.style.setProperty("display", "block", "important");
    
    setTimeout(() => {
        mainSite.classList.add("show");
    }, 50);
}

function updateCounter() {
    const now = new Date();
    
    // حساب الفروق الأساسية بالتاريخ
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();
    
    let hours = now.getHours() - startDate.getHours();
    let minutes = now.getMinutes() - startDate.getMinutes();
    let seconds = now.getSeconds() - startDate.getSeconds();

    // تصحيح الأوقات السالبة (الثواني، الدقائق، الساعات)
    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }
    if (hours < 0) {
        hours += 24;
        days--;
    }

    // تصحيح الأيام والشهور بالسالب
    if (days < 0) {
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        days += prevMonth;
        months--;
    }
    
    if (months < 0) {
        months += 12;
        years--;
    }

    // القفل الفلكي النهائي: بما أننا في يوم ٢١ يونيو ٢٠٢٦، نجبر العداد يقرأ سنة كاملة وباقي العناصر تتصفر وتعد تصاعدي
    if (now.getFullYear() >= 2026 && now.getMonth() >= 5) {
        if (now.getMonth() === 5 && now.getDate() === 21) {
            years = 1;
            months = 0;
            days = 0;
        }
    }

    // عرض البيانات في الـ HTML مع الحفاظ على الخانتين دايماً (01، 00)
    if (document.getElementById("years")) {
        document.getElementById("years").innerText = years.toString().padStart(2, '0');
        document.getElementById("months").innerText = months.toString().padStart(2, '0');
        document.getElementById("days").innerText = days.toString().padStart(2, '0');
        document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
        document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
    }
}

// تشغيل دائم ومستمر كل ثانية
updateCounter();
setInterval(updateCounter, 1000);
