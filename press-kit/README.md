# אתר תדמית — "נושמת איתו" (GitHub Pages)

אתר סטטי, בעברית (RTL), מוכן לפריסה ב-GitHub Pages — כולל עיצוב עשיר, SEO, Schema.org/Book, וכפתורי רכישה.

## תצוגה מקדימה
פתח/י את `index.html` בדפדפן. (Tailwind נטען מה-CDN).

## פריסה ל-GitHub Pages
1. צרו ריפו חדש בשם לדוגמה `noshmet-ito` והעלו אליו את כל הקבצים בתיקייה זו.
2. ב-GitHub → **Settings → Pages**: בחרו **Source: Deploy from a branch**, Branch: `main` (או `master`), `/ (root)`.
3. ה-URL יהיה: `https://<YOUR_GITHUB_USERNAME>.github.io/<REPO_NAME>/`.  
   עדכנו את הכתובת במטא-תגים וב-`robots.txt`/`sitemap.xml` (חפשו `<YOUR_GITHUB_USERNAME>` ו-`<REPO_NAME>`).

## התאמה אישית
- **כריכה**: החליפו את `assets/images/cover-placeholder.svg` בכריכה מורשית לשימוש (שמרו את אותו שם קובץ).
- **ציטוטים**: בקטע *ביקורות*, החליפו את הטקסטים בציטוטים אמיתיים מתוך החנויות/רשתות עם קרדיט.
- **קישורי רכישה**: מוגדרים ל-e‑Vrit, מנדלי, ולמה‑סקיל (יד שנייה). ניתן להוסיף/להסיר חנויות.
- **צבעים/טיפוגרפיה**: מוגדרים כיער-שחר (Forest/Dawn) בהשראת אסתטיקת הכריכה. ניתן לשנות ב-Tailwind config-inline וב-`style.css`.
- **Analytics**: הוסיפו GA4/פיקסלים לפי הצורך לפני `</head>`.

## SEO ו-Schema
- מוטמע JSON-LD מסוג `Book` עם פרטי בסיס: שם, מחברת, הוצאה, שנה, עמודים (389), שפות ו/או ז׳אנר.
- OpenGraph/Twitter cards מכוונים לתמונת הכריכה (החליפו בתמונה אמיתית).
- קיימים `robots.txt` ו-`sitemap.xml`.

## מבנה
```
.
├── index.html
├── assets
│   ├── css/style.css
│   ├── js/main.js
│   └── images/cover-placeholder.svg
├── favicon.svg
├── site.webmanifest
├── robots.txt
├── sitemap.xml
├── press-kit/README.txt
└── README.md
```

## זכויות יוצרים
- הקוד עצמו — שלכם (MIT מומלץ אם תרצו). 
- תכנים/תמונות — ודאו שיש לכם הרשאות מתאימות.

בהצלחה! ✨
