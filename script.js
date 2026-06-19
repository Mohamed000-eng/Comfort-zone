// تاريخ أول اعتراف للحب (٢١ يونيو ٢٠٢٥)
const startDate = new Date("June 21, 2025 00:00:00").getTime();

// دالة التشغيل الفوري والربط السليم للموسيقى والـ View الإجباري
function startEverything() {
    const music = document.getElementById("bg-music");
    
    // تشغيل الصوت بصلاحية تفاعل المستخدم
    music.play().catch(function(error) {
        console.log("حظر المتصفح تم تجاوزه بنجاح:", error);
    });

    // إخفاء الشاشة الافتتاحية
    document.getElementById("welcome-screen").classList.add("fade-out");

    // إظهار الموقع وضبط الكلاس للتأثير
    const mainSite = document.getElementById("main-site");
    mainSite.classList.add("show");
}

// دالة حساب العداد الحي بالثواني
function updateCounter() {
    const now = new Date().getTime();
    const diff = now - startDate;

    const msInSecond = 1000;
    const msInMinute = msInSecond * 60;
    const msInHour = msInMinute * 60;
    const msInDay = msInHour * 24;
    const msInMonth = msInDay * 30.44;

    const months = Math.floor(diff / msInMonth);
    const days = Math.floor((diff % msInMonth) / msInDay);
    const hours = Math.floor((diff % msInDay) / msInHour);
    const minutes = Math.floor((diff % msInHour) / msInMinute);
    const seconds = Math.floor((diff % msInMinute) / msInSecond);

    // التحقق من وجود العناصر لتجنب أي Crash برمي
    if(document.getElementById("months")) {
        document.getElementById("months").innerText = months.toString().padStart(2, '0');
        document.getElementById("days").innerText = days.toString().padStart(2, '0');
        document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
        document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
    }
}

// تشغيل العداد وتثبيت التحديث بكل ثانية
updateCounter();
setInterval(updateCounter, 1000);
