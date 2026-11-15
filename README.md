# yagizsahinbas.github.io

Kişisel sitem: bir masa, bir defter ve biraz da CV. [Astro](https://astro.build) ile yapıldı; `main` dalına her push'ta GitHub Pages'e kendiliğinden yayınlanıyor.

## Defter'e yeni not eklemek

`src/content/defter/` klasörüne yeni bir `.md` dosyası ekle:

```md
---
baslik: "Dualite: her problemin bir gölgesi var"   # iki nokta varsa tırnak içine al
ozet: Bir cümlelik açıklama; listede ve sayfanın başında görünür.
kategori: yoneylem   # yoneylem | istatistik | francais | yazi
tarih: 2026-11-20
durum: taslak        # yazıyı bitirince bu satırı sil
---

Notun kendisi buraya. **Kalın**, _italik_, listeler, `kod`, tablolar: hepsi Markdown.
```

- Dosya adı adresi belirler: `dualite.md` → `/defter/dualite/`
- `durum: taslak` olan notlar listede görünür ama tıklanamaz.
- Etkileşimli bir şey gömmek istersen dosyayı `.mdx` yap ve bir bileşen ekle (örnekler: `lp-gozle-cozmek.mdx`, `bu-para-hileli-mi.mdx`, `muhendislik-fransizcasi.mdx`).

## Yerelde çalıştırmak

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ klasörüne üretir
```

## Nerede ne var

| Dosya | Ne |
| --- | --- |
| `src/pages/index.astro` | Masa (ana sayfa): objeler, hikâyeleri, sürükleme, mühür, ışık |
| `src/pages/defter/` | Defter listesi ve not sayfaları |
| `src/pages/cv.astro` | CV |
| `src/content/defter/` | Notlar ve yazılar |
| `src/components/` | Etkileşimli parçalar (LP grafiği, Bayes, kelime kartları) |
| `src/styles/global.css` | Renkler ve ortak stiller |
| `public/` | İmza, fotoğraf, favicon |
