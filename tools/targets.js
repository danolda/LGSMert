// Konu başına hedef soru sayısı: Matematik, İnkılap ve Türkçe dil bilgisi konularında 45, diğerlerinde 30.
// Çıkmış soru sayısı fazlaysa toplam = çıkmış + en az özgün soru (45'lik konularda 15, 30'luk konularda 10).
const GRAMMAR = ['tr-fiilimsi', 'tr-ogeler', 'tr-cati', 'tr-cumleturu', 'tr-yazim', 'tr-noktalama', 'tr-bozukluk'];
function target(id) { return (/^mat-|^ink-/.test(id) || GRAMMAR.includes(id)) ? 45 : 30; }
function required(id, past) { const t = target(id); const minOrig = t === 45 ? 15 : 10; return Math.max(t, past + minOrig); }
module.exports = { target, required, GRAMMAR };
