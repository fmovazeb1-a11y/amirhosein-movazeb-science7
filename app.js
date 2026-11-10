const chapters = [{"id": 1, "title": "تفکر و تجربه", "desc": "آشنایی با علم تجربی، پرسشگری و روش علمی", "topics": "مشاهده، فرضیه، آزمایش و نتیجه‌گیری"}, {"id": 2, "title": "اندازه‌گیری در علوم تجربی و ابزارهای آن", "desc": "آشنایی با کمیت‌ها، یکاها و ابزارهای اندازه‌گیری", "topics": "جرم، وزن، حجم، چگالی و دقت اندازه‌گیری"}, {"id": 3, "title": "اتم‌ها؛ الفبای مواد", "desc": "شناخت اتم‌ها و ذره‌های سازندهٔ مواد", "topics": "عنصر، ترکیب، مولکول و حالت‌های ماده"}, {"id": 4, "title": "مواد پیرامون ما", "desc": "بررسی ویژگی‌ها و کاربرد مواد گوناگون", "topics": "سختی، استحکام، رسانایی و چگالی"}, {"id": 5, "title": "از معدن تا خانه", "desc": "آشنایی با منابع معدنی و تبدیل مواد خام به محصولات", "topics": "سنگ معدن، آهن، آلیاژها و سیمان"}, {"id": 6, "title": "سفر آب روی زمین", "desc": "شناخت چرخهٔ آب و جابه‌جایی آب در طبیعت", "topics": "تبخیر، میعان، بارش و رواناب"}, {"id": 7, "title": "سفر آب درون زمین", "desc": "آشنایی با آب‌های زیرزمینی و راه‌های حفاظت از آن‌ها", "topics": "تخلخل، نفوذپذیری، سطح ایستابی و قنات"}, {"id": 8, "title": "انرژی و تبدیل‌های آن", "desc": "شناخت شکل‌های انرژی و تبدیل آن‌ها", "topics": "انرژی جنبشی، پتانسیل و پایستگی انرژی"}, {"id": 9, "title": "منابع انرژی", "desc": "بررسی منابع تجدیدپذیر و تجدیدناپذیر", "topics": "خورشید، باد، آب و سوخت‌های فسیلی"}, {"id": 10, "title": "گرما و بهینه‌سازی مصرف انرژی", "desc": "شناخت گرما و راه‌های کاهش اتلاف انرژی", "topics": "دما، رسانش، همرفت، تابش و عایق"}, {"id": 11, "title": "یاخته و سازمان‌بندی آن", "desc": "آشنایی با یاخته و سطوح سازمان‌بندی بدن", "topics": "غشا، سیتوپلاسم، هسته، بافت و اندام"}, {"id": 12, "title": "سفره سلامت", "desc": "شناخت تغذیهٔ سالم و مواد مورد نیاز بدن", "topics": "گروه‌های غذایی و انتخاب غذای متعادل"}, {"id": 13, "title": "سفر غذا", "desc": "آشنایی با دستگاه گوارش و فرایند هضم", "topics": "مسیر غذا و جذب مواد"}, {"id": 14, "title": "گردش مواد", "desc": "شناخت دستگاه گردش مواد در بدن", "topics": "قلب، خون و رگ‌ها"}, {"id": 15, "title": "تبادل با محیط", "desc": "آشنایی با تبادل مواد و ارتباط بدن با محیط", "topics": "تنفس، دفع و پاسخ به محیط"}];
const grid = document.getElementById('chapterGrid');
if (grid) {
  const input = document.getElementById('searchInput');
  const empty = document.getElementById('emptyState');
  function render(query='') {
    const q = query.trim().toLocaleLowerCase('fa');
    const filtered = chapters.filter(c => (c.title+' '+c.desc+' '+c.topics).toLocaleLowerCase('fa').includes(q));
    grid.innerHTML = filtered.map(c => `<a class="chapter-card" href="chapter.html?id=${c.id}"><div class="chapter-top"><span class="chapter-no">${String(c.id).padStart(2,'۰')}</span><span class="chapter-arrow">↗</span></div><h3>${c.title}</h3><p>${c.desc}</p></a>`).join('');
    empty.classList.toggle('hidden', filtered.length !== 0);
  }
  render();
  input.addEventListener('input', e => render(e.target.value));
}
const titleEl = document.getElementById('chapterTitle');
if (titleEl) {
  const id = Number(new URLSearchParams(location.search).get('id'));
  const c = chapters.find(x => x.id === id);
  if (c) {
    document.title = `فصل ${c.id}: ${c.title} | AMIRHOSEIN MOVAZEB`;
    document.getElementById('chapterNumber').textContent = `CHAPTER ${String(c.id).padStart(2,'0')}`;
    titleEl.textContent = c.title;
    document.getElementById('chapterDesc').textContent = c.desc;
    document.getElementById('chapterTopics').textContent = c.topics;
  } else {
    titleEl.textContent = 'فصل موردنظر پیدا نشد';
    document.getElementById('chapterDesc').textContent = 'از فهرست فصل‌ها یک فصل را انتخاب کن.';
  }
}
