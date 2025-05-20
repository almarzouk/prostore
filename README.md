
# 🛒 ProStore – Moderne E-Commerce-Plattform

**ProStore** ist eine leistungsfähige und moderne E-Commerce-Plattform, entwickelt mit **Next.js 14**, **TypeScript**, **Tailwind CSS**, **Prisma** und **Bun**.
Die Anwendung bietet eine vollständige Lösung für den Online-Verkauf von Produkten mit Fokus auf Performance, Skalierbarkeit und Benutzerfreundlichkeit.

---

## 🚀 Funktionen

- 🛍️ **Produktkatalog**: Durchsuchen und filtern von Produkten mit detaillierten Beschreibungen und Bildern.
- 🛒 **Warenkorb**: Hinzufügen, Entfernen und Aktualisieren von Produkten im Warenkorb.
- 🔐 **Benutzerauthentifizierung**: Registrierung, Anmeldung und Sitzungsverwaltung mit JWT.
- 📦 **Bestellverwaltung**: Aufgabe und Nachverfolgung von Bestellungen.
- 🧾 **Rechnungsstellung**: Automatische Generierung von Rechnungen im PDF-Format.
- 📈 **Admin-Dashboard**: Verwaltung von Produkten, Bestellungen und Benutzern.
- 🌐 **Internationalisierung (i18n)**: Unterstützung mehrerer Sprachen.
- 📬 **E-Mail-Benachrichtigungen**: Versand von Bestellbestätigungen und Updates.

---

## 🛠️ Tech-Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Prisma ORM, PostgreSQL
- **Authentifizierung**: JWT, NextAuth.js
- **Styling**: Tailwind CSS, PostCSS
- **E-Mail**: Nodemailer, SMTP
- **Testing**: Jest, React Testing Library
- **Deployment**: Vercel

---

## 📁 Projektstruktur

```
prostore/
├── app/                # Next.js App-Verzeichnis
├── components/         # Wiederverwendbare UI-Komponenten
├── pages/              # Seiten und API-Routen
├── prisma/             # Prisma-Schema und Migrationen
├── public/             # Statische Dateien und Bilder
├── styles/             # Globale CSS-Dateien
├── tests/              # Testdateien
├── utils/              # Hilfsfunktionen und -klassen
├── .env.example        # Beispiel für Umgebungsvariablen
├── next.config.js      # Next.js Konfiguration
└── tailwind.config.js  # Tailwind CSS Konfiguration
```

---

## ⚙️ Installation & Ausführung

### Voraussetzungen

- Node.js >= 14.x
- PostgreSQL
- Bun (optional)

### Schritte

1. **Repository klonen**:

```bash
git clone https://github.com/almarzouk/prostore.git
cd prostore
```

2. **Abhängigkeiten installieren**:

```bash
npm install
# oder mit Bun
bun install
```

3. **Umgebungsvariablen konfigurieren**:

Erstelle eine `.env`-Datei basierend auf `.env.example` und fülle sie mit deinen Konfigurationswerten.

4. **Datenbank einrichten**:

```bash
npx prisma migrate dev --name init
```

5. **Entwicklungsserver starten**:

```bash
npm run dev
# oder mit Bun
bun dev
```

6. **Anwendung im Browser öffnen**:

Navigiere zu `http://localhost:3000`

---

## 🧪 Tests ausführen

```bash
npm run test
# oder mit Bun
bun test
```

---

## 📄 Lizenz

Dieses Projekt ist unter der **MIT-Lizenz** lizenziert. Siehe die [LICENSE](LICENSE)-Datei für weitere Informationen.

---

## 🤝 Beitrag leisten

Beiträge sind willkommen! Bitte folge diesen Schritten:

1. Forke das Repository
2. Erstelle einen neuen Branch: `git checkout -b feature/neues-feature`
3. Committe deine Änderungen: `git commit -m 'Füge neues Feature hinzu'`
4. Push den Branch: `git push origin feature/neues-feature`
5. Erstelle einen Pull Request

---

## 📬 Kontakt

Erstellt mit ❤️ von [@almarzouk](https://github.com/almarzouk)
