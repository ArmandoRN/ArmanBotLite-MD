import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
try {
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
letuptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = conn.getName(m.sender)
let user = global.db.data.users[m.sender]
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let menu = `*${user.registered === true ? user.name : `${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'verificar nombre.edad' : 'verify name.age'}`}*
*@${m.sender.split("@")[0]}*

▸▸${lenguajeGB.smsMenuTotal3()}_ ◂◂*

✦${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'google *texto*' : 'googlef *text*'}_
✦${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'bot *texto*' : 'simsimi *text*'}_
✦${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'ia *texto*' : 'chatgpt *text*'}_
✦${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'yts *texto*' : 'yts *text*'}_


▸▸${lenguajeGB.smsMenuTotal4()}_ ◂◂*

✦${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'imagen *texto*' : 'gimage *text*'}_
✦${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'facebook *enlace*' : 'facebookdl *link*'}_
✦${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'mediafire *enlace*' : 'mediafiredl *link*'}_
✦${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'play *nombre o enlace*' : 'play *name*'}_
✦${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'yta *enlace*' : 'yta *link*'}_
✦${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'ytv *enlace*' : 'ytv *link*'}_
✦${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'ytmax *enlace*' : 'ytmax *link*'}_
✦${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'ytadoc *enlace*' : 'ytadoc *link*'}_
✦${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'ytvdoc *enlace*' : 'ytvdoc *link*'}_
✦${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'ytmaxdoc *enlace*' : 'ytmaxdoc *link*'}_
✦${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'tiktok *enlace*' : 'tkdl *link*'}_
✦${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'openiamage *texto*' : 'dalle *text*'}_
✦${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'midjourney *texto*' : 'openjourney *text*'}_
✦${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'spotify *texto o enlace*' : 'spotify *text or link*'}_
✦${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'spotifysearch *texto*' : 'spotifysearch *text*'}_
✦${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'instagram *enlace*' : 'instagram *link*'}_

▸▸${lenguajeGB.smsMenuTotal5()}_ ◂◂*

✦${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'img *sticker*' : 'toimg *sticker*'}_
✦${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'url *imagen*' : 'tourl *image*'}_
✦${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'mp4 *sticker*' : 'tovideo *sticker*'}_
✦${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'gif *video*' : 'togif *video*'}_
✦${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'mp3 *video o audio*' : 'tovn *video or audio*'}_
✦${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'tts *texto*' : 'totts *text*'}_
▸▸${lenguajeGB.smsMenuTotal9()}_ ◂◂*

✦${usedPrefix}bass_
✦${usedPrefix}blown_
✦${usedPrefix}deep_
✦${usedPrefix}earrape_
✦${usedPrefix}fast_
✦${usedPrefix}fat_
✦${usedPrefix}nightcore_
✦${usedPrefix}reverse_
✦${usedPrefix}robot_
✦${usedPrefix}slow_
✦${usedPrefix}smooth_
✦${usedPrefix}tupai_
✦${usedPrefix}audio8d_
✦${usedPrefix}echo_
✦${usedPrefix}distortion_
✦${usedPrefix}pitch_
✦${usedPrefix}reverb_
✦${usedPrefix}flanger_
✦${usedPrefix}apulsator_
✦${usedPrefix}tremolo_
✦${usedPrefix}chorus_
 
 `.trim()
    
const vi = ['']

try {
await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try {
await conn.sendMessage(m.chat, { image: { url: ArmandoMenu.getRandom() }, gifPlayback: false, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try {
await conn.sendMessage(m.chat, { image: ArmandoImg.getRandom(), gifPlayback: false, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try{
await conn.sendFile(m.chat, imagen5, 'menu.jpg', menu, fkontak, false, { mentions: [m.sender, global.conn.user.jid] })
} catch (error) {
return 
}}}} 

} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|menucompleto|allmenu|allm|m|\?)$/i
export default handler
    
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
