import { useEffect } from 'react'
import SEO from '../components/ui/SEO'
import styles from './NezarSupport.module.css'

export default function NezarSupport() {
  useEffect(() => {
    const prevLang = document.documentElement.lang
    const prevDir = document.documentElement.dir
    document.documentElement.lang = 'he'
    document.documentElement.dir = 'rtl'
    return () => {
      document.documentElement.lang = prevLang
      document.documentElement.dir = prevDir
    }
  }, [])

  return (
    <div className={styles.page} dir="rtl" lang="he">
      <SEO
        title="תמיכה — NezarBarberShop"
        description="דף תמיכה לאפליקציית NezarBarberShop מאת Madar Labs"
      />

      <main className={styles.wrap}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Madar Labs</span>
          <h1>תמיכה — NezarBarberShop</h1>
          <p className={styles.lead}>
            דף התמיכה הרשמי של אפליקציית NezarBarberShop לקביעת תורים במספרה. כאן תמצאו דרכי
            יצירת קשר, עזרה נפוצה ומידע חשוב למשתמשים ולבודקי App Store.
          </p>
        </header>

        <section className={styles.section}>
          <h2>יצירת קשר</h2>
          <div className={styles.contactGrid}>
            <div className={styles.contactItem}>
              <span className={styles.label}>תמיכה טכנית / חשבון / פרטיות</span>
              <a className={styles.value} href="mailto:info.madarlabs@gmail.com">
                info.madarlabs@gmail.com
              </a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.label}>טלפון Madar Labs</span>
              <a className={styles.value} href="tel:+972529338598">
                052-933-8598
              </a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.label}>שאלות על תורים ושירותי המספרה</span>
              <a className={styles.value} href="https://wa.me/972526867838">
                WhatsApp: 052-686-7838
              </a>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>במה אנחנו יכולים לעזור?</h2>
          <ul>
            <li>בעיות בהתחברות או בקבלת קוד SMS</li>
            <li>קביעה, שינוי או ביטול של תור</li>
            <li>ניהול חשבון ומחיקת חשבון</li>
            <li>התראות Push ותזכורות לתורים</li>
            <li>שאלות פרטיות ואבטחת מידע</li>
            <li>דיווח על תקלה באפליקציה</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>שאלות נפוצות</h2>
          <p>
            <strong>איך נכנסים לאפליקציה?</strong>
            <br />
            ההתחברות מתבצעת עם מספר טלפון וקוד חד־פעמי שנשלח ב־SMS.
          </p>
          <p>
            <strong>לא קיבלתי קוד SMS</strong>
            <br />
            בדקו שהמספר תקין, חכו כדקה, ונסו שליחה מחדש. אם הבעיה נמשכת — כתבו לנו למייל
            התמיכה.
          </p>
          <p>
            <strong>איך מוחקים חשבון?</strong>
            <br />
            ניתן למחוק חשבון מתוך האפליקציה דרך הפרופיל / ההגדרות, או לפנות אלינו במייל עם
            מספר הטלפון הרשום.
          </p>
          <p>
            <strong>האם האפליקציה גובה תשלום?</strong>
            <br />
            השימוש באפליקציה לקביעת תורים אינו כרוך בתשלום בתוך האפליקציה. תשלום עבור
            שירותי המספרה מתבצע מול בית העסק.
          </p>
        </section>

        <section className={styles.section}>
          <h2>פרטיות ותנאי שימוש</h2>
          <p>
            מדיניות הפרטיות ותנאי השימוש זמינים בתוך האפליקציה במסך הפרופיל. לפניות בנושא
            מידע אישי ניתן לפנות אל{' '}
            <a href="mailto:info.madarlabs@gmail.com">info.madarlabs@gmail.com</a>.
          </p>
        </section>

        <section className={`${styles.section} ${styles.en}`} lang="en" dir="ltr">
          <h2>Support (English)</h2>
          <p>
            Official support page for the <strong>NezarBarberShop</strong> mobile app,
            developed by <strong>Madar Labs</strong>.
          </p>
          <p>
            <strong>Technical support / account / privacy:</strong>{' '}
            <a href="mailto:info.madarlabs@gmail.com">info.madarlabs@gmail.com</a>
            <br />
            <strong>Phone:</strong>{' '}
            <a href="tel:+972529338598">+972-52-933-8598</a>
            <br />
            <strong>Barbershop appointments (WhatsApp):</strong>{' '}
            <a href="https://wa.me/972526867838">+972-52-686-7838</a>
          </p>
          <p>We can help with:</p>
          <ul>
            <li>Login and SMS verification issues</li>
            <li>Booking, changing, or canceling appointments</li>
            <li>Account management and account deletion</li>
            <li>Push notifications and appointment reminders</li>
            <li>Privacy requests and bug reports</li>
          </ul>
          <p>
            Privacy Policy and Terms of Use are available inside the app under Profile. For
            App Store review questions, contact us at the email above.
          </p>
        </section>

        <footer className={styles.footer}>
          © Madar Labs · NezarBarberShop Support
          <br />
          Bundle ID: com.madarlabs.nezarbarbershop
        </footer>
      </main>
    </div>
  )
}
