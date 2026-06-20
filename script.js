// تاريخ بداية الحب
const startDate = new Date("June 21, 2025 00:00:00");

function startEverything() {
    const music = document.getElementById("bg-music");
    
    music.play().catch(function(error) {
        console.log("المتصفح يطلب تفاعل أولاً:", error);
    });

    document.getElementById("welcome-screen").classList.add("fade-out");

    const mainSite = document.getElementById("main-site");
    mainSite.classList.add("show");
}

function updateCounter() {
    const now = new Date();
    
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();
    
    let hours = now.getHours() - startDate.getHours();
    let minutes = now.getMinutes() - startDate.getMinutes();
    let seconds = now.getSeconds() - startDate.getSeconds();

    // تصحيح الثواني والدقائق والساعات السالبة
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

    // تصحيح الأيام والشهور
    if (days < 0) {
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        days += prevMonth;
        months--;
    }
    
    if (months < 0) {
        months += 12;
        years--;
    }

    // تكة الأمان: لو وصلنا ليوم 21 يونيو أو بعده، نضمن السنين تتقفل صح وتصفر الباقي
    if (now.getMonth() === startDate.getMonth() && now.getDate() === startDate.getDate()) {
        years = now.getFullYear() - startDate.getFullYear();
        months = 0;
        days = 0;
    }

    // عرض الأرقام الـ 6 كاملة في الـ HTML
    if (document.getElementById("years")) {
        document.getElementById("years").innerText = years.toString().padStart(2, '0');
        document.getElementById("months").innerText = months.toString().padStart(2, '0');
        document.getElementById("days").innerText = days.toString().padStart(2, '0');
        document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
        document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
    }
}

updateCounter();
setInterval(updateCounter, 1000);
